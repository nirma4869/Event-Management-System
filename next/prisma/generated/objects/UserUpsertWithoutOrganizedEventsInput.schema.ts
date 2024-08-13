import { z } from 'zod';
import { UserUpdateWithoutOrganizedEventsInputObjectSchema } from './UserUpdateWithoutOrganizedEventsInput.schema';
import { UserUncheckedUpdateWithoutOrganizedEventsInputObjectSchema } from './UserUncheckedUpdateWithoutOrganizedEventsInput.schema';
import { UserCreateWithoutOrganizedEventsInputObjectSchema } from './UserCreateWithoutOrganizedEventsInput.schema';
import { UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema } from './UserUncheckedCreateWithoutOrganizedEventsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutOrganizedEventsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOrganizedEventsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOrganizedEventsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOrganizedEventsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOrganizedEventsInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutOrganizedEventsInputObjectSchema = Schema;
