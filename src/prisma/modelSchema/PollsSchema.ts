import { z } from 'zod';

/////////////////////////////////////////
// POLLS SCHEMA
/////////////////////////////////////////

export const PollsSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
})

export type Polls = z.infer<typeof PollsSchema>

export default PollsSchema;
