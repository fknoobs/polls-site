import { z } from 'zod';

/////////////////////////////////////////
// TTS QUEUE SCHEMA
/////////////////////////////////////////

export const TtsQueueSchema = z.object({
  id: z.number().int(),
  ttsFileId: z.number().int(),
})

export type TtsQueue = z.infer<typeof TtsQueueSchema>

export default TtsQueueSchema;
