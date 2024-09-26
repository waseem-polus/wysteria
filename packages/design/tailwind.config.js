/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: "selector",
    theme: {
        fontFamily: {
            sans: ["Work Sans", "sans-serif"],
        },
        extend: {
            animation: {
                "show-dialog": "dialog 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                "show-popover": "popover 150ms cubic-bezier(0.16, 1, 0.3, 1)",
            },
            keyframes: {
                dialog: {
                    "0%": {
                        opacity: 0,
                        transform: "translate(-50%, -48%) scale(0.96)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translate(-50%, -50%) scale(1)",
                    },
                },
                popover: {
                    "0%": {
                        opacity: 0,
                        transform: "scale(0.96)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                },
            },
        },
    },
    plugins: [],
};
