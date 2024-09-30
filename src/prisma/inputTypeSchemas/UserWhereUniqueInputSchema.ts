import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { SteamProfileNullableRelationFilterSchema } from './SteamProfileNullableRelationFilterSchema';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';
import { AccountListRelationFilterSchema } from './AccountListRelationFilterSchema';
import { SessionListRelationFilterSchema } from './SessionListRelationFilterSchema';
import { AuthenticatorListRelationFilterSchema } from './AuthenticatorListRelationFilterSchema';
import { SteamUserNullableRelationFilterSchema } from './SteamUserNullableRelationFilterSchema';
import { SteamUserWhereInputSchema } from './SteamUserWhereInputSchema';
import { TourneysListRelationFilterSchema } from './TourneysListRelationFilterSchema';

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    email: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  emailVerified: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  image: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  role: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  steam: z.union([ z.lazy(() => SteamProfileNullableRelationFilterSchema),z.lazy(() => SteamProfileWhereInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => AccountListRelationFilterSchema).optional(),
  sessions: z.lazy(() => SessionListRelationFilterSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorListRelationFilterSchema).optional(),
  steamUser: z.union([ z.lazy(() => SteamUserNullableRelationFilterSchema),z.lazy(() => SteamUserWhereInputSchema) ]).optional().nullable(),
  Tourneys: z.lazy(() => TourneysListRelationFilterSchema).optional()
}).strict());

export default UserWhereUniqueInputSchema;
