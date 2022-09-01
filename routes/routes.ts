import { Express, Request, Response } from "express";
import { body } from "express-validator";
import { getAllDreamTypes, createDream } from "../controllers/index";

const routes = (app: Express) => {
  // Health check
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Dream Journal API!");
  });

  app.get("/api/dream/get-types", getAllDreamTypes);

  app
    .route("/api/dream")
    .post(
      body("title").notEmpty().withMessage("Please enter title"),
      body("description").notEmpty().withMessage("Please enter description"),
      body("date").notEmpty().withMessage("Please choose date"),
      createDream
    );
};

export default routes;
