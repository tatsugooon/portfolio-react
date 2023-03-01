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
            body: [
                '"Lato"',
                '"Noto Sans JP"',
                '"游ゴシック Medium"',
                '"游ゴシック体"',
                '"Yu Gothic Medium"',
                '"YuGothic"',
                '"ヒラギノ角ゴ ProN"',
                '"Hiragino Kaku Gothic ProN"',
                '"メイリオ"',
                '"Meiryo"',
                '"ＭＳ Ｐゴシック"',
                '"MS PGothic"',
                'sans-serif',
            ],
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
