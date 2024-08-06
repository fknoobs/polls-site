import { z } from 'zod';

/////////////////////////////////////////
// TOURNEY PLAYERS SCHEMA
/////////////////////////////////////////

export const TourneyPlayersSchema = z.object({
  id: z.number().int(),
  steamId: z.string(),
  player: z.string(),
  profile: z.string(),
  timezone: z.string(),
  teamId: z.string(),
})

export type TourneyPlayers = z.infer<typeof TourneyPlayersSchema>

export default TourneyPlayersSchema;
