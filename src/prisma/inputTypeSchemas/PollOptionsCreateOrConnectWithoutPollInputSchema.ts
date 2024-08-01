import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';
import { PollOptionsCreateWithoutPollInputSchema } from './PollOptionsCreateWithoutPollInputSchema';
import { PollOptionsUncheckedCreateWithoutPollInputSchema } from './PollOptionsUncheckedCreateWithoutPollInputSchema';

export const PollOptionsCreateOrConnectWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsCreateOrConnectWithoutPollInput> = z.object({
  where: z.lazy(() => PollOptionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutPollInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutPollInputSchema) ]),
}).strict();

export default PollOptionsCreateOrConnectWithoutPollInputSchema;
