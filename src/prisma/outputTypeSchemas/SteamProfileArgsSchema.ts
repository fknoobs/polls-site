import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileSelectSchema } from '../inputTypeSchemas/SteamProfileSelectSchema';
import { SteamProfileIncludeSchema } from '../inputTypeSchemas/SteamProfileIncludeSchema';

export const SteamProfileArgsSchema: z.ZodType<Prisma.SteamProfileDefaultArgs> = z.object({
  select: z.lazy(() => SteamProfileSelectSchema).optional(),
  include: z.lazy(() => SteamProfileIncludeSchema).optional(),
}).strict();

export default SteamProfileArgsSchema;
