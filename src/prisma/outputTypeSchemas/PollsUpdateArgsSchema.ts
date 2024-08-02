import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsIncludeSchema } from '../inputTypeSchemas/PollsIncludeSchema'
import { PollsUpdateInputSchema } from '../inputTypeSchemas/PollsUpdateInputSchema'
import { PollsUncheckedUpdateInputSchema } from '../inputTypeSchemas/PollsUncheckedUpdateInputSchema'
import { PollsWhereUniqueInputSchema } from '../inputTypeSchemas/PollsWhereUniqueInputSchema'
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
  multiple: z.boolean().optional(),
  minChoices: z.boolean().optional(),
  maxChoices: z.boolean().optional(),
  options: z.union([z.boolean(),z.lazy(() => PollOptionsFindManyArgsSchema)]).optional(),
  votes: z.union([z.boolean(),z.lazy(() => PollVotesFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PollsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const PollsUpdateArgsSchema: z.ZodType<Prisma.PollsUpdateArgs> = z.object({
  select: PollsSelectSchema.optional(),
  include: PollsIncludeSchema.optional(),
  data: z.union([ PollsUpdateInputSchema,PollsUncheckedUpdateInputSchema ]),
  where: PollsWhereUniqueInputSchema,
}).strict() ;

export default PollsUpdateArgsSchema;
