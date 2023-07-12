import { EntriesState } from "./";

type EntriesActionType = { type: "" };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    // case '': {
    //     return {
    //         ...state
    //     }
    // }
    default:
      return state;
  }
};
