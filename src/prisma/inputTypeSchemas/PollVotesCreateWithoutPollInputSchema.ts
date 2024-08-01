import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateNestedOneWithoutVotesInputSchema } from './PollOptionsCreateNestedOneWithoutVotesInputSchema';

export const PollVotesCreateWithoutPollInputSchema: z.ZodType<Prisma.PollVotesCreateWithoutPollInput> = z.object({
  fingerprint: z.string(),
  option: z.lazy(() => PollOptionsCreateNestedOneWithoutVotesInputSchema)
}).strict();

export default PollVotesCreateWithoutPollInputSchema;
