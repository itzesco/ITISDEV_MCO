// config/database.js
const mongoose = require('mongoose');
require('dotenv').config({ path: 'mongo.env' });

const connectDB = async () => {
  try {
    console.log('Loaded MONGO_URI:', process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

module.exports = connectDB;
