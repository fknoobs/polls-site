import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysCreateManyInputSchema } from '../inputTypeSchemas/TourneysCreateManyInputSchema'

export const TourneysCreateManyArgsSchema: z.ZodType<Prisma.TourneysCreateManyArgs> = z.object({
  data: z.union([ TourneysCreateManyInputSchema,TourneysCreateManyInputSchema.array() ]),
}).strict() ;

export default TourneysCreateManyArgsSchema;
