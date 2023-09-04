import express from "express";
import {
  getData,
  // getDataById,
  DataHeader,
  updateData,
  deleteData,
} from "../controllers/pelatihanheader.js";

const router = express.Router();

router.get("/pelatihanheader/header", getData);
// router.get("/pelatihanheader/:id", getDataById);
router.post("/pelatihanheader/header", DataHeader);
router.patch("/pelatihanheader/:id", updateData);
router.delete("/pelatihanheader/:id", deleteData);

export default router;
