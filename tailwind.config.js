/** @type {import('tailwindcss').Config} */

const colorPalette = {
    primary: '#004146',
    accent: '#F2A71B',
    background: '#E3DBD4',
}

module.exports = {
    content: [
        'src/components/**/*.{vue,tsx,jsx,ts,js}',
        'src/*.{vue,tsx,jsx,ts,js}',
    ],
    theme: {
        fontFamily: {
            sans: ['Zen Kaku Gothic Antique'],
            oswald: ['Oswald'],
        },
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            colors: {
                ...colorPalette,
            },
        },
    },
    plugins: [],
}
