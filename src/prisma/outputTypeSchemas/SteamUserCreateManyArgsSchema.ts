import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserCreateManyInputSchema } from '../inputTypeSchemas/SteamUserCreateManyInputSchema'

export const SteamUserCreateManyArgsSchema: z.ZodType<Prisma.SteamUserCreateManyArgs> = z.object({
  data: z.union([ SteamUserCreateManyInputSchema,SteamUserCreateManyInputSchema.array() ]),
}).strict() ;

export default SteamUserCreateManyArgsSchema;
