import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableAvgOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    eventId: z.lazy(() => SortOrderSchema).optional(),
    capacity: z.lazy(() => SortOrderSchema).optional(),
    origin: z.lazy(() => SortOrderSchema).optional(),
    rotation: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const TableAvgOrderByAggregateInputObjectSchema = Schema;
