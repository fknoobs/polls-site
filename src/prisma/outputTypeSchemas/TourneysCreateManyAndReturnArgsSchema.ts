import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysCreateManyInputSchema } from '../inputTypeSchemas/TourneysCreateManyInputSchema'

export const TourneysCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TourneysCreateManyAndReturnArgs> = z.object({
  data: z.union([ TourneysCreateManyInputSchema,TourneysCreateManyInputSchema.array() ]),
}).strict() ;

export default TourneysCreateManyAndReturnArgsSchema;
