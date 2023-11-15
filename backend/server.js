const express = require("express");
const colors = require("colors");
const cors = require("cors");
const router = require("./src/routes/todosRoute");
const connectDb = require("./src/config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4001;

// Mddleware
app.use(cors());
app.use(express.json());

// Route
app.use("/api/todos", router);

app.get("/", (req, res) => {
  res.send("Todos Api");
});

connectDb()
  .then(() => {
    console.log("veri tabanına bağlandı");
    app.listen(PORT, () => {
      console.log(`Server is running in port ${PORT}`.bgGreen);
    });
  })
  .catch((err) => {
    console.log(err);
  });
