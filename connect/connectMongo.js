// const mongoose = require("mongoose");

// // const MONGO_URL =
// //   "mongodb+srv://abhishekmani1008:qOswmXmvB7eXX92G@onyourhome.frizz.mongodb.net/onYourHome?retryWrites=true&w=majority";
// const MONGO_URL = process.env.MongoDBUrl; // Use the .env variable

// const connectDB = async () => {
//   try {
//     await mongoose.connect(MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB Atlas ✅");
//   } catch (err) {
//     console.error("MongoDB Atlas connection error ❌:", err);
//     process.exit(1); // Exit process on failure
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

const MONGO_URL = process.env.MongoDBUrl; // Get MongoDB URL from environment variables

const connectDB = async () => {
  try {
    if (!MONGO_URL) {
      throw new Error(
        "❌ MongoDB connection string is missing! Check environment variables."
      );
    }

    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB Atlas successfully!");
  } catch (err) {
    console.error("❌ MongoDB Atlas connection error:", err.message);
    process.exit(1); // Exit process on failure
  }
};

module.exports = connectDB;
