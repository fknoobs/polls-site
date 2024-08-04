import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileWhereInputSchema } from '../inputTypeSchemas/SteamProfileWhereInputSchema'

export const SteamProfileDeleteManyArgsSchema: z.ZodType<Prisma.SteamProfileDeleteManyArgs> = z.object({
  where: SteamProfileWhereInputSchema.optional(),
}).strict() ;

export default SteamProfileDeleteManyArgsSchema;
