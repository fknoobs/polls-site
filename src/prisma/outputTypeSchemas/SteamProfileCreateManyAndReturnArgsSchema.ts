import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileCreateManyInputSchema } from '../inputTypeSchemas/SteamProfileCreateManyInputSchema'

export const SteamProfileCreateManyAndReturnArgsSchema: z.ZodType<Prisma.SteamProfileCreateManyAndReturnArgs> = z.object({
  data: z.union([ SteamProfileCreateManyInputSchema,SteamProfileCreateManyInputSchema.array() ]),
}).strict() ;

export default SteamProfileCreateManyAndReturnArgsSchema;
