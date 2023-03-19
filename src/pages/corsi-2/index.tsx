import Head from "next/head";
import Steps from "@/components/steps";
import Header from "@/components/ui/header";
import localFont from "next/font/local";

export const aileron = localFont({
	src: [
		{
			path: "../../styles/fonts/Aileron-UltraLight.otf",
			weight: "300",
			style: "normal",
		},
		{
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
		},
	],
});

export default function Courses() {
	return (
		<>
			<Head>
				<title>Corsi</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div
				className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${aileron.className}`}
			>
				<Header />

				<main className="flex flex-col flex-1 overflow-y-scroll">
					<Steps />
				</main>
			</div>
		</>
	);
}
