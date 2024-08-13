import { z } from 'zod';
import { TableWhereInputObjectSchema } from './TableWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableRelationFilter> = z
  .object({
    is: z
      .lazy(() => TableWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => TableWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const TableRelationFilterObjectSchema = Schema;
