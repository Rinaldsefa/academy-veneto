import Head from "next/head";
import Steps from "@/components/steps";
import Header from "@/components/ui/header";
import localFont from "next/font/local";
import Welcome from "@/components/steps/content/welcome";
import School from "@/components/steps/content/school";
import Kpi from "@/components/steps/content/kpi";
import Progress from "@/components/steps/content/progress";
import CoursesComponent from "@/components/steps/content/courses";
import Cta from "@/components/ui/cta";

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
				<title>ITS Academy veneto - Alta formazione Post Diploma</title>
				<meta
					name="description"
					content="Scopri tutti i corsi professionali, specializzati dopo il Diplma e trova subito il lavoro dei tuoi sogni"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/common/4.png" />
			</Head>

			<Header />

			<div
				className={`bg-white  flex flex-col  justify-end ${aileron.className}`}
			>
				<main className="flex flex-col flex-1 overflow-y-scroll">
					<div className="px-8 py-8 flex flex-col md:max-w-screen-xl md:mx-auto justify-between items-center">
						<Welcome />
					</div>
					<div className="px-8 py-8 flex flex-col md:max-w-screen-xl md:mx-auto justify-between items-center">
						<School />
					</div>

					<div className="px-8 py-8 relative  flex flex-col md:max-w-screen-xl md:mx-auto justify-between items-center">
						<Kpi />
					</div>

					<div className="px-8 py-8 flex flex-col md:max-w-screen-xl md:mx-auto justify-between items-center">
						<Progress />
					</div>

					<div className="px-8 py-8 flex flex-col md:max-w-screen-xl md:mx-auto justify-between items-center">
						<CoursesComponent />
						<Cta text={"Fai il quiz"} classes="mt-8 bg-sky-500" href="/test" />
					</div>
				</main>
			</div>
		</>
	);
}
