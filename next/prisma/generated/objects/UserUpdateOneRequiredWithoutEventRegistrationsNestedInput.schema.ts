import { z } from 'zod';
import { UserCreateWithoutEventRegistrationsInputObjectSchema } from './UserCreateWithoutEventRegistrationsInput.schema';
import { UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutEventRegistrationsInput.schema';
import { UserCreateOrConnectWithoutEventRegistrationsInputObjectSchema } from './UserCreateOrConnectWithoutEventRegistrationsInput.schema';
import { UserUpsertWithoutEventRegistrationsInputObjectSchema } from './UserUpsertWithoutEventRegistrationsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutEventRegistrationsInputObjectSchema } from './UserUpdateWithoutEventRegistrationsInput.schema';
import { UserUncheckedUpdateWithoutEventRegistrationsInputObjectSchema } from './UserUncheckedUpdateWithoutEventRegistrationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEventRegistrationsNestedInput> =
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
      upsert: z
        .lazy(() => UserUpsertWithoutEventRegistrationsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutEventRegistrationsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutEventRegistrationsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutEventRegistrationsNestedInputObjectSchema =
  Schema;
