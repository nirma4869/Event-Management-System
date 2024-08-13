import { z } from 'zod';
import { TableCreateWithoutEventRegistrationInputObjectSchema } from './TableCreateWithoutEventRegistrationInput.schema';
import { TableUncheckedCreateWithoutEventRegistrationInputObjectSchema } from './TableUncheckedCreateWithoutEventRegistrationInput.schema';
import { TableCreateOrConnectWithoutEventRegistrationInputObjectSchema } from './TableCreateOrConnectWithoutEventRegistrationInput.schema';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableCreateNestedOneWithoutEventRegistrationInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TableCreateWithoutEventRegistrationInputObjectSchema),
          z.lazy(
            () => TableUncheckedCreateWithoutEventRegistrationInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () => TableCreateOrConnectWithoutEventRegistrationInputObjectSchema,
        )
        .optional(),
      connect: z.lazy(() => TableWhereUniqueInputObjectSchema).optional(),
    })
    .strict();

export const TableCreateNestedOneWithoutEventRegistrationInputObjectSchema =
  Schema;
