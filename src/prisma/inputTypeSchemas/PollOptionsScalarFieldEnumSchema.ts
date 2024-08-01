import { z } from 'zod';

export const PollOptionsScalarFieldEnumSchema = z.enum(['id','name','pollId']);

export default PollOptionsScalarFieldEnumSchema;
