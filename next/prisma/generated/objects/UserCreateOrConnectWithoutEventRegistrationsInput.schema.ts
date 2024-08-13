import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutEventRegistrationsInputObjectSchema } from './UserCreateWithoutEventRegistrationsInput.schema';
import { UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutEventRegistrationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutEventRegistrationsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutEventRegistrationsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutEventRegistrationsInputObjectSchema =
  Schema;
