import type {  } from "@auth/sveltekit";
import type { PrismaClient } from "@prisma/client";
import type { Services } from ".";

export class Service {
    constructor(
        /**
         * Prisma client
         * 
         * @protected
        */
        readonly prisma: PrismaClient,
        /**
         * Active user session
         * 
         * @protected
         */
        readonly session: Session | null,
        /**
         * Available services
         * 
         * @protected
         */
        readonly services: Services
    ) {}
}