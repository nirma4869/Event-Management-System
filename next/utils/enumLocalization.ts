import i18n from "@/locales/i18n";
import { FormTypes } from "@/sections/loggedIn/create/steps/createFormula/types";
import { eventStatus } from "@prisma/client";

// ----------------------------------------------------------------------

export type StatusColor =
  | "primary"
  | "secondary"
  | "info"
  | "success"
  | "warning"
  | "error"
  | undefined;

// Functions
// ----------------------------------------------------------------------

export const enumValuesAsNumbers = (enumObject: any): number[] => {
  return Object.values(enumObject).filter((v) => !isNaN(Number(v))) as number[];
};

// Localization
// ----------------------------------------------------------------------

export const localizeEventStatus = (status: eventStatus) => {
  const eventStatusText: Record<eventStatus, string> = {
    [eventStatus.DRAFT]: i18n.t("enums.eventStatus.draft"),
    [eventStatus.OPEN]: i18n.t("enums.eventStatus.open"),
    [eventStatus.ONGOING]: i18n.t("enums.eventStatus.onGoing"),
    [eventStatus.CLOSED]: i18n.t("enums.eventStatus.closed"),
  };

  return eventStatus[status] !== undefined ? eventStatusText[status] : "";
};

const eventStatusColor: Record<eventStatus, StatusColor> = {
  [eventStatus.DRAFT]: "warning",
  [eventStatus.OPEN]: "success",
  [eventStatus.ONGOING]: "info",
  [eventStatus.CLOSED]: "error",
};

export const getEventStatusColor = (status: eventStatus) =>
  eventStatus[status] !== undefined ? eventStatusColor[status] : undefined;

export const localizeFormTypes = (formType: FormTypes) => {
  const formTypeText: { [K in FormTypes]: string } = {
    [FormTypes.INPUTFIELD]: i18n.t("enums.formTypes.inputField"),
    [FormTypes.DROPDOWN]: i18n.t("enums.formTypes.dropDown"),
    [FormTypes.CHECKBOX]: i18n.t("enums.formTypes.checkBox"),
    [FormTypes.RADIOBUTTON]: i18n.t("enums.formTypes.radioButton"),
    [FormTypes.DATEPICKER]: i18n.t("enums.formTypes.datePicker"),
  };

  return formTypeText[formType];
};
