import Balloon, { BalloonProps } from "@/components/ui/balloon";
import Cta from "@/components/ui/cta";
import Text from "@/components/ui/text";
import { useStepsStore } from "@/state/steps";
import { LayoutGroup, motion, useScroll } from "framer-motion";
import { FC, PropsWithChildren } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
	const { steps, current, setCurrent } = useStepsStore();
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
				className="px-8 py-8 h-full flex flex-col overflow-scroll md:max-w-screen-xl md:mx-auto justify-between items-center"
			>
				{current.content}

				<Cta
					text="Avanti"
					classes="mt-8 bg-primary"
					onClick={() => {
						setCurrent(
							steps.find((step) => step.number === current.number + 1)?.id ||
								current.id
						);
						window.scrollTo(0, 0);
					}}
				/>
			</motion.div>
		</LayoutGroup>
	);
};

export default Content;
