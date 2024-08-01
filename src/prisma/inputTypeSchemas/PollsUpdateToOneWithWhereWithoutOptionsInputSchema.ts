import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { PollsUpdateWithoutOptionsInputSchema } from './PollsUpdateWithoutOptionsInputSchema';
import { PollsUncheckedUpdateWithoutOptionsInputSchema } from './PollsUncheckedUpdateWithoutOptionsInputSchema';

export const PollsUpdateToOneWithWhereWithoutOptionsInputSchema: z.ZodType<Prisma.PollsUpdateToOneWithWhereWithoutOptionsInput> = z.object({
  where: z.lazy(() => PollsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PollsUpdateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedUpdateWithoutOptionsInputSchema) ]),
}).strict();

export default PollsUpdateToOneWithWhereWithoutOptionsInputSchema;
