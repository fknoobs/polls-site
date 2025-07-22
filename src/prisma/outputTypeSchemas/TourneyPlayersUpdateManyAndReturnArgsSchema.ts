import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersUpdateManyMutationInputSchema } from '../inputTypeSchemas/TourneyPlayersUpdateManyMutationInputSchema'
import { TourneyPlayersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TourneyPlayersUncheckedUpdateManyInputSchema'
import { TourneyPlayersWhereInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereInputSchema'

export const TourneyPlayersUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TourneyPlayersUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TourneyPlayersUpdateManyMutationInputSchema,TourneyPlayersUncheckedUpdateManyInputSchema ]),
  where: TourneyPlayersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourneyPlayersUpdateManyAndReturnArgsSchema;
