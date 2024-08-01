import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneysCreateManyCreatedByInputSchema: z.ZodType<Prisma.TourneysCreateManyCreatedByInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  slug: z.string(),
  type: z.number().int().optional(),
  description: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().optional().nullable(),
  registrationsOpen: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default TourneysCreateManyCreatedByInputSchema;
