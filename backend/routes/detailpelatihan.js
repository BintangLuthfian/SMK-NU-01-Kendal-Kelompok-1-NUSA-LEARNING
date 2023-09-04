import express from "express";
import {
  getData,
  getDataById,
  Data,
  updateData,
  deleteData,
} from "../controllers/detailpelatihan.js";

const router = express.Router();

router.get("/detaill/all", getData);
router.get("/detaill/:id", getDataById);
router.post("/detaill", Data);
router.patch("/detaill/:id", updateData);
router.delete("/detail/:id", deleteData);

export default router;
