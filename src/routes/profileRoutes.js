import express from "express";
import auth from "../middleware/authMiddleware.js";
import {
  getProfile,
  upsertProfile,
  deleteProfile,
} from "../controllers/profileController.js";

const router = express.Router();

router.get("/", auth("user"), getProfile);
router.post("/", auth("user"), upsertProfile); // POST to /api/profile
router.delete("/", auth("user"), deleteProfile);

export default router;
