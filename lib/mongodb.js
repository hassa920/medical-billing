import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export async function connectDB() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("Connecting to MongoDB...");

    cached.promise = mongoose.connect(MONGODB_URI);
  }

  cached.conn = await cached.promise;

  console.log("Mongo Connected ✅");

  return cached.conn;
}