// models/Comment.js
import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Reply from "./reply.js"; // Impor model Reply

const { DataTypes } = Sequelize;

const Comment = db.define(
  "comment",
  {
    user: DataTypes.STRING,
    commentText: DataTypes.TEXT,
    id_content: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

// Definisikan hubungan one-to-many dengan model Reply
Comment.hasMany(Reply, { foreignKey: "parent_comment_id" });

export default Comment;
