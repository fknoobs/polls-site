import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { AccountUncheckedUpdateManyWithoutUserNestedInputSchema } from './AccountUncheckedUpdateManyWithoutUserNestedInputSchema';
import { SessionUncheckedUpdateManyWithoutUserNestedInputSchema } from './SessionUncheckedUpdateManyWithoutUserNestedInputSchema';
import { AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema } from './AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema';
import { SteamUserUncheckedUpdateOneWithoutUserNestedInputSchema } from './SteamUserUncheckedUpdateOneWithoutUserNestedInputSchema';
import { TourneysUncheckedUpdateManyWithoutCreatedByNestedInputSchema } from './TourneysUncheckedUpdateManyWithoutCreatedByNestedInputSchema';

export const UserUncheckedUpdateWithoutSteamInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSteamInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  emailVerified: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  image: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  steamUser: z.lazy(() => SteamUserUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysUncheckedUpdateManyWithoutCreatedByNestedInputSchema).optional()
}).strict();

export default UserUncheckedUpdateWithoutSteamInputSchema;
