import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Partners = () => {
	const partners = [
		{
			id: "coesione-italia",
			icon: "/assets/partners/coesione-italia.png",
		},
		{
			id: "cofinanziato",
			icon: "/assets/partners/cofinanziato-unione-europea.png",
		},
		{
			id: "istituti-tecnici-superiori",
			icon: "/assets/partners/istituti-tecnici-superiori.png",
		},
		{
			id: "regione-veneto",
			icon: "/assets/partners/regione-veneto.png",
		},
		{
			id: "repubblica-italiana",
			icon: "/assets/partners/repubblica-italiana.png",
		},
		{
			id: "sistema-its",
			icon: "/assets/partners/sistema-its.png",
		},
	];

	return (
		<div className="flex justify-center items-center gap-4 py-8 my-8">
			{partners.map((partner) => (
				<Image alt={partner.id} width={50} height={50} src={partner.icon} />
			))}
		</div>
	);
};

export default Partners;
