import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    practice: String,
    specialty: String,
    inquiryType: String,
    message: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", ContactSchema);