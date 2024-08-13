import { z } from 'zod';
import { EventRegistrationCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateWithoutMainExhibitorInput.schema';
import { EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutMainExhibitorInput.schema';
import { EventRegistrationCreateOrConnectWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateOrConnectWithoutMainExhibitorInput.schema';
import { EventRegistrationCreateManyMainExhibitorInputEnvelopeObjectSchema } from './EventRegistrationCreateManyMainExhibitorInputEnvelope.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EventRegistrationCreateWithoutMainExhibitorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationCreateWithoutMainExhibitorInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EventRegistrationCreateOrConnectWithoutMainExhibitorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationCreateOrConnectWithoutMainExhibitorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () =>
            EventRegistrationCreateManyMainExhibitorInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EventRegistrationUncheckedCreateNestedManyWithoutMainExhibitorInputObjectSchema =
  Schema;
