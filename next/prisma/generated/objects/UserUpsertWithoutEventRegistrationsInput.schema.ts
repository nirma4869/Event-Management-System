import { z } from 'zod';
import { UserUpdateWithoutEventRegistrationsInputObjectSchema } from './UserUpdateWithoutEventRegistrationsInput.schema';
import { UserUncheckedUpdateWithoutEventRegistrationsInputObjectSchema } from './UserUncheckedUpdateWithoutEventRegistrationsInput.schema';
import { UserCreateWithoutEventRegistrationsInputObjectSchema } from './UserCreateWithoutEventRegistrationsInput.schema';
import { UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema } from './UserUncheckedCreateWithoutEventRegistrationsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutEventRegistrationsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutEventRegistrationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedUpdateWithoutEventRegistrationsInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutEventRegistrationsInputObjectSchema),
      z.lazy(
        () => UserUncheckedCreateWithoutEventRegistrationsInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const UserUpsertWithoutEventRegistrationsInputObjectSchema = Schema;
