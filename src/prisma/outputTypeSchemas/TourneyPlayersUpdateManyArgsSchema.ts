import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourneyPlayersUpdateManyMutationInputSchema'
import { TourneyPlayersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourneyPlayersUncheckedUpdateManyInputSchema'
import { TourneyPlayersWhereInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereInputSchema'

export const TourneyPlayersUpdateManyArgsSchema: z.ZodType<Prisma.TourneyPlayersUpdateManyArgs> = z.object({
  data: z.union([ TourneyPlayersUpdateManyMutationInputSchema,TourneyPlayersUncheckedUpdateManyInputSchema ]),
  where: TourneyPlayersWhereInputSchema.optional(),
}).strict() ;

export default TourneyPlayersUpdateManyArgsSchema;
