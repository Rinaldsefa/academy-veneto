import { useStepsStore } from "@/state/steps";
import { LayoutGroup } from "framer-motion";
import Circle from "./circle";

const Stepper = () => {
	const { steps, current, setCurrent } = useStepsStore();

	return (
		<div className={`relative overflow-hidden`}>
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-300" />
			</div>
			<div className="relative flex flex-nowrap p-12  justify-center">
				<LayoutGroup id="navigation">
					{steps.map((step) => (
						<Circle
							key={step.id}
							index={step.number}
							current={current.number}
							onClick={() => {
								setCurrent(step.id);
								document.getElementById("content")?.scrollTo(0, 0);
							}}
						/>
					))}
				</LayoutGroup>
			</div>
		</div>
	);
};

export default Stepper;
