import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial":
					"radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			colors: {
				mainBackgroundColor: "#87BBA2",
				secondaryBackgroundColor: "#3B6064",
				mainTextColor: "#FFFFFF",
				secondairyTextColor: "#C9E4CA",
				tertiaryTextColor: "#364958",
				buttonBackgroundColor: "#3B6064",
				buttontextColor: "#C9E4CA"
			}
		}
	},
	plugins: []
};
export default config;
