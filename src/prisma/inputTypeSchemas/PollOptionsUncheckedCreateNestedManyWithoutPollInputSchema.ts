import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateWithoutPollInputSchema } from './PollOptionsCreateWithoutPollInputSchema';
import { PollOptionsUncheckedCreateWithoutPollInputSchema } from './PollOptionsUncheckedCreateWithoutPollInputSchema';
import { PollOptionsCreateOrConnectWithoutPollInputSchema } from './PollOptionsCreateOrConnectWithoutPollInputSchema';
import { PollOptionsCreateManyPollInputEnvelopeSchema } from './PollOptionsCreateManyPollInputEnvelopeSchema';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';

export const PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsUncheckedCreateNestedManyWithoutPollInput> = z.object({
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutPollInputSchema),z.lazy(() => PollOptionsCreateWithoutPollInputSchema).array(),z.lazy(() => PollOptionsUncheckedCreateWithoutPollInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutPollInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PollOptionsCreateOrConnectWithoutPollInputSchema),z.lazy(() => PollOptionsCreateOrConnectWithoutPollInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PollOptionsCreateManyPollInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PollOptionsWhereUniqueInputSchema),z.lazy(() => PollOptionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema;
