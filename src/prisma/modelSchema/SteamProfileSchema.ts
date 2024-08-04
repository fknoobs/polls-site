import { z } from 'zod';

/////////////////////////////////////////
// STEAM PROFILE SCHEMA
/////////////////////////////////////////

export const SteamProfileSchema = z.object({
  id: z.string().cuid(),
  userId: z.string(),
  steamId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SteamProfile = z.infer<typeof SteamProfileSchema>

export default SteamProfileSchema;
