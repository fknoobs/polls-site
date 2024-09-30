import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserCreateManyInputSchema } from '../inputTypeSchemas/SteamUserCreateManyInputSchema'

export const SteamUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SteamUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ SteamUserCreateManyInputSchema,SteamUserCreateManyInputSchema.array() ]),
}).strict() ;

export default SteamUserCreateManyAndReturnArgsSchema;
