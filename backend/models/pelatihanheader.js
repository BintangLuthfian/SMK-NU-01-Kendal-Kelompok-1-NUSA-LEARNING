import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const PelatihanHeader = db.define(
  "pelatihanheader",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default PelatihanHeader;

(async () => {
  await db.sync();
})();
