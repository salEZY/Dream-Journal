import { Request, Response } from "express";
import Dream from "../models/dream";

const getDreams = async (req: Request, res: Response) => {
  const dreams = await Dream.find({})
    .skip((req.query.skip as unknown) as number)
    .limit((req.query.limit as unknown) as number);

  let totalResults = await Dream.countDocuments();
  res.json({ totalResults: totalResults, dreams });
};

export default getDreams;
