import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserIncludeSchema } from '../inputTypeSchemas/SteamUserIncludeSchema'
import { SteamUserCreateInputSchema } from '../inputTypeSchemas/SteamUserCreateInputSchema'
import { SteamUserUncheckedCreateInputSchema } from '../inputTypeSchemas/SteamUserUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SteamUserSelectSchema: z.ZodType<Prisma.SteamUserSelect> = z.object({
  steamId: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SteamUserCreateArgsSchema: z.ZodType<Prisma.SteamUserCreateArgs> = z.object({
  select: SteamUserSelectSchema.optional(),
  include: z.lazy(() => SteamUserIncludeSchema).optional(),
  data: z.union([ SteamUserCreateInputSchema,SteamUserUncheckedCreateInputSchema ]),
}).strict() ;

export default SteamUserCreateArgsSchema;
