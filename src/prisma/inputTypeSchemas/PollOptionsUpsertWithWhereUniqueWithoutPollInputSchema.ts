import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';
import { PollOptionsUpdateWithoutPollInputSchema } from './PollOptionsUpdateWithoutPollInputSchema';
import { PollOptionsUncheckedUpdateWithoutPollInputSchema } from './PollOptionsUncheckedUpdateWithoutPollInputSchema';
import { PollOptionsCreateWithoutPollInputSchema } from './PollOptionsCreateWithoutPollInputSchema';
import { PollOptionsUncheckedCreateWithoutPollInputSchema } from './PollOptionsUncheckedCreateWithoutPollInputSchema';

export const PollOptionsUpsertWithWhereUniqueWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsUpsertWithWhereUniqueWithoutPollInput> = z.object({
  where: z.lazy(() => PollOptionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PollOptionsUpdateWithoutPollInputSchema),z.lazy(() => PollOptionsUncheckedUpdateWithoutPollInputSchema) ]),
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutPollInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutPollInputSchema) ]),
}).strict();

export default PollOptionsUpsertWithWhereUniqueWithoutPollInputSchema;
