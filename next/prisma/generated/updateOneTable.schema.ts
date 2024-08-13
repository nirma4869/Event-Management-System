import { z } from 'zod';
import { TableUpdateInputObjectSchema } from './objects/TableUpdateInput.schema';
import { TableUncheckedUpdateInputObjectSchema } from './objects/TableUncheckedUpdateInput.schema';
import { TableWhereUniqueInputObjectSchema } from './objects/TableWhereUniqueInput.schema';

export const TableUpdateOneSchema = z.object({
  data: z.union([
    TableUpdateInputObjectSchema,
    TableUncheckedUpdateInputObjectSchema,
  ]),
  where: TableWhereUniqueInputObjectSchema,
});
