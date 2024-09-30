import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserWhereInputSchema } from './SteamUserWhereInputSchema';
import { SteamUserUpdateWithoutUserInputSchema } from './SteamUserUpdateWithoutUserInputSchema';
import { SteamUserUncheckedUpdateWithoutUserInputSchema } from './SteamUserUncheckedUpdateWithoutUserInputSchema';

export const SteamUserUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.SteamUserUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => SteamUserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SteamUserUpdateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default SteamUserUpdateToOneWithWhereWithoutUserInputSchema;
