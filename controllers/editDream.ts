import { Request, Response } from "express";
import Dream from "../models/dream";
import { DreamDocument } from "../interfaces/dream.interface";
import log from "../utils/logger";

const getDream = async (req: Request, res: Response) => {
  let dream: any;
  try {
    dream = await Dream.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
  } catch (err) {
    log.error(err.message);
    return res
      .status(500)
      .json({ message: "Something went wrong with updating the dream." });
  }

  res.json({ message: "Dream updated.", dream });
};

export default getDream;
