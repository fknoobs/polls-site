import { z } from 'zod';

export const ProfileScalarFieldEnumSchema = z.enum(['id','userId','displayName','steamId','steamProfile','createdAt','updatedAt']);

export default ProfileScalarFieldEnumSchema;
