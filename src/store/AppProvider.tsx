"use client";

import React, { useReducer } from "react";
import { AppContext } from "./AppContext";

import appReducer from "./AppReducer";
import appState from "./AppState";

interface AppProviderProp {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProp) => {
  const [state, dispatch] = useReducer(appReducer, appState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
