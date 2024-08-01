import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorCreateWithoutUserInputSchema } from './AuthenticatorCreateWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateWithoutUserInputSchema } from './AuthenticatorUncheckedCreateWithoutUserInputSchema';
import { AuthenticatorCreateOrConnectWithoutUserInputSchema } from './AuthenticatorCreateOrConnectWithoutUserInputSchema';
import { AuthenticatorCreateManyUserInputEnvelopeSchema } from './AuthenticatorCreateManyUserInputEnvelopeSchema';
import { AuthenticatorWhereUniqueInputSchema } from './AuthenticatorWhereUniqueInputSchema';

export const AuthenticatorCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateWithoutUserInputSchema).array(),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema),z.lazy(() => AuthenticatorCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AuthenticatorCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AuthenticatorWhereUniqueInputSchema),z.lazy(() => AuthenticatorWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default AuthenticatorCreateNestedManyWithoutUserInputSchema;
