import { ArrowRightIcon } from "@heroicons/react/24/solid";

type CtaProps = {
	onClick: () => void;
	text: string;
	classes?: string;
};

const Cta = ({ onClick, classes, text }: CtaProps) => {
	return (
		<button
			className={`shadow-xl py-2 px-8 max-w-8 rounded-full text-white text-normal flex items-center justify-center text-lg uppercase ${classes}`}
			onClick={onClick}
		>
			{text}
			<ArrowRightIcon className="w-6 h-6 ml-2" />
		</button>
	);
};

export default Cta;
