import React from "react";

export type BallProps = {
	color: "green" | "purple" | "red";
	children: React.ReactNode;
};

const Ball = ({ color, children }: BallProps) => {
	const colorMap: Record<BallProps["color"], string> = {
		green: "bg-teal-100",
		purple: "bg-indigo-200",
		red: "bg-red-200",
	};
	return (
		<div
			className={`${colorMap[color]} shadow-xl w-72 h-72 rounded-full relative flex flex-col items-center justify-between p-16`}
		>
			{children}
		</div>
	);
};

export default Ball;
