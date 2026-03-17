import initialAppliances from "@/constants/initialAppliances";
import { AppState } from "./AppState";

export type Action =
  | {
      type: "SET_APPLIANCE_POWER";
      payload: { id: number; power: string | number };
    }
  | {
      type: "SET_APPLIANCE_NAME";
      payload: { id: number; name: string };
    }
  | {
      type: "SET_APPLIANCE_QUANTITY";
      payload: { id: number; quantity: string | number };
    }
  | {
      type: "SET_APPLIANCE_VARIATION";
      payload: { id: number; type: string };
    }
  | {
      type: "RESET";
    };

const appReducer = (state: AppState, action: Action) => {
  switch (action.type) {
    case "SET_APPLIANCE_POWER": {
      const { power, id } = action.payload;
      if (Number(power) < 0) return state;

      const newAppliance = [...state.appliances];
      newAppliance[id].power = !Number(power) ? "0" : Number(power).toString();
      return {
        app: { ...state.app },
        appliances: newAppliance,
      };
    }

    case "SET_APPLIANCE_NAME": {
      const { name, id } = action.payload;

      const newAppliance = [...state.appliances];
      newAppliance[id].name = name || "";
      return {
        app: { ...state.app },
        appliances: newAppliance,
      };
    }

    case "SET_APPLIANCE_QUANTITY": {
      const { quantity, id } = action.payload;
      if (Number(quantity) > 99 || Number(quantity || !Number(quantity)) < 0)
        return state;

      const newAppliance = [...state.appliances];
      newAppliance[id].quantity = quantity?.toString() || "";
      return {
        app: { ...state.app },
        appliances: newAppliance,
      };
    }

    case "SET_APPLIANCE_VARIATION": {
      const { type, id } = action.payload;
      const newAppliance = [...state.appliances];

      const appliance = newAppliance[id];
      const variation = appliance.variation?.find((v) => v.type === type);

      if (variation) {
        appliance.name = variation.type;
        appliance.power = variation.power;
      }

      return {
        app: { ...state.app },
        appliances: newAppliance,
      };
    }
    case "RESET": {
      return {
        app: { navBar: false },
        appliances: [...initialAppliances],
      };
    }
    default: {
      return state;
    }
  }
};

export default appReducer;
