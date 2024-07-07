import dotenv from "dotenv";
dotenv.config();

// ENV
export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI;

// Regex
export const regex = {
  password:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
};
