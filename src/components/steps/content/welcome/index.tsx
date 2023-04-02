import Balloon, { BalloonProps } from "@/components/ui/balloon";
import Text from "@/components/ui/text";
import { motion } from "framer-motion";

const Welcome = () => {
	const balloons: BalloonProps[] = [
		{
			type: "horizontal",
			text: "Hai meno di 29 anni",
			icon: "/assets/welcome/1.png",
		},
		{
			type: "horizontal",
			text: "Vuoi raggiungere obiettivi concreti velocemente",
			icon: "/assets/welcome/2.png",
		},
		{
			type: "horizontal",
			text: "Vuoi approcciarti in fretta al mondo lavorativo",
			icon: "/assets/welcome/3.png",
		},
		{
			type: "horizontal",
			text: "Avere un'istruzione di alto livello",
			icon: "/assets/welcome/4.png",
		},
		{
			type: "horizontal",
			text: "Investire nel tuo futuro in maniera intelligente",
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
				<Text
					classes="text-lg md:text-3xl font-semibold mb-4"
					text="Benvenuto/a!"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="md:text-xl mb-4"
					text="Ti parlerò brevemente degli ITS, ovvero i percorsi di"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text
					classes="text-primary text-xl md:text-4xl font-semibold mb-4"
					text="Specializzazione Tecnica Post Diploma!"
				/>
			</motion.div>

			<motion.div variants={textAnimation}>
				<Text classes="md:text-xl mb-4" text="Sono ideali se:" />
			</motion.div>

			<div className="flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-6 md:gap-8">
				{balloons.map((balloon, index) => (
					<motion.div variants={balloonAnimation} key={`bal-${index}`}>
						<Balloon {...balloon} delay={index * 0.3} />
					</motion.div>
				))}
			</div>

			<motion.div variants={textAnimation}>
				<Text
					classes="mt-8 text-xl md:text-4xl font-semibold"
					text="Siamo quello che fa per te!"
				/>
			</motion.div>
		</>
	);
};

export default Welcome;
