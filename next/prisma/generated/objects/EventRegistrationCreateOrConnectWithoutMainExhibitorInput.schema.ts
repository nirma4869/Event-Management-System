import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateWithoutMainExhibitorInput.schema';
import { EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutMainExhibitorInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationCreateOrConnectWithoutMainExhibitorInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
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

export const EventRegistrationCreateOrConnectWithoutMainExhibitorInputObjectSchema =
  Schema;
