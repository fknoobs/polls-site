import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserWhereUniqueInputSchema } from './SteamUserWhereUniqueInputSchema';
import { SteamUserCreateWithoutUserInputSchema } from './SteamUserCreateWithoutUserInputSchema';
import { SteamUserUncheckedCreateWithoutUserInputSchema } from './SteamUserUncheckedCreateWithoutUserInputSchema';

export const SteamUserCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.SteamUserCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => SteamUserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => SteamUserCreateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default SteamUserCreateOrConnectWithoutUserInputSchema;
