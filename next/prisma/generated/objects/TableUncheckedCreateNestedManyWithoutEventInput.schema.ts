import { z } from 'zod';
import { TableCreateWithoutEventInputObjectSchema } from './TableCreateWithoutEventInput.schema';
import { TableUncheckedCreateWithoutEventInputObjectSchema } from './TableUncheckedCreateWithoutEventInput.schema';
import { TableCreateOrConnectWithoutEventInputObjectSchema } from './TableCreateOrConnectWithoutEventInput.schema';
import { TableCreateManyEventInputEnvelopeObjectSchema } from './TableCreateManyEventInputEnvelope.schema';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUncheckedCreateNestedManyWithoutEventInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => TableCreateWithoutEventInputObjectSchema),
          z.lazy(() => TableCreateWithoutEventInputObjectSchema).array(),
          z.lazy(() => TableUncheckedCreateWithoutEventInputObjectSchema),
          z
            .lazy(() => TableUncheckedCreateWithoutEventInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => TableCreateOrConnectWithoutEventInputObjectSchema),
          z
            .lazy(() => TableCreateOrConnectWithoutEventInputObjectSchema)
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => TableCreateManyEventInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => TableWhereUniqueInputObjectSchema),
          z.lazy(() => TableWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const TableUncheckedCreateNestedManyWithoutEventInputObjectSchema =
  Schema;
