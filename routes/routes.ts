import { Express, Request, Response } from "express";

const routes = (app: Express) => {
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Dream Journal API!");
  });
};

export default routes;
