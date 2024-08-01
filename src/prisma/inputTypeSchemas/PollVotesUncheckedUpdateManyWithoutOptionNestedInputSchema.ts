import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateWithoutOptionInputSchema } from './PollVotesCreateWithoutOptionInputSchema';
import { PollVotesUncheckedCreateWithoutOptionInputSchema } from './PollVotesUncheckedCreateWithoutOptionInputSchema';
import { PollVotesCreateOrConnectWithoutOptionInputSchema } from './PollVotesCreateOrConnectWithoutOptionInputSchema';
import { PollVotesUpsertWithWhereUniqueWithoutOptionInputSchema } from './PollVotesUpsertWithWhereUniqueWithoutOptionInputSchema';
import { PollVotesCreateManyOptionInputEnvelopeSchema } from './PollVotesCreateManyOptionInputEnvelopeSchema';
import { PollVotesWhereUniqueInputSchema } from './PollVotesWhereUniqueInputSchema';
import { PollVotesUpdateWithWhereUniqueWithoutOptionInputSchema } from './PollVotesUpdateWithWhereUniqueWithoutOptionInputSchema';
import { PollVotesUpdateManyWithWhereWithoutOptionInputSchema } from './PollVotesUpdateManyWithWhereWithoutOptionInputSchema';
import { PollVotesScalarWhereInputSchema } from './PollVotesScalarWhereInputSchema';

export const PollVotesUncheckedUpdateManyWithoutOptionNestedInputSchema: z.ZodType<Prisma.PollVotesUncheckedUpdateManyWithoutOptionNestedInput> = z.object({
  create: z.union([ z.lazy(() => PollVotesCreateWithoutOptionInputSchema),z.lazy(() => PollVotesCreateWithoutOptionInputSchema).array(),z.lazy(() => PollVotesUncheckedCreateWithoutOptionInputSchema),z.lazy(() => PollVotesUncheckedCreateWithoutOptionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PollVotesCreateOrConnectWithoutOptionInputSchema),z.lazy(() => PollVotesCreateOrConnectWithoutOptionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PollVotesUpsertWithWhereUniqueWithoutOptionInputSchema),z.lazy(() => PollVotesUpsertWithWhereUniqueWithoutOptionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PollVotesCreateManyOptionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PollVotesWhereUniqueInputSchema),z.lazy(() => PollVotesWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PollVotesUpdateWithWhereUniqueWithoutOptionInputSchema),z.lazy(() => PollVotesUpdateWithWhereUniqueWithoutOptionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PollVotesUpdateManyWithWhereWithoutOptionInputSchema),z.lazy(() => PollVotesUpdateManyWithWhereWithoutOptionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PollVotesScalarWhereInputSchema),z.lazy(() => PollVotesScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PollVotesUncheckedUpdateManyWithoutOptionNestedInputSchema;
