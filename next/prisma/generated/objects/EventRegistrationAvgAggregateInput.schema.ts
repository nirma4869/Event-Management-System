import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    tableId: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
  })
  .strict();

export const EventRegistrationAvgAggregateInputObjectSchema = Schema;
