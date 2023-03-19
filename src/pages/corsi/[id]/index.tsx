import Header from "@/components/ui/header";
import { GetStaticProps } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { Inter } from "next/font/google";
import CourseLabel from "@/components/ui/course-label";
import Image from "next/image";
import { courses } from "@/constants";
import { Course } from "@/types/course";
import Cta from "@/components/ui/cta";
import Partners from "@/components/ui/partners";

const inter = Inter({ subsets: ["latin"] });

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
	console.log(course.id);
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
				className={`bg-white flex flex-col overflow-hidden justify-end ${inter.className}`}
			>
				<Header />
				<main className="flex flex-col flex-1 overflow-y-scroll items-center">
					<div
						className={`relative w-full ${course.classes} h-32 md:h-48 flex flex-col items-center p-4 `}
					>
						<h5 className="uppercase tracking-widest font-black text-black opacity-40 mt-4 md:mt-8">
							{course.title}
						</h5>
						<div className="absolute top-3 md:top-8 left-1/2 translate-y-1/2 shadow-xl bg-white -translate-x-1/2 w-28 h-28 md:w-36 md:h-36 rounded-full">
							<Image
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
														height={18}
														src={course.bulletIcon}
													/>
													<span className="text-center md:text-sm md:font-medium">
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
