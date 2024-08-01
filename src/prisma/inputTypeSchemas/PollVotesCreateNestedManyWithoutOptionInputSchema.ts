import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateWithoutOptionInputSchema } from './PollVotesCreateWithoutOptionInputSchema';
import { PollVotesUncheckedCreateWithoutOptionInputSchema } from './PollVotesUncheckedCreateWithoutOptionInputSchema';
import { PollVotesCreateOrConnectWithoutOptionInputSchema } from './PollVotesCreateOrConnectWithoutOptionInputSchema';
import { PollVotesCreateManyOptionInputEnvelopeSchema } from './PollVotesCreateManyOptionInputEnvelopeSchema';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';

export const PollVotesCreateNestedManyWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesCreateNestedManyWithoutOptionInput> = z.object({
  create: z.union([ z.lazy(() => PollVotesCreateWithoutOptionInputSchema),z.lazy(() => PollVotesCreateWithoutOptionInputSchema).array(),z.lazy(() => PollVotesUncheckedCreateWithoutOptionInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutOptionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PollVotesCreateOrConnectWithoutOptionInputSchema),z.lazy(() => PollVotesCreateOrConnectWithoutOptionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PollVotesCreateManyOptionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PollVotesCreateNestedManyWithoutOptionInputSchema;
