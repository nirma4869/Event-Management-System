import { z } from 'zod';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';
import { NestedEnumregistrationStatusWithAggregatesFilterObjectSchema } from './NestedEnumregistrationStatusWithAggregatesFilter.schema';
import { NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumregistrationStatusFilterObjectSchema } from './NestedEnumregistrationStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumregistrationStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => registrationStatusSchema).optional(),
    in: z
      .union([
        z.lazy(() => registrationStatusSchema).array(),
        z.lazy(() => registrationStatusSchema),
      ])
      .optional(),
    notIn: z
      .union([
        z.lazy(() => registrationStatusSchema).array(),
        z.lazy(() => registrationStatusSchema),
      ])
      .optional(),
    not: z
      .union([
        z.lazy(() => registrationStatusSchema),
        z.lazy(
          () => NestedEnumregistrationStatusWithAggregatesFilterObjectSchema,
        ),
      ])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z
      .lazy(() => NestedEnumregistrationStatusFilterObjectSchema)
      .optional(),
    _max: z
      .lazy(() => NestedEnumregistrationStatusFilterObjectSchema)
      .optional(),
  })
  .strict();

export const EnumregistrationStatusWithAggregatesFilterObjectSchema = Schema;
