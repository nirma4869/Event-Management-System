import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutTablesInputObjectSchema } from './EventCreateWithoutTablesInput.schema';
import { EventUncheckedCreateWithoutTablesInputObjectSchema } from './EventUncheckedCreateWithoutTablesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutTablesInput> = z
  .object({
    where: z.lazy(() => EventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => EventCreateWithoutTablesInputObjectSchema),
      z.lazy(() => EventUncheckedCreateWithoutTablesInputObjectSchema),
    ]),
  })
  .strict();

export const EventCreateOrConnectWithoutTablesInputObjectSchema = Schema;
