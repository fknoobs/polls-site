import { NODE_ENV } from '$env/static/private';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { fail, type ActionFailure } from '@sveltejs/kit';
import type { ZodIssue, ZodSchema } from 'zod'
import { logger } from './stores/logger.svelte';
import { set } from 'lodash-es';

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
export const normalizeData = <T extends Record<string, any>|T[]>(data: T): T => {
    const normalizedData: Partial<T> = {};

    for (const [key, value] of Object.entries(data)) {
        normalizedData[key as keyof T] = value === '' || value === null ? undefined : value;
    }

    return normalizedData as T;
}

/**
 * Validate data against a *zod schema*
 * 
 * @param schema 
 * @param dataToValidate 
 */
export const validate = <T extends Record<string, any>>(schema: ZodSchema, dataToValidate: T) => {
    const normalizedData = normalizeData(dataToValidate);
    const { success, data, error } = schema.safeParse(normalizedData);
    
    let errors: ValidationErrors<T>

    if (error) {
        errors = {}

        for (const err of error.errors) {
            set(errors, err.path, err)
        }
    }

    return {
        success,
        data: data as typeof dataToValidate,
        errors
    }
}


/**
 * Parse formData object into JavaScript object
 * 
 * @param formData 
 * @returns 
 */
export const formData = <T>(formData: FormData): T => {
    const root = {};

    for (let [path, value] of formData) {
        /**
         * Account for path that represents array
         * Eg: badges[]
         * 
         * Update path with an index
         * Eg: badges[0]
         */
        if (path.endsWith('[]')) {
            path = path.replace('[]', `[${formData.getAll(path).findIndex(i => i === value)}]`)
        }
        
        set(root, path, value);
    }
    
    return root as T;
}

/**
 * Wrapper around fail
 * 
 * Will throw human readable errors to frontend
 * 
 * @param error 
 * @param data 
 * @returns 
 */
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
                    message: 'Already exists, choose another name'
                }
            } else {
                errors[field] = {
                    message: `Already exists, choose another ${field.toString()}`
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
 * returns a sveltekit `ActionFailure`
 * 
 * @param callable 
 * @param args
 */
export const attempt = async <T extends (...args: any[]) => any>(callable: T, ...args: Parameters<T>): Promise<ReturnType<T> | ActionFailure<any>> => {
    try {
        return await callable(...args)
    } catch(_) {
        console.log(_)
        return error(_, args)
    }
}