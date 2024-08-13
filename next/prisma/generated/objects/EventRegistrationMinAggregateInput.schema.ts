import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tableId: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    mainExhibitorUsername: z.literal(true).optional(),
    name: z.literal(true).optional(),
    description: z.literal(true).optional(),
    contactInformation: z.literal(true).optional(),
    status: z.literal(true).optional(),
    submitTime: z.literal(true).optional(),
  })
  .strict();

export const EventRegistrationMinAggregateInputObjectSchema = Schema;
