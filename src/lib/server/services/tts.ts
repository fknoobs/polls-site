import type { PrismaClient } from "@prisma/client";

export class TtsService {
    constructor(protected prisma: PrismaClient) {}

    /**
     * Add a new TTS audio file
     * 
     * @param rewardName    - Name of the reward
     * @param userName      - User that redeemed the reward
     * @param input         - The text input the user provided
     * @param filePath      - The path to the audio file
     */
    async addTtsAudioFile(rewardName: string, userName: string, input: string, filePath: string) {
        const data = {
            rewardName,
            userName,
            input,
            filePath
        }

        await this.prisma.ttsQueue.create({
            data: {
                ttsFile: {
                    create: data
                }
            }
        })
    }

    /**
     * Get next audio file in queue
     * 
     * @returns 
     */
    async getNextInQueue() {
        const next = await this.prisma.ttsQueue.findFirst({ include: { ttsFile: true } })

        if (next) {
            /**
             * Remove from queue
             */
            await this.prisma.ttsQueue.delete({ where: { id: next.id } })
        }

        return next
    }

    /**
     * Returns audio files in queue
     */
    async getQueue() {
        return this.prisma.ttsQueue.findMany({ take: 100, include: { ttsFile: true } })
    }
}