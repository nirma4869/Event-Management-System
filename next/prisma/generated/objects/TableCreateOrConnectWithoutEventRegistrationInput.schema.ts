import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';
import { TableCreateWithoutEventRegistrationInputObjectSchema } from './TableCreateWithoutEventRegistrationInput.schema';
import { TableUncheckedCreateWithoutEventRegistrationInputObjectSchema } from './TableUncheckedCreateWithoutEventRegistrationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateOrConnectWithoutEventRegistrationInput> =
  z
    .object({
      where: z.lazy(() => TableWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => TableCreateWithoutEventRegistrationInputObjectSchema),
        z.lazy(
          () => TableUncheckedCreateWithoutEventRegistrationInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const TableCreateOrConnectWithoutEventRegistrationInputObjectSchema =
  Schema;
