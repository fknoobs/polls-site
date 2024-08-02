import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TourneyTeamsCountOutputTypeSelectSchema: z.ZodType<Prisma.TourneyTeamsCountOutputTypeSelect> = z.object({
  players: z.boolean().optional(),
}).strict();

export default TourneyTeamsCountOutputTypeSelectSchema;
