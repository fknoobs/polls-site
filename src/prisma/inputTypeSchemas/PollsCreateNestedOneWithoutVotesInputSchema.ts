import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateWithoutVotesInputSchema } from './PollsCreateWithoutVotesInputSchema';
import { PollsUncheckedCreateWithoutVotesInputSchema } from './PollsUncheckedCreateWithoutVotesInputSchema';
import { PollsCreateOrConnectWithoutVotesInputSchema } from './PollsCreateOrConnectWithoutVotesInputSchema';
import { PollsWhereUniqueInputSchema } from './PollsWhereUniqueInputSchema';

export const PollsCreateNestedOneWithoutVotesInputSchema: z.ZodType<Prisma.PollsCreateNestedOneWithoutVotesInput> = z.object({
  create: z.union([ z.lazy(() => PollsCreateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PollsCreateOrConnectWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => PollsWhereUniqueInputSchema).optional()
}).strict();

export default PollsCreateNestedOneWithoutVotesInputSchema;
