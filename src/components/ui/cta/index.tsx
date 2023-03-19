import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

interface CommonCtapProps {
	text: string;
	targetBlank?: boolean;
	classes?: string;
}
interface LinkProps extends CommonCtapProps {
	onClick: () => void;
	href?: never;
}

interface AnchorProps extends CommonCtapProps {
	onClick?: never;
	href: string;
}

type CtaProps = LinkProps | AnchorProps;

const Cta = ({
	onClick,
	href,
	classes,
	text,
	targetBlank = false,
}: CtaProps) => {
	if (href) {
		return (
			<Link
				className={`shadow-xl py-3 px-10  rounded-full text-white text-normal flex items-center justify-center text-lg uppercase ${classes}`}
				href={href}
				target={targetBlank ? "_blank" : "_self"}
			>
				{text}
				<ArrowRightIcon className="w-6 h-6 ml-2" />
			</Link>
		);
	}
	return (
		<button
			className={`shadow-xl py-3 px-10  rounded-full text-white text-normal flex items-center justify-center text-lg uppercase ${classes}`}
			onClick={onClick}
		>
			{text}
			<ArrowRightIcon className="w-6 h-6 ml-2" />
		</button>
	);
};

export default Cta;
