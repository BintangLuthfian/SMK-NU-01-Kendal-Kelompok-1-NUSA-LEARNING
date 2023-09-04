import Comment from "../models/comment.js";

export const createComment = async (req, res) => {
  try {
    const { user, commentText, id_content, parent_comment } = req.body;
    const comment = await Comment.create({
      user,
      commentText,
      id_content,
      parent_comment,
    });
    res.status(201).json({ msg: "Komentar berhasil dibuat", comment });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getCommentsWithReplies = async (req, res) => {
  try {
    const { id_content } = req.query;

    const commentsWithReplies = await Comment.findAll({
      where: { id_content },
      include: [
        {
          model: Comment,
          as: "replies",
          attributes: ["id", "user", "commentText", "CreateAt"],
        },
      ],
      order: [["CreateAt", "ASC"]],
    });

    res.json(commentsWithReplies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

export const getCommentsAndReplies = async (req, res) => {
  try {
    const { id_content } = req.query;

    const commentsAndReplies = await Comment.findAll({
      where: { id_content },
      include: Reply, // Ini akan mengambil semua balasan komentar terkait
      order: [
        ["id", "ASC"],
        [Reply, "CreateAt", "ASC"],
      ],
    });

    res.json(commentsAndReplies);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
