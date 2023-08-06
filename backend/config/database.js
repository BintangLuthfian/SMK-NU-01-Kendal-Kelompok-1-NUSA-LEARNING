import { Sequelize } from "sequelize";

const db = new Sequelize('web_anime_db','root','', {  // '' yang kosong adalah untuk password
    host: "localhost",
    dialect: "mysql"
}) 

export default db; 