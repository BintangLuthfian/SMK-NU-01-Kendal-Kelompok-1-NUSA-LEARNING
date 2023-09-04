import express from "express";
import {
  getData,
  // getDataById,
  Data,
  updateData,
  deleteData,
} from "../controllers/judulpelatihan.js";

const router = express.Router();

router.get("/title/all", getData);
// router.get("/title/:id", getDataById);
router.post("/title", Data);
router.patch("/title/:id", updateData);
router.delete("/title/:id", deleteData);

export default router;
