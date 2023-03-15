import Text from "../text";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export type BalloonProps = {
	type: "horizontal" | "vertical";
	text: string;
	icon: string;
	delay?: number;
};

const Balloon = ({ type, text, icon, delay }: BalloonProps) => {
	if (type === "horizontal") {
		return (
			<div className="bg-blue-200 shadow-xl rounded-full relative  flex items-center justify-center p-4 px-8">
				<motion.div
					animate={{ x: [-20, -10, -20] }}
					transition={{
						repeat: Infinity,
						duration: 2,
						type: "spring",
						delay: delay || 0,
					}}
					className="absolute top-0 left-0"
				>
					<Image alt={icon} src={icon} width={60} height={60} />
				</motion.div>

				<Text text={text} classes="mb-0" />
			</div>
		);
	}
	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			className=" bg-blue-200 shadow-2xl h-48 w-40 rounded-xl relative flex flex-col items-center justify-between min-h-8 p-6"
		>
			<Text classes="font-semibold tracking-wide mb-0" text={text} />
			<motion.div
				animate={{ y: [20, 10, 20] }}
				transition={{
					repeat: Infinity,
					duration: 2,
					type: "spring",
					delay: delay || 0,
				}}
				className="absolute top-20"
			>
				<Image alt={icon} src={icon} width={140} height={140} />
			</motion.div>
		</motion.div>
	);
};

export default Balloon;
