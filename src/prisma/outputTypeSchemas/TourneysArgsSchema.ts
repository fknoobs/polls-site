import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysSelectSchema } from '../inputTypeSchemas/TourneysSelectSchema';
import { TourneysIncludeSchema } from '../inputTypeSchemas/TourneysIncludeSchema';

export const TourneysArgsSchema: z.ZodType<Prisma.TourneysDefaultArgs> = z.object({
  select: z.lazy(() => TourneysSelectSchema).optional(),
  include: z.lazy(() => TourneysIncludeSchema).optional(),
}).strict();

export default TourneysArgsSchema;
