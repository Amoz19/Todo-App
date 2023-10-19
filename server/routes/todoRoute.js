const { Router } = require("express");
const {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controller/todoController");

const router = Router();

router.get("/", getTodo);
router.post("/", addTodo);
router.delete("/:postId", deleteTodo);
router.patch("/:postId", updateTodo);

module.exports = router;
