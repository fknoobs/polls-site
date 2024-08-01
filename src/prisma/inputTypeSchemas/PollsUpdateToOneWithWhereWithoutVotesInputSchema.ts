import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { PollsUpdateWithoutVotesInputSchema } from './PollsUpdateWithoutVotesInputSchema';
import { PollsUncheckedUpdateWithoutVotesInputSchema } from './PollsUncheckedUpdateWithoutVotesInputSchema';

export const PollsUpdateToOneWithWhereWithoutVotesInputSchema: z.ZodType<Prisma.PollsUpdateToOneWithWhereWithoutVotesInput> = z.object({
  where: z.lazy(() => PollsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PollsUpdateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedUpdateWithoutVotesInputSchema) ]),
}).strict();

export default PollsUpdateToOneWithWhereWithoutVotesInputSchema;
