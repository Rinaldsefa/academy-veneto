import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
	const socials = [
		{
			id: "instagram",
			href: "/",
			icon: "/assets/common/instagram.png",
		},
		{
			id: "facebook",
			href: "/",
			icon: "/assets/common/facebook.png",
		},
		{
			id: "tiktok",
			href: "/",
			icon: "/assets/common/tiktok.png",
		},
		{
			id: "telegram",
			href: "/",
			icon: "/assets/common/telegram.png",
		},
	];

	return (
		<div className="flex justify-center items-center gap-4 py-2">
			{socials.map((social) => (
				<motion.div key={social.id} whileHover={{ scale: 1.2 }}>
					<Link href={social.href} className="text-gray-500">
						<Image
							alt={social.id}
							width={10}
							height={10}
							src={social.icon}
							className="w-6 h-6 md:w-4 md:h-4"
						/>
					</Link>
				</motion.div>
			))}
		</div>
	);
};

export default Socials;
