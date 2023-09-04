// controllers/replyController.js
import Reply from "../models/reply.js";

export const createReply = async (req, res) => {
  try {
    const { user, commentText, id_content, parent_comment_id } = req.body;
    const reply = await Reply.create({
      user,
      commentText,
      id_content,
      parent_comment_id,
    });
    res.status(201).json({ msg: "Balasan komentar berhasil dibuat", reply });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getRepliesForComment = async (req, res) => {
  try {
    const { parent_comment_id } = req.query;

    const replies = await Reply.findAll({
      where: { parent_comment_id },
    });

    res.json(replies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
