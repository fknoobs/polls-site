import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateWithoutPollInputSchema } from './PollVotesCreateWithoutPollInputSchema';
import { PollVotesUncheckedCreateWithoutPollInputSchema } from './PollVotesUncheckedCreateWithoutPollInputSchema';
import { PollVotesCreateOrConnectWithoutPollInputSchema } from './PollVotesCreateOrConnectWithoutPollInputSchema';
import { PollVotesUpsertWithWhereUniqueWithoutPollInputSchema } from './PollVotesUpsertWithWhereUniqueWithoutPollInputSchema';
import { PollVotesCreateManyPollInputEnvelopeSchema } from './PollVotesCreateManyPollInputEnvelopeSchema';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesUpdateWithWhereUniqueWithoutPollInputSchema } from './PollVotesUpdateWithWhereUniqueWithoutPollInputSchema';
import { PollVotesUpdateManyWithWhereWithoutPollInputSchema } from './PollVotesUpdateManyWithWhereWithoutPollInputSchema';
import { PollVotesScalarWhereInputSchema } from './PollVotesScalarWhereInputSchema';

export const PollVotesUncheckedUpdateManyWithoutPollNestedInputSchema: z.ZodType<Prisma.PollVotesUncheckedUpdateManyWithoutPollNestedInput> = z.object({
  create: z.union([ z.lazy(() => PollVotesCreateWithoutPollInputSchema),z.lazy(() => PollVotesCreateWithoutPollInputSchema).array(),z.lazy(() => PollVotesUncheckedCreateWithoutPollInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutPollInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PollVotesCreateOrConnectWithoutPollInputSchema),z.lazy(() => PollVotesCreateOrConnectWithoutPollInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PollVotesUpsertWithWhereUniqueWithoutPollInputSchema),z.lazy(() => PollVotesUpsertWithWhereUniqueWithoutPollInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PollVotesCreateManyPollInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PollVotesUpdateWithWhereUniqueWithoutPollInputSchema),z.lazy(() => PollVotesUpdateWithWhereUniqueWithoutPollInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PollVotesUpdateManyWithWhereWithoutPollInputSchema),z.lazy(() => PollVotesUpdateManyWithWhereWithoutPollInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PollVotesScalarWhereInputSchema),z.lazy(() => PollVotesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PollVotesUncheckedUpdateManyWithoutPollNestedInputSchema;
