import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';
import { PollOptionsCreateWithoutVotesInputSchema } from './PollOptionsCreateWithoutVotesInputSchema';
import { PollOptionsUncheckedCreateWithoutVotesInputSchema } from './PollOptionsUncheckedCreateWithoutVotesInputSchema';

export const PollOptionsCreateOrConnectWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsCreateOrConnectWithoutVotesInput> = z.object({
  where: z.lazy(() => PollOptionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutVotesInputSchema) ]),
}).strict();

export default PollOptionsCreateOrConnectWithoutVotesInputSchema;
