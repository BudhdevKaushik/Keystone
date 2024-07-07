import { signInUser, signUpUser } from "../models/authModel.mjs";

export const signIn = async (req, res) => {
  try {
    const response = await signInUser(req);
    res.status(response.status).json(response);
  } catch (error) {
    res.status(response.status).json(error);
  }
};

export const signUp = async (req, res) => {};
