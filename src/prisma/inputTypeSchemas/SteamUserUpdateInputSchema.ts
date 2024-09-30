import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { UserUpdateOneWithoutSteamUserNestedInputSchema } from './UserUpdateOneWithoutSteamUserNestedInputSchema';

export const SteamUserUpdateInputSchema: z.ZodType<Prisma.SteamUserUpdateInput> = z.object({
  steamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneWithoutSteamUserNestedInputSchema).optional()
}).strict();

export default SteamUserUpdateInputSchema;
