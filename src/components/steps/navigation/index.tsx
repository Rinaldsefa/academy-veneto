import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import Circle from "./circle";

interface StepperProps {
	value: number;
	classes?: string;
}

const Stepper = ({ value, classes = "" }: StepperProps) => {
	const [active, setActive] = useState(0);
	return (
		<div className={`relative overflow-hidden ${classes}`}>
			<div className="absolute inset-0 flex items-center" aria-hidden="true">
				<div className="w-full border-t border-gray-300" />
			</div>
			<div className="relative flex flex-nowrap p-12  justify-center">
				<LayoutGroup id="navigation">
					<Circle index={0} current={active} onClick={() => setActive(0)} />
					<Circle index={1} current={active} onClick={() => setActive(1)} />
					<Circle index={2} current={active} onClick={() => setActive(2)} />
					<Circle index={3} current={active} onClick={() => setActive(3)} />
				</LayoutGroup>
			</div>
		</div>
	);
};

export default Stepper;
