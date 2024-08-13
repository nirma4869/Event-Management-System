import { z } from 'zod';
import { TableWhereInputObjectSchema } from './objects/TableWhereInput.schema';

export const TableDeleteManySchema = z.object({
  where: TableWhereInputObjectSchema.optional(),
});
