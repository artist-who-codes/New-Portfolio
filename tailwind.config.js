/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'lshadow': '-0.3rem -0.3rem 0.5rem rgba(255, 255, 255, 0.15)',
                'dshadow': '0.3rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3)',
            },
        },
    },
    plugins: [],
}
