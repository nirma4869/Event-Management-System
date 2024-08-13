import { z } from 'zod';
import { EventRegistrationCreateWithoutTableInputObjectSchema } from './EventRegistrationCreateWithoutTableInput.schema';
import { EventRegistrationUncheckedCreateWithoutTableInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutTableInput.schema';
import { EventRegistrationCreateOrConnectWithoutTableInputObjectSchema } from './EventRegistrationCreateOrConnectWithoutTableInput.schema';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationUncheckedCreateNestedOneWithoutTableInput> =
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
      connect: z
        .lazy(() => EventRegistrationWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const EventRegistrationUncheckedCreateNestedOneWithoutTableInputObjectSchema =
  Schema;
