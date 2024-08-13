import { z } from 'zod';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';
import { NestedEnumregistrationStatusFilterObjectSchema } from './NestedEnumregistrationStatusFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EnumregistrationStatusFilter> = z
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
        z.lazy(() => NestedEnumregistrationStatusFilterObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EnumregistrationStatusFilterObjectSchema = Schema;
