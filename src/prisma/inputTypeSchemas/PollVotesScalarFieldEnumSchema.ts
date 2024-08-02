import { z } from 'zod';

export const PollVotesScalarFieldEnumSchema = z.enum(['id','fingerprint','ipaddress','pollId','optionId']);

export default PollVotesScalarFieldEnumSchema;
