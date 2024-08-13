import { z } from 'zod';
import { EventRegistrationCreateWithoutEventInputObjectSchema } from './EventRegistrationCreateWithoutEventInput.schema';
import { EventRegistrationUncheckedCreateWithoutEventInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutEventInput.schema';
import { EventRegistrationCreateOrConnectWithoutEventInputObjectSchema } from './EventRegistrationCreateOrConnectWithoutEventInput.schema';
import { EventRegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './EventRegistrationUpsertWithWhereUniqueWithoutEventInput.schema';
import { EventRegistrationCreateManyEventInputEnvelopeObjectSchema } from './EventRegistrationCreateManyEventInputEnvelope.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './EventRegistrationUpdateWithWhereUniqueWithoutEventInput.schema';
import { EventRegistrationUpdateManyWithWhereWithoutEventInputObjectSchema } from './EventRegistrationUpdateManyWithWhereWithoutEventInput.schema';
import { EventRegistrationScalarWhereInputObjectSchema } from './EventRegistrationScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUncheckedUpdateManyWithoutEventNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventRegistrationCreateWithoutEventInputObjectSchema),
          z
            .lazy(() => EventRegistrationCreateWithoutEventInputObjectSchema)
            .array(),
          z.lazy(
            () => EventRegistrationUncheckedCreateWithoutEventInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUncheckedCreateWithoutEventInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => EventRegistrationCreateOrConnectWithoutEventInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationCreateOrConnectWithoutEventInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              EventRegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUpsertWithWhereUniqueWithoutEventInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => EventRegistrationCreateManyEventInputEnvelopeObjectSchema)
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
              EventRegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUpdateWithWhereUniqueWithoutEventInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              EventRegistrationUpdateManyWithWhereWithoutEventInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EventRegistrationUpdateManyWithWhereWithoutEventInputObjectSchema,
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

export const EventRegistrationUncheckedUpdateManyWithoutEventNestedInputObjectSchema =
  Schema;
