import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserCreateWithoutUserInputSchema } from './SteamUserCreateWithoutUserInputSchema';
import { SteamUserUncheckedCreateWithoutUserInputSchema } from './SteamUserUncheckedCreateWithoutUserInputSchema';
import { SteamUserCreateOrConnectWithoutUserInputSchema } from './SteamUserCreateOrConnectWithoutUserInputSchema';
import { SteamUserWhereUniqueInputSchema } from './SteamUserWhereUniqueInputSchema';

export const SteamUserUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SteamUserUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SteamUserCreateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SteamUserCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SteamUserWhereUniqueInputSchema).optional()
}).strict();

export default SteamUserUncheckedCreateNestedOneWithoutUserInputSchema;
