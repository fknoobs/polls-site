import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateWithoutVotesInputSchema } from './PollOptionsCreateWithoutVotesInputSchema';
import { PollOptionsUncheckedCreateWithoutVotesInputSchema } from './PollOptionsUncheckedCreateWithoutVotesInputSchema';
import { PollOptionsCreateOrConnectWithoutVotesInputSchema } from './PollOptionsCreateOrConnectWithoutVotesInputSchema';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';

export const PollOptionsCreateNestedOneWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsCreateNestedOneWithoutVotesInput> = z.object({
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PollOptionsCreateOrConnectWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => PollOptionsWhereUniqueInputSchema).optional()
}).strict();

export default PollOptionsCreateNestedOneWithoutVotesInputSchema;
