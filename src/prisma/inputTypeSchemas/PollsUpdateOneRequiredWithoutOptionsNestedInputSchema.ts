import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsCreateWithoutOptionsInputSchema } from './PollsCreateWithoutOptionsInputSchema';
import { PollsUncheckedCreateWithoutOptionsInputSchema } from './PollsUncheckedCreateWithoutOptionsInputSchema';
import { PollsCreateOrConnectWithoutOptionsInputSchema } from './PollsCreateOrConnectWithoutOptionsInputSchema';
import { PollsUpsertWithoutOptionsInputSchema } from './PollsUpsertWithoutOptionsInputSchema';
import { PollsWhereUniqueInputSchema } from './PollsWhereUniqueInputSchema';
import { PollsUpdateToOneWithWhereWithoutOptionsInputSchema } from './PollsUpdateToOneWithWhereWithoutOptionsInputSchema';
import { PollsUpdateWithoutOptionsInputSchema } from './PollsUpdateWithoutOptionsInputSchema';
import { PollsUncheckedUpdateWithoutOptionsInputSchema } from './PollsUncheckedUpdateWithoutOptionsInputSchema';

export const PollsUpdateOneRequiredWithoutOptionsNestedInputSchema: z.ZodType<Prisma.PollsUpdateOneRequiredWithoutOptionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PollsCreateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedCreateWithoutOptionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PollsCreateOrConnectWithoutOptionsInputSchema).optional(),
  upsert: z.lazy(() => PollsUpsertWithoutOptionsInputSchema).optional(),
  connect: z.lazy(() => PollsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PollsUpdateToOneWithWhereWithoutOptionsInputSchema),z.lazy(() => PollsUpdateWithoutOptionsInputSchema),z.lazy(() => PollsUncheckedUpdateWithoutOptionsInputSchema) ]).optional(),
}).strict();

export default PollsUpdateOneRequiredWithoutOptionsNestedInputSchema;
