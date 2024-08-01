import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsArgsSchema } from "../outputTypeSchemas/PollsArgsSchema"
import { PollOptionsArgsSchema } from "../outputTypeSchemas/PollOptionsArgsSchema"

export const PollVotesSelectSchema: z.ZodType<Prisma.PollVotesSelect> = z.object({
  id: z.boolean().optional(),
  fingerprint: z.boolean().optional(),
  pollId: z.boolean().optional(),
  optionId: z.boolean().optional(),
  poll: z.union([z.boolean(),z.lazy(() => PollsArgsSchema)]).optional(),
  option: z.union([z.boolean(),z.lazy(() => PollOptionsArgsSchema)]).optional(),
}).strict()

export default PollVotesSelectSchema;
