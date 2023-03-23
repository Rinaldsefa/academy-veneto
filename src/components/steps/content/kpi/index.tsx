import Ball from "@/components/ui/ball";
import Notification from "@/components/ui/notification";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";
import Image from "next/image";

const Kpi = () => {
	const textAnimation = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	const balloonAnimation = {
		hidden: { opacity: 0, y: 80 },
		show: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	return (
		<>
			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 md:gap-12">
				<motion.div variants={balloonAnimation}>
					<Ball color="green">
						<Text
							classes="text-xs md:text-lg text-purple-700 font-semibold uppercase"
							text="Il veneto è la terra dell'alta educazione!"
						/>
						<motion.div
							animate={{ y: [20, 0, 20], x: [20, 10, 20] }}
							transition={{
								repeat: Infinity,
								duration: 2,
								type: "spring",
								delay: 0.2,
							}}
							className="absolute md:-left-10 top-32 md:top-36"
						>
							<Image
								alt="phone"
								src="/assets/kpi/10.png"
								className="w-20 h-20 md:w-40 md:h-40"
								width={120}
								height={120}
							/>
						</motion.div>
					</Ball>
				</motion.div>

				<motion.div variants={balloonAnimation}>
					<Ball color="purple" classes="md:w-96 md:h-96">
						<Text
							classes="text-xs md:text-xl text-black md:mt-4 font-semibold uppercase mb-0"
							text="meno parole e più fatti"
						/>

						<Text
							classes="text-3xl md:text-[100px] md:mt-12 text-black font-bold uppercase mb-0"
							text="l'86%"
						/>

						<Text
							classes=" font-semibold text-xs md:hidden block mb-0"
							text="dei nostri studenti trova lavoro entro 1 anno dal diploma!"
						/>

						<motion.div
							animate={{ x: [-20, -10, -20] }}
							transition={{
								repeat: Infinity,
								duration: 2,
								type: "spring",
								delay: 0.4,
							}}
							className="absolute top-28 md:top-32"
						>
							<Image
								alt="phone"
								src="/assets/kpi/11.png"
								className="w-36 h-36 md:w-[280px] md:h-[280px]"
								width={280}
								height={280}
							/>
						</motion.div>
					</Ball>
				</motion.div>

				<motion.div variants={balloonAnimation}>
					<Ball color="red" classes="justify-between">
						<Text
							classes="text-3xl font-semibold uppercase md:mt-4 mb-0"
							text="4%"
						/>

						<motion.div
							animate={{ x: [-20, -10, -20] }}
							transition={{
								repeat: Infinity,
								duration: 2,
								type: "spring",
								delay: 0.8,
							}}
							className="absolute md:top-20"
						>
							<Image
								alt="phone"
								src="/assets/kpi/12.png"
								width={120}
								height={120}
							/>
						</motion.div>

						<Text
							classes="text-xs md:text-lg font-semibold uppercase md:mt-16 mb-0"
							text="Lo stesso dato nelle altre realtà"
						/>
					</Ball>
				</motion.div>
			</div>

			<motion.div variants={textAnimation}>
				<Text
					classes="font-semibold text-2xl hidden md:block"
					text="dei nostri studenti trova lavoro"
				/>
			</motion.div>
			<motion.div variants={textAnimation}>
				<Text
					classes="font-semibold text-2xl hidden md:block"
					text="entro 1 anno dal diploma!"
				/>
			</motion.div>

			{/* <Notification>
				<Text
					classes="text-sm mb-0"
					text="Sei curioso di conoscere le espereienze degli studenti che hanno già provato? Clicca qui"
				/>
			</Notification> */}
		</>
	);
};

export default Kpi;
