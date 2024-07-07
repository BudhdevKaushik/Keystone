import mongoose from "mongoose";
//pm_
const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  userRole: {
    type: String,
    default: "guest",
    enum: ["admin", "company", "user", "guest"],
  },
});

// export default userSchema;
