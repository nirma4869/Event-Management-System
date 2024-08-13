import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithoutEventInputObjectSchema } from './EventRegistrationUpdateWithoutEventInput.schema';
import { EventRegistrationUncheckedUpdateWithoutEventInputObjectSchema } from './EventRegistrationUncheckedUpdateWithoutEventInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpdateWithWhereUniqueWithoutEventInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => EventRegistrationUpdateWithoutEventInputObjectSchema),
        z.lazy(
          () => EventRegistrationUncheckedUpdateWithoutEventInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema =
  Schema;
