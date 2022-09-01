import { Express, Request, Response } from "express";
import { getAllDreamTypes } from "../controllers/index";

const routes = (app: Express) => {
  // Health check
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Dream Journal API!");
  });

  app.get("/get-types", getAllDreamTypes);
};

export default routes;
