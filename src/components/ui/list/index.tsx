import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { LayoutGroup, motion } from "framer-motion";

const List = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.3,
				duration: 0.5,
			},
		},
	};

	const balloonAnimation = {
		hidden: { opacity: 0, y: 80 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.2, type: "spring" },
		},
	};

	return (
		<LayoutGroup>
			<motion.ul variants={container} initial="hidden" animate="show">
				<motion.li variants={balloonAnimation} className="flex items-center">
					<CheckBadgeIcon className="text-primary w-8 h-8 mr-4" />
					<p>
						Scegli il tuo{" "}
						<span className="text-primary font-semibold">percorso</span>
					</p>
				</motion.li>
				<motion.li variants={balloonAnimation} className="flex items-center">
					<CheckBadgeIcon className="text-primary w-8 h-8 mr-4" />
					<p>
						Scegli
						<span className="text-primary font-semibold"> le aziende</span> con
						cui fare esperienza
					</p>
				</motion.li>
				<motion.li variants={balloonAnimation} className="flex items-center">
					<CheckBadgeIcon className="text-primary w-8 h-8 mr-4" />
					<p>
						<span className="text-primary font-semibold">Sviluppa</span> i tuoi
						talenti
					</p>
				</motion.li>
			</motion.ul>
		</LayoutGroup>
	);
};

export default List;
