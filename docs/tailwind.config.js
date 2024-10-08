/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
        "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
    ],
    transform: {
        md: (content) => {
            return remark().process(content);
        },
    },
    darkMode: "selector",
    important: "#__next",
};
