import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesScalarWhereInputSchema } from './PollVotesScalarWhereInputSchema';
import { PollVotesUpdateManyMutationInputSchema } from './PollVotesUpdateManyMutationInputSchema';
import { PollVotesUncheckedUpdateManyWithoutPollInputSchema } from './PollVotesUncheckedUpdateManyWithoutPollInputSchema';

export const PollVotesUpdateManyWithWhereWithoutPollInputSchema: z.ZodType<Prisma.PollVotesUpdateManyWithWhereWithoutPollInput> = z.object({
  where: z.lazy(() => PollVotesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PollVotesUpdateManyMutationInputSchema),z.lazy(() => PollVotesUncheckedUpdateManyWithoutPollInputSchema) ]),
}).strict();

export default PollVotesUpdateManyWithWhereWithoutPollInputSchema;
