import { z } from 'zod';
import { TableCreateWithoutEventRegistrationInputObjectSchema } from './TableCreateWithoutEventRegistrationInput.schema';
import { TableUncheckedCreateWithoutEventRegistrationInputObjectSchema } from './TableUncheckedCreateWithoutEventRegistrationInput.schema';
import { TableCreateOrConnectWithoutEventRegistrationInputObjectSchema } from './TableCreateOrConnectWithoutEventRegistrationInput.schema';
import { TableUpsertWithoutEventRegistrationInputObjectSchema } from './TableUpsertWithoutEventRegistrationInput.schema';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';
import { TableUpdateWithoutEventRegistrationInputObjectSchema } from './TableUpdateWithoutEventRegistrationInput.schema';
import { TableUncheckedUpdateWithoutEventRegistrationInputObjectSchema } from './TableUncheckedUpdateWithoutEventRegistrationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpdateOneRequiredWithoutEventRegistrationNestedInput> =
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
      upsert: z
        .lazy(() => TableUpsertWithoutEventRegistrationInputObjectSchema)
        .optional(),
      connect: z.lazy(() => TableWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => TableUpdateWithoutEventRegistrationInputObjectSchema),
          z.lazy(
            () => TableUncheckedUpdateWithoutEventRegistrationInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const TableUpdateOneRequiredWithoutEventRegistrationNestedInputObjectSchema =
  Schema;
