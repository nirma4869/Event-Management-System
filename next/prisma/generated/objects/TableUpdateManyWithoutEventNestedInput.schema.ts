import { z } from 'zod';
import { TableCreateWithoutEventInputObjectSchema } from './TableCreateWithoutEventInput.schema';
import { TableUncheckedCreateWithoutEventInputObjectSchema } from './TableUncheckedCreateWithoutEventInput.schema';
import { TableCreateOrConnectWithoutEventInputObjectSchema } from './TableCreateOrConnectWithoutEventInput.schema';
import { TableUpsertWithWhereUniqueWithoutEventInputObjectSchema } from './TableUpsertWithWhereUniqueWithoutEventInput.schema';
import { TableCreateManyEventInputEnvelopeObjectSchema } from './TableCreateManyEventInputEnvelope.schema';
import { TableWhereUniqueInputObjectSchema } from './TableWhereUniqueInput.schema';
import { TableUpdateWithWhereUniqueWithoutEventInputObjectSchema } from './TableUpdateWithWhereUniqueWithoutEventInput.schema';
import { TableUpdateManyWithWhereWithoutEventInputObjectSchema } from './TableUpdateManyWithWhereWithoutEventInput.schema';
import { TableScalarWhereInputObjectSchema } from './TableScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.TableUpdateManyWithoutEventNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => TableCreateWithoutEventInputObjectSchema),
        z.lazy(() => TableCreateWithoutEventInputObjectSchema).array(),
        z.lazy(() => TableUncheckedCreateWithoutEventInputObjectSchema),
        z.lazy(() => TableUncheckedCreateWithoutEventInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => TableCreateOrConnectWithoutEventInputObjectSchema),
        z.lazy(() => TableCreateOrConnectWithoutEventInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => TableUpsertWithWhereUniqueWithoutEventInputObjectSchema),
        z
          .lazy(() => TableUpsertWithWhereUniqueWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    createMany: z
      .lazy(() => TableCreateManyEventInputEnvelopeObjectSchema)
      .optional(),
    set: z
      .union([
        z.lazy(() => TableWhereUniqueInputObjectSchema),
        z.lazy(() => TableWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => TableWhereUniqueInputObjectSchema),
        z.lazy(() => TableWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => TableWhereUniqueInputObjectSchema),
        z.lazy(() => TableWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => TableWhereUniqueInputObjectSchema),
        z.lazy(() => TableWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => TableUpdateWithWhereUniqueWithoutEventInputObjectSchema),
        z
          .lazy(() => TableUpdateWithWhereUniqueWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => TableUpdateManyWithWhereWithoutEventInputObjectSchema),
        z
          .lazy(() => TableUpdateManyWithWhereWithoutEventInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => TableScalarWhereInputObjectSchema),
        z.lazy(() => TableScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const TableUpdateManyWithoutEventNestedInputObjectSchema = Schema;
