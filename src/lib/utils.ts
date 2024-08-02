import set from "lodash-es/set"
import type { ZodIssue, ZodType } from "zod"

export const classNames = (...classes: string[]) => classes.join(' ')

export const normalizeValue = (value: any): any => {
    if (value instanceof File) {
        // If the value is a File object, return it as is
        return value;
    } else if (typeof value === 'string') {
        const trimmedValue = value.trim();

        // Check for empty string
        if (trimmedValue === '') {
            return undefined;
        }

        // Check for boolean strings
        if (trimmedValue.toLowerCase() === 'true') {
            return true;
        }
        if (trimmedValue.toLowerCase() === 'false') {
            return false;
        }

        // Check for null or undefined strings
        if (trimmedValue.toLowerCase() === 'null') {
            return null;
        }
        if (trimmedValue.toLowerCase() === 'undefined') {
            return undefined;
        }

        // Check if the trimmed value is a valid numeric string
        const parsedNumber = parseFloat(trimmedValue);
        if (!isNaN(parsedNumber) && /^\d*\.?\d+$/.test(trimmedValue)) {
            return parsedNumber;
        }

        // Default case: return the trimmed string
        return trimmedValue;
    } else if (typeof value === 'number') {
        // Return number as is
        return value;
    } else if (typeof value === 'boolean') {
        // Return boolean as is
        return value;
    } else if (value === null) {
        // Return null as is
        return null;
    } else if (value === undefined) {
        // Return undefined as is
        return undefined;
    } else {
        // For any unexpected types, return the value unchanged
        return value;
    }
}

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
        
        set(root, path, normalizeValue(value));
    }
    
    return root as T;
}

export const validate = <T extends ZodType>
    (schema: T, d: FormData): {
        errors: {[key in keyof T['_output']]: ZodIssue} | null
        success: boolean,
        data: T['_output']
    } => {
    
    const formDataErrors: Record<string, any> = {}
    const formDataParsed = formData<T['_output']>(d)
    const { success, error, data } = schema.safeParse(formDataParsed)
    
    if (error) {
        for (const err of error.errors) {
            if (false === formDataParsed[err.path[0]])  {
                continue
            }

            formDataErrors[err.path[0]] = err
        }
        
        return {
            success,
            errors: formDataErrors as {[key in keyof T['_output']]: ZodIssue},
            data
        }
    }

    return {
        success,
        errors: null,
        data
    }
}