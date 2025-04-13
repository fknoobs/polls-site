import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesIncludeSchema } from '../inputTypeSchemas/PollVotesIncludeSchema'
import { PollVotesWhereInputSchema } from '../inputTypeSchemas/PollVotesWhereInputSchema'
import { PollVotesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PollVotesOrderByWithRelationInputSchema'
import { PollVotesWhereUniqueInputSchema } from '../inputTypeSchemas/PollVotesWhereUniqueInputSchema'
import { PollVotesScalarFieldEnumSchema } from '../inputTypeSchemas/PollVotesScalarFieldEnumSchema'
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

export const PollVotesFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PollVotesFindFirstOrThrowArgs> = z.object({
  select: PollVotesSelectSchema.optional(),
  include: z.lazy(() => PollVotesIncludeSchema).optional(),
  where: PollVotesWhereInputSchema.optional(),
  orderBy: z.union([ PollVotesOrderByWithRelationInputSchema.array(),PollVotesOrderByWithRelationInputSchema ]).optional(),
  cursor: PollVotesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PollVotesScalarFieldEnumSchema,PollVotesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PollVotesFindFirstOrThrowArgsSchema;
