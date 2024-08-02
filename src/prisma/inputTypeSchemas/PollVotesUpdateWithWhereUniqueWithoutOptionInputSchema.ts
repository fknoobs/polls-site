import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesUpdateWithoutOptionInputSchema } from './PollVotesUpdateWithoutOptionInputSchema';
import { PollVotesUncheckedUpdateWithoutOptionInputSchema } from './PollVotesUncheckedUpdateWithoutOptionInputSchema';

export const PollVotesUpdateWithWhereUniqueWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesUpdateWithWhereUniqueWithoutOptionInput> = z.object({
  where: z.lazy(() => PollVotesWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PollVotesUpdateWithoutOptionInputSchema),z.lazy(() => PollVotesUncheckedUpdateWithoutOptionInputSchema) ]),
}).strict();

export default PollVotesUpdateWithWhereUniqueWithoutOptionInputSchema;
