import { z } from 'zod';

/////////////////////////////////////////
// POLL OPTIONS SCHEMA
/////////////////////////////////////////

export const PollOptionsSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  pollId: z.number().int(),
})

export type PollOptions = z.infer<typeof PollOptionsSchema>

export default PollOptionsSchema;
