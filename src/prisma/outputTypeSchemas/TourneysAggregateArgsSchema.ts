import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysWhereInputSchema } from '../inputTypeSchemas/TourneysWhereInputSchema'
import { TourneysOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourneysOrderByWithRelationInputSchema'
import { TourneysWhereUniqueInputSchema } from '../inputTypeSchemas/TourneysWhereUniqueInputSchema'

export const TourneysAggregateArgsSchema: z.ZodType<Prisma.TourneysAggregateArgs> = z.object({
  where: TourneysWhereInputSchema.optional(),
  orderBy: z.union([ TourneysOrderByWithRelationInputSchema.array(),TourneysOrderByWithRelationInputSchema ]).optional(),
  cursor: TourneysWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourneysAggregateArgsSchema;
