import Head from "next/head";

import { Inter } from "next/font/google";

import Image from "next/image";
import Header from "@/components/ui/header";
import Avatars from "@/components/ui/avatars";
import List from "@/components/ui/list";
import Cta from "@/components/ui/cta";
import Partners from "@/components/ui/partners";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Head>
				<title>ITS Academy veneto - Alta formazione Post Diploma</title>
				<meta
					name="description"
					content="Scegli il tuo percorso, scegli le aziende con cui fare esperienza, Coltiva le tue abilità"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/common/4.png" />
			</Head>

			<Header />

			<main
				className={`bg-white flex flex-col items-center  p-8 ${inter.className}`}
				style={{
					backgroundImage: `url("/assets/home/veneto.png")`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "contain",
				}}
			>
				<Image
					src="/assets/common/logo.png"
					width={320}
					height={80}
					className="w-48 md:w-96"
					alt="logo"
				/>
				<Avatars />

				<h5 className="text-center md:text-2xl mb-4 font-medium">
					Il percorso di studi presente in{" "}
					<span className="uppercase">Veneto </span>{" "}
					<span className="text-primary font-semibold">che costruisci tu:</span>
				</h5>

				<List />

				<h6 className="mt-8 mb-2 text-center md:text-xl">
					Vuoi saperne di più?
				</h6>
				<Cta href="/corsi" text="Inizia" classes="bg-green-500" />

				<Partners />
			</main>
		</>
	);
}
