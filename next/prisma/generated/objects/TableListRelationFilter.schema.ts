import { z } from 'zod';
import { TableWhereInputObjectSchema } from './TableWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableListRelationFilter> = z
  .object({
    every: z.lazy(() => TableWhereInputObjectSchema).optional(),
    some: z.lazy(() => TableWhereInputObjectSchema).optional(),
    none: z.lazy(() => TableWhereInputObjectSchema).optional(),
  })
  .strict();

export const TableListRelationFilterObjectSchema = Schema;
