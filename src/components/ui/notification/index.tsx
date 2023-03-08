import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

type NotificationProps = {
	children: React.ReactNode;
	onClick?: () => void;
};

const Notification = ({ children, onClick }: NotificationProps) => {
	const messageAnimationControls = useAnimationControls();

	return (
		<>
			<motion.button
				initial={{ opacity: 0, y: 10 }}
				animate={messageAnimationControls}
				className=" bg-purple-200 absolute z-50 w-72 top-10 right-10 rounded-3xl shadow-2xl px-6 text-left py-4"
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
				layout
				initial={{ borderRadius: 50 }}
				className="block md:hidden bg-purple-300 absolute z-50 w-16 h-16 bottom-24  origin-bottom-right right-4 shadow-xl text-left"
				onClick={() => {
					messageAnimationControls.start({
						opacity: 1,
						y: 0,
						transition: { duration: 0.3 },
					});
				}}
			>
				<motion.div
					transition={{ duration: 0.03 }}
					whileTap={{ opacity: 0 }}
					className="relative flex flex-col justify-center items-center"
					layout
				>
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
