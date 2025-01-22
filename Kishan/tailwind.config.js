/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            fontFamily: { Lora: ["Lora", "serif"], Worksans: ["Work Sans", "serief"] },
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}