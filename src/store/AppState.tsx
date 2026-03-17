import initialAppliances, { Appliance } from "@/constants/initialAppliances";

export interface AppState {
  app: {
    navBar: boolean;
  };
  appliances: Appliance[];
}

const appState: AppState = {
  app: { navBar: false },
  appliances: [...initialAppliances],
};

export default appState;
