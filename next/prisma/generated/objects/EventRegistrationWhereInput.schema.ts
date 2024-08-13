import { z } from 'zod';
import { IntFilterObjectSchema } from './IntFilter.schema';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { JsonFilterObjectSchema } from './JsonFilter.schema';
import { EnumregistrationStatusFilterObjectSchema } from './EnumregistrationStatusFilter.schema';
import { registrationStatusSchema } from '../enums/registrationStatus.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { TableRelationFilterObjectSchema } from './TableRelationFilter.schema';
import { TableWhereInputObjectSchema } from './TableWhereInput.schema';
import { EventRelationFilterObjectSchema } from './EventRelationFilter.schema';
import { EventWhereInputObjectSchema } from './EventWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => EventRegistrationWhereInputObjectSchema),
        z.lazy(() => EventRegistrationWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => EventRegistrationWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => EventRegistrationWhereInputObjectSchema),
        z.lazy(() => EventRegistrationWhereInputObjectSchema).array(),
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
    table: z
      .union([
        z.lazy(() => TableRelationFilterObjectSchema),
        z.lazy(() => TableWhereInputObjectSchema),
      ])
      .optional(),
    event: z
      .union([
        z.lazy(() => EventRelationFilterObjectSchema),
        z.lazy(() => EventWhereInputObjectSchema),
      ])
      .optional(),
    mainExhibitor: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const EventRegistrationWhereInputObjectSchema = Schema;
