import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserSelectSchema } from '../inputTypeSchemas/SteamUserSelectSchema';
import { SteamUserIncludeSchema } from '../inputTypeSchemas/SteamUserIncludeSchema';

export const SteamUserArgsSchema: z.ZodType<Prisma.SteamUserDefaultArgs> = z.object({
  select: z.lazy(() => SteamUserSelectSchema).optional(),
  include: z.lazy(() => SteamUserIncludeSchema).optional(),
}).strict();

export default SteamUserArgsSchema;
