import { FC, ReactNode, useEffect, useReducer } from "react";
import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import { entriesApi } from "@/api";
import { useSnackbar } from "notistack";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", {
      description,
    });

    dispatch({ type: "Entry - Add-Entry", payload: data });
  };

  const updateEntry = async (
    { _id, description, status }: Entry,
    showSnackbar = false
  ) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, {
        description,
        status,
      });
      dispatch({ type: "Entry - Entry-Updated", payload: data });
      if (showSnackbar) {
        enqueueSnackbar("Updated Entry", {
          variant: "success",
          autoHideDuration: 2000,
          anchorOrigin: {
            vertical: "top",
            horizontal: "right",
          },
        });
      }
    } catch (error) {
      console.log({ error });
    }
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({ type: "Entry - Refresh-Data", payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  const deleteEntry = async (entry: Entry) => {
    try {
      await entriesApi.delete(`/entries/${entry._id}`);
      dispatch({ type: "Entry - Delete-Entry", payload: entry });
      enqueueSnackbar("Deleted Entry", {
        variant: "success",
        autoHideDuration: 2000,
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      router.push("/");
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
        deleteEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
