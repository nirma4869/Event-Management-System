import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUpdateWithoutMainExhibitorInput.schema';
import { EventRegistrationUncheckedUpdateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedUpdateWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpdateWithWhereUniqueWithoutMainExhibitorInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(
          () => EventRegistrationUpdateWithoutMainExhibitorInputObjectSchema,
        ),
        z.lazy(
          () =>
            EventRegistrationUncheckedUpdateWithoutMainExhibitorInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationUpdateWithWhereUniqueWithoutMainExhibitorInputObjectSchema =
  Schema;
