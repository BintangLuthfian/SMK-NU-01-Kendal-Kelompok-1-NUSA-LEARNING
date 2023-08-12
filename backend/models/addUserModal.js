import { Sequelize } from "sequelize";
import db from '../config/database.js'

const { DataTypes } = Sequelize

const AddUsers = db.define('add_user', {
    nama_Lengkap: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    Nomor_Telepon: {
        type: DataTypes.INTEGER
    },
    Tanggal_Lahir: {
        type: DataTypes.DATEONLY
    },
    negara: {
        type: DataTypes.STRING
    },
    Tempat_Tinggal: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true
})

export default AddUsers;