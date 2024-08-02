import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesCreateWithoutOptionInputSchema } from './PollVotesCreateWithoutOptionInputSchema';
import { PollVotesUncheckedCreateWithoutOptionInputSchema } from './PollVotesUncheckedCreateWithoutOptionInputSchema';

export const PollVotesCreateOrConnectWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesCreateOrConnectWithoutOptionInput> = z.object({
  where: z.lazy(() => PollVotesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PollVotesCreateWithoutOptionInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutOptionInputSchema) ]),
}).strict();

export default PollVotesCreateOrConnectWithoutOptionInputSchema;
