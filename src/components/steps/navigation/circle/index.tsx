import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type CircleProps = {
	index: number;
	current: number;
	onClick: () => void;
};

const Circle = ({ index, current, onClick }: CircleProps) => {
	const distance = index - current;
	const x = distance * 120;
	const scale = 1.3 - Math.abs(distance) * 0.15;
	const isComplete = index < current;
	const color = () => {
		if (index < current) {
			return "bg-blue-300";
		} else if (index === current) {
			return "bg-primary";
		} else {
			return "bg-gray-200";
		}
	};

	return (
		<motion.button
			transition={{ type: "ease-in-out", stiffness: 300, damping: 30 }}
			animate={{ x, scale }}
			onClick={onClick}
			type="button"
			className={`shadow-xl p-2 absolute bottom-1/3 h-12 w-12 items-center justify-center rounded-full ${color()}  text-white`}
		>
			{isComplete ? (
				<CheckIcon className="h-6 w-8" />
			) : current === index ? (
				<Image
					alt="nav"
					src="/assets/common/4.png"
					width={24}
					height={24}
					className="w-full"
				/>
			) : (
				""
			)}
		</motion.button>
	);
};

export default Circle;
