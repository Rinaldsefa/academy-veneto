import Balloon, { BalloonProps } from "@/components/ui/balloon";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";

const School = () => {
	const balloons: BalloonProps[] = [
		{
			type: "vertical",
			text: "Lezioni Moderne",
			icon: "/assets/school/6.png",
		},
		{
			type: "vertical",
			text: "Docenti dalle aziende",
			icon: "/assets/school/7.png",
		},
		{
			type: "vertical",
			text: "Lavori di gruppo",
			icon: "/assets/school/8.png",
		},
		{
			type: "vertical",
			text: "86% tasso di occupazione",
			icon: "/assets/school/9.png",
		},
	];

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
			<motion.div variants={textAnimation}>
				<Text
					classes="md:text-2xl"
					text="Cerchi un percoso di alta formazione che ti dia delle cometenze
					pratiche e"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-indigo-500 font-semibold text-lg md:text-2xl"
					text="	opportunità lavorative reali?"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="md:text-3xl text-xl font-semibold"
					text="Siamo in tutte le province del Veneto"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="bg-indigo-400 text-xl mdtext-4xl font-bold p-2 md:p-4 rounded-lg text-white shadow-lg"
					text="	Alcune nostre caratteristiche"
				/>
			</motion.div>

			<div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center mt-8 gap-12 md:gap-8">
				{balloons.map((balloon, index) => (
					<motion.div variants={balloonAnimation} key={`bal-${index}`}>
						<Balloon {...balloon} delay={index * 0.3} />
					</motion.div>
				))}
			</div>
		</>
	);
};

export default School;
