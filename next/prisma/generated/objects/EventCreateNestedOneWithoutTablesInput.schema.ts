import { z } from 'zod';
import { EventCreateWithoutTablesInputObjectSchema } from './EventCreateWithoutTablesInput.schema';
import { EventUncheckedCreateWithoutTablesInputObjectSchema } from './EventUncheckedCreateWithoutTablesInput.schema';
import { EventCreateOrConnectWithoutTablesInputObjectSchema } from './EventCreateOrConnectWithoutTablesInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedOneWithoutTablesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => EventCreateWithoutTablesInputObjectSchema),
        z.lazy(() => EventUncheckedCreateWithoutTablesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => EventCreateOrConnectWithoutTablesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const EventCreateNestedOneWithoutTablesInputObjectSchema = Schema;
