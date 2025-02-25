const mongoose = require("mongoose");

const MONGO_URL =
  "mongodb+srv://abhishekmani1008:qOswmXmvB7eXX92G@onyourhome.frizz.mongodb.net/onYourHome?retryWrites=true&w=majority";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas ✅");
  } catch (err) {
    console.error("MongoDB Atlas connection error ❌:", err);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
