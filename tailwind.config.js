/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: "#fff3f1",
                    100: "#ffe4e0",
                    200: "#ffcec6",
                    300: "#ffab9e",
                    400: "#ff7c67",
                    500: "#fc5237",
                    600: "#ea3518",
                    700: "#c52910",
                    800: "#a32511",
                    900: "#862516",
                    950: "#490f06",
                },
            },
        },
    },
    plugins: [],
};
