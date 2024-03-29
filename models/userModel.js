import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      phone: {
        type: String,
        required: true,
        trim: true,
      },
      address: {
        type: String,
        required: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
        trim: true,
      },
      role: {
        type: Number,
        default: 0, // 0 for user, 1 for admin
      },
      flatNo: {
        type: String,
        required: false, // Make flatNo optional
        trim: true,
      },
    },
    { timestamps: true }
  );
  
export default mongoose.model("User", userSchema);
