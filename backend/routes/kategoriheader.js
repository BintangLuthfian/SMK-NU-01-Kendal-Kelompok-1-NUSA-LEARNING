import express from "express";
import {
  getData,
  // getDataById,
  DataHeader,
  updateData,
  deleteData,
} from "../controllers/kategoriheader.js";

const router = express.Router();

router.get("/kategoriheader/header", getData);
// router.get("/kategoriheader/:id", getDataById);
router.post("/kategoriheader/header", DataHeader);
router.patch("/kategoriheader/:id", updateData);
router.delete("/kategoriheader/:id", deleteData);

export default router;
