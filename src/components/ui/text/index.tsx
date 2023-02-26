import React from "react";
import { motion } from "framer-motion";

type TextProps = {
	children: React.ReactNode;
	classes?: string;
};

const Text = ({ children, classes }: TextProps) => {
	return <p className={`text-center ${classes || ""}`}>{children}</p>;
};

export default Text;
