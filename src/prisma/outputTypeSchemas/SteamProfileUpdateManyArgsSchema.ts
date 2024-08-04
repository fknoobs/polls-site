import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileUpdateManyMutationInputSchema } from '../inputTypeSchemas/SteamProfileUpdateManyMutationInputSchema'
import { SteamProfileUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SteamProfileUncheckedUpdateManyInputSchema'
import { SteamProfileWhereInputSchema } from '../inputTypeSchemas/SteamProfileWhereInputSchema'

export const SteamProfileUpdateManyArgsSchema: z.ZodType<Prisma.SteamProfileUpdateManyArgs> = z.object({
  data: z.union([ SteamProfileUpdateManyMutationInputSchema,SteamProfileUncheckedUpdateManyInputSchema ]),
  where: SteamProfileWhereInputSchema.optional(),
}).strict() ;

export default SteamProfileUpdateManyArgsSchema;
