import { db } from "@/database";
import { Entry, IEntry } from "@/models";
import mongoose from "mongoose";
import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      message: string;
    }
  | IEntry;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid Id" });
  }

  switch (req.method) {
    case "PUT":
      return updateEntry(req, res);
    case "GET":
      return getEntry(req, res);
    case "DELETE":
      return deleteEntry(req, res);
    default:
      return res.status(400).json({ message: "Bad Request" });
  }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();

  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: "There is no entry with that Id" });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status,
  } = req.body;

  try {
    const updatedEntry = await Entry.findByIdAndUpdate(
      id,
      { description, status },
      { runValidators: true, new: true }
    );
    await db.disconnect();
    res.status(200).json(updatedEntry);
  } catch (err) {
    console.log(err);
    await db.disconnect();
    res.status(400).json({ message: "Bad Request" });
  }
};

const getEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();
  const entry = await Entry.findById(id);
  await db.disconnect();

  if (!entry) {
    return res.status(400).json({ message: "There is no entry with that id" });
  }

  return res.status(200).json(entry);
};

const deleteEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  await db.connect();
  const entryToDelete = await Entry.findById(id);

  if (!entryToDelete) {
    await db.disconnect();
    return res.status(400).json({ message: "There is no entry with that id" });
  }

  try {
    await Entry.deleteOne({
      _id: id,
    });
    await db.disconnect();
    res.status(200).json({ message: "Deleted Entry" });
  } catch (error) {
    console.log(error);
    await db.disconnect();
    res.status(400).json({ message: "Bad Request" });
  }
};
