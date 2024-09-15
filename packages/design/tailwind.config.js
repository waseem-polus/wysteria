/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: "selector",
    theme: {
        extend: {
            animation: {
                "show-popover": "popover 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                popover: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-50%, -48%) scale(0.96)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
