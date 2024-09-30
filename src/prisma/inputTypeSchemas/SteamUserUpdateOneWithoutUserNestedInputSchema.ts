import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserCreateWithoutUserInputSchema } from './SteamUserCreateWithoutUserInputSchema';
import { SteamUserUncheckedCreateWithoutUserInputSchema } from './SteamUserUncheckedCreateWithoutUserInputSchema';
import { SteamUserCreateOrConnectWithoutUserInputSchema } from './SteamUserCreateOrConnectWithoutUserInputSchema';
import { SteamUserUpsertWithoutUserInputSchema } from './SteamUserUpsertWithoutUserInputSchema';
import { SteamUserWhereInputSchema } from './SteamUserWhereInputSchema';
import { SteamUserWhereUniqueInputSchema } from './SteamUserWhereUniqueInputSchema';
import { SteamUserUpdateToOneWithWhereWithoutUserInputSchema } from './SteamUserUpdateToOneWithWhereWithoutUserInputSchema';
import { SteamUserUpdateWithoutUserInputSchema } from './SteamUserUpdateWithoutUserInputSchema';
import { SteamUserUncheckedUpdateWithoutUserInputSchema } from './SteamUserUncheckedUpdateWithoutUserInputSchema';

export const SteamUserUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.SteamUserUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => SteamUserCreateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SteamUserCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => SteamUserUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => SteamUserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => SteamUserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => SteamUserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => SteamUserUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => SteamUserUpdateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export default SteamUserUpdateOneWithoutUserNestedInputSchema;
