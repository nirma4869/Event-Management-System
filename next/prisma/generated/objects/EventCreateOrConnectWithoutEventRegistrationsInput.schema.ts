import { z } from 'zod';
import { EventWhereUniqueInputObjectSchema } from './EventWhereUniqueInput.schema';
import { EventCreateWithoutEventRegistrationsInputObjectSchema } from './EventCreateWithoutEventRegistrationsInput.schema';
import { EventUncheckedCreateWithoutEventRegistrationsInputObjectSchema } from './EventUncheckedCreateWithoutEventRegistrationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventCreateOrConnectWithoutEventRegistrationsInput> =
  z
    .object({
      where: z.lazy(() => EventWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EventCreateWithoutEventRegistrationsInputObjectSchema),
        z.lazy(
          () => EventUncheckedCreateWithoutEventRegistrationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventCreateOrConnectWithoutEventRegistrationsInputObjectSchema =
  Schema;
