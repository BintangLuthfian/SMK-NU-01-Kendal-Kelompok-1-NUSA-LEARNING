import express from "express";
import {
  getData,
  // getDataById,
  createData,
  updateData,
  deleteData,
} from "../controllers/pelatihan.js";

const router = express.Router();

router.get("/pelatihan/all", getData);
// router.get("/pelatihan/:id", getDataById);
router.post("/pelatihan", createData);
router.patch("/pelatihan/:id", updateData);
router.delete("/pelatihan/:id", deleteData);

export default router;
