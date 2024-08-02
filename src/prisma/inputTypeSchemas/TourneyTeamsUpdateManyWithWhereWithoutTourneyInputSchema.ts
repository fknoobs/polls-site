import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsScalarWhereInputSchema } from './TourneyTeamsScalarWhereInputSchema';
import { TourneyTeamsUpdateManyMutationInputSchema } from './TourneyTeamsUpdateManyMutationInputSchema';
import { TourneyTeamsUncheckedUpdateManyWithoutTourneyInputSchema } from './TourneyTeamsUncheckedUpdateManyWithoutTourneyInputSchema';

export const TourneyTeamsUpdateManyWithWhereWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateManyWithWhereWithoutTourneyInput> = z.object({
  where: z.lazy(() => TourneyTeamsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TourneyTeamsUpdateManyMutationInputSchema),z.lazy(() => TourneyTeamsUncheckedUpdateManyWithoutTourneyInputSchema) ]),
}).strict();

export default TourneyTeamsUpdateManyWithWhereWithoutTourneyInputSchema;
