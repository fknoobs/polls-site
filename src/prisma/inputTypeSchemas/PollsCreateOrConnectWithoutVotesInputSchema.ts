import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereUniqueInputSchema } from './PollsWhereUniqueInputSchema';
import { PollsCreateWithoutVotesInputSchema } from './PollsCreateWithoutVotesInputSchema';
import { PollsUncheckedCreateWithoutVotesInputSchema } from './PollsUncheckedCreateWithoutVotesInputSchema';

export const PollsCreateOrConnectWithoutVotesInputSchema: z.ZodType<Prisma.PollsCreateOrConnectWithoutVotesInput> = z.object({
  where: z.lazy(() => PollsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PollsCreateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedCreateWithoutVotesInputSchema) ]),
}).strict();

export default PollsCreateOrConnectWithoutVotesInputSchema;
