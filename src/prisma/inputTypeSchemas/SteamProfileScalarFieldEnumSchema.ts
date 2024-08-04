import { z } from 'zod';

export const SteamProfileScalarFieldEnumSchema = z.enum(['id','userId','steamId','createdAt','updatedAt']);

export default SteamProfileScalarFieldEnumSchema;
