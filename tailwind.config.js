/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "myprimary": "#FFD11A",
                ' mainColorBlack': '#262626',
                ' firstColorBlack': '#141414',
                'secondColorBlack': '#333333 ',
                "thirdColorBlack": "#1A1A1A",
                'firstColorYellow': '#FFD11A',
                'secondColorYellow': '#FFCE22 ',
                "TextColorGray1": "#98989A",
                "TextColorGray2": "#7E7E81",
                "TextColorGray3": "#666666",
                "TextColorGray4": "#98989A",
                "TextColorGray5": "#CCCCCC",

            },
            fontFamily: {
                "inter": "var(--inter-font)",
                "kumbhSans": "var(--kumbh-font)",
            }
        },
    },
    plugins: [],
}