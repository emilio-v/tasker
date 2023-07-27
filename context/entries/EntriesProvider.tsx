import { FC, ReactNode, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import { entriesApi } from "@/api";

export interface EntriesState {
  entries: Entry[];
}

interface EntriesProviderProps {
  children: ReactNode;
}

const ENTRIES_INITIAL_PROPS: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_PROPS);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", {
      description,
    });

    dispatch({ type: "Entry - Add-Entry", payload: data });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "Entry - Entry-Updated", payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "Entry - Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
