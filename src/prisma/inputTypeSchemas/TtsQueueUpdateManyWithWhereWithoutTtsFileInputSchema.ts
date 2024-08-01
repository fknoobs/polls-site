import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueScalarWhereInputSchema } from './TtsQueueScalarWhereInputSchema';
import { TtsQueueUpdateManyMutationInputSchema } from './TtsQueueUpdateManyMutationInputSchema';
import { TtsQueueUncheckedUpdateManyWithoutTtsFileInputSchema } from './TtsQueueUncheckedUpdateManyWithoutTtsFileInputSchema';

export const TtsQueueUpdateManyWithWhereWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueUpdateManyWithWhereWithoutTtsFileInput> = z.object({
  where: z.lazy(() => TtsQueueScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TtsQueueUpdateManyMutationInputSchema),z.lazy(() => TtsQueueUncheckedUpdateManyWithoutTtsFileInputSchema) ]),
}).strict();

export default TtsQueueUpdateManyWithWhereWithoutTtsFileInputSchema;
