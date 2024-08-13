import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { TableCountOrderByAggregateInputObjectSchema } from './TableCountOrderByAggregateInput.schema';
import { TableAvgOrderByAggregateInputObjectSchema } from './TableAvgOrderByAggregateInput.schema';
import { TableMaxOrderByAggregateInputObjectSchema } from './TableMaxOrderByAggregateInput.schema';
import { TableMinOrderByAggregateInputObjectSchema } from './TableMinOrderByAggregateInput.schema';
import { TableSumOrderByAggregateInputObjectSchema } from './TableSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    capacity: z.lazy(() => SortOrderSchema).optional(),
    origin: z.lazy(() => SortOrderSchema).optional(),
    rotation: z.lazy(() => SortOrderSchema).optional(),
    publicId: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => TableCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => TableAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => TableMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => TableMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => TableSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const TableOrderByWithAggregationInputObjectSchema = Schema;
