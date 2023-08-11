import { Entry } from "@/interfaces";
import { createContext } from "react";

export interface ContextProps {
  entries: Entry[];
  addNewEntry: (
    title: string,
    description: string,
    status: Entry["status"]
  ) => void;
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void;
  deleteEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
