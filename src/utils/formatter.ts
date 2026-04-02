export function formatNaira(price: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
}

export const formatVA = (va: number) =>
  va >= 1000 ? `${va / 1000}KVA` : `${va}VA`;

export const formatWH = (wh: number) =>
  wh >= 1000 ? `${wh / 1000}KWh` : `${wh}Wh`;
