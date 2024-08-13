import { z } from 'zod';
import { TableUpdateWithoutEventRegistrationInputObjectSchema } from './TableUpdateWithoutEventRegistrationInput.schema';
import { TableUncheckedUpdateWithoutEventRegistrationInputObjectSchema } from './TableUncheckedUpdateWithoutEventRegistrationInput.schema';
import { TableCreateWithoutEventRegistrationInputObjectSchema } from './TableCreateWithoutEventRegistrationInput.schema';
import { TableUncheckedCreateWithoutEventRegistrationInputObjectSchema } from './TableUncheckedCreateWithoutEventRegistrationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpsertWithoutEventRegistrationInput> = z
  .object({
    update: z.union([
      z.lazy(() => TableUpdateWithoutEventRegistrationInputObjectSchema),
      z.lazy(
        () => TableUncheckedUpdateWithoutEventRegistrationInputObjectSchema,
      ),
    ]),
    create: z.union([
      z.lazy(() => TableCreateWithoutEventRegistrationInputObjectSchema),
      z.lazy(
        () => TableUncheckedCreateWithoutEventRegistrationInputObjectSchema,
      ),
    ]),
  })
  .strict();

export const TableUpsertWithoutEventRegistrationInputObjectSchema = Schema;
