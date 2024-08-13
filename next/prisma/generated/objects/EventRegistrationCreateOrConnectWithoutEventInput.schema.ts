import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationCreateWithoutEventInputObjectSchema } from './EventRegistrationCreateWithoutEventInput.schema';
import { EventRegistrationUncheckedCreateWithoutEventInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationCreateOrConnectWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EventRegistrationCreateWithoutEventInputObjectSchema),
        z.lazy(
          () => EventRegistrationUncheckedCreateWithoutEventInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationCreateOrConnectWithoutEventInputObjectSchema =
  Schema;
