import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourneyTeamsUpdateManyMutationInputSchema'
import { TourneyTeamsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourneyTeamsUncheckedUpdateManyInputSchema'
import { TourneyTeamsWhereInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereInputSchema'

export const TourneyTeamsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TourneyTeamsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TourneyTeamsUpdateManyMutationInputSchema,TourneyTeamsUncheckedUpdateManyInputSchema ]),
  where: TourneyTeamsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourneyTeamsUpdateManyAndReturnArgsSchema;
