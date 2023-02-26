import Balloon, { BalloonProps } from "@/components/ui/balloon";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";

const Welcome = () => {
	const balloons: BalloonProps[] = [
		{
			type: "horizontal",
			text: "Hai meno di 29 anni;",
			icon: "/assets/welcome/1.png",
		},
		{
			type: "horizontal",
			text: "Vuoi raggiungere obiettivi concreti velocemente",
			icon: "/assets/welcome/2.png",
		},
		{
			type: "horizontal",
			text: "Vuoi approcciarti in fretta al mondo lavorativo;",
			icon: "/assets/welcome/3.png",
		},
		{
			type: "horizontal",
			text: "Avere un'istruzione di alto livello;",
			icon: "/assets/welcome/4.png",
		},
		{
			type: "horizontal",
			text: "Investire sul tuo futuro in maniera intelligente;",
			icon: "/assets/welcome/5.png",
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
				<Text classes="text-lg md:text-3xl font-semibold">Benvenuto/a!</Text>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text classes="md:text-xl">
					Ti parlerò brevemente degli ITS, ovvero i percorsi di
				</Text>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text classes="text-indigo-500 text-xl md:text-4xl font-bold">
					Specializzazione Tecnica Post Diploma!
				</Text>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text classes="md:text-xl">Se:</Text>
			</motion.div>

			<div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-4 md:gap-8">
				{balloons.map((balloon, index) => (
					<motion.div variants={balloonAnimation}>
						<Balloon key={`bal-${index}`} {...balloon} delay={index * 0.3} />
					</motion.div>
				))}
			</div>

			<motion.div variants={textAnimation}>
				<Text classes="mt-8 text:xl md:text-4xl font-semibold">
					Siamo quello che fa per te!
				</Text>
			</motion.div>
		</>
	);
};

export default Welcome;
