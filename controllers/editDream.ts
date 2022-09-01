import { Request, Response } from "express";
import Dream from "../models/dream";

const getDream = async (req: Request, res: Response) => {
  const dream = await Dream.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    { new: true }
  );

  res.json({ message: "Dream updated", dream });
};

export default getDream;
