import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesIncludeSchema } from '../inputTypeSchemas/PollVotesIncludeSchema'
import { PollVotesCreateInputSchema } from '../inputTypeSchemas/PollVotesCreateInputSchema'
import { PollVotesUncheckedCreateInputSchema } from '../inputTypeSchemas/PollVotesUncheckedCreateInputSchema'
import { PollsArgsSchema } from "../outputTypeSchemas/PollsArgsSchema"
import { PollOptionsArgsSchema } from "../outputTypeSchemas/PollOptionsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollVotesSelectSchema: z.ZodType<Prisma.PollVotesSelect> = z.object({
  id: z.boolean().optional(),
  fingerprint: z.boolean().optional(),
  pollId: z.boolean().optional(),
  optionId: z.boolean().optional(),
  poll: z.union([z.boolean(),z.lazy(() => PollsArgsSchema)]).optional(),
  option: z.union([z.boolean(),z.lazy(() => PollOptionsArgsSchema)]).optional(),
}).strict()

export const PollVotesCreateArgsSchema: z.ZodType<Prisma.PollVotesCreateArgs> = z.object({
  select: PollVotesSelectSchema.optional(),
  include: PollVotesIncludeSchema.optional(),
  data: z.union([ PollVotesCreateInputSchema,PollVotesUncheckedCreateInputSchema ]),
}).strict() ;

export default PollVotesCreateArgsSchema;