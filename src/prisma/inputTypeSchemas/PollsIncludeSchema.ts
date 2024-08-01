import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsFindManyArgsSchema } from "../outputTypeSchemas/PollOptionsFindManyArgsSchema"
import { PollVotesFindManyArgsSchema } from "../outputTypeSchemas/PollVotesFindManyArgsSchema"
import { PollsCountOutputTypeArgsSchema } from "../outputTypeSchemas/PollsCountOutputTypeArgsSchema"

export const PollsIncludeSchema: z.ZodType<Prisma.PollsInclude> = z.object({
  options: z.union([z.boolean(),z.lazy(() => PollOptionsFindManyArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => PollVotesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PollsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PollsIncludeSchema;
