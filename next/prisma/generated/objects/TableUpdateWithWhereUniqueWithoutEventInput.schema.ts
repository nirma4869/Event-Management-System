import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';
import { TableUpdateWithoutEventInputObjectSchema } from './TableUpdateWithoutEventInput.schema';
import { TableUncheckedUpdateWithoutEventInputObjectSchema } from './TableUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpdateWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TableWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => TableUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TableUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TableUpdateWithWhereUniqueWithoutEventInputObjectSchema = Schema;
