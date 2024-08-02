import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProfileIncludeSchema } from '../inputTypeSchemas/ProfileIncludeSchema'
import { ProfileCreateInputSchema } from '../inputTypeSchemas/ProfileCreateInputSchema'
import { ProfileUncheckedCreateInputSchema } from '../inputTypeSchemas/ProfileUncheckedCreateInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProfileSelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  displayName: z.boolean().optional(),
  steamId: z.boolean().optional(),
  steamProfile: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const ProfileCreateArgsSchema: z.ZodType<Prisma.ProfileCreateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]),
}).strict() ;

export default ProfileCreateArgsSchema;
