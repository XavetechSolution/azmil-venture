import { AppState } from "../store/AppState";
import { formatWH } from "./formatter";

interface generateRecommendationMessageArgs {
  state: AppState;
  recommendedInverters: any;
  solarQuantity: number;
  recommendedBatteries: any;
  KWhDisplay: string;
}
function generateRecommendationMessage({
  state,
  recommendedInverters,
  solarQuantity,
  recommendedBatteries,
  KWhDisplay,
}: generateRecommendationMessageArgs) {
  const appliancesList = state.appliances?.length
    ? state.appliances
        .filter((item) => Number(item.power) * Number(item.quantity) > 0)
        .map((item) => `- ${item.name} (× ${item.quantity})`)
        .join("\n")
    : "No appliances specified";

  const message = `Hello, I would like a solar system quote.
  
  Details: 
  - Name: ${state.user.name}
  - Email: ${state.user.email}
  - Address: ${state.user.address}
  
  Here are my Appliances and Estimated requirements:
  
  Appliances ⚡:
  ${appliancesList}
  
  Estimated Requirements 📝:
  - Inverter(s): ${`${formatWH(recommendedInverters.va)} ( x${recommendedInverters.count})`}
  - Solar Panels: ${solarQuantity}
  - Battery Bank: ${`${formatWH(recommendedBatteries.batteryWh)} ( x${recommendedBatteries.count})`}
  - Daily Energy: ${KWhDisplay}
  
  Config ⚙:
  - System Type: ${state.config.systemType === "ongrid" ? "On-Grid" : "Off-Grid"}
  - Battery Type: ${
    state.config.batteryType === "lithium"
      ? state.config.batteryType + " Battery"
      : state.config.batteryType + " Cell"
  }
  - Daily Usage: ${state.config.dailyUsage} hr(s)
  
  Please provide a formal quote. Thank you.
  `;

  return message;
}

export default generateRecommendationMessage;
