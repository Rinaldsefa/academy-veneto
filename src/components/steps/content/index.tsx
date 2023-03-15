import Cta from "@/components/ui/cta";
import { useStepsStore } from "@/state/steps";
import { LayoutGroup, motion } from "framer-motion";
import { FC, PropsWithChildren, useEffect, useRef } from "react";

const Content: FC<PropsWithChildren> = ({ children }) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const { steps, current, setCurrent } = useStepsStore();

	const isLastStep = current.number === steps.length;
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			scrollY: 0,
			y: 0,
			transition: {
				duration: 1,
			},
		},
	};

	console.log(isLastStep);

	return (
		<LayoutGroup>
			<motion.div
				id="content"
				ref={contentRef}
				variants={container}
				initial="hidden"
				animate="show"
				className="px-8 py-8 h-full flex flex-col overflow-scroll md:max-w-screen-xl md:mx-auto justify-between items-center"
			>
				{current.content}

				{isLastStep ? (
					<Cta text={"Fai il quiz"} classes="mt-8 bg-sky-500" href="/test" />
				) : (
					<Cta
						text={"Avanti"}
						classes="mt-8 bg-primary"
						onClick={() => {
							contentRef.current?.scrollTo(0, 0);
							setCurrent(
								steps.find((step) => step.number === current.number + 1)?.id ||
									current.id
							);
						}}
					/>
				)}
			</motion.div>
		</LayoutGroup>
	);
};

export default Content;
