import { z } from 'zod';
import { TableOrderByWithRelationInputObjectSchema } from './objects/TableOrderByWithRelationInput.schema';
import { TableWhereInputObjectSchema } from './objects/TableWhereInput.schema';
import { TableWhereUniqueInputObjectSchema } from './objects/TableWhereUniqueInput.schema';
import { TableCountAggregateInputObjectSchema } from './objects/TableCountAggregateInput.schema';
import { TableMinAggregateInputObjectSchema } from './objects/TableMinAggregateInput.schema';
import { TableMaxAggregateInputObjectSchema } from './objects/TableMaxAggregateInput.schema';
import { TableAvgAggregateInputObjectSchema } from './objects/TableAvgAggregateInput.schema';
import { TableSumAggregateInputObjectSchema } from './objects/TableSumAggregateInput.schema';

export const TableAggregateSchema = z.object({
  orderBy: z
    .union([
      TableOrderByWithRelationInputObjectSchema,
      TableOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: TableWhereInputObjectSchema.optional(),
  cursor: TableWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z
    .union([z.literal(true), TableCountAggregateInputObjectSchema])
    .optional(),
  _min: TableMinAggregateInputObjectSchema.optional(),
  _max: TableMaxAggregateInputObjectSchema.optional(),
  _avg: TableAvgAggregateInputObjectSchema.optional(),
  _sum: TableSumAggregateInputObjectSchema.optional(),
});
