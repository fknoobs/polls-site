import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsIncludeSchema } from '../inputTypeSchemas/PollsIncludeSchema'
import { PollsWhereInputSchema } from '../inputTypeSchemas/PollsWhereInputSchema'
import { PollsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PollsOrderByWithRelationInputSchema'
import { PollsWhereUniqueInputSchema } from '../inputTypeSchemas/PollsWhereUniqueInputSchema'
import { PollsScalarFieldEnumSchema } from '../inputTypeSchemas/PollsScalarFieldEnumSchema'
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

export const PollsFindManyArgsSchema: z.ZodType<Prisma.PollsFindManyArgs> = z.object({
  select: PollsSelectSchema.optional(),
  include: PollsIncludeSchema.optional(),
  where: PollsWhereInputSchema.optional(),
  orderBy: z.union([ PollsOrderByWithRelationInputSchema.array(),PollsOrderByWithRelationInputSchema ]).optional(),
  cursor: PollsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PollsScalarFieldEnumSchema,PollsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PollsFindManyArgsSchema;
