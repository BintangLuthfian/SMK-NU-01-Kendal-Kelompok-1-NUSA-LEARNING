
import "../styles/form.css";
// import GoogleButton from "react-google-button";
import axios from "axios";
import { React, useState } from "react";
// import Toast from "../components/Toast";
import { useNavigate } from "react-router-dom";
// import getGoogleOAuthURL from "../helpers/getGoogleUrl";
// import { BaseUrl } from "../constants/BaseUrl";
// import getFacebookOAuthURL from "../helpers/getFacebookUrl";


// const Register = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
  // const [nohp, setNoHp] = useState("");
  // const [date, setDate] = useState("");
  // const [negara, setNegara] = useState("");
  // const [domisili, setDomisili] = useState("");
//   const [fullname, setFullname] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();
//   const handleSubmit = event => {
//     event.preventDefault();
//     const data = {
//       username,
//       email,
//       fullname,
//       password,
//       confirmPassword,
//     };
//     axios
//       .post("http://localhost:8000/v1/user/register", data)
//       .then(response => {
//         localStorage.setItem(response.data.Message);
//         Toast.success("Akun berhasil dibuat. ");
//         navigate("/");
//       })
//       .catch(error => {
//         console.error(error.response.data.message);
//         Toast.error(error.response.data.message);
//       });
//   };


  const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [no_hp, setNoHp] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [negara, setNegara] = useState("");
    const [domisili, setDomisili] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [msg, setMsg] = useState('');
    const history = useNavigate();
  
  
  const Register = async(e) =>{
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/users', {
        name: name,
        email: email,
        no_hp: no_hp,
        birthdate: birthdate,
        negara: negara,
        domisili: domisili,
        gender: gender,
        password: password,
        confPassword: confPassword,
      })
      history("/login")
    } catch (error) {
      if (error.response){
        console.log(error.response.data);
      }
    }
  }
  

  return (
    <div className="form">
      <form onSubmit={Register}>
      <p className='has-text-centered'>{msg}</p>
      <h1
      style={{
        marginBottom: "10px",
        color: "#df1a35",
        fontWeight: "bold",
        fontSize: "35px",
       
      }}
      >Daftar Akun Baru</h1>
        <p>Nama Lengkap</p>
        <input
          type="text"
          placeholder="Nama Lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Email</p>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>No Hanphone</p>
        <input 
        type="number" 
        placeholder="No Hanphone"
        value={no_hp}
        onChange={(e) => setNoHp(e.target.value)}
        />
       <p>Tanggal Lahir</p>
       <input 
       type="date" 
       placeholder="Tanggal lahir"
       value={birthdate}
       onChange={(e) => setBirthdate(e.target.value)}
       />
       <p>Negara</p>
        <input
          type="text"
          placeholder="Negara"
          value={negara}
          onChange={(e) => setNegara(e.target.value)}
        />
        <p>Domisili</p>
        <input
          type="text"
          placeholder="Domisili"
          value={domisili}
          onChange={(e) => setDomisili(e.target.value)}
        />
         <p>Gender</p>
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <p>Kata Sandi</p>
        <input
          type="password"
          placeholder="Kata Sandi"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>Konfirmasi Kata Sandi</p>
        <input
          type="password"
          placeholder="Konfirmasi Kata Sandi"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
        />
        <button type="submit"
        style={{
            backgroundColor: "blue"
        }}
        >Daftar</button>
        <div className="other">
          <hr />
          <p>OR</p>
          <hr />
        </div>
        {/* <a href={getGoogleOAuthURL(BaseUrl.REGISTER_REDIRECT)}>
          <GoogleButton style={{ width: "100%" }} />
        </a>
        <a href={getFacebookOAuthURL(BaseUrl.FACEBOOK_REGISTER_REDIRECT)}>
          Facebook
        </a> */}
      </form>
    </div>
  );
};

export default Register;
