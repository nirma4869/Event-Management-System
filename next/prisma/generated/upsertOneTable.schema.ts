import { z } from 'zod';
import { TableWhereUniqueInputObjectSchema } from './objects/TableWhereUniqueInput.schema';
import { TableCreateInputObjectSchema } from './objects/TableCreateInput.schema';
import { TableUncheckedCreateInputObjectSchema } from './objects/TableUncheckedCreateInput.schema';
import { TableUpdateInputObjectSchema } from './objects/TableUpdateInput.schema';
import { TableUncheckedUpdateInputObjectSchema } from './objects/TableUncheckedUpdateInput.schema';

export const TableUpsertSchema = z.object({
  where: TableWhereUniqueInputObjectSchema,
  create: z.union([
    TableCreateInputObjectSchema,
    TableUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    TableUpdateInputObjectSchema,
    TableUncheckedUpdateInputObjectSchema,
  ]),
});
