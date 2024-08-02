import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsCountOutputTypeSelectSchema } from './PollsCountOutputTypeSelectSchema';

export const PollsCountOutputTypeArgsSchema: z.ZodType<Prisma.PollsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PollsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PollsCountOutputTypeSelectSchema;
