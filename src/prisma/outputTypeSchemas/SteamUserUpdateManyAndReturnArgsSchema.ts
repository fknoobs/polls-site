import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserUpdateManyMutationInputSchema } from '../inputTypeSchemas/SteamUserUpdateManyMutationInputSchema'
import { SteamUserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SteamUserUncheckedUpdateManyInputSchema'
import { SteamUserWhereInputSchema } from '../inputTypeSchemas/SteamUserWhereInputSchema'

export const SteamUserUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SteamUserUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SteamUserUpdateManyMutationInputSchema,SteamUserUncheckedUpdateManyInputSchema ]),
  where: SteamUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SteamUserUpdateManyAndReturnArgsSchema;
