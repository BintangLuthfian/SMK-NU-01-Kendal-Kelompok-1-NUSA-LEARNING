import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const KategoriHeader = db.define(
  "kategoriheader",
  {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default KategoriHeader;

(async () => {
  await db.sync();
})();
