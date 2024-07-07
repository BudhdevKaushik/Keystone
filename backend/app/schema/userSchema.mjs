import mongoose from "mongoose";

const roleEnums = ["admin", "company", "user", "guest"];
const statusEnums = ["active", "inactive", "blocked", "deleted", "invited"];

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  email: { type: String, required: true, unique: true },
  status: {
    type: String,
    enum: statusEnums,
    default: "invited",
  },
  userRole: {
    type: String,
    enum: roleEnums,
    default: "guest",
  },
});

const User = mongoose.model("User", userSchema);
export default User;
