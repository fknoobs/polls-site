import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsUpdateWithoutOptionsInputSchema } from './PollsUpdateWithoutOptionsInputSchema';
import { PollsUncheckedUpdateWithoutOptionsInputSchema } from './PollsUncheckedUpdateWithoutOptionsInputSchema';
import { PollsCreateWithoutOptionsInputSchema } from './PollsCreateWithoutOptionsInputSchema';
import { PollsUncheckedCreateWithoutOptionsInputSchema } from './PollsUncheckedCreateWithoutOptionsInputSchema';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';

export const PollsUpsertWithoutOptionsInputSchema: z.ZodType<Prisma.PollsUpsertWithoutOptionsInput> = z.object({
  update: z.union([ z.lazy(() => PollsUpdateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedUpdateWithoutOptionsInputSchema) ]),
  create: z.union([ z.lazy(() => PollsCreateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedCreateWithoutOptionsInputSchema) ]),
  where: z.lazy(() => PollsWhereInputSchema).optional()
}).strict();

export default PollsUpsertWithoutOptionsInputSchema;
