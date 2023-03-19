type CourseLabelProps = {
	text: string;
	classes?: string;
};

const CourseLabel = ({ text, classes }: CourseLabelProps) => {
	return (
		<h6
			className={`tracking-widest capitalize text-sm font-semibold text-center px-12 ${classes}`}
		>
			{text}
		</h6>
	);
};

export default CourseLabel;
