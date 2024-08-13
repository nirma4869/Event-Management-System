import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationWhereUniqueInput> = z
  .object({
    id: z.number().optional(),
    tableId: z.number().optional(),
  })
  .strict();

export const EventRegistrationWhereUniqueInputObjectSchema = Schema;
