import { z } from 'zod';
import { EventCreateWithoutEventRegistrationsInputObjectSchema } from './EventCreateWithoutEventRegistrationsInput.schema';
import { EventUncheckedCreateWithoutEventRegistrationsInputObjectSchema } from './EventUncheckedCreateWithoutEventRegistrationsInput.schema';
import { EventCreateOrConnectWithoutEventRegistrationsInputObjectSchema } from './EventCreateOrConnectWithoutEventRegistrationsInput.schema';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateNestedOneWithoutEventRegistrationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventCreateWithoutEventRegistrationsInputObjectSchema),
          z.lazy(
            () =>
              EventUncheckedCreateWithoutEventRegistrationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => EventCreateOrConnectWithoutEventRegistrationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => EventWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const EventCreateNestedOneWithoutEventRegistrationsInputObjectSchema =
  Schema;
