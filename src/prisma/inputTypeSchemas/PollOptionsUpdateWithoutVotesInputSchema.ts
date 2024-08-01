import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollsUpdateOneRequiredWithoutOptionsNestedInputSchema } from './PollsUpdateOneRequiredWithoutOptionsNestedInputSchema';

export const PollOptionsUpdateWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsUpdateWithoutVotesInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poll: z.lazy(() => PollsUpdateOneRequiredWithoutOptionsNestedInputSchema).optional()
}).strict();

export default PollOptionsUpdateWithoutVotesInputSchema;
