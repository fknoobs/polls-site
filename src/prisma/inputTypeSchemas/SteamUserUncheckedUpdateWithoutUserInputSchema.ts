import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SteamUserUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.SteamUserUncheckedUpdateWithoutUserInput> = z.object({
  steamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SteamUserUncheckedUpdateWithoutUserInputSchema;
