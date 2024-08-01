import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsIncludeSchema } from '../inputTypeSchemas/PollOptionsIncludeSchema'
import { PollOptionsWhereInputSchema } from '../inputTypeSchemas/PollOptionsWhereInputSchema'
import { PollOptionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PollOptionsOrderByWithRelationInputSchema'
import { PollOptionsWhereUniqueInputSchema } from '../inputTypeSchemas/PollOptionsWhereUniqueInputSchema'
import { PollOptionsScalarFieldEnumSchema } from '../inputTypeSchemas/PollOptionsScalarFieldEnumSchema'
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

export const PollOptionsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PollOptionsFindFirstOrThrowArgs> = z.object({
  select: PollOptionsSelectSchema.optional(),
  include: PollOptionsIncludeSchema.optional(),
  where: PollOptionsWhereInputSchema.optional(),
  orderBy: z.union([ PollOptionsOrderByWithRelationInputSchema.array(),PollOptionsOrderByWithRelationInputSchema ]).optional(),
  cursor: PollOptionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PollOptionsScalarFieldEnumSchema,PollOptionsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default PollOptionsFindFirstOrThrowArgsSchema;
