import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { fail } from '@sveltejs/kit';
import type { ZodIssue, ZodSchema } from 'zod'

/**
 * Marks empty values as undefined
 * 
 * **Example**
 * ```js
 * const data = normalizeData({
 *    prop: '' // undefined
 * })
 * ```
 * 
 * @param data 
 */
export const normalizeData = <T extends Record<string, any>>(data: T): T => {
    const normalizedData: Partial<T> = {};

    for (const [key, value] of Object.entries(data)) {
        normalizedData[key as keyof T] = value === '' ? undefined : value;
    }

    return normalizedData as T;
}

export const validate = <T extends Record<string, any>>(schema: ZodSchema, dataToValidate: T) => {
    let errors: Partial<{[key in keyof T]: ZodIssue}> | undefined = undefined
    let { success, data, error } = schema.safeParse(normalizeData(dataToValidate))
   
    if (error) {
        errors = {}
        
        for (const err of error.errors) {
            errors[err.path[0] as keyof T] = err
        }
    }
    
    return {
        success,
        data: (data as typeof dataToValidate),
        errors
    }
}

export const error = <T extends Record<string, any>>(error: unknown | PrismaClientKnownRequestError, data: T) => {
    /**
     * This can be any type of error
     * 
     * Since we dont know just return 500 status error,
     * Maybe add some logging in future for debugging
     */
    if (!(error instanceof PrismaClientKnownRequestError)) {
        return fail(500, { statusText: 'Something went wrong.' })
    }

    let errors: Partial<{[key in keyof T]: any}> | undefined = {}

    // Unique constaint error
    if (error.code === 'P2002') {        
        (error.meta?.target as string[]).forEach((field: keyof T) => {
            /**
             * Slug gets generated based on either title or name fields
             * So we can safely set both fields as error
             * 
             * In front end we just pick the correct one based on key
             */
            if (field === 'slug') {
                // @ts-ignore
                errors['title'] = {
                    message: 'Already exists, choose another title'
                }
                // @ts-ignore
                errors['name'] = {
                    message: 'Already exists, choose another title'
                }
            } else {
                errors[field] = {
                    message: 'Already exists, choose another title'
                }
            }
        })
    }

    return fail(400, errors)
}