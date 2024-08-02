import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutTourneysInputSchema } from './UserCreateNestedOneWithoutTourneysInputSchema';

export const TourneysCreateWithoutTeamsInputSchema: z.ZodType<Prisma.TourneysCreateWithoutTeamsInput> = z.object({
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
  createdBy: z.lazy(() => UserCreateNestedOneWithoutTourneysInputSchema).optional()
}).strict();

export default TourneysCreateWithoutTeamsInputSchema;
