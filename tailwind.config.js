/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			boxShadow: {
				"3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
			},
			colors: {
				primary: "#6319e9",
				itsgreen: "#95C11F",
				itsazure: "#3DAAE1",
				itspurple: "#937AB6",
				itsred: "#E3051B",
				itsorange: "#F58700",
				itsgrey: "#575756"
			},
		},
	},
	plugins: [],
};
