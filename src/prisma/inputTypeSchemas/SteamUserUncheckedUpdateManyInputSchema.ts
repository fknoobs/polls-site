import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const SteamUserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.SteamUserUncheckedUpdateManyInput> = z.object({
  steamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default SteamUserUncheckedUpdateManyInputSchema;
