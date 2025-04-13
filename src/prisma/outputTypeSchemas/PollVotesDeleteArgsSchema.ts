import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesIncludeSchema } from '../inputTypeSchemas/PollVotesIncludeSchema'
import { PollVotesWhereUniqueInputSchema } from '../inputTypeSchemas/PollVotesWhereUniqueInputSchema'
import { PollsArgsSchema } from "../outputTypeSchemas/PollsArgsSchema"
import { PollOptionsArgsSchema } from "../outputTypeSchemas/PollOptionsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollVotesSelectSchema: z.ZodType<Prisma.PollVotesSelect> = z.object({
  id: z.boolean().optional(),
  fingerprint: z.boolean().optional(),
  ipaddress: z.boolean().optional(),
  pollId: z.boolean().optional(),
  optionId: z.boolean().optional(),
  poll: z.union([z.boolean(),z.lazy(() => PollsArgsSchema)]).optional(),
  option: z.union([z.boolean(),z.lazy(() => PollOptionsArgsSchema)]).optional(),
}).strict()

export const PollVotesDeleteArgsSchema: z.ZodType<Prisma.PollVotesDeleteArgs> = z.object({
  select: PollVotesSelectSchema.optional(),
  include: z.lazy(() => PollVotesIncludeSchema).optional(),
  where: PollVotesWhereUniqueInputSchema,
}).strict() ;

export default PollVotesDeleteArgsSchema;
