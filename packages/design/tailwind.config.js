/** @type {import('tailwindcss').Config} */

export default {
    content: ["./src/**/*.{html,js,jsx}"],
    darkMode: "selector",
    theme: {
        fontFamily: {
            sans: ["Work Sans", "sans-serif"],
        },
        extend: {
            transformOrigin: {
                popover: "var(--radix-popover-content-transform-origin)",
            },
            animation: {
                "show-dialog": "dialog 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                "show-popover-top": "popover-top 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                "show-popover-bottom": "popover-bottom 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                "show-popover-left": "popover-left 150ms cubic-bezier(0.16, 1, 0.3, 1)",
                "show-popover-right": "popover-right 150ms cubic-bezier(0.16, 1, 0.3, 1)",
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
                "popover-top": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(10px) scale(0.96)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                },
                "popover-bottom": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(-10px) scale(0.96)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                },
                "popover-left": {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(10px) scale(0.96)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                },
                "popover-right": {
                    "0%": {
                        opacity: 0,
                        transform: "translateX(-10px) scale(0.96)",
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
