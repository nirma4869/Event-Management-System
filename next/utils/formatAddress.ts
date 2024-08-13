import { Address } from "@/models/address";

// ----------------------------------------------------------------------

export function formatAddress(address: Address) {
  const { line1, zip, city, country } = address;
  return `${line1}, ${zip}, ${city}, ${country}`;
}
