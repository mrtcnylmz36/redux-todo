const express = require("express");
const {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");
const router = express.Router();

// GET
router.get("/", getTodo);

// POST
router.post("/", addTodo);

//DELETE
router.delete("/:id", deleteTodo);

// PATCH
router.patch("/:id", updateTodo);

module.exports = router;
