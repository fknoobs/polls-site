import { NODE_ENV } from '$env/static/private';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { fail, type ActionFailure } from '@sveltejs/kit';
import type { ZodIssue, ZodSchema } from 'zod'
import { logger } from './stores/logger.svelte';

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
        normalizedData[key as keyof T] = value === '' || value === null ? undefined : value;
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

/**
 * Attempt to execute a callable
 * 
 * It catches the error and instead of throwing it, 
 * return a sveltekit `ActionFailure`
 * 
 * @param callable 
 * @param args
 */
export const attempt = async <T extends (...args: any[]) => any>(callable: T, ...args: Parameters<T>): Promise<ReturnType<T> | ActionFailure<any>> => {
    try {
        return await callable(...args)
    } catch(_) {
        logger.error(_)
        return error(_, args)
    }
}