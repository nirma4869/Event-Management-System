import numeral from "numeral";

// ----------------------------------------------------------------------

type InputValue = string | number | null;

export function fNumber(number: InputValue) {
  return numeral(number).format("0.[00000]");
}

export function fCurrency(number: InputValue) {
  const format = number ? numeral(number).format("0,0.00 $") : "";

  return result(format, ".00");
}

export function fCurrencyWithoutUnit(number: InputValue) {
  const format = number ? numeral(number).format("0,0.00") : "";

  return format;
}

export function fCurrencyValidNull(number: InputValue) {
  const format = numeral(number).format("0,0.00 $");

  return format;
}

export function fPercent(number: InputValue) {
  const format = number ? numeral(Number(number) / 100).format("0.0%") : "";

  return result(format, ".0");
}

export function result(format: string, key = ".00") {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, "") : format;
}
