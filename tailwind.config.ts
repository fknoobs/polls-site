import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            backgroundImage: {
                'progress': 'url(/handdrawn-lines.svg)'
            },
            boxShadow: {
                'drop': '20px 20px 0 0 rgba(0, 0, 0, 1)',
            },
            colors: {
                'primary': {
                    '50': '#fffeeb',
                    '100': '#fdfac8',
                    '200': '#fcf58b',
                    '300': '#faea4f',
                    '400': '#f8db27',
                    '500': '#f2bd0e',
                    '600': '#d69409',
                    '700': '#b26a0b',
                    '800': '#905210',
                    '900': '#774310',
                    '950': '#442304',
                },
            }
        }
    },

    plugins: []
} as Config;