import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { FloatNullableListFilterObjectSchema } from './FloatNullableListFilter.schema';
import { FloatFilterObjectSchema } from './FloatFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { EventRegistrationRelationFilterObjectSchema } from './EventRegistrationRelationFilter.schema';
import { EventRegistrationWhereInputObjectSchema } from './EventRegistrationWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => TableWhereInputObjectSchema),
        z.lazy(() => TableWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => TableWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => TableWhereInputObjectSchema),
        z.lazy(() => TableWhereInputObjectSchema).array(),
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
    event: z
      .union([
        z.lazy(() => EventRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional(),
    EventRegistration: z
      .union([
        z.lazy(() => EventRegistrationRelationFilterObjectSchema),
        z.lazy(() => EventRegistrationWhereInputObjectSchema),
      ])
      .optional()
      .nullable(),
  })
  .strict();

export const TableWhereInputObjectSchema = Schema;
