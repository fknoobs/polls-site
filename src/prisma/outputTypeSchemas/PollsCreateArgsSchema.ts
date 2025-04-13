import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsIncludeSchema } from '../inputTypeSchemas/PollsIncludeSchema'
import { PollsCreateInputSchema } from '../inputTypeSchemas/PollsCreateInputSchema'
import { PollsUncheckedCreateInputSchema } from '../inputTypeSchemas/PollsUncheckedCreateInputSchema'
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

export const PollsCreateArgsSchema: z.ZodType<Prisma.PollsCreateArgs> = z.object({
  select: PollsSelectSchema.optional(),
  include: z.lazy(() => PollsIncludeSchema).optional(),
  data: z.union([ PollsCreateInputSchema,PollsUncheckedCreateInputSchema ]),
}).strict() ;

export default PollsCreateArgsSchema;
