import { z } from 'zod';
import { EventRegistrationCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateWithoutMainExhibitorInput.schema';
import { EventRegistrationUncheckedCreateWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutMainExhibitorInput.schema';
import { EventRegistrationCreateOrConnectWithoutMainExhibitorInputObjectSchema } from './EventRegistrationCreateOrConnectWithoutMainExhibitorInput.schema';
import { EventRegistrationUpsertWithWhereUniqueWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUpsertWithWhereUniqueWithoutMainExhibitorInput.schema';
import { EventRegistrationCreateManyMainExhibitorInputEnvelopeObjectSchema } from './EventRegistrationCreateManyMainExhibitorInputEnvelope.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithWhereUniqueWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUpdateWithWhereUniqueWithoutMainExhibitorInput.schema';
import { EventRegistrationUpdateManyWithWhereWithoutMainExhibitorInputObjectSchema } from './EventRegistrationUpdateManyWithWhereWithoutMainExhibitorInput.schema';
import { EventRegistrationScalarWhereInputObjectSchema } from './EventRegistrationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUpdateManyWithoutMainExhibitorNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              EventRegistrationUpsertWithWhereUniqueWithoutMainExhibitorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUpsertWithWhereUniqueWithoutMainExhibitorInputObjectSchema,
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
      set: z
        .union([
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              EventRegistrationUpdateWithWhereUniqueWithoutMainExhibitorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUpdateWithWhereUniqueWithoutMainExhibitorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EventRegistrationUpdateManyWithWhereWithoutMainExhibitorInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUpdateManyWithWhereWithoutMainExhibitorInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => EventRegistrationScalarWhereInputObjectSchema),
          z.lazy(() => EventRegistrationScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EventRegistrationUpdateManyWithoutMainExhibitorNestedInputObjectSchema =
  Schema;
