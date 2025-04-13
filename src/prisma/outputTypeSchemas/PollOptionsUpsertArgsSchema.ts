import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsIncludeSchema } from '../inputTypeSchemas/PollOptionsIncludeSchema'
import { PollOptionsWhereUniqueInputSchema } from '../inputTypeSchemas/PollOptionsWhereUniqueInputSchema'
import { PollOptionsCreateInputSchema } from '../inputTypeSchemas/PollOptionsCreateInputSchema'
import { PollOptionsUncheckedCreateInputSchema } from '../inputTypeSchemas/PollOptionsUncheckedCreateInputSchema'
import { PollOptionsUpdateInputSchema } from '../inputTypeSchemas/PollOptionsUpdateInputSchema'
import { PollOptionsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PollOptionsUncheckedUpdateInputSchema'
import { PollsArgsSchema } from "../outputTypeSchemas/PollsArgsSchema"
import { PollVotesFindManyArgsSchema } from "../outputTypeSchemas/PollVotesFindManyArgsSchema"
import { PollOptionsCountOutputTypeArgsSchema } from "../outputTypeSchemas/PollOptionsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollOptionsSelectSchema: z.ZodType<Prisma.PollOptionsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  pollId: z.boolean().optional(),
  poll: z.union([z.boolean(),z.lazy(() => PollsArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => PollVotesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PollOptionsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PollOptionsUpsertArgsSchema: z.ZodType<Prisma.PollOptionsUpsertArgs> = z.object({
  select: PollOptionsSelectSchema.optional(),
  include: z.lazy(() => PollOptionsIncludeSchema).optional(),
  where: PollOptionsWhereUniqueInputSchema,
  create: z.union([ PollOptionsCreateInputSchema,PollOptionsUncheckedCreateInputSchema ]),
  update: z.union([ PollOptionsUpdateInputSchema,PollOptionsUncheckedUpdateInputSchema ]),
}).strict() ;

export default PollOptionsUpsertArgsSchema;
