import express from "express";
import {
  createComment,
  getCommentsWithReplies,
  getCommentsAndReplies,
} from "../controllers/comment.js";

const router = express.Router();

router.post("/comments", createComment);
router.get("/comments", getCommentsWithReplies);
router.get("/comments/get", getCommentsAndReplies);

export default router;
