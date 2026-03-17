"use client";

import { createContext } from "react";
import { Action } from "./AppReducer";
import { AppState } from "./AppState";

type AppContextType = {
  state: AppState;
  dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<AppContextType | null>(null);
