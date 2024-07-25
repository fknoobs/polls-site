import type { PrismaClient } from "@prisma/client";
import { PollService } from "./poll";

export class Services {
    constructor( protected prisma: PrismaClient ) {}

    pollService() {
        return new PollService(this.prisma)
    }
}