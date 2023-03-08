import React from "react";

type TextProps = {
	text: string;
	classes?: string;
};

const Text = ({ text, classes }: TextProps) => {
	return <p className={`text-center ${classes || ""}`}>{text}</p>;
};

export default Text;
