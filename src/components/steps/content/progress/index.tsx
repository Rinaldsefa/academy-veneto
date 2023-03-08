import Text from "@/components/ui/text";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Progress = () => {
	const constraintsRef = useRef(null);

	const textAnimation = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	return (
		<>
			<motion.div variants={textAnimation}>
				<Text classes="text-lg md:text-3xl font-semibold" text="Meno teoria" />
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-xl md:text-4xl font-semibold uppercase text-indigo-700"
					text="tanta pratica"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-lg md:text-3xl font-semibold"
					text="per trovare da subito un lavoro specializzato e ben retribuito"
				/>
			</motion.div>

			<div className="hidden md:block relative h-16 w-[480px] bg-red-300 my-12 rounded-full">
				<motion.div
					className="absolute h-16 bg-pink-600 top-0 left-0 right-0 origin-left rounded-full"
					animate={{ scaleX: [0, 1] }}
					transition={{ duration: 3, type: "ease" }}
				/>

				<motion.div
					className="absolute w-[145px] -top-8 -left-12"
					animate={{ x: [0, 460] }}
					transition={{ duration: 3, type: "ease", delay: 0.5 }}
				>
					<Image
						className="w-full h-full"
						alt="progress image"
						src="/assets/progress/13.png"
						width={180}
						height={180}
					/>
				</motion.div>
			</div>

			<div
				ref={constraintsRef}
				className="md:hidden relative min-h-[280px] w-16 bg-red-300 my-12 rounded-full"
			>
				<motion.div
					className="absolute w-16 bg-pink-600  top-0 left-0 right-0 origin-center rounded-full"
					animate={{ height: [0, 280] }}
					transition={{ duration: 4, type: "ease" }}
				/>

				<motion.div
					className="absolute w-[145px] -top-8 -left-12"
					animate={{ y: [0, 230] }}
					transition={{ duration: 4, type: "ease", delay: 1 }}
				>
					<Image
						className="w-full h-full"
						alt="progress image"
						src="/assets/progress/13.png"
						width={180}
						height={180}
					/>
				</motion.div>
			</div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-xl md:text-4xl text-indigo-700 font-semibold"
					text="Più di un 1/3 del percorso è svolto in azienda"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-lg md:text-3xl"
					text="in modo da immergerti fin da subito nel mondo del lavoro...anche
					all'estero!"
				/>
			</motion.div>
		</>
	);
};

export default Progress;
