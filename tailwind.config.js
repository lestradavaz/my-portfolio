/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class', // Habilitar modo oscuro basado en clases
    theme: {
        extend: {
            fontFamily: {
                satoshi: ['Satoshi', 'sans-serif']
            },
            colors: {
                lime: {
                    50: '#f7fee7',
                    100: '#ecfccb',
                    200: '#d9f99d',
                    300: '#bef264',
                    400: '#a3e635',
                    500: '#84cc16',
                    600: '#65a30d',
                    700: '#4d7c0f',
                    800: '#3f6212',
                    900: '#365314'
                }
            }
        }
    },
    plugins: []
};
