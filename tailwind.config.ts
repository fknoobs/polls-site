import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            backgroundImage: {
                'progress': 'url(/progress-pattern-2-black.png)'
            }
        }
    },

    plugins: []
} as Config;