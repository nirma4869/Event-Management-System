import { z } from 'zod';
import { EventRegistrationWhereInputObjectSchema } from './EventRegistrationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationRelationFilter> = z
  .object({
    is: z
      .lazy(() => EventRegistrationWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => EventRegistrationWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const EventRegistrationRelationFilterObjectSchema = Schema;
