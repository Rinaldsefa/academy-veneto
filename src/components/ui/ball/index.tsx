import React from "react";

export type BallProps = {
	color: "green" | "purple" | "red";
	children: React.ReactNode;
	classes?: string;
};

const Ball = ({ color, classes, children }: BallProps) => {
	const colorMap: Record<BallProps["color"], string> = {
		green: "bg-teal-100",
		purple: "bg-indigo-200",
		red: "bg-red-200",
	};
	return (
		<div
			className={`${
				colorMap[color]
			} shadow-xl w-48 h-48 md:w-72 md:h-72 rounded-full relative flex flex-col items-center  justify-center md:justify-start p-8 md:p-16 ${
				classes || ""
			}`}
		>
			{children}
		</div>
	);
};

export default Ball;
