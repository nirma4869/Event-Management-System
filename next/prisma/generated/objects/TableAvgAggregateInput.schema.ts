import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableAvgAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    eventId: z.literal(true).optional(),
    capacity: z.literal(true).optional(),
    origin: z.literal(true).optional(),
    rotation: z.literal(true).optional(),
  })
  .strict();

export const TableAvgAggregateInputObjectSchema = Schema;
