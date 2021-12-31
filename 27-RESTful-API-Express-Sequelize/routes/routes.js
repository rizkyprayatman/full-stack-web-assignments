import express from "express";

import {
  getHewan,
  getHewanById,
  createHewan,
  updateHewan,
  deleteHewan,
} from "../controllers/Hewan.js";
const router = express.Router();
// Route get semua Hewan
router.get("/hewan", getHewan);
// Route get Hewan by id
router.get("/hewan/:id", getHewanById);
// Route create Hewan baru
router.post("/hewan", createHewan);
// Route update Hewan by id
router.put("/hewan/:id", updateHewan);
// Route delete Hewan by id
router.delete("/hewan/:id", deleteHewan);

export default router;
