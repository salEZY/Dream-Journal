require("dotenv").config();
import express from "express";
import log from "./utils/logger";
import routes from "./routes/routes";
import connectToDB from "./utils/db";
import middlewares from "./utils/middlewares";

const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
middlewares(app);

// Server start
app.listen(PORT, () => {
  log.info(`Dream Journal API started on port ${PORT}`);

  // DB connection
  connectToDB();

  // Endpoints
  routes(app);
});
