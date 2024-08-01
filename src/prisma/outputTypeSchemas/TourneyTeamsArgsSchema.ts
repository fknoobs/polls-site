import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsSelectSchema } from '../inputTypeSchemas/TourneyTeamsSelectSchema';
import { TourneyTeamsIncludeSchema } from '../inputTypeSchemas/TourneyTeamsIncludeSchema';

export const TourneyTeamsArgsSchema: z.ZodType<Prisma.TourneyTeamsDefaultArgs> = z.object({
  select: z.lazy(() => TourneyTeamsSelectSchema).optional(),
  include: z.lazy(() => TourneyTeamsIncludeSchema).optional(),
}).strict();

export default TourneyTeamsArgsSchema;
