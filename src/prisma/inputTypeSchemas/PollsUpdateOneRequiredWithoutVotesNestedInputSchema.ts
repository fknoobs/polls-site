import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateWithoutVotesInputSchema } from './PollsCreateWithoutVotesInputSchema';
import { PollsUncheckedCreateWithoutVotesInputSchema } from './PollsUncheckedCreateWithoutVotesInputSchema';
import { PollsCreateOrConnectWithoutVotesInputSchema } from './PollsCreateOrConnectWithoutVotesInputSchema';
import { PollsUpsertWithoutVotesInputSchema } from './PollsUpsertWithoutVotesInputSchema';
import { PollsWhereUniqueInputSchema } from './PollsWhereUniqueInputSchema';
import { PollsUpdateToOneWithWhereWithoutVotesInputSchema } from './PollsUpdateToOneWithWhereWithoutVotesInputSchema';
import { PollsUpdateWithoutVotesInputSchema } from './PollsUpdateWithoutVotesInputSchema';
import { PollsUncheckedUpdateWithoutVotesInputSchema } from './PollsUncheckedUpdateWithoutVotesInputSchema';

export const PollsUpdateOneRequiredWithoutVotesNestedInputSchema: z.ZodType<Prisma.PollsUpdateOneRequiredWithoutVotesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PollsCreateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedCreateWithoutVotesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PollsCreateOrConnectWithoutVotesInputSchema).optional(),
  upsert: z.lazy(() => PollsUpsertWithoutVotesInputSchema).optional(),
  connect: z.lazy(() => PollsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PollsUpdateToOneWithWhereWithoutVotesInputSchema),z.lazy(() => PollsUpdateWithoutVotesInputSchema),z.lazy(() => PollsUncheckedUpdateWithoutVotesInputSchema) ]).optional(),
}).strict();

export default PollsUpdateOneRequiredWithoutVotesNestedInputSchema;
