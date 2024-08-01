import { z } from 'zod';

export const PollVotesScalarFieldEnumSchema = z.enum(['id','fingerprint','pollId','optionId']);

export default PollVotesScalarFieldEnumSchema;
