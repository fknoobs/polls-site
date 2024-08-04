import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';
import { SteamProfileUpdateWithoutUserInputSchema } from './SteamProfileUpdateWithoutUserInputSchema';
import { SteamProfileUncheckedUpdateWithoutUserInputSchema } from './SteamProfileUncheckedUpdateWithoutUserInputSchema';

export const SteamProfileUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SteamProfileUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SteamProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SteamProfileUpdateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default SteamProfileUpdateToOneWithWhereWithoutUserInputSchema;
