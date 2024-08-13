import { z } from 'zod';
import { eventStatusSchema } from '../enums/eventStatus.schema';
import { NestedEnumeventStatusWithAggregatesFilterObjectSchema } from './NestedEnumeventStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumeventStatusFilterObjectSchema } from './NestedEnumeventStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumeventStatusWithAggregatesFilter> = z
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
        z.lazy(() => NestedEnumeventStatusWithAggregatesFilterObjectSchema),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumeventStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumeventStatusFilterObjectSchema).optional(),
  })
  .strict();

export const EnumeventStatusWithAggregatesFilterObjectSchema = Schema;
