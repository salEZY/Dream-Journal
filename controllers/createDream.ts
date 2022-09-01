import { Request, Response } from "express";
import { validationResult } from "express-validator";
import Dream from "../models/dream";
import log from "../utils/logger";

const createDream = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  let dream = await Dream.findOne({ title: req.body.title });
  if (dream) return res.status(403).json({ message: "Dream already exists." });

  try {
    dream = await Dream.create(req.body);
  } catch (err) {
    log.error(err.message);
    return res
      .status(500)
      .json({ message: "Something went wrong with creating the dream." });
  }

  res.json({ message: "Dream created", dream });
};

export default createDream;
