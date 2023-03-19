import { Course } from "@/types/course";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Text from "../text";

export interface CourseCardProps extends Course {
	delay?: number;
}

const CourseCard = ({ icon, href, delay, title, classes }: CourseCardProps) => {
	return (
		<Link href={href}>
			<motion.div
				whileHover={{ scale: 1.1 }}
				className="flex flex-col items-center justify-center cursor-pointer"
			>
				<div
					className={` bg-purple-100 shadow-xl h-32 w-40 rounded-lg relative flex flex-col items-center justify-between min-h-8  ${classes}`}
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
						<Image alt={icon} src={icon} width={100} height={100} />
					</motion.div>
				</div>
				<Text
					classes="tracking-wide mt-6 text-xs font-black uppercase"
					text={title}
				/>
			</motion.div>
		</Link>
	);
};

export default CourseCard;
