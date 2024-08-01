import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateNestedOneWithoutVotesInputSchema } from './PollsCreateNestedOneWithoutVotesInputSchema';
import { PollOptionsCreateNestedOneWithoutVotesInputSchema } from './PollOptionsCreateNestedOneWithoutVotesInputSchema';

export const PollVotesCreateInputSchema: z.ZodType<Prisma.PollVotesCreateInput> = z.object({
  fingerprint: z.string(),
  poll: z.lazy(() => PollsCreateNestedOneWithoutVotesInputSchema),
  option: z.lazy(() => PollOptionsCreateNestedOneWithoutVotesInputSchema)
}).strict();

export default PollVotesCreateInputSchema;
