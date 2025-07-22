import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourneysUpdateManyMutationInputSchema'
import { TourneysUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourneysUncheckedUpdateManyInputSchema'
import { TourneysWhereInputSchema } from '../inputTypeSchemas/TourneysWhereInputSchema'

export const TourneysUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TourneysUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TourneysUpdateManyMutationInputSchema,TourneysUncheckedUpdateManyInputSchema ]),
  where: TourneysWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourneysUpdateManyAndReturnArgsSchema;
