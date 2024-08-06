import { fail } from "@sveltejs/kit";
import type { Service } from "./services/service";

export function Auth() {
    return function (target: Service, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target.session)
        if (!target.session) {
            return fail(403, { statusText: 'You are not authorized.' })
        }
    }
}