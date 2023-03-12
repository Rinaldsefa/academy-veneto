import React from "react";

type TextProps = {
	text: string;
	classes?: string;
};

const Text = ({ text, classes }: TextProps) => {
	return <p className={`text-center mb-4 ${classes || ""}`}>{text}</p>;
};

export default Text;
