import { Request, Response } from "express";
import Dream from "../models/dream";

const searchDreams = async (req: Request, res: Response) => {
  const { skip, limit, title, type, from, to } = req.query;
  let filter = {};

  // Generate query
  if (title) {
    const regexSearch: RegExp = new RegExp(req.query["title"] as string, "i");

    filter["title"] = { $regex: regexSearch };
  }
  if (type) filter["type"] = req.query["type"];
  if (from && to) {
    filter["date"] = { $gte: from, $lt: to };
  }

  // Execute query with pagination
  const dreams = await Dream.find(filter)
    .skip((skip as unknown) as number)
    .limit((limit as unknown) as number);

  res.json({ totalResults: dreams.length, dreams });
};

export default searchDreams;
