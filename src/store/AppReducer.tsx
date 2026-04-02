import { Appliance } from "@/src/constants/initialAppliances";
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
  | { type: "RESET_APPLIANCES" }
  | { type: "CLOSE_NAV_BAR" }
  | { type: "OPEN_NAV_BAR" }
  | { type: "SET_CONFIG"; payload: Partial<AppState["config"]> }
  | { type: "SET_USER"; payload: Partial<AppState["user"]> }
  | { type: "SET_FORM_VALIDATION"; payload: { value: boolean } };

// helper to update appliance immutably
const updateAppliance = (
  appliances: Appliance[],
  id: number,
  updater: (item: Appliance) => Appliance,
) => appliances.map((item, index) => (index === id ? updater(item) : item));

const isFormValid = (state: AppState): boolean => {
  const { user, config } = state;

  return Boolean(
    user.name &&
    user.email &&
    user.address &&
    config.systemType &&
    config.dailyUsage &&
    config.batteryType,
  );
};

// helper to calculate total watt
const calculateTotalWatt = (appliances: Appliance[]) =>
  appliances.reduce((sum, a) => sum + Number(a.power) * Number(a.quantity), 0);

const appReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_APPLIANCE_POWER": {
      const { id, power } = action.payload;
      const value = Number(power);
      if (value < 0) return state;

      const appliances = updateAppliance(state.appliances, id, (a) => ({
        ...a,
        power: (!value ? 0 : value).toString(),
      }));

      return {
        ...state,
        appliances,
        energy: { totalWatt: calculateTotalWatt(appliances) },
      };
    }

    case "SET_APPLIANCE_NAME": {
      const { id, name } = action.payload;

      const appliances = updateAppliance(state.appliances, id, (a) => ({
        ...a,
        name: name || "",
      }));

      return {
        ...state,
        appliances,
        energy: { totalWatt: calculateTotalWatt(appliances) },
      };
    }

    case "SET_APPLIANCE_QUANTITY": {
      const { id, quantity } = action.payload;
      const value = Number(quantity);

      if (value < 0 || value > 99 || Number.isNaN(value)) return state;

      const appliances = updateAppliance(state.appliances, id, (a) => ({
        ...a,
        quantity: value.toString(),
      }));

      return {
        ...state,
        appliances,
        energy: { totalWatt: calculateTotalWatt(appliances) },
      };
    }

    case "SET_APPLIANCE_VARIATION": {
      const { id, type } = action.payload;

      const appliances = updateAppliance(state.appliances, id, (a) => {
        const variation = a.variation?.find((v) => v.type === type);
        if (!variation) return a;

        return {
          ...a,
          name: variation.type,
          power: variation.power,
        };
      });

      return {
        ...state,
        appliances,
        energy: { totalWatt: calculateTotalWatt(appliances) },
      };
    }

    case "OPEN_NAV_BAR":
    case "CLOSE_NAV_BAR": {
      return {
        ...state,
        app: { navBar: action.type === "OPEN_NAV_BAR", step: 0 },
      };
    }

    case "RESET_APPLIANCES": {
      const appliances = state.appliances.map((v) => {
        const base: Appliance = {
          hrs: "0",
          isEditable: false,
          isSelected: false,
          name: v.variation ? v.variation[0].type : v.name,
          power: v.variation ? v.variation[0].power : v.power,
          quantity: "0",
        };

        if (v.variation) base.variation = v.variation;
        return base;
      });

      return {
        app: { navBar: false, step: 0 },
        energy: { totalWatt: 0 },
        appliances,
        user: { name: "", email: "", address: "" },
        config: {
          systemType: "",
          dailyUsage: 0,
          batteryType: "",
          formIsValidated: false,
        },
      };
    }

    case "SET_CONFIG": {
      const { dailyUsage } = action.payload;
      if (
        dailyUsage &&
        (dailyUsage <= 0 || dailyUsage > 24 || Number.isNaN(dailyUsage))
      )
        return state;
      const newState = {
        ...state,
        config: { ...state.config, ...action.payload },
      };

      newState.config.formIsValidated = isFormValid(newState);

      return newState;
    }

    case "SET_USER": {
      const newState = {
        ...state,
        user: { ...state.user, ...action.payload },
      };
      newState.config.formIsValidated = isFormValid(newState);

      return newState;
    }

    default:
      return state;
  }
};

export default appReducer;
