import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesUpdateWithoutPollInputSchema } from './PollVotesUpdateWithoutPollInputSchema';
import { PollVotesUncheckedUpdateWithoutPollInputSchema } from './PollVotesUncheckedUpdateWithoutPollInputSchema';

export const PollVotesUpdateWithWhereUniqueWithoutPollInputSchema: z.ZodType<Prisma.PollVotesUpdateWithWhereUniqueWithoutPollInput> = z.object({
  where: z.lazy(() => PollVotesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PollVotesUpdateWithoutPollInputSchema),z.lazy(() => PollVotesUncheckedUpdateWithoutPollInputSchema) ]),
}).strict();

export default PollVotesUpdateWithWhereUniqueWithoutPollInputSchema;
