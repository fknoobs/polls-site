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
        protected prisma: PrismaClient,
        /**
         * Active user session
         * 
         * @protected
         */
        protected session: Session | null,
        /**
         * Available services
         * 
         * @protected
         */
        protected services: Services
    ) {}
}