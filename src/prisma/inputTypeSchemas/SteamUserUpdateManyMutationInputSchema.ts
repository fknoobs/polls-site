import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SteamUserUpdateManyMutationInputSchema: z.ZodType<Prisma.SteamUserUpdateManyMutationInput> = z.object({
  steamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SteamUserUpdateManyMutationInputSchema;
