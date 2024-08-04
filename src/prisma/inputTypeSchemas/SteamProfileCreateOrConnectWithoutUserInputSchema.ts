import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileWhereUniqueInputSchema } from './SteamProfileWhereUniqueInputSchema';
import { SteamProfileCreateWithoutUserInputSchema } from './SteamProfileCreateWithoutUserInputSchema';
import { SteamProfileUncheckedCreateWithoutUserInputSchema } from './SteamProfileUncheckedCreateWithoutUserInputSchema';

export const SteamProfileCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SteamProfileCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SteamProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SteamProfileCreateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default SteamProfileCreateOrConnectWithoutUserInputSchema;
