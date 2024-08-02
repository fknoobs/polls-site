import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesUpdateWithoutOptionInputSchema } from './PollVotesUpdateWithoutOptionInputSchema';
import { PollVotesUncheckedUpdateWithoutOptionInputSchema } from './PollVotesUncheckedUpdateWithoutOptionInputSchema';
import { PollVotesCreateWithoutOptionInputSchema } from './PollVotesCreateWithoutOptionInputSchema';
import { PollVotesUncheckedCreateWithoutOptionInputSchema } from './PollVotesUncheckedCreateWithoutOptionInputSchema';

export const PollVotesUpsertWithWhereUniqueWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesUpsertWithWhereUniqueWithoutOptionInput> = z.object({
  where: z.lazy(() => PollVotesWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PollVotesUpdateWithoutOptionInputSchema),z.lazy(() => PollVotesUncheckedUpdateWithoutOptionInputSchema) ]),
  create: z.union([ z.lazy(() => PollVotesCreateWithoutOptionInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutOptionInputSchema) ]),
}).strict();

export default PollVotesUpsertWithWhereUniqueWithoutOptionInputSchema;
