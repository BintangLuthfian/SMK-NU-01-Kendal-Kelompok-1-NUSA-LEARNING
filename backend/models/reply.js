// models/Reply.js
import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Reply = db.define(
  "reply",
  {
    user: DataTypes.STRING,
    commentText: DataTypes.TEXT,
    id_content: DataTypes.INTEGER,
    parent_comment_id: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

export default Reply;
