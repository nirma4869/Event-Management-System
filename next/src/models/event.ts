import i18n from "@/locales/i18n";
import { Prisma, eventStatus } from "@prisma/client";
import { z } from "zod";
import {
  EventRegistrationCreateOneSchema,
  JsonNullValueInputSchema,
  eventStatusSchema,
} from "../../prisma/generated/schemas";
import { mapEventRegistrationFromDatabase } from "./eventRegistration";
import { TableSchema } from "./table";
import { jsonSchema } from "./typeHelper";

// ----------------------------------------------------------------------

export type Event = Prisma.EventGetPayload<{
  include: { tables: true; eventRegistrations: true };
}>;

export const EventSchema = () => {
  const invalidInputErrorMessage = i18n.t(
    "messages.validation.createEvent.invalidInput"
  );

  return z.object({
    id: z.number().min(1),
    eventname: z.string().min(1, invalidInputErrorMessage),
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
    description: z.string().optional().nullable(),
    adress: z.string().min(1, invalidInputErrorMessage),
    zip: z.string().min(1, invalidInputErrorMessage),
    city: z.string().min(1, invalidInputErrorMessage),
    country: z.string().min(1, invalidInputErrorMessage),
    contactInformation: z.string().optional().nullable(),
    imageUrl: z.string().optional().nullable(),
    invitationCode: z.string().optional().nullable(),
    organizerUsername: z.string().optional(),
    eventRegistrations: z.array(EventRegistrationCreateOneSchema).optional(),
    tables: z.array(TableSchema()).min(1),
    status: z.lazy(() => eventStatusSchema),
    registrationFormular: z.union([
      z.lazy(() => JsonNullValueInputSchema),
      jsonSchema,
    ]),
    roomGeometry: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
  });
};

export const createInitialEvent = (): Event => {
  return {
    id: Math.floor(Math.random() * (1000 - 0 + 1) + 0),
    eventname: "",

    startTime: new Date(),
    endTime: new Date(),
    description: "",
    adress: "",
    zip: "",
    city: "",
    country: "",
    contactInformation: "",
    imageUrl: "",
    invitationCode: null,
    organizerUsername: "",
    eventRegistrations: [],
    tables: [],
    status: eventStatus.OPEN,
    registrationFormular: null,
    roomGeometry: JSON.stringify(["1000", "1000"]),
  };
};

export const mapEventFromDatabase = (event: Event): Event => {
  return {
    ...event,
    description: event.description || "",
    contactInformation: event.contactInformation || "",
    imageUrl: event.imageUrl || "",
    invitationCode: event.invitationCode || "",
    eventRegistrations: event.eventRegistrations.map((evReg) =>
      mapEventRegistrationFromDatabase(evReg)
    ),
  };
};
