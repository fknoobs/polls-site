import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileArgsSchema } from "../outputTypeSchemas/SteamProfileArgsSchema"
import { AccountFindManyArgsSchema } from "../outputTypeSchemas/AccountFindManyArgsSchema"
import { SessionFindManyArgsSchema } from "../outputTypeSchemas/SessionFindManyArgsSchema"
import { AuthenticatorFindManyArgsSchema } from "../outputTypeSchemas/AuthenticatorFindManyArgsSchema"
import { SteamUserArgsSchema } from "../outputTypeSchemas/SteamUserArgsSchema"
import { TourneysFindManyArgsSchema } from "../outputTypeSchemas/TourneysFindManyArgsSchema"
import { UserCountOutputTypeArgsSchema } from "../outputTypeSchemas/UserCountOutputTypeArgsSchema"

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  steam: z.union([z.boolean(),z.lazy(() => SteamProfileArgsSchema)]).optional(),
  accounts: z.union([z.boolean(),z.lazy(() => AccountFindManyArgsSchema)]).optional(),
  sessions: z.union([z.boolean(),z.lazy(() => SessionFindManyArgsSchema)]).optional(),
  Authenticator: z.union([z.boolean(),z.lazy(() => AuthenticatorFindManyArgsSchema)]).optional(),
  steamUser: z.union([z.boolean(),z.lazy(() => SteamUserArgsSchema)]).optional(),
  Tourneys: z.union([z.boolean(),z.lazy(() => TourneysFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default UserIncludeSchema;
