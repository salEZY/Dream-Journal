import { Request, Response } from "express";
import Dream from "../models/dream";

const getDream = async (req: Request, res: Response) => {
  const dream = await Dream.findById(req.params.id);

  res.json(dream);
};

export default getDream;
