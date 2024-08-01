import { z } from 'zod';

export const PollsScalarFieldEnumSchema = z.enum(['id','title','slug','description']);

export default PollsScalarFieldEnumSchema;
