import express from "express";
import {
  getData,
  // getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/banner.js";

const router = express.Router();

router.get("/banner/all", getData);
// router.get("/banner/:id", getDataById);
router.post("/banner", createData);
router.patch("/banner/:id", updateData);
router.delete("/banner/:id", deleteData);

export default router;
