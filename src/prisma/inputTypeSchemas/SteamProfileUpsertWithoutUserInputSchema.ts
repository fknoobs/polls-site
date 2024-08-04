import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileUpdateWithoutUserInputSchema } from './SteamProfileUpdateWithoutUserInputSchema';
import { SteamProfileUncheckedUpdateWithoutUserInputSchema } from './SteamProfileUncheckedUpdateWithoutUserInputSchema';
import { SteamProfileCreateWithoutUserInputSchema } from './SteamProfileCreateWithoutUserInputSchema';
import { SteamProfileUncheckedCreateWithoutUserInputSchema } from './SteamProfileUncheckedCreateWithoutUserInputSchema';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';

export const SteamProfileUpsertWithoutUserInputSchema: z.ZodType<Prisma.SteamProfileUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => SteamProfileUpdateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SteamProfileCreateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => SteamProfileWhereInputSchema).optional()
}).strict();

export default SteamProfileUpsertWithoutUserInputSchema;
