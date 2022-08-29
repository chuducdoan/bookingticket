const autoprefixer = require('autoprefixer');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            borderRadius: {
                'none': '0'
            },
            container: {
                "margin": '0 auto'
            }
        },
    },
    plugins: [],
}