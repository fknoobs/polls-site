import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesCreateWithoutPollInputSchema } from './PollVotesCreateWithoutPollInputSchema';
import { PollVotesUncheckedCreateWithoutPollInputSchema } from './PollVotesUncheckedCreateWithoutPollInputSchema';

export const PollVotesCreateOrConnectWithoutPollInputSchema: z.ZodType<Prisma.PollVotesCreateOrConnectWithoutPollInput> = z.object({
  where: z.lazy(() => PollVotesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PollVotesCreateWithoutPollInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutPollInputSchema) ]),
}).strict();

export default PollVotesCreateOrConnectWithoutPollInputSchema;
