import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateWithoutPollInputSchema } from './PollOptionsCreateWithoutPollInputSchema';
import { PollOptionsUncheckedCreateWithoutPollInputSchema } from './PollOptionsUncheckedCreateWithoutPollInputSchema';
import { PollOptionsCreateOrConnectWithoutPollInputSchema } from './PollOptionsCreateOrConnectWithoutPollInputSchema';
import { PollOptionsUpsertWithWhereUniqueWithoutPollInputSchema } from './PollOptionsUpsertWithWhereUniqueWithoutPollInputSchema';
import { PollOptionsCreateManyPollInputEnvelopeSchema } from './PollOptionsCreateManyPollInputEnvelopeSchema';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';
import { PollOptionsUpdateWithWhereUniqueWithoutPollInputSchema } from './PollOptionsUpdateWithWhereUniqueWithoutPollInputSchema';
import { PollOptionsUpdateManyWithWhereWithoutPollInputSchema } from './PollOptionsUpdateManyWithWhereWithoutPollInputSchema';
import { PollOptionsScalarWhereInputSchema } from './PollOptionsScalarWhereInputSchema';

export const PollOptionsUpdateManyWithoutPollNestedInputSchema: z.ZodType<Prisma.PollOptionsUpdateManyWithoutPollNestedInput> = z.object({
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutPollInputSchema),z.lazy(() => PollOptionsCreateWithoutPollInputSchema).array(),z.lazy(() => PollOptionsUncheckedCreateWithoutPollInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutPollInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PollOptionsCreateOrConnectWithoutPollInputSchema),z.lazy(() => PollOptionsCreateOrConnectWithoutPollInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PollOptionsUpsertWithWhereUniqueWithoutPollInputSchema),z.lazy(() => PollOptionsUpsertWithWhereUniqueWithoutPollInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PollOptionsCreateManyPollInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PollOptionsWhereUniqueInputSchema),z.lazy(() => PollOptionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PollOptionsWhereUniqueInputSchema),z.lazy(() => PollOptionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PollOptionsWhereUniqueInputSchema),z.lazy(() => PollOptionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PollOptionsWhereUniqueInputSchema),z.lazy(() => PollOptionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PollOptionsUpdateWithWhereUniqueWithoutPollInputSchema),z.lazy(() => PollOptionsUpdateWithWhereUniqueWithoutPollInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PollOptionsUpdateManyWithWhereWithoutPollInputSchema),z.lazy(() => PollOptionsUpdateManyWithWhereWithoutPollInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PollOptionsScalarWhereInputSchema),z.lazy(() => PollOptionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PollOptionsUpdateManyWithoutPollNestedInputSchema;
