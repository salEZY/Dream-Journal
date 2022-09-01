import { Express, Request, Response } from "express";
import { body } from "express-validator";
import {
  getAllDreamTypes,
  createDream,
  getDreams,
  getDream,
  editDream,
  deleteDream,
  searchDreams,
} from "../controllers/index";

const routes = (app: Express) => {
  // GET - Health check
  app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to Dream Journal API!");
  });

  // GET - Dream types
  app.get("/api/dream/get-types", getAllDreamTypes);

  // GET - Search dreams
  app.get("/api/dream/search", searchDreams);

  // GET - All dreams // POST - Create dream
  app
    .route("/api/dream")
    .get(getDreams)
    .post(
      body("title").notEmpty().withMessage("Please enter title"),
      body("description").notEmpty().withMessage("Please enter description"),
      body("date").notEmpty().withMessage("Please choose date"),
      createDream
    );

  // GET - One dream // PATCH - Edit dream // DELETE - Delete dream
  app
    .route("/api/dream/:id")
    .get(getDream)
    .patch(editDream)
    .delete(deleteDream);
};

export default routes;
