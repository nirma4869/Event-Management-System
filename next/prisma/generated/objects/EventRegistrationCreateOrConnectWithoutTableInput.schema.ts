import { z } from 'zod';
import { EventRegistrationWhereUniqueInputObjectSchema } from './EventRegistrationWhereUniqueInput.schema';
import { EventRegistrationCreateWithoutTableInputObjectSchema } from './EventRegistrationCreateWithoutTableInput.schema';
import { EventRegistrationUncheckedCreateWithoutTableInputObjectSchema } from './EventRegistrationUncheckedCreateWithoutTableInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EventRegistrationCreateOrConnectWithoutTableInput> =
  z
    .object({
      where: z.lazy(() => EventRegistrationWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => EventRegistrationCreateWithoutTableInputObjectSchema),
        z.lazy(
          () => EventRegistrationUncheckedCreateWithoutTableInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const EventRegistrationCreateOrConnectWithoutTableInputObjectSchema =
  Schema;
