import { z } from 'zod';
import { EventRegistrationCreateWithoutEventInputObjectSchema } from './EventRegistrationCreateWithoutEventInput.schema';
import { EventRegistrationUncheckedCreateWithoutEventInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutEventInput.schema';
import { EventRegistrationCreateOrConnectWithoutEventInputObjectSchema } from './EventRegistrationCreateOrConnectWithoutEventInput.schema';
import { EventRegistrationCreateManyEventInputEnvelopeObjectSchema } from './EventRegistrationCreateManyEventInputEnvelope.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationCreateNestedManyWithoutEventInput> =
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
      createMany: z
        .lazy(() => EventRegistrationCreateManyEventInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
          z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EventRegistrationCreateNestedManyWithoutEventInputObjectSchema =
  Schema;
