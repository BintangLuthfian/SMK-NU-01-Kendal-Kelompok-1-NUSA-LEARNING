import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Detail = db.define(
  "detaill",
  {
    judul: DataTypes.STRING,
    desc_judul: DataTypes.STRING,
    tentang: DataTypes.STRING,
    desc_tentang: DataTypes.STRING,
    target_audiens: DataTypes.STRING,
    desc_target: DataTypes.STRING,
    kategori: DataTypes.STRING,
    desc_kategori: DataTypes.STRING,
    masa_berlaku_lisensi: DataTypes.STRING,
    desc_lisensi: DataTypes.STRING,
    tanggalbuat: DataTypes.STRING,
    yang_didapat: DataTypes.STRING,
    harga: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default Detail;

(async () => {
  await db.sync();
})();
