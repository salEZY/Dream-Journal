require("dotenv").config();
import express from "express";
import routes from "./routes/routes";
import connectToDB from "./utils/db";
import log from "./utils/logger";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
  log.info(`Q Agency Books API started on port ${PORT}`);

  connectToDB();

  routes(app);
});
