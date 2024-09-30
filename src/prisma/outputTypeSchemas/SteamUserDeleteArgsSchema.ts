import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserIncludeSchema } from '../inputTypeSchemas/SteamUserIncludeSchema'
import { SteamUserWhereUniqueInputSchema } from '../inputTypeSchemas/SteamUserWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SteamUserSelectSchema: z.ZodType<Prisma.SteamUserSelect> = z.object({
  steamId: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SteamUserDeleteArgsSchema: z.ZodType<Prisma.SteamUserDeleteArgs> = z.object({
  select: SteamUserSelectSchema.optional(),
  include: SteamUserIncludeSchema.optional(),
  where: SteamUserWhereUniqueInputSchema,
}).strict() ;

export default SteamUserDeleteArgsSchema;
