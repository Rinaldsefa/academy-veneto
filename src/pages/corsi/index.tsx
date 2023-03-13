import Head from "next/head";
import Steps from "@/components/steps";
import Header from "@/components/ui/header";
import StepNavigation from "@/components/steps/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
				className={`bg-white overflow-hidden flex flex-col h-screen justify-end ${inter.className}`}
			>
				<Header />

				<main className="flex flex-col flex-1 overflow-y-scroll">
					<Steps />
				</main>

				<StepNavigation />
			</div>
		</>
	);
}
