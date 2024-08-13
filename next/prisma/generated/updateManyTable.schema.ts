import { z } from 'zod';
import { TableUpdateManyMutationInputObjectSchema } from './objects/TableUpdateManyMutationInput.schema';
import { TableWhereInputObjectSchema } from './objects/TableWhereInput.schema';

export const TableUpdateManySchema = z.object({
  data: TableUpdateManyMutationInputObjectSchema,
  where: TableWhereInputObjectSchema.optional(),
});
