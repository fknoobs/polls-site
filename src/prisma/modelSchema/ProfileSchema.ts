import { z } from 'zod';

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  displayName: z.string(),
  steamId: z.string().nullable(),
  steamProfile: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Profile = z.infer<typeof ProfileSchema>

export default ProfileSchema;
