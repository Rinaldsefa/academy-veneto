import Balloon, { BalloonProps } from "@/components/ui/balloon";
import Cta from "@/components/ui/cta";
import Text from "@/components/ui/text";
import { LayoutGroup, motion } from "framer-motion";
import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.6,
				staggerChildren: 0.8,
				duration: 1,
			},
		},
	};

	return (
		<LayoutGroup>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="px-8 py-8 h-full flex flex-col overflow-scroll md:max-w-screen-lg md:mx-auto justify-between items-center"
			>
				{children}

				<Cta
					text="Avanti"
					classes="mt-8 bg-indigo-700"
					onClick={() => console.log("ua")}
				/>
			</motion.div>
		</LayoutGroup>
	);
};

export default Content;
