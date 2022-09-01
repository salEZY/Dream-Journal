import express, { Express } from "express";
import expressPino from "express-pino-logger";
import cors from "cors";
import log from "./logger";

const middlewares = (app: Express) => {
  app.use(express.json());
  app.use(cors());

  const loggerMiddleware = expressPino({
    logger: log,
    autoLogging: true,
    serializers: {
      req: (req: any) => ({
        method: req.method,
        url: req.url,
      }),
      res: (res: any) => ({
        status: res.statusCode,
      }),
    },
  });

  app.use(loggerMiddleware);
};

export default middlewares;
