import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourneyTeamsUpdateManyMutationInputSchema'
import { TourneyTeamsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourneyTeamsUncheckedUpdateManyInputSchema'
import { TourneyTeamsWhereInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereInputSchema'

export const TourneyTeamsUpdateManyArgsSchema: z.ZodType<Prisma.TourneyTeamsUpdateManyArgs> = z.object({
  data: z.union([ TourneyTeamsUpdateManyMutationInputSchema,TourneyTeamsUncheckedUpdateManyInputSchema ]),
  where: TourneyTeamsWhereInputSchema.optional(),
}).strict() ;

export default TourneyTeamsUpdateManyArgsSchema;
