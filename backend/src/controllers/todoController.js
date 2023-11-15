const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

//GET Todo

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({}).sort({ createdAd: -1 });
    if (todos.length > 0) {
      res.status(200).json(todos);
    } else {
      res.status(200).json({ message: "Kayıtlı Todo Yok" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Add Todo

const addTodo = async (req, res) => {
  try {
    const { text, color } = req.body;
    const add = await Todo.create({
      text,
      color,
    });
    res.status(200).json(add);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "id geçersiz" });
    }
    const item = await Todo.findOneAndDelete({ _id: id });

    if (!item) {
      return res.status(404).json({ error: "Not bulunamadı" });
    } else {
      res.status(200).json({
        succses: "Başarıyla Silindi",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "id geçersiz" });
    }
    const item = await Todo.findOneAndUpdate(
      { _id: id },
      { ...update },
      { new: true }
    );

    if (!item) {
      return res.status(404).json({ error: "Not bulunamadı" });
    } else {
      res.status(200).json(item);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getTodo,
  addTodo,
  deleteTodo,
  updateTodo,
};
