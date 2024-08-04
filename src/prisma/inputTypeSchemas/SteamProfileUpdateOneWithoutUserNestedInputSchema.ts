import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileCreateWithoutUserInputSchema } from './SteamProfileCreateWithoutUserInputSchema';
import { SteamProfileUncheckedCreateWithoutUserInputSchema } from './SteamProfileUncheckedCreateWithoutUserInputSchema';
import { SteamProfileCreateOrConnectWithoutUserInputSchema } from './SteamProfileCreateOrConnectWithoutUserInputSchema';
import { SteamProfileUpsertWithoutUserInputSchema } from './SteamProfileUpsertWithoutUserInputSchema';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';
import { SteamProfileWhereUniqueInputSchema } from './SteamProfileWhereUniqueInputSchema';
import { SteamProfileUpdateToOneWithWhereWithoutUserInputSchema } from './SteamProfileUpdateToOneWithWhereWithoutUserInputSchema';
import { SteamProfileUpdateWithoutUserInputSchema } from './SteamProfileUpdateWithoutUserInputSchema';
import { SteamProfileUncheckedUpdateWithoutUserInputSchema } from './SteamProfileUncheckedUpdateWithoutUserInputSchema';

export const SteamProfileUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SteamProfileUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SteamProfileCreateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SteamProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SteamProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SteamProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SteamProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SteamProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SteamProfileUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SteamProfileUpdateWithoutUserInputSchema),z.lazy(() => SteamProfileUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default SteamProfileUpdateOneWithoutUserNestedInputSchema;
