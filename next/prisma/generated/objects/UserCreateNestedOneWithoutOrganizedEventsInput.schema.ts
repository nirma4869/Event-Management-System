import { z } from 'zod';
import { UserCreateWithoutOrganizedEventsInputObjectSchema } from './UserCreateWithoutOrganizedEventsInput.schema';
import { UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizedEventsInput.schema';
import { UserCreateOrConnectWithoutOrganizedEventsInputObjectSchema } from './UserCreateOrConnectWithoutOrganizedEventsInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutOrganizedEventsInput> =
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
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const UserCreateNestedOneWithoutOrganizedEventsInputObjectSchema =
  Schema;
