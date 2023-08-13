import { Sequelize } from "sequelize";

const db = new Sequelize('nusa_learning_db','root','', {  // '' yang kosong adalah untuk password
    host: "localhost",
    dialect: "mysql"
}) 

export default db; 