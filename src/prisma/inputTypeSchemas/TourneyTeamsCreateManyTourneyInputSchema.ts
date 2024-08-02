import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyTeamsCreateManyTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsCreateManyTourneyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string()
}).strict();

export default TourneyTeamsCreateManyTourneyInputSchema;
