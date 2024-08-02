import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsArgsSchema } from "../outputTypeSchemas/PollsArgsSchema"
import { PollOptionsArgsSchema } from "../outputTypeSchemas/PollOptionsArgsSchema"

export const PollVotesIncludeSchema: z.ZodType<Prisma.PollVotesInclude> = z.object({
  poll: z.union([z.boolean(),z.lazy(() => PollsArgsSchema)]).optional(),
  option: z.union([z.boolean(),z.lazy(() => PollOptionsArgsSchema)]).optional(),
}).strict()

export default PollVotesIncludeSchema;
