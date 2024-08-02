import { z } from 'zod';

/////////////////////////////////////////
// POLLS SCHEMA
/////////////////////////////////////////

export const PollsSchema = z.object({
  id: z.number().int(),
  title: z.string(),
  slug: z.string().nullable(),
  description: z.string().nullable(),
  multiple: z.boolean(),
  minChoices: z.number().int(),
  maxChoices: z.number().int(),
})

export type Polls = z.infer<typeof PollsSchema>

export default PollsSchema;
