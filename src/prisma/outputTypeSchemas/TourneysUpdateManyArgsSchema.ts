import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourneysUpdateManyMutationInputSchema'
import { TourneysUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourneysUncheckedUpdateManyInputSchema'
import { TourneysWhereInputSchema } from '../inputTypeSchemas/TourneysWhereInputSchema'

export const TourneysUpdateManyArgsSchema: z.ZodType<Prisma.TourneysUpdateManyArgs> = z.object({
  data: z.union([ TourneysUpdateManyMutationInputSchema,TourneysUncheckedUpdateManyInputSchema ]),
  where: TourneysWhereInputSchema.optional(),
}).strict() ;

export default TourneysUpdateManyArgsSchema;
