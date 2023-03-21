import Header from "@/components/ui/header";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";

import CourseLabel from "@/components/ui/course-label";
import Image from "next/image";
import { courses } from "@/constants";
import { Course } from "@/types/course";
import Cta from "@/components/ui/cta";
import Partners from "@/components/ui/partners";

import localFont from "next/font/local";
import CourseSelector from "@/components/ui/course-selector";

export const aileron = localFont({
	src: [
		{
			path: "../../../styles/fonts/Aileron-UltraLight.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../../styles/fonts/Aileron-Light.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../../styles/fonts/Aileron-Regular.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../../styles/fonts/Aileron-SemiBold.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../../styles/fonts/Aileron-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../../styles/fonts/Aileron-Black.otf",
			weight: "800",
			style: "normal",
		},
	],
});

export async function getStaticPaths() {
	const coursesId = courses.map((course) => {
		return {
			params: {
				id: course.id,
			},
		};
	});
	return {
		paths: coursesId,
		fallback: false,
	};
}

export const getStaticProps: GetStaticProps = async (context) => {
	const { id } = context.params as CourseParams;
	const course = courses.find((course) => course.id === id);
	return {
		props: { course: course },
	};
};

export const CoursePage = (props: CoursePageProps) => {
	const { course } = props;

	return (
		<>
			<Head>
				<title>Academy Veneto - {course.title}</title>
				<meta
					name="description"
					content={`Academy Veneto offre una vasta collezione di corsi professionali. Scopri di più sul corso di ${course.title}`}
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href={course.bulletIcon} />
			</Head>

			<div
				className={`bg-white flex flex-col overflow-hidden justify-end ${aileron.className}`}
			>
				<Header />
				<main className="flex flex-col flex-1 overflow-y-scroll items-center">
					<div
						className={`relative w-full ${course.classes} h-48 md:h-64 flex flex-col items-center p-4`}
					>
						<CourseSelector selected={course} />
						<h5 className="uppercase tracking-widest font-black text-black opacity-40 mt-8 md:mt-16">
							{course.title}
						</h5>
						<div className="absolute top-20 md:top-24 left-1/2 translate-y-1/2 shadow-xl bg-white -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full">
							<Image
								blurDataURL={course.icon}
								alt={course.title}
								src={course.icon}
								className="p-4 w-full h-full object-cover"
								width={100}
								height={100}
							/>
						</div>
					</div>

					<CourseLabel classes="mt-16" text={course.label} />

					<div className="flex flex-col items-center py-8 px-4 w-full">
						{course.degrees.map((degree, index) => (
							<div
								className="flex w-full flex-col items-center gap-4 md:gap-8"
								key={`${course.id}-degree-${index}`}
							>
								<Image
									alt=""
									src={degree.img}
									width={200}
									height={200}
									blurDataURL={degree.img}
									className="w-36 h-36 md:w-44 md:h-44"
								/>
								{degree.bulletPoints.map((bulletPoint, i) => (
									<div
										className="flex flex-col justify-center w-full max-w-screen-xl"
										key={`${course.id}-degree-${index}-bullet-point-${i}`}
									>
										<h6 className="font-semibold md:text-2xl md:text-center mb-4">
											{bulletPoint.label}
										</h6>
										<ul className="flex flex-col md:flex-row md:flex-wrap gap-2 md:gap-4 justify-center md:items-center">
											{bulletPoint.list.map((listItem) => (
												<li
													className="font-extralight flex items-center "
													key={listItem}
												>
													<Image
														className="mr-2 h-4 w-4"
														alt=""
														width={24}
														blurDataURL={course.bulletIcon}
														height={18}
														src={course.bulletIcon}
													/>
													<span className="md:text-sm md:font-semibold text-left">
														{listItem}
													</span>
												</li>
											))}
										</ul>
									</div>
								))}

								<Cta
									targetBlank={true}
									href={degree.href}
									text="Scopri di più"
									classes="bg-primary my-8"
								/>
							</div>
						))}

						<Partners />
					</div>
				</main>
			</div>
		</>
	);
};

export default CoursePage;

interface CourseParams extends ParsedUrlQuery {
	id: string;
}

type CoursePageProps = {
	course: Course;
};
