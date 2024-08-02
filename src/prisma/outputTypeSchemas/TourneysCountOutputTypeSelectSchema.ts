import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TourneysCountOutputTypeSelectSchema: z.ZodType<Prisma.TourneysCountOutputTypeSelect> = z.object({
  teams: z.boolean().optional(),
}).strict();

export default TourneysCountOutputTypeSelectSchema;
