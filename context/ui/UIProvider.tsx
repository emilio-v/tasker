import { FC, ReactNode, useReducer } from "react";
import { UIContext, uiReducer } from "./";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
}

interface UIProviderProps {
  children: ReactNode;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
};

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };

  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAdding = (value: boolean) => {
    dispatch({ type: "UI - Set isAddingEntry", payload: value });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAdding,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
