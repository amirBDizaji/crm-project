import mongoose from "mongoose";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(
    "mongodb+srv://dizaji74:B123456789b@cluster0.7ekhiag.mongodb.net/"
  );
  console.log("Connected to DB");
}

export default connectDB;
