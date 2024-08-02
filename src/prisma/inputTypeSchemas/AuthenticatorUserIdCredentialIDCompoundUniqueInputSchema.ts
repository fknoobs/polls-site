import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema: z.ZodType<Prisma.AuthenticatorUserIdCredentialIDCompoundUniqueInput> = z.object({
  userId: z.string(),
  credentialID: z.string()
}).strict();

export default AuthenticatorUserIdCredentialIDCompoundUniqueInputSchema;
