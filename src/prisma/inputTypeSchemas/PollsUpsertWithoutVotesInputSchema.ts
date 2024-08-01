import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsUpdateWithoutVotesInputSchema } from './PollsUpdateWithoutVotesInputSchema';
import { PollsUncheckedUpdateWithoutVotesInputSchema } from './PollsUncheckedUpdateWithoutVotesInputSchema';
import { PollsCreateWithoutVotesInputSchema } from './PollsCreateWithoutVotesInputSchema';
import { PollsUncheckedCreateWithoutVotesInputSchema } from './PollsUncheckedCreateWithoutVotesInputSchema';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';

export const PollsUpsertWithoutVotesInputSchema: z.ZodType<Prisma.PollsUpsertWithoutVotesInput> = z.object({
  update: z.union([ z.lazy(() => PollsUpdateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedUpdateWithoutVotesInputSchema) ]),
  create: z.union([ z.lazy(() => PollsCreateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedCreateWithoutVotesInputSchema) ]),
  where: z.lazy(() => PollsWhereInputSchema).optional()
}).strict();

export default PollsUpsertWithoutVotesInputSchema;
