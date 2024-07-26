import type { PrismaClient } from "@prisma/client";
import { PollService } from "./poll";
import { TtsService } from "./tts";

export class Services {
    constructor( protected prisma: PrismaClient ) {}

    pollService() {
        return new PollService(this.prisma)
    }

    ttsService() {
        return new TtsService(this.prisma)
    }
}