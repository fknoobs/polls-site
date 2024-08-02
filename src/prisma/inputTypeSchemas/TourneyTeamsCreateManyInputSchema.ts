import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyTeamsCreateManyInputSchema: z.ZodType<Prisma.TourneyTeamsCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  tourneyId: z.number().int()
}).strict();

export default TourneyTeamsCreateManyInputSchema;
