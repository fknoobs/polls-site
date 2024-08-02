import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsCountOutputTypeSelectSchema } from './PollOptionsCountOutputTypeSelectSchema';

export const PollOptionsCountOutputTypeArgsSchema: z.ZodType<Prisma.PollOptionsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PollOptionsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PollOptionsCountOutputTypeSelectSchema;
