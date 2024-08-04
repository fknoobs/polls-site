import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileCreateWithoutUserInputSchema } from './SteamProfileCreateWithoutUserInputSchema';
import { SteamProfileUncheckedCreateWithoutUserInputSchema } from './SteamProfileUncheckedCreateWithoutUserInputSchema';
import { SteamProfileCreateOrConnectWithoutUserInputSchema } from './SteamProfileCreateOrConnectWithoutUserInputSchema';
import { SteamProfileWhereUniqueInputSchema } from './SteamProfileWhereUniqueInputSchema';

export const SteamProfileUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.SteamProfileUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => SteamProfileCreateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SteamProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => SteamProfileWhereUniqueInputSchema).optional()
}).strict();

export default SteamProfileUncheckedCreateNestedOneWithoutUserInputSchema;
