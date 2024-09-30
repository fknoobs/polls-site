import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SteamUserUpdateWithoutUserInputSchema: z.ZodType<Prisma.SteamUserUpdateWithoutUserInput> = z.object({
  steamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SteamUserUpdateWithoutUserInputSchema;
