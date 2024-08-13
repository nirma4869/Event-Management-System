import { z } from 'zod';
import { EventRegistrationCreateWithoutTableInputObjectSchema } from './EventRegistrationCreateWithoutTableInput.schema';
import { EventRegistrationUncheckedCreateWithoutTableInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutTableInput.schema';
import { EventRegistrationCreateOrConnectWithoutTableInputObjectSchema } from './EventRegistrationCreateOrConnectWithoutTableInput.schema';
import { EventRegistrationUpsertWithoutTableInputObjectSchema } from './EventRegistrationUpsertWithoutTableInput.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationUpdateWithoutTableInputObjectSchema } from './EventRegistrationUpdateWithoutTableInput.schema';
import { EventRegistrationUncheckedUpdateWithoutTableInputObjectSchema } from './EventRegistrationUncheckedUpdateWithoutTableInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUncheckedUpdateOneWithoutTableNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => EventRegistrationCreateWithoutTableInputObjectSchema),
          z.lazy(
            () => EventRegistrationUncheckedCreateWithoutTableInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => EventRegistrationCreateOrConnectWithoutTableInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(() => EventRegistrationUpsertWithoutTableInputObjectSchema)
        .optional(),
      disconnect: z.boolean().optional(),
      delete: z.boolean().optional(),
      connect: z
        .lazy(() => EventRegistrationWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(() => EventRegistrationUpdateWithoutTableInputObjectSchema),
          z.lazy(
            () => EventRegistrationUncheckedUpdateWithoutTableInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const EventRegistrationUncheckedUpdateOneWithoutTableNestedInputObjectSchema =
  Schema;
