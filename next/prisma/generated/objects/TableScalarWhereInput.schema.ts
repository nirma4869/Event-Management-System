import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableListFilterObjectSchema } from './FloatNullableListFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TableScalarWhereInputObjectSchema),
        z.lazy(() => TableScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TableScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TableScalarWhereInputObjectSchema),
        z.lazy(() => TableScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    eventId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    capacity: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    origin: z.lazy(() => FloatNullableListFilterObjectSchema).optional(),
    rotation: z
      .union([z.lazy(() => FloatFilterObjectSchema), z.number()])
      .optional(),
    publicId: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
  })
  .strict();

export const TableScalarWhereInputObjectSchema = Schema;
