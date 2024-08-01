import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysCountOutputTypeSelectSchema } from './TourneysCountOutputTypeSelectSchema';

export const TourneysCountOutputTypeArgsSchema: z.ZodType<Prisma.TourneysCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TourneysCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TourneysCountOutputTypeSelectSchema;
