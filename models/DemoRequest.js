import mongoose from "mongoose";

const DemoRequestSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName:  { type: String, required: true, trim: true },
    email:     { type: String, required: true, trim: true, lowercase: true },
    phone:     { type: String, required: true, trim: true },
    timeframe: { type: String, trim: true },
    practice:  { type: String, required: true, trim: true },
    specialty: { type: String, required: true },
    size:      { type: String, required: true },
    products:  { type: [String], required: true },
    message:   { type: String, trim: true },
  },
  {
    timestamps: true,        // adds createdAt & updatedAt automatically
    collection: "demorequests",
  }
);

// Prevent model re-compilation in Next.js dev mode
const DemoRequest =
  mongoose.models.DemoRequest ||
  mongoose.model("DemoRequest", DemoRequestSchema);

export default DemoRequest;