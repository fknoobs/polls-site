import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateWithoutPollInputSchema } from './PollVotesCreateWithoutPollInputSchema';
import { PollVotesUncheckedCreateWithoutPollInputSchema } from './PollVotesUncheckedCreateWithoutPollInputSchema';
import { PollVotesCreateOrConnectWithoutPollInputSchema } from './PollVotesCreateOrConnectWithoutPollInputSchema';
import { PollVotesCreateManyPollInputEnvelopeSchema } from './PollVotesCreateManyPollInputEnvelopeSchema';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';

export const PollVotesCreateNestedManyWithoutPollInputSchema: z.ZodType<Prisma.PollVotesCreateNestedManyWithoutPollInput> = z.object({
  create: z.union([ z.lazy(() => PollVotesCreateWithoutPollInputSchema),z.lazy(() => PollVotesCreateWithoutPollInputSchema).array(),z.lazy(() => PollVotesUncheckedCreateWithoutPollInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutPollInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PollVotesCreateOrConnectWithoutPollInputSchema),z.lazy(() => PollVotesCreateOrConnectWithoutPollInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PollVotesCreateManyPollInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PollVotesCreateNestedManyWithoutPollInputSchema;
