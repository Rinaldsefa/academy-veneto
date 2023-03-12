import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import { type } from "os";

const Avatars = () => {
	const avatars = [
		{
			id: "pam",
			src: "/assets/home/8.png",
		},
		{
			id: "bob",
			src: "/assets/home/9.png",
		},
		{
			id: "al",
			src: "/assets/home/10.png",
		},
		{
			id: "daisey",
			src: "/assets/home/11.png",
		},
	];
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.3,
				duration: 0.5,
			},
		},
	};

	const balloonAnimation = {
		hidden: { opacity: 0, y: 80 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 1.2, type: "spring" },
		},
	};

	return (
		<LayoutGroup>
			<motion.div
				variants={container}
				initial="hidden"
				animate="show"
				className="flex justify-center items-center flex-wra gap-6 my-8"
			>
				{avatars.map((avatar) => (
					<motion.div key={avatar.id} variants={balloonAnimation}>
						<Image
							alt=""
							src={avatar.src}
							width={90}
							height={90}
							className="w-20"
						/>
					</motion.div>
				))}
			</motion.div>
		</LayoutGroup>
	);
};

export default Avatars;
