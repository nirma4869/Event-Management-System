import i18n from "@/locales/i18n";
import { Prisma } from "@prisma/client";
import { z } from "zod";

// ----------------------------------------------------------------------

export type Table = Prisma.TableGetPayload<{}>;

export const TableSchema = () => {
  const invalidInputErrorMessage = i18n.t(
    "messages.validation.createEvent.invalidInput"
  );

  return z.object({
    id: z.number().min(1),
    eventId: z.number().min(1),
    capacity: z.string().min(1, invalidInputErrorMessage),
    origin: z.number().array(),
    publicId: z.string().min(1, invalidInputErrorMessage),
    rotation: z.number(),
  });
};

export const createNewTable = (eventId: number): Table => {
  return {
    id: Math.floor(Math.random() * (1000 - 0 + 1) + 0),
    eventId,
    capacity: 0,
    origin: [100, 100, 100, 100],
    publicId: "",
    rotation: 0,
  };
};
