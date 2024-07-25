// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            services: import('./lib/server/services').Services
            prisma: import('@prisma/client').PrismaClient
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
