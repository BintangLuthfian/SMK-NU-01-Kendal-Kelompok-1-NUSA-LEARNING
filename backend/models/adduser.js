import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize;

const Adduser = db.define('adduser', {
    name: DataTypes.STRING,
    email : DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName: true
});

export default Adduser;

(async()=>{
    await db.sync();
})();