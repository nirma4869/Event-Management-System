import { z } from 'zod';
import { eventStatusSchema } from '../enums/eventStatus.schema';
import { NestedEnumeventStatusFilterObjectSchema } from './NestedEnumeventStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumeventStatusFilter> = z
  .object({
    equals: z.lazy(() => eventStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => eventStatusSchema).array(),
        z.lazy(() => eventStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => eventStatusSchema).array(),
        z.lazy(() => eventStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => eventStatusSchema),
        z.lazy(() => NestedEnumeventStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumeventStatusFilterObjectSchema = Schema;
