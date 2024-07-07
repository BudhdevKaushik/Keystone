import { Query, body } from "express-validator";

const commonValidations = {
  email: body("email")
    .isEmail()
    .withMessage("Invalid email format")
    .notEmpty()
    .withMessage("Email is required"),
};

export const signUpValidations = [
  body("fullName").notEmpty().withMessage("Full name is required"),
  commonValidations.email,
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .matches(passwordRegex)
    .withMessage(
      "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long"
    ),
];
