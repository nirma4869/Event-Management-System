import { de, enUS as enUS_ } from "date-fns/locale";
import { deDE, enUS } from "./locales";

// ----------------------------------------------------------------------

export const allLangs = [
  { label: "German", value: "de", systemValue: deDE, dateFns: de },
  { label: "English", value: "en", systemValue: enUS, dateFns: enUS_ },
];

export const defaultLang = allLangs[0];
