import { z } from 'zod';

export const PollsScalarFieldEnumSchema = z.enum(['id','title','slug','description','multiple','minChoices','maxChoices']);

export default PollsScalarFieldEnumSchema;
