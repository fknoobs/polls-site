import { z } from 'zod';

/////////////////////////////////////////
// STEAM USER SCHEMA
/////////////////////////////////////////

export const SteamUserSchema = z.object({
  steamId: z.string(),
  userId: z.string(),
})

export type SteamUser = z.infer<typeof SteamUserSchema>

export default SteamUserSchema;
