import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneysCreateManyInputSchema: z.ZodType<Prisma.TourneysCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  slug: z.string().optional().nullable(),
  type: z.number().int().optional(),
  description: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional().nullable(),
  registrationsOpen: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  userId: z.string().optional()
}).strict();

export default TourneysCreateManyInputSchema;
