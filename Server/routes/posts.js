const express = require("express");
const {
  getPosts,
  getPost,
  createPost,
  deletePost,
  updatePost,
  postCategory,
} = require("../controllers/postController");
const router = express.Router();

router.get("/:category", getPosts);
router.get("/post/:id", getPost);
router.get("/:category", postCategory);
router.post("/createpost", createPost);
router.delete("/post/:id", deletePost);
router.put("/updatepost/:id", updatePost);

module.exports = router;
