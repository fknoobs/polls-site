import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileIncludeSchema } from '../inputTypeSchemas/SteamProfileIncludeSchema'
import { SteamProfileWhereUniqueInputSchema } from '../inputTypeSchemas/SteamProfileWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SteamProfileSelectSchema: z.ZodType<Prisma.SteamProfileSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  steamId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SteamProfileFindUniqueArgsSchema: z.ZodType<Prisma.SteamProfileFindUniqueArgs> = z.object({
  select: SteamProfileSelectSchema.optional(),
  include: z.lazy(() => SteamProfileIncludeSchema).optional(),
  where: SteamProfileWhereUniqueInputSchema,
}).strict() ;

export default SteamProfileFindUniqueArgsSchema;
