import Content from "./content";
import Navigation from "./navigation";

const Steps = () => {
	return (
		<div className="h-screen relative flex flex-col overflow-scroll">
			<Content />
			<Navigation />
		</div>
	);
};

export default Steps;
