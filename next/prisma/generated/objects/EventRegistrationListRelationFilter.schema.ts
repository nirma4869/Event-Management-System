import { z } from 'zod';
import { EventRegistrationWhereInputObjectSchema } from './EventRegistrationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationListRelationFilter> = z
  .object({
    every: z.lazy(() => EventRegistrationWhereInputObjectSchema).optional(),
    some: z.lazy(() => EventRegistrationWhereInputObjectSchema).optional(),
    none: z.lazy(() => EventRegistrationWhereInputObjectSchema).optional(),
  })
  .strict();

export const EventRegistrationListRelationFilterObjectSchema = Schema;
