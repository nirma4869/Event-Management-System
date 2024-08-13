import { z } from 'zod';

export const eventStatusSchema = z.enum(['DRAFT', 'OPEN', 'ONGOING', 'CLOSED']);
