import { z } from 'zod';
import { UserCreateWithoutEventRegistrationsInputObjectSchema } from './UserCreateWithoutEventRegistrationsInput.schema';
import { UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutEventRegistrationsInput.schema';
import { UserCreateOrConnectWithoutEventRegistrationsInputObjectSchema } from './UserCreateOrConnectWithoutEventRegistrationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutEventRegistrationsInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutEventRegistrationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => UserCreateOrConnectWithoutEventRegistrationsInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutEventRegistrationsInputObjectSchema =
  Schema;
