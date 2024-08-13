import i18n from "@/locales/i18n";
import { Prisma, registrationStatus } from "@prisma/client";
import { z } from "zod";
import {
  JsonNullValueInputSchema,
  registrationStatusSchema,
} from "../../prisma/generated/schemas";
import { jsonSchema } from "./typeHelper";

// ----------------------------------------------------------------------

export type EventRegistration = Prisma.EventRegistrationGetPayload<{}>;

export const EventRegistrationSchema = () => {
  const noTableErrorMessage = i18n.t(
    "messages.validation.eventSignUp.noTableId"
  );

  const emptyFieldErrorMessage = i18n.t(
    "messages.validation.eventSignUp.emptyField"
  );

  return z.object({
    id: z.number().min(1),
    tableId: z.number().min(1, noTableErrorMessage),
    eventId: z.number().min(1),
    mainExhibitorUsername: z.string().optional(),
    name: z.string().min(1, emptyFieldErrorMessage),
    description: z.string().min(1, emptyFieldErrorMessage),
    contactInformation: z.string().min(1, emptyFieldErrorMessage),
    formularAnswers: z.union([
      z.lazy(() => JsonNullValueInputSchema),
      jsonSchema,
    ]),
    status: z.lazy(() => registrationStatusSchema),
    submitTime: z.coerce.date(),
  });
};

export const createInitialEventRegistration = (
  eventId: number
): EventRegistration => {
  return {
    id: Math.floor(Math.random() * (1000 - 0 + 1) + 0),
    tableId: 0,
    eventId: eventId,
    mainExhibitorUsername: "",
    name: "",
    description: "",
    contactInformation: "",
    formularAnswers: null,
    status: registrationStatus.ACCEPTED,
    submitTime: new Date(),
  };
};

export const mapEventRegistrationFromDatabase = (
  eventRegistration: EventRegistration
): EventRegistration => {
  return {
    ...eventRegistration,
    description: eventRegistration.description || "",
    contactInformation: eventRegistration.description || "",
  };
};

export const mapEventRegistrationToDatabase = (
  eventRegistration: EventRegistration
): EventRegistration => {
  return {
    ...eventRegistration,
    description: eventRegistration.description || null,
    contactInformation: eventRegistration.description || null,
  };
};
