import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsUpdateWithoutVotesInputSchema } from './PollOptionsUpdateWithoutVotesInputSchema';
import { PollOptionsUncheckedUpdateWithoutVotesInputSchema } from './PollOptionsUncheckedUpdateWithoutVotesInputSchema';
import { PollOptionsCreateWithoutVotesInputSchema } from './PollOptionsCreateWithoutVotesInputSchema';
import { PollOptionsUncheckedCreateWithoutVotesInputSchema } from './PollOptionsUncheckedCreateWithoutVotesInputSchema';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';

export const PollOptionsUpsertWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsUpsertWithoutVotesInput> = z.object({
  update: z.union([ z.lazy(() => PollOptionsUpdateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedUpdateWithoutVotesInputSchema) ]),
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutVotesInputSchema) ]),
  where: z.lazy(() => PollOptionsWhereInputSchema).optional()
}).strict();

export default PollOptionsUpsertWithoutVotesInputSchema;
