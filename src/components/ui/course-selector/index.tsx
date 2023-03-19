import { courses } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Course } from "../../../types/course";

type CourseSelectorProps = {
	selected: Course;
};

const CourseSelector = ({ selected }: CourseSelectorProps) => {
	return (
		<div className="flex  overflow-x-scroll hide-scroll-bar w-full md:w-[1024px]">
			<div className="flex flex-nowrap gap-2">
				{courses.map((course) => (
					<Link href={course.href}>
						<div
							className={` h-12 w-24 rounded-lg flex flex-col items-center justify-center ${
								course.id !== selected.id
									? "opacity-40 shadow-xl"
									: "shadow-3xl"
							}  ${course.classes}`}
						>
							<Image
								alt={course.icon}
								src={course.icon}
								width={36}
								height={36}
							/>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default CourseSelector;
