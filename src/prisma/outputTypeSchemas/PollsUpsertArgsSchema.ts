import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsIncludeSchema } from '../inputTypeSchemas/PollsIncludeSchema'
import { PollsWhereUniqueInputSchema } from '../inputTypeSchemas/PollsWhereUniqueInputSchema'
import { PollsCreateInputSchema } from '../inputTypeSchemas/PollsCreateInputSchema'
import { PollsUncheckedCreateInputSchema } from '../inputTypeSchemas/PollsUncheckedCreateInputSchema'
import { PollsUpdateInputSchema } from '../inputTypeSchemas/PollsUpdateInputSchema'
import { PollsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PollsUncheckedUpdateInputSchema'
import { PollOptionsFindManyArgsSchema } from "../outputTypeSchemas/PollOptionsFindManyArgsSchema"
import { PollVotesFindManyArgsSchema } from "../outputTypeSchemas/PollVotesFindManyArgsSchema"
import { PollsCountOutputTypeArgsSchema } from "../outputTypeSchemas/PollsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PollsSelectSchema: z.ZodType<Prisma.PollsSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  slug: z.boolean().optional(),
  description: z.boolean().optional(),
  options: z.union([z.boolean(),z.lazy(() => PollOptionsFindManyArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => PollVotesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PollsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PollsUpsertArgsSchema: z.ZodType<Prisma.PollsUpsertArgs> = z.object({
  select: PollsSelectSchema.optional(),
  include: PollsIncludeSchema.optional(),
  where: PollsWhereUniqueInputSchema,
  create: z.union([ PollsCreateInputSchema,PollsUncheckedCreateInputSchema ]),
  update: z.union([ PollsUpdateInputSchema,PollsUncheckedUpdateInputSchema ]),
}).strict() ;

export default PollsUpsertArgsSchema;