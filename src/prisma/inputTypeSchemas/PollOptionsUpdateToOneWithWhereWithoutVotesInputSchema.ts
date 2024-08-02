import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';
import { PollOptionsUpdateWithoutVotesInputSchema } from './PollOptionsUpdateWithoutVotesInputSchema';
import { PollOptionsUncheckedUpdateWithoutVotesInputSchema } from './PollOptionsUncheckedUpdateWithoutVotesInputSchema';

export const PollOptionsUpdateToOneWithWhereWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsUpdateToOneWithWhereWithoutVotesInput> = z.object({
  where: z.lazy(() => PollOptionsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PollOptionsUpdateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedUpdateWithoutVotesInputSchema) ]),
}).strict();

export default PollOptionsUpdateToOneWithWhereWithoutVotesInputSchema;
