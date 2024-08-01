import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateWithoutVotesInputSchema } from './PollOptionsCreateWithoutVotesInputSchema';
import { PollOptionsUncheckedCreateWithoutVotesInputSchema } from './PollOptionsUncheckedCreateWithoutVotesInputSchema';
import { PollOptionsCreateOrConnectWithoutVotesInputSchema } from './PollOptionsCreateOrConnectWithoutVotesInputSchema';
import { PollOptionsUpsertWithoutVotesInputSchema } from './PollOptionsUpsertWithoutVotesInputSchema';
import { PollOptionsWhereUniqueInputSchema } from './PollOptionsWhereUniqueInputSchema';
import { PollOptionsUpdateToOneWithWhereWithoutVotesInputSchema } from './PollOptionsUpdateToOneWithWhereWithoutVotesInputSchema';
import { PollOptionsUpdateWithoutVotesInputSchema } from './PollOptionsUpdateWithoutVotesInputSchema';
import { PollOptionsUncheckedUpdateWithoutVotesInputSchema } from './PollOptionsUncheckedUpdateWithoutVotesInputSchema';

export const PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema: z.ZodType<Prisma.PollOptionsUpdateOneRequiredWithoutVotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PollOptionsCreateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PollOptionsCreateOrConnectWithoutVotesInputSchema).optional(),
  upsert: z.lazy(() => PollOptionsUpsertWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => PollOptionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PollOptionsUpdateToOneWithWhereWithoutVotesInputSchema),z.lazy(() => PollOptionsUpdateWithoutVotesInputSchema),z.lazy(() => PollOptionsUncheckedUpdateWithoutVotesInputSchema) ]).optional(),
}).strict();

export default PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema;
