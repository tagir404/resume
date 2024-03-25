/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        screens: {
            'xl': '1280px',
            'lg': {'max': '1023px'},
            'sm': {'max': '639px'}
        },
        extend: {
            fontFamily: {
                "comfortaa": ['Comfortaa', 'sans-serif']
            }
        },
    },
    plugins: [],
}