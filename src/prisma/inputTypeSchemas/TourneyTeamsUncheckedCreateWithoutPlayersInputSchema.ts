import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyTeamsUncheckedCreateWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsUncheckedCreateWithoutPlayersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  tourneyId: z.number().int()
}).strict();

export default TourneyTeamsUncheckedCreateWithoutPlayersInputSchema;
