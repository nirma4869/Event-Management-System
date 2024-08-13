import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithoutEventInputObjectSchema } from './EventRegistrationUpdateWithoutEventInput.schema';
import { EventRegistrationUncheckedUpdateWithoutEventInputObjectSchema } from './EventRegistrationUncheckedUpdateWithoutEventInput.schema';
import { EventRegistrationCreateWithoutEventInputObjectSchema } from './EventRegistrationCreateWithoutEventInput.schema';
import { EventRegistrationUncheckedCreateWithoutEventInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpsertWithWhereUniqueWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => EventRegistrationUpdateWithoutEventInputObjectSchema),
        z.lazy(
          () => EventRegistrationUncheckedUpdateWithoutEventInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => EventRegistrationCreateWithoutEventInputObjectSchema),
        z.lazy(
          () => EventRegistrationUncheckedCreateWithoutEventInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema =
  Schema;
