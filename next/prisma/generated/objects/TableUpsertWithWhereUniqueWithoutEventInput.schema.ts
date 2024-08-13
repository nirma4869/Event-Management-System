import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';
import { TableUpdateWithoutEventInputObjectSchema } from './TableUpdateWithoutEventInput.schema';
import { TableUncheckedUpdateWithoutEventInputObjectSchema } from './TableUncheckedUpdateWithoutEventInput.schema';
import { TableCreateWithoutEventInputObjectSchema } from './TableCreateWithoutEventInput.schema';
import { TableUncheckedCreateWithoutEventInputObjectSchema } from './TableUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpsertWithWhereUniqueWithoutEventInput> = z
  .object({
    where: z.lazy(() => TableWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => TableUpdateWithoutEventInputObjectSchema),
      z.lazy(() => TableUncheckedUpdateWithoutEventInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => TableCreateWithoutEventInputObjectSchema),
      z.lazy(() => TableUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TableUpsertWithWhereUniqueWithoutEventInputObjectSchema = Schema;
