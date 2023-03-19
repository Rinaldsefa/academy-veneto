import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
	return (
		<Image
			alt="partners"
			width={340}
			height={220}
			src="/assets/partners/partners.png"
			className="mt-8"
		/>
	);
};

export default Partners;
