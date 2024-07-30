import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{html,js,svelte,ts}"],

    theme: {
        extend: {
            container: {
                center: true
            },
            backgroundImage: {
                'progress': 'url(/handdrawn-line-4.svg)'
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
                'stone': {
                    '50': '#f5f5f6',
                    '100': '#e6e6e7',
                    '200': '#d0d0d1',
                    '300': '#b0aeb2',
                    '400': '#87868a',
                    '500': '#6c6b6f',
                    '600': '#5d5b5f',
                    '700': '#4f4e50',
                    '800': '#444345',
                    '900': '#3c3c3d',
                    '950': '#272527',
                },
            }
        }
    },

    plugins: []
} as Config;