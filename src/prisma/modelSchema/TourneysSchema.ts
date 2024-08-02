import { z } from 'zod';

/////////////////////////////////////////
// TOURNEYS SCHEMA
/////////////////////////////////////////

export const TourneysSchema = z.object({
  id: z.number().int(),
  name: z.string(),
  slug: z.string().nullable(),
  type: z.number().int(),
  description: z.string().nullable(),
  rules: z.string().nullable(),
  startDate: z.coerce.date(),
  endDate: z.coerce.date().nullable(),
  registrationsOpen: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  userId: z.string(),
})

export type Tourneys = z.infer<typeof TourneysSchema>

export default TourneysSchema;
