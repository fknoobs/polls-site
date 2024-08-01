import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorCreateWithoutUserInputSchema } from './AuthenticatorCreateWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateWithoutUserInputSchema } from './AuthenticatorUncheckedCreateWithoutUserInputSchema';
import { AuthenticatorCreateOrConnectWithoutUserInputSchema } from './AuthenticatorCreateOrConnectWithoutUserInputSchema';
import { AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema } from './AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema';
import { AuthenticatorCreateManyUserInputEnvelopeSchema } from './AuthenticatorCreateManyUserInputEnvelopeSchema';
import { AuthenticatorWhereUniqueInputSchema } from './AuthenticatorWhereUniqueInputSchema';
import { AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema } from './AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema';
import { AuthenticatorUpdateManyWithWhereWithoutUserInputSchema } from './AuthenticatorUpdateManyWithWhereWithoutUserInputSchema';
import { AuthenticatorScalarWhereInputSchema } from './AuthenticatorScalarWhereInputSchema';

export const AuthenticatorUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => AuthenticatorUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AuthenticatorScalarWhereInputSchema),z.lazy(() => AuthenticatorScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default AuthenticatorUpdateManyWithoutUserNestedInputSchema;
