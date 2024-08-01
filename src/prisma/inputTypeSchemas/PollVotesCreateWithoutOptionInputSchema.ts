import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateNestedOneWithoutVotesInputSchema } from './PollsCreateNestedOneWithoutVotesInputSchema';

export const PollVotesCreateWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesCreateWithoutOptionInput> = z.object({
  fingerprint: z.string(),
  poll: z.lazy(() => PollsCreateNestedOneWithoutVotesInputSchema)
}).strict();

export default PollVotesCreateWithoutOptionInputSchema;
