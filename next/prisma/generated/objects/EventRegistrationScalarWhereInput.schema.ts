import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { EnumregistrationStatusFilterObjectSchema } from './EnumregistrationStatusFilter.schema';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventRegistrationScalarWhereInputObjectSchema),
        z.lazy(() => EventRegistrationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventRegistrationScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventRegistrationScalarWhereInputObjectSchema),
        z.lazy(() => EventRegistrationScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    tableId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    eventId: z
      .union([z.lazy(() => IntFilterObjectSchema), z.number()])
      .optional(),
    mainExhibitorUsername: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    contactInformation: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    formularAnswers: z.lazy(() => JsonFilterObjectSchema).optional(),
    status: z
      .union([
        z.lazy(() => EnumregistrationStatusFilterObjectSchema),
        z.lazy(() => registrationStatusSchema),
      ])
      .optional(),
    submitTime: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const EventRegistrationScalarWhereInputObjectSchema = Schema;
