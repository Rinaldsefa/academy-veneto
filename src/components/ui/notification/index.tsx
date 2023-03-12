import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, useState } from "react";
import useOnClickOutside from "@/components/hooks/use-click-outside";

type NotificationProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

const Notification = ({ children, onClick }: NotificationProps) => {
	const ref = useRef(null);
	const messageAnimationControls = useAnimationControls();
	const notificationAnimationControls = useAnimationControls();

	useOnClickOutside(ref, () => {
		messageAnimationControls.start("hidden");
		notificationAnimationControls.start("show");
	});

	const mobileMessageVariants = {
		hidden: { opacity: 0, y: 10 },
		show: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	return (
		<>
			<motion.button
				ref={ref}
				variants={mobileMessageVariants}
				initial="hidden"
				animate={messageAnimationControls}
				className=" bg-purple-200 absolute z-50 left-10 top-10 right-10 rounded-3xl shadow-2xl px-6 text-left py-4"
				onClick={onClick}
			>
				<div className="relative">
					<Image
						alt=""
						className="absolute -top-8 -right-8 w-16 h-16"
						width={60}
						height={60}
						src="/assets/common/24.png"
					/>
					{children}
				</div>
			</motion.button>
			<motion.button
				className="block md:hidden rounded-full bg-purple-300 absolute z-50 w-16 h-16 bottom-24  origin-bottom-right right-4 shadow-xl text-left"
				onClick={() => {
					messageAnimationControls.start("show");
					notificationAnimationControls.start("hidden");
				}}
				initial="show"
				animate={notificationAnimationControls}
				variants={mobileMessageVariants}
			>
				<motion.div className="relative flex flex-col justify-center items-center">
					<span
						className={`
            shadow-3xl text-xs font-semibold
          text-white absolute 
						flex  flex-col items-center
            top-0 right-2  h-4 w-4 -translate-y-1/2
            translate-x-1/2 transform rounded-full
            bg-purple-700 ring-2 ring-white `}
					>
						1
					</span>
					<Image
						alt=""
						className="w-10 h-10"
						width={24}
						height={24}
						src="/assets/common/24.png"
					/>
				</motion.div>
			</motion.button>

			<motion.button
				className="hidden md:block bg-purple-200 absolute z-50 w-72  bottom-24 right-10 rounded-3xl shadow-2xl px-6 text-left py-4"
				onClick={onClick}
			>
				<div className=" relative">
					<Image
						alt=""
						className="absolute -top-8 -right-8 w-16 h-16"
						width={60}
						height={60}
						src="/assets/common/24.png"
					/>
					{children}
				</div>
			</motion.button>
		</>
	);
};

export default Notification;
