import { useMemo, useState } from "react";
import Content from "./content";
import Kpi from "./content/kpi";
import School from "./content/school";
import Welcome from "./content/welcome";
import Navigation from "./navigation";

type Step = {
	id: string;
	number: number;
	content: React.ReactNode;
};

const Steps = () => {
	const steps: Step[] = [
		{
			id: "welcome",
			number: 1,
			content: <Welcome />,
		},
		{
			id: "school",
			number: 2,
			content: <School />,
		},
		{
			id: "kpi",
			number: 3,
			content: <Kpi />,
		},
	];

	const [selectedStep, setSelectedStep] = useState<Step>(steps[1]);

	return (
		<div className="h-screen relative flex flex-col overflow-scroll">
			<Content>{selectedStep.content}</Content>
			<Navigation value={selectedStep.number} />
		</div>
	);
};

export default Steps;
