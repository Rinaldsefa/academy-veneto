import Courses from "@/components/steps/content/courses";
import Kpi from "@/components/steps/content/kpi";
import Progress from "@/components/steps/content/progress";
import School from "@/components/steps/content/school";
import Welcome from "@/components/steps/content/welcome";
import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type StepId = "welcome" | "school" | "kpi" | "progress" | "courses";

type Step = {
	id: StepId;
	number: number;
	content: React.ReactNode;
};

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
	{
		id: "progress",
		number: 4,
		content: <Progress />,
	},
	{
		id: "courses",
		number: 5,
		content: <Courses />,
	},
];

interface StepsState {
	steps: Step[];
	current: Step;
	setCurrent: (selected: StepId) => void;
}

export const getStep = (id: StepId) => steps.find((step) => step.id === id);

export const useStepsStore = create<StepsState>()(
	devtools(
		(set) => ({
			steps,
			current: steps[0],
			setCurrent: (selected) => set(() => ({ current: getStep(selected) })),
		}),
		{
			name: "steps-storage",
		}
	)
);
