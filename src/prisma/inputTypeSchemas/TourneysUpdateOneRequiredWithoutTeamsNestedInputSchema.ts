import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysCreateWithoutTeamsInputSchema } from './TourneysCreateWithoutTeamsInputSchema';
import { TourneysUncheckedCreateWithoutTeamsInputSchema } from './TourneysUncheckedCreateWithoutTeamsInputSchema';
import { TourneysCreateOrConnectWithoutTeamsInputSchema } from './TourneysCreateOrConnectWithoutTeamsInputSchema';
import { TourneysUpsertWithoutTeamsInputSchema } from './TourneysUpsertWithoutTeamsInputSchema';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';
import { TourneysUpdateToOneWithWhereWithoutTeamsInputSchema } from './TourneysUpdateToOneWithWhereWithoutTeamsInputSchema';
import { TourneysUpdateWithoutTeamsInputSchema } from './TourneysUpdateWithoutTeamsInputSchema';
import { TourneysUncheckedUpdateWithoutTeamsInputSchema } from './TourneysUncheckedUpdateWithoutTeamsInputSchema';

export const TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema: z.ZodType<Prisma.TourneysUpdateOneRequiredWithoutTeamsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourneysCreateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TourneysCreateOrConnectWithoutTeamsInputSchema).optional(),
  upsert: z.lazy(() => TourneysUpsertWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => TourneysWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TourneysUpdateToOneWithWhereWithoutTeamsInputSchema),z.lazy(() => TourneysUpdateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedUpdateWithoutTeamsInputSchema) ]).optional(),
}).strict();

export default TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema;
