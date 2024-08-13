import { z } from 'zod';
import { TableWhereInputObjectSchema } from './objects/TableWhereInput.schema';
import { TableOrderByWithAggregationInputObjectSchema } from './objects/TableOrderByWithAggregationInput.schema';
import { TableScalarWhereWithAggregatesInputObjectSchema } from './objects/TableScalarWhereWithAggregatesInput.schema';
import { TableScalarFieldEnumSchema } from './enums/TableScalarFieldEnum.schema';

export const TableGroupBySchema = z.object({
  where: TableWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      TableOrderByWithAggregationInputObjectSchema,
      TableOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: TableScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(TableScalarFieldEnumSchema),
});
