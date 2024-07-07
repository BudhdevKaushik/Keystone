import { Router } from "express";
import { responseHandler } from "../utils/responseHandler.mjs";
import { signInUser, signUpUser } from "../models/authModel.mjs";
import validationHandler from "../middlewares/validationHandler.mjs";
import { signUpValidations } from "../utils/validations/authValidations.mjs";

const router = Router();

router.post("/login", [], responseHandler(signInUser));
router.post(
  "/register",
  [signUpValidations, validationHandler],
  responseHandler(signUpUser)
);

export default router;
