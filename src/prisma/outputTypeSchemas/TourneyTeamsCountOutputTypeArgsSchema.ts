import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsCountOutputTypeSelectSchema } from './TourneyTeamsCountOutputTypeSelectSchema';

export const TourneyTeamsCountOutputTypeArgsSchema: z.ZodType<Prisma.TourneyTeamsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TourneyTeamsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TourneyTeamsCountOutputTypeSelectSchema;
