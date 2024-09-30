import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserWhereInputSchema } from '../inputTypeSchemas/SteamUserWhereInputSchema'

export const SteamUserDeleteManyArgsSchema: z.ZodType<Prisma.SteamUserDeleteManyArgs> = z.object({
  where: SteamUserWhereInputSchema.optional(),
}).strict() ;

export default SteamUserDeleteManyArgsSchema;
