import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsSelectSchema } from '../inputTypeSchemas/PollOptionsSelectSchema';
import { PollOptionsIncludeSchema } from '../inputTypeSchemas/PollOptionsIncludeSchema';

export const PollOptionsArgsSchema: z.ZodType<Prisma.PollOptionsDefaultArgs> = z.object({
  select: z.lazy(() => PollOptionsSelectSchema).optional(),
  include: z.lazy(() => PollOptionsIncludeSchema).optional(),
}).strict();

export default PollOptionsArgsSchema;
