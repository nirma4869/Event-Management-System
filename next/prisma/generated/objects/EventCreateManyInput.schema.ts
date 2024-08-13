import { z } from 'zod';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema';
import { eventStatusSchema } from '../enums/eventStatus.schema';

import type { Prisma } from '@prisma/client';

const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([
    literalSchema,
    z.array(jsonSchema.nullable()),
    z.record(jsonSchema.nullable()),
  ]),
);

const Schema: z.ZodType<Prisma.EventCreateManyInput> = z
  .object({
    id: z.number().optional(),
    eventname: z.string(),
    organizerUsername: z.string(),
    startTime: z.coerce.date(),
    endTime: z.coerce.date(),
    roomGeometry: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
    description: z.string().optional().nullable(),
    registrationFormular: z.union([
      z.lazy(() => JsonNullValueInputSchema),
      jsonSchema,
    ]),
    invitationCode: z.string().optional().nullable(),
    status: z.lazy(() => eventStatusSchema).optional(),
    imageUrl: z.string().optional().nullable(),
    adress: z.string(),
    zip: z.string(),
    city: z.string(),
    country: z.string(),
    contactInformation: z.string().optional().nullable(),
  })
  .strict();

export const EventCreateManyInputObjectSchema = Schema;
