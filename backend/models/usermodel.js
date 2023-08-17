import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const Users = db.define ('users',{
    name:{ 
        type: DataTypes.STRING
    },
    email:{ 
        type: DataTypes.STRING
    },
    no_hp:{ 
        type: DataTypes.STRING
    },
    birthdate: {
        type: DataTypes.DATEONLY
    },
    negara:{ 
        type: DataTypes.STRING
    },
    domisili:{ 
        type: DataTypes.STRING
    },
    gender:{ 
        type: DataTypes.STRING
    },
    password:{ 
        type: DataTypes.STRING
    },
    refresh_token:{ 
        type: DataTypes.STRING
    },
    
},{
    freezeTableName:true
})

export default Users;




// import { Sequelize } from "sequelize";
// import db from '../config/database.js'

// const { DataTypes } = Sequelize

// const Users = db.define ('users',{
//     name: DataTypes.STRING,
//     email: DataTypes.STRING,
//     no_hp: DataTypes.STRING,
//     birthdate: DataTypes.DATEONLY,
//     negara: DataTypes.STRING,
//     domisili: DataTypes.STRING,
//     password: DataTypes.STRING,
//     refresh_token: DataTypes.STRING,
// },{
//     freezeTableName:true
// })

// export default Users;