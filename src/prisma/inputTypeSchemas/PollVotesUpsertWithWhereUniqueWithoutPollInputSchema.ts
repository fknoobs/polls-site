import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesUpdateWithoutPollInputSchema } from './PollVotesUpdateWithoutPollInputSchema';
import { PollVotesUncheckedUpdateWithoutPollInputSchema } from './PollVotesUncheckedUpdateWithoutPollInputSchema';
import { PollVotesCreateWithoutPollInputSchema } from './PollVotesCreateWithoutPollInputSchema';
import { PollVotesUncheckedCreateWithoutPollInputSchema } from './PollVotesUncheckedCreateWithoutPollInputSchema';

export const PollVotesUpsertWithWhereUniqueWithoutPollInputSchema: z.ZodType<Prisma.PollVotesUpsertWithWhereUniqueWithoutPollInput> = z.object({
  where: z.lazy(() => PollVotesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PollVotesUpdateWithoutPollInputSchema),z.lazy(() => PollVotesUncheckedUpdateWithoutPollInputSchema) ]),
  create: z.union([ z.lazy(() => PollVotesCreateWithoutPollInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutPollInputSchema) ]),
}).strict();

export default PollVotesUpsertWithWhereUniqueWithoutPollInputSchema;
