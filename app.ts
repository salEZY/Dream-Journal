require("dotenv").config();
import express from "express";
import expressPinoLogger from "express-pino-logger";
import routes from "./routes/routes";
import connectToDB from "./utils/db";
import log from "./utils/logger";

const PORT = process.env.PORT || 8080;

const app = express();

// Middlewares
app.use(express.json());

const loggerMiddleware = expressPinoLogger({
  logger: log,
  autoLogging: true,
  serializers: {
    req: (req) => ({
      method: req.method,
      url: req.url,
    }),
    res: (res) => ({
      status: res.statusCode,
    }),
  },
});
app.use(loggerMiddleware);

// Server start
app.listen(PORT, () => {
  log.info(`Q Agency Books API started on port ${PORT}`);

  // DB connection
  connectToDB();

  // Endpoints
  routes(app);
});
