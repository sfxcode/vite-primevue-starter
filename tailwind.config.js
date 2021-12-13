const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    prefix: 'tw-',
    content: [
        './index.html',
        './src/**/*.{vue,js,ts}',
        // etc.
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require('tailwindcss-font-inter')]
}
