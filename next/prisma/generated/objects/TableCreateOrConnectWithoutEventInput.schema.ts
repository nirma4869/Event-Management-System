import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';
import { TableCreateWithoutEventInputObjectSchema } from './TableCreateWithoutEventInput.schema';
import { TableUncheckedCreateWithoutEventInputObjectSchema } from './TableUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateOrConnectWithoutEventInput> = z
  .object({
    where: z.lazy(() => TableWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => TableCreateWithoutEventInputObjectSchema),
      z.lazy(() => TableUncheckedCreateWithoutEventInputObjectSchema),
    ]),
  })
  .strict();

export const TableCreateOrConnectWithoutEventInputObjectSchema = Schema;
