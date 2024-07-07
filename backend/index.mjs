import app from "./app/app.mjs";
import connectDB from "./app/config/db.mjs";
import { PORT } from "./app/utils/constants.mjs";

// Database connection
connectDB();

app.listen(PORT, () => console.log(`Server started at [${PORT}]`));
