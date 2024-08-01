import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateNestedOneWithoutOptionsInputSchema } from './PollsCreateNestedOneWithoutOptionsInputSchema';
import { PollVotesCreateNestedManyWithoutOptionInputSchema } from './PollVotesCreateNestedManyWithoutOptionInputSchema';

export const PollOptionsCreateInputSchema: z.ZodType<Prisma.PollOptionsCreateInput> = z.object({
  name: z.string(),
  poll: z.lazy(() => PollsCreateNestedOneWithoutOptionsInputSchema),
  votes: z.lazy(() => PollVotesCreateNestedManyWithoutOptionInputSchema).optional()
}).strict();

export default PollOptionsCreateInputSchema;
