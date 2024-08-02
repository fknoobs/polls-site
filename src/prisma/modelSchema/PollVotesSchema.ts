import { z } from 'zod';

/////////////////////////////////////////
// POLL VOTES SCHEMA
/////////////////////////////////////////

export const PollVotesSchema = z.object({
  id: z.number().int(),
  fingerprint: z.string(),
  ipaddress: z.string(),
  pollId: z.number().int(),
  optionId: z.number().int(),
})

export type PollVotes = z.infer<typeof PollVotesSchema>

export default PollVotesSchema;
