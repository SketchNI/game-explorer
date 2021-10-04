const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: [
            'components/**/*.{vue,js}',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.{js,ts}',
            'nuxt.config.{js,ts}'
        ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: [
                'Work Sans',
                ...defaultTheme.fontFamily.sans
            ],
        },
        extend: {
            colors: {
                gray: colors.trueGray,
                orange: colors.orange,
                purple: colors.violet,
                red: colors.rose
            }
        }
    },
    variants: {
        extend: {
            ring: ['hover']
        }
    },
    plugins: []
}
