import Ball from "@/components/ui/ball";
import Circle from "@/components/ui/ball";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";
import Image from "next/image";

const Kpi = () => {
	const textAnimation = {
		hidden: { opacity: 0, y: 10 },
		show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
	};

	const balloonAnimation = {
		hidden: { opacity: 0, y: 80 },
		show: { opacity: 1, y: 0, transition: { duration: 1 } },
	};

	return (
		<>
			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-8 md:gap-12 my-16">
				<Ball color="green">
					<Text classes="text-xl text-purple-700 font-semibold uppercase">
						Il veneto è la terra dell'alta educazione!
					</Text>

					<div className="absolute -left-10 top-36">
						<Image
							alt="phone"
							src="/assets/kpi/10.png"
							width={120}
							height={120}
						/>
					</div>
				</Ball>

				<Ball color="green">
					<Text classes="text-xl text-purple-700 font-semibold uppercase">
						Il veneto è la terra dell'alta educazione!
					</Text>

					<div className="absolute -left-10 top-36">
						<Image
							alt="phone"
							src="/assets/kpi/10.png"
							width={120}
							height={120}
						/>
					</div>
				</Ball>

				<Ball color="green">
					<Text classes="text-xl text-purple-700 font-semibold uppercase">
						Il veneto è la terra dell'alta educazione!
					</Text>

					<div className="absolute -left-10 top-36">
						<Image
							alt="phone"
							src="/assets/kpi/10.png"
							width={120}
							height={120}
						/>
					</div>
				</Ball>
			</div>

			<motion.div variants={textAnimation}>
				<Text classes="text-indigo-500 font-semibold text-2xl">
					opportunità lavorative reali?
				</Text>
			</motion.div>
		</>
	);
};

export default Kpi;
