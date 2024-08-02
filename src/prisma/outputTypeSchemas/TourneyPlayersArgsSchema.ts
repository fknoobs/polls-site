import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersSelectSchema } from '../inputTypeSchemas/TourneyPlayersSelectSchema';
import { TourneyPlayersIncludeSchema } from '../inputTypeSchemas/TourneyPlayersIncludeSchema';

export const TourneyPlayersArgsSchema: z.ZodType<Prisma.TourneyPlayersDefaultArgs> = z.object({
  select: z.lazy(() => TourneyPlayersSelectSchema).optional(),
  include: z.lazy(() => TourneyPlayersIncludeSchema).optional(),
}).strict();

export default TourneyPlayersArgsSchema;
