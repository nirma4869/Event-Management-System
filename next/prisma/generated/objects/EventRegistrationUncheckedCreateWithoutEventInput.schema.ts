import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.EventRegistrationUncheckedCreateWithoutEventInput> =
  z
    .object({
      id: z.number().optional(),
      tableId: z.number(),
      mainExhibitorUsername: z.string(),
      name: z.string(),
      description: z.string().optional().nullable(),
      contactInformation: z.string().optional().nullable(),
      formularAnswers: z.union([
        z.lazy(() => JsonNullValueInputSchema),
        jsonSchema,
      ]),
      status: z.lazy(() => registrationStatusSchema).optional(),
      submitTime: z.coerce.date().optional(),
    })
    .strict();

export const EventRegistrationUncheckedCreateWithoutEventInputObjectSchema =
  Schema;
