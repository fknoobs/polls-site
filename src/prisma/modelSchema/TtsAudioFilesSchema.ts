import { z } from 'zod';

/////////////////////////////////////////
// TTS AUDIO FILES SCHEMA
/////////////////////////////////////////

export const TtsAudioFilesSchema = z.object({
  id: z.number().int(),
  rewardName: z.string(),
  userName: z.string(),
  input: z.string(),
  filePath: z.string(),
})

export type TtsAudioFiles = z.infer<typeof TtsAudioFilesSchema>

export default TtsAudioFilesSchema;
