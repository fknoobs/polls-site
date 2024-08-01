import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';
import { PollOptionsUpdateWithoutPollInputSchema } from './PollOptionsUpdateWithoutPollInputSchema';
import { PollOptionsUncheckedUpdateWithoutPollInputSchema } from './PollOptionsUncheckedUpdateWithoutPollInputSchema';

export const PollOptionsUpdateWithWhereUniqueWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsUpdateWithWhereUniqueWithoutPollInput> = z.object({
  where: z.lazy(() => PollOptionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PollOptionsUpdateWithoutPollInputSchema),z.lazy(() => PollOptionsUncheckedUpdateWithoutPollInputSchema) ]),
}).strict();

export default PollOptionsUpdateWithWhereUniqueWithoutPollInputSchema;
