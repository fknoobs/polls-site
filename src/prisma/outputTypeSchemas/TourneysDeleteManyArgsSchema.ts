import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysWhereInputSchema } from '../inputTypeSchemas/TourneysWhereInputSchema'

export const TourneysDeleteManyArgsSchema: z.ZodType<Prisma.TourneysDeleteManyArgs> = z.object({
  where: TourneysWhereInputSchema.optional(),
}).strict() ;

export default TourneysDeleteManyArgsSchema;
