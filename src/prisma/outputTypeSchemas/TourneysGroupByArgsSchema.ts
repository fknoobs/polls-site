import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysWhereInputSchema } from '../inputTypeSchemas/TourneysWhereInputSchema'
import { TourneysOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TourneysOrderByWithAggregationInputSchema'
import { TourneysScalarFieldEnumSchema } from '../inputTypeSchemas/TourneysScalarFieldEnumSchema'
import { TourneysScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TourneysScalarWhereWithAggregatesInputSchema'

export const TourneysGroupByArgsSchema: z.ZodType<Prisma.TourneysGroupByArgs> = z.object({
  where: TourneysWhereInputSchema.optional(),
  orderBy: z.union([ TourneysOrderByWithAggregationInputSchema.array(),TourneysOrderByWithAggregationInputSchema ]).optional(),
  by: TourneysScalarFieldEnumSchema.array(),
  having: TourneysScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourneysGroupByArgsSchema;
