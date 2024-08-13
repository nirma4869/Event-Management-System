import { z } from 'zod';
import { TableScalarWhereInputObjectSchema } from './TableScalarWhereInput.schema';
import { TableUpdateManyMutationInputObjectSchema } from './TableUpdateManyMutationInput.schema';
import { TableUncheckedUpdateManyWithoutTablesInputObjectSchema } from './TableUncheckedUpdateManyWithoutTablesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpdateManyWithWhereWithoutEventInput> = z
  .object({
    where: z.lazy(() => TableScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => TableUpdateManyMutationInputObjectSchema),
      z.lazy(() => TableUncheckedUpdateManyWithoutTablesInputObjectSchema),
    ]),
  })
  .strict();

export const TableUpdateManyWithWhereWithoutEventInputObjectSchema = Schema;
