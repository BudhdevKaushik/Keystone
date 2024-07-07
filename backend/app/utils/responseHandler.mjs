export const responseHandler = (controller) => async (req, res) => {
  try {
    const response = await controller(req);
    res.status(response.status).json(response);
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ message: error.message || "Internal Server Error" });
  }
};
