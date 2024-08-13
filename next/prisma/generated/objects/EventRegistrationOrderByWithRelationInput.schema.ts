import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { TableOrderByWithRelationInputObjectSchema } from './TableOrderByWithRelationInput.schema';
import { EventOrderByWithRelationInputObjectSchema } from './EventOrderByWithRelationInput.schema';
import { UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    tableId: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    mainExhibitorUsername: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    contactInformation: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    formularAnswers: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    submitTime: z.lazy(() => SortOrderSchema).optional(),
    table: z.lazy(() => TableOrderByWithRelationInputObjectSchema).optional(),
    event: z.lazy(() => EventOrderByWithRelationInputObjectSchema).optional(),
    mainExhibitor: z
      .lazy(() => UserOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventRegistrationOrderByWithRelationInputObjectSchema = Schema;
