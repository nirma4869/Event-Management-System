import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { EventCountOrderByAggregateInputObjectSchema } from './EventCountOrderByAggregateInput.schema';
import { EventAvgOrderByAggregateInputObjectSchema } from './EventAvgOrderByAggregateInput.schema';
import { EventMaxOrderByAggregateInputObjectSchema } from './EventMaxOrderByAggregateInput.schema';
import { EventMinOrderByAggregateInputObjectSchema } from './EventMinOrderByAggregateInput.schema';
import { EventSumOrderByAggregateInputObjectSchema } from './EventSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventname: z.lazy(() => SortOrderSchema).optional(),
    organizerUsername: z.lazy(() => SortOrderSchema).optional(),
    startTime: z.lazy(() => SortOrderSchema).optional(),
    endTime: z.lazy(() => SortOrderSchema).optional(),
    roomGeometry: z.lazy(() => SortOrderSchema).optional(),
    description: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    registrationFormular: z.lazy(() => SortOrderSchema).optional(),
    invitationCode: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    imageUrl: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    adress: z.lazy(() => SortOrderSchema).optional(),
    zip: z.lazy(() => SortOrderSchema).optional(),
    city: z.lazy(() => SortOrderSchema).optional(),
    country: z.lazy(() => SortOrderSchema).optional(),
    contactInformation: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => EventCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => EventAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => EventMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => EventMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => EventSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const EventOrderByWithAggregationInputObjectSchema = Schema;
