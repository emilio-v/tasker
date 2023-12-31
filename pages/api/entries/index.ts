import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IEntry[]
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getEntries(res);
    case "POST":
      return postEntry(req, res);
    default:
      return res.status(400).json({ message: "Endpoint does not exist" });
  }
}

const getEntries = async (res: NextApiResponse<Data>) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: "ascending" });
  await db.disconnect();

  res.status(200).json(entries);
};

const postEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { title = "", description = "", status = "pending" } = req.body;
  const newEntry = new Entry({
    title,
    description,
    status,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await newEntry.save();
    await db.disconnect();

    return res.status(201).json(newEntry);
  } catch (err) {
    await db.disconnect();
    console.log(err);

    return res.status(500).json({ message: "Something went wrong" });
  }
};
