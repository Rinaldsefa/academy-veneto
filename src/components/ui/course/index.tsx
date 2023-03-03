import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Text from "../text";

export type CourseProps = {
	icon: string;
	href: string;
	title: string;
	classes?: string;
	delay?: number;
};

const Course = ({ icon, href, delay, title, classes }: CourseProps) => {
	return (
		<Link href={href}>
			<div className="flex flex-col items-center justify-center cursor-pointer">
				<div
					className={` bg-purple-100 shadow-xl h-40 w-40 rounded-lg relative flex flex-col items-center justify-between min-h-8  ${classes}`}
				>
					<motion.div
						animate={{ y: [20, 10, 20] }}
						transition={{
							repeat: Infinity,
							duration: 2,
							type: "spring",
							delay: delay || 0,
						}}
					>
						<Image alt={icon} src={icon} width={120} height={120} />
					</motion.div>
				</div>
				<Text classes="tracking-wide mt-6 text-xs font-black uppercase">
					{title}
				</Text>
			</div>
		</Link>
	);
};

export default Course;
