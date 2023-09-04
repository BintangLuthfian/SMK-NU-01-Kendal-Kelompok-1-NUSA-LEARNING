import express from "express";
import {
  getData,
  getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/kategori.js";

const router = express.Router();

router.get("/kategori/all", getData);
router.get("/kategori/:id", getDataById);
router.post("/kategori", createData);
router.patch("/kategori/:id", updateData);
router.delete("/kategori/:id", deleteData);

export default router;
