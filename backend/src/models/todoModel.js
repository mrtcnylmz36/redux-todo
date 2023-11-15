const moongose = require("mongoose");

const Schema = moongose.Schema;

const todoSchema = new Schema(
  {
    text: {
      type: String,
      required: [true, "Not girmek zorunlu"],
      trim: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Todo = moongose.model("todos", todoSchema);

module.exports = Todo;
