import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserUpdateManyMutationInputSchema } from '../inputTypeSchemas/SteamUserUpdateManyMutationInputSchema'
import { SteamUserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SteamUserUncheckedUpdateManyInputSchema'
import { SteamUserWhereInputSchema } from '../inputTypeSchemas/SteamUserWhereInputSchema'

export const SteamUserUpdateManyArgsSchema: z.ZodType<Prisma.SteamUserUpdateManyArgs> = z.object({
  data: z.union([ SteamUserUpdateManyMutationInputSchema,SteamUserUncheckedUpdateManyInputSchema ]),
  where: SteamUserWhereInputSchema.optional(),
}).strict() ;

export default SteamUserUpdateManyArgsSchema;
