import Users from '../models/usermodel.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";

export const getUsers = async(req, res) => {
    try {
        const user = await Users.findAll({
            attributes: ['id','name','email']
        });
        res.json(user);
    } catch (error) {
        console.log(error)
    }

}


export const Register = async(req, res) =>{
    const{ name, email, no_hp, birthdate, negara, domisili, gender, password, confPassword } = req.body;
    if (password !== confPassword) return res.status(400).json({msg: "password dan confirm password tidak cocok"});
    const salt = await bcrypt.genSalt();
    const hastpassword = await bcrypt.hash(password, salt); 
    try {
        await Users.create({
            name: name,
            email: email,
            no_hp: no_hp,
            birthdate: birthdate,
            negara: negara,
            domisili: domisili,
            gender: gender,
            password: hastpassword,
    })
    res.json({msg: "Register Berhasil"});
    } catch (error) {
        console.log(error);
    }
}


export const Login = async(req, res) => {
    try {
        const user = await Users.findAll({
            where:{
                email: req.body.email
            }  
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "worong password"});
        const UserId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({UserId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '60s'
        });
        const refreshToken = jwt.sign({UserId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken},{
            where:{
                id: UserId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httponly: true,
            maxAge: 24 * 60 * 60 * 1000 // ,
         //   secure: true            jika menggunakan https karena lokal jadi tidak menggunakan
        })
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg: "email tidak ditemukan"})
    }
}


export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
        refresh_token: refreshToken,
    }
    });
    if(!user[0]) return res.sendStatus(204);
    const UserId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: UserId
        }
    })
    res.clearcookie('refreshToken');
    return res.sendStatus(200);
}
