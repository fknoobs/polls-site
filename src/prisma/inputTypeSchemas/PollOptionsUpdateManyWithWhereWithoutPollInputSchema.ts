import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsScalarWhereInputSchema } from './PollOptionsScalarWhereInputSchema';
import { PollOptionsUpdateManyMutationInputSchema } from './PollOptionsUpdateManyMutationInputSchema';
import { PollOptionsUncheckedUpdateManyWithoutPollInputSchema } from './PollOptionsUncheckedUpdateManyWithoutPollInputSchema';

export const PollOptionsUpdateManyWithWhereWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsUpdateManyWithWhereWithoutPollInput> = z.object({
  where: z.lazy(() => PollOptionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PollOptionsUpdateManyMutationInputSchema),z.lazy(() => PollOptionsUncheckedUpdateManyWithoutPollInputSchema) ]),
}).strict();

export default PollOptionsUpdateManyWithWhereWithoutPollInputSchema;
