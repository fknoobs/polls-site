import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsArgsSchema } from "../outputTypeSchemas/PollsArgsSchema"
import { PollVotesFindManyArgsSchema } from "../outputTypeSchemas/PollVotesFindManyArgsSchema"
import { PollOptionsCountOutputTypeArgsSchema } from "../outputTypeSchemas/PollOptionsCountOutputTypeArgsSchema"

export const PollOptionsSelectSchema: z.ZodType<Prisma.PollOptionsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  pollId: z.boolean().optional(),
  poll: z.union([z.boolean(),z.lazy(() => PollsArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => PollVotesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PollOptionsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default PollOptionsSelectSchema;
