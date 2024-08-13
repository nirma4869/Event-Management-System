import { z } from 'zod';
import { UserCreateWithoutOrganizedEventsInputObjectSchema } from './UserCreateWithoutOrganizedEventsInput.schema';
import { UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizedEventsInput.schema';
import { UserCreateOrConnectWithoutOrganizedEventsInputObjectSchema } from './UserCreateOrConnectWithoutOrganizedEventsInput.schema';
import { UserUpsertWithoutOrganizedEventsInputObjectSchema } from './UserUpsertWithoutOrganizedEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutOrganizedEventsInputObjectSchema } from './UserUpdateWithoutOrganizedEventsInput.schema';
import { UserUncheckedUpdateWithoutOrganizedEventsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizedEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOrganizedEventsNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutOrganizedEventsInputObjectSchema),
          z.lazy(
            () => UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutOrganizedEventsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutOrganizedEventsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => UserUpdateWithoutOrganizedEventsInputObjectSchema),
          z.lazy(
            () => UserUncheckedUpdateWithoutOrganizedEventsInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const UserUpdateOneRequiredWithoutOrganizedEventsNestedInputObjectSchema =
  Schema;
