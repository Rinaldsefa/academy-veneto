// pages/_app.js
import localFont from "next/font/local";

export const aileron = localFont({
	src: [
		{
			path: "/Users/samuelepiazzesi/Documents/repos/academy-veneto/src/styles/fonts/Aileron-Black.otf",
			weight: "300",
			style: "normal",
		},
		/* {
			path: "../../styles/fonts/Aileron-Light.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../styles/fonts/Aileron-Regular.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../styles/fonts/Aileron-SemiBold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../styles/fonts/Aileron-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../styles/fonts/Aileron-Black.otf",
			weight: "800",
			style: "normal",
		}, */
	],
});
