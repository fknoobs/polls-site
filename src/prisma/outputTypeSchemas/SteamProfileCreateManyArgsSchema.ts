import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileCreateManyInputSchema } from '../inputTypeSchemas/SteamProfileCreateManyInputSchema'

export const SteamProfileCreateManyArgsSchema: z.ZodType<Prisma.SteamProfileCreateManyArgs> = z.object({
  data: z.union([ SteamProfileCreateManyInputSchema,SteamProfileCreateManyInputSchema.array() ]),
}).strict() ;

export default SteamProfileCreateManyArgsSchema;
