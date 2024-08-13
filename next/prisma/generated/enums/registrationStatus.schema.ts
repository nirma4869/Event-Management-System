import { z } from 'zod';

export const registrationStatusSchema = z.enum(['PENDING', 'ACCEPTED']);
