import { z } from 'zod';

export const SteamUserScalarFieldEnumSchema = z.enum(['steamId','userId']);

export default SteamUserScalarFieldEnumSchema;
