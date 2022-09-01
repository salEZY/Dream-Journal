import { Request, Response } from "express";
import Dream from "../models/dream";

const getAllDreamTypes = (req: Request, res: Response) => {
  res.json(Dream.schema.path("type").options.enum);
};

export default getAllDreamTypes;
