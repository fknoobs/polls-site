import { browser, dev } from '$app/environment';

import pino, { type LoggerOptions } from 'pino';
import { get, readable, type Readable } from 'svelte/store';

// Default log level will be set to silent but will be modified as per the environment in context.
const defaultLogLevel = 'debug';

// This is an IIFE, self executing funtion. It will return the Pino Logger instance 
const pinoLogger: PinoLogger = (() => {
    let pinoOptions: LoggerOptions;

    if (browser) {
        // If logger is running in browser, pretty print it.
        pinoOptions = {
            browser: { asObject: false },
            level: defaultLogLevel, // set default log level
            // format the level in the log to be uppercase.
            formatters: {
                level: label => {
                    return { level: label.toUpperCase() };
                },
            },
            transport: {
                target: 'pino-pretty',
                options: {
                    colorize: true, // show colors in log
                    levelFirst: true, // show levels first in log
                    translateTime: true, // translate the time in human readable format
                },
            },
        }
    } else {
        // If logger is running in the server, do not pretty print it.
        pinoOptions = {
            level: defaultLogLevel,
            formatters: {
                level: label => {
                    return { level: label.toUpperCase() };
                },
            },
        };
    }

    return pino(pinoOptions);
})();

// Create a Readable store for the logger as it value is never going to change.
const instance: Readable<PinoLogger> = readable<PinoLogger>(pinoLogger);

// Exporting the logger value obtained by get() function as to always import the logger file from lib folder.
export const logger = get(instance);

// One don't need to export, if they want to use the subscribe method or the $ syntax.