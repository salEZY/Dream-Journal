import { Request, Response } from "express";
import Dream from "../models/dream";
import { DreamDocument } from "../interfaces/dream.interface";
import log from "../utils/logger";

const getDream = async (req: Request, res: Response) => {
  let dream: DreamDocument;
  try {
    dream = await Dream.findById(req.params.id);
  } catch (err) {
    log.error(err.message);
    return res
      .status(500)
      .json({ message: "Something went wrong with fetching the dream." });
  }

  res.json(dream);
};

export default getDream;
