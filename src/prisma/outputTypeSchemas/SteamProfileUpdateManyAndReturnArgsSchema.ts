import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileUpdateManyMutationInputSchema } from '../inputTypeSchemas/SteamProfileUpdateManyMutationInputSchema'
import { SteamProfileUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/SteamProfileUncheckedUpdateManyInputSchema'
import { SteamProfileWhereInputSchema } from '../inputTypeSchemas/SteamProfileWhereInputSchema'

export const SteamProfileUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.SteamProfileUpdateManyAndReturnArgs> = z.object({
  data: z.union([ SteamProfileUpdateManyMutationInputSchema,SteamProfileUncheckedUpdateManyInputSchema ]),
  where: SteamProfileWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default SteamProfileUpdateManyAndReturnArgsSchema;
