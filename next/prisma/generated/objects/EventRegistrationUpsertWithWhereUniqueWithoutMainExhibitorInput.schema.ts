import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUpdateWithoutMainExhibitorInput.schema';
import { EventRegistrationUncheckedUpdateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedUpdateWithoutMainExhibitorInput.schema';
import { EventRegistrationCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateWithoutMainExhibitorInput.schema';
import { EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpsertWithWhereUniqueWithoutMainExhibitorInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(
          () => EventRegistrationUpdateWithoutMainExhibitorInputObjectSchema,
        ),
        z.lazy(
          () =>
            EventRegistrationUncheckedUpdateWithoutMainExhibitorInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(
          () => EventRegistrationCreateWithoutMainExhibitorInputObjectSchema,
        ),
        z.lazy(
          () =>
            EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationUpsertWithWhereUniqueWithoutMainExhibitorInputObjectSchema =
  Schema;
