import { z } from 'zod';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutOrganizedEventsInputObjectSchema } from './UserCreateWithoutOrganizedEventsInput.schema';
import { UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizedEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOrganizedEventsInput> =
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutOrganizedEventsInputObjectSchema),
        z.lazy(
          () => UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserCreateOrConnectWithoutOrganizedEventsInputObjectSchema =
  Schema;
