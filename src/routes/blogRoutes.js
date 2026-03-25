import express from "express";
import {
  createBlog,
  getBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:slug", getSingleBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;