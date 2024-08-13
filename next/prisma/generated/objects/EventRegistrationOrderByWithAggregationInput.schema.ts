import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventRegistrationCountOrderByAggregateInputObjectSchema } from './EventRegistrationCountOrderByAggregateInput.schema';
import { EventRegistrationAvgOrderByAggregateInputObjectSchema } from './EventRegistrationAvgOrderByAggregateInput.schema';
import { EventRegistrationMaxOrderByAggregateInputObjectSchema } from './EventRegistrationMaxOrderByAggregateInput.schema';
import { EventRegistrationMinOrderByAggregateInputObjectSchema } from './EventRegistrationMinOrderByAggregateInput.schema';
import { EventRegistrationSumOrderByAggregateInputObjectSchema } from './EventRegistrationSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationOrderByWithAggregationInput> = z
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
    _count: z
      .lazy(() => EventRegistrationCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z
      .lazy(() => EventRegistrationAvgOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => EventRegistrationMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => EventRegistrationMinOrderByAggregateInputObjectSchema)
      .optional(),
    _sum: z
      .lazy(() => EventRegistrationSumOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const EventRegistrationOrderByWithAggregationInputObjectSchema = Schema;
