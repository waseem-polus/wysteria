/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./node_modules/@wysteria/design/**/*.{cjs,js,css}"
    ],
    darkMode: "selector",
    important: "#__next",
};
