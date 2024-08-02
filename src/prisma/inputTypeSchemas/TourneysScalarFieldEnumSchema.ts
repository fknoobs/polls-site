import { z } from 'zod';

export const TourneysScalarFieldEnumSchema = z.enum(['id','name','slug','type','description','rules','startDate','endDate','registrationsOpen','createdAt','updatedAt','userId']);

export default TourneysScalarFieldEnumSchema;
