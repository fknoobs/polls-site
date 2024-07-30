import type { PrismaClient } from "@prisma/client";
import { PollService } from "./poll";
import { TtsService } from "./tts";
import { Relic } from "./relic";
import { Steam } from "./steam";
import { Tourneys } from "./tourneys";

export class Services {
    constructor( protected prisma: PrismaClient ) {}

    pollService() {
        return new PollService(this.prisma)
    }

    ttsService() {
        return new TtsService(this.prisma)
    }

    relic() {
        return new Relic(this.prisma)
    }

    steam() {
        return new Steam(this.prisma)
    }

    tourneys() {
        return new Tourneys(this.prisma)
    }
}