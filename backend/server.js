const path = require("path");
const express = require("express");
const colors = require("colors");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const connectDb = require("./config/db");
const dotenv = require("dotenv").config();
const goalRoutes = require("./routes/goalRoutes");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorMiddleware");

connectDb();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals/", goalRoutes);
app.use("/api/users/", userRoutes);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
