import { z } from 'zod';

/////////////////////////////////////////
// TOURNEY TEAMS SCHEMA
/////////////////////////////////////////

export const TourneyTeamsSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  tourneyId: z.number().int(),
})

export type TourneyTeams = z.infer<typeof TourneyTeamsSchema>

export default TourneyTeamsSchema;
