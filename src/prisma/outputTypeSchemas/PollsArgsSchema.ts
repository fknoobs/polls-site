import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsSelectSchema } from '../inputTypeSchemas/PollsSelectSchema';
import { PollsIncludeSchema } from '../inputTypeSchemas/PollsIncludeSchema';

export const PollsArgsSchema: z.ZodType<Prisma.PollsDefaultArgs> = z.object({
  select: z.lazy(() => PollsSelectSchema).optional(),
  include: z.lazy(() => PollsIncludeSchema).optional(),
}).strict();

export default PollsArgsSchema;
