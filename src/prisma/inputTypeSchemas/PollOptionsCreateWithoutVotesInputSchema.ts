import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateNestedOneWithoutOptionsInputSchema } from './PollsCreateNestedOneWithoutOptionsInputSchema';

export const PollOptionsCreateWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsCreateWithoutVotesInput> = z.object({
  name: z.string(),
  poll: z.lazy(() => PollsCreateNestedOneWithoutOptionsInputSchema)
}).strict();

export default PollOptionsCreateWithoutVotesInputSchema;
