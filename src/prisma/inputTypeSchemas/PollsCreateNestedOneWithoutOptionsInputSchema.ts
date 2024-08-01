import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateWithoutOptionsInputSchema } from './PollsCreateWithoutOptionsInputSchema';
import { PollsUncheckedCreateWithoutOptionsInputSchema } from './PollsUncheckedCreateWithoutOptionsInputSchema';
import { PollsCreateOrConnectWithoutOptionsInputSchema } from './PollsCreateOrConnectWithoutOptionsInputSchema';
import { PollsWhereUniqueInputSchema } from './PollsWhereUniqueInputSchema';

export const PollsCreateNestedOneWithoutOptionsInputSchema: z.ZodType<Prisma.PollsCreateNestedOneWithoutOptionsInput> = z.object({
  create: z.union([ z.lazy(() => PollsCreateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedCreateWithoutOptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PollsCreateOrConnectWithoutOptionsInputSchema).optional(),
  connect: z.lazy(() => PollsWhereUniqueInputSchema).optional()
}).strict();

export default PollsCreateNestedOneWithoutOptionsInputSchema;
