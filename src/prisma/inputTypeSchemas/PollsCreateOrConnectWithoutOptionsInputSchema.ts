import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereUniqueInputSchema } from './PollsWhereUniqueInputSchema';
import { PollsCreateWithoutOptionsInputSchema } from './PollsCreateWithoutOptionsInputSchema';
import { PollsUncheckedCreateWithoutOptionsInputSchema } from './PollsUncheckedCreateWithoutOptionsInputSchema';

export const PollsCreateOrConnectWithoutOptionsInputSchema: z.ZodType<Prisma.PollsCreateOrConnectWithoutOptionsInput> = z.object({
  where: z.lazy(() => PollsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PollsCreateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedCreateWithoutOptionsInputSchema) ]),
}).strict();

export default PollsCreateOrConnectWithoutOptionsInputSchema;
