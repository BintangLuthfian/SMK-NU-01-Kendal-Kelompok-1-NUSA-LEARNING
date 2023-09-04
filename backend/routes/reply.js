// routes/replyRoutes.js
import express from "express";
import { createReply, getRepliesForComment } from "../controllers/reply.js";

const router = express.Router();

router.post("/replies", createReply);
router.get("/replies", getRepliesForComment);

export default router;
