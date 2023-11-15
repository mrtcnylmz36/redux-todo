const mongoose = require("mongoose");

const connectDb = async () => {
  await mongoose.connect(process.env.DB_URI, {
    dbName: "Todo",
    serverSelectionTimeoutMS: 5000,
  });
};

module.exports = connectDb;
