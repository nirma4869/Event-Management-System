import { format, getTime } from "date-fns";

// ----------------------------------------------------------------------

type InputValue = Date | string | number | null;

export function fDate(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy";

  return date ? format(new Date(date), fm) : "";
}

export function fDateTime(date: InputValue, newFormat?: string) {
  const fm = newFormat || "dd MMM yyyy p";

  return date ? format(new Date(date), fm) : "";
}

export function fTimestamp(date: InputValue) {
  return date ? getTime(new Date(date)) : "";
}

export function convertLocalToUTCDate(date: InputValue) {
  if (!date) {
    return date;
  }
  date = new Date(date);
  date = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  );
  return date;
}

export function fPeriod(startDate: Date | null, endDate: Date | null) {
  if (!startDate || !endDate) {
    return "--";
  }

  return `${fDate(startDate)} - ${fDate(endDate)}`;
}
