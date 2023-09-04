import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const TitlePelatihan = db.define(
  "judulpelatihan",
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default TitlePelatihan;

(async () => {
  await db.sync();
})();
