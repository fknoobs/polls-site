import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesScalarWhereInputSchema } from './PollVotesScalarWhereInputSchema';
import { PollVotesUpdateManyMutationInputSchema } from './PollVotesUpdateManyMutationInputSchema';
import { PollVotesUncheckedUpdateManyWithoutOptionInputSchema } from './PollVotesUncheckedUpdateManyWithoutOptionInputSchema';

export const PollVotesUpdateManyWithWhereWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesUpdateManyWithWhereWithoutOptionInput> = z.object({
  where: z.lazy(() => PollVotesScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PollVotesUpdateManyMutationInputSchema),z.lazy(() => PollVotesUncheckedUpdateManyWithoutOptionInputSchema) ]),
}).strict();

export default PollVotesUpdateManyWithWhereWithoutOptionInputSchema;
