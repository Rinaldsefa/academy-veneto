import { Course } from "@/types/course";

export const courses: Course[] = [
	{
		id: "moda",
		title: "moda",
		icon: "/assets/courses/14.png",
		href: "/corsi/moda",
		label: "Sistema Moda",
		bulletIcon: "/assets/courses/bullet/moda.png",
		degrees: [
			{
				img: "/assets/courses/degrees/cosmo.png",
				href: "https://www.itscosmo.it/",
				bulletPoints: [
					{
						list: [
							"E-commerce fashion manager",
							"Fashion coordinator",
							"Digital marketing e social communication",
							"Fashion Coordinator knit Specialist",
							"Digital, VideoMaker, Web and Metaverse",
							"Fashion Shoes coordinator",
							"Fashion jewelry coordinator",
							"Digital jewelry designer",
							"Green leather manager",
							"Sportswear product manager",
							"Fashion sustainability manager",
							"Fashion Product Manager",
							"Eyewear product manager",
							"Sport system manager",
						],
					},
				],
			},
		],
		classes: "bg-itsred",
	},
	{
		id: "turismo",
		title: "turismo",
		icon: "/assets/courses/15.png",
		href: "/corsi/turismo",
		label: "Turismo",
		bulletIcon: "/assets/courses/bullet/turismo.png",
		degrees: [
			{
				img: "/assets/courses/degrees/turismo.png",
				href: "https://www.itsturismo.it/",
				bulletPoints: [
					{
						label: "Gestione di servizi ed imperese ristorative",
						list: ["Food & Wine Tourism Marketing & Communication"],
					},
					{
						label: "Gestione di strutture e servizi turistici",
						list: [
							"Hospitality Marketing & Communication",
							"Tourism innovation digital 4.0",
							"Toursim destionation Marketing & Communication",
							"SPA & Wellness Hospitality Marketing",
							"Dolomiti Tourism Marketing & Communication",
						],
					},
				],
			},
		],
		classes: "bg-itsorange",
	},
	{
		id: "agroalimentare",
		title: "agroalimentare",
		icon: "/assets/courses/16.png",
		href: "/corsi/agroalimentare",
		label: "Sistema agroalimentare",
		bulletIcon: "/assets/courses/bullet/agroalimentare.png",
		degrees: [
			{
				img: "/assets/courses/degrees/its-alimentare.png",
				href: "https://itsagroalimentareveneto.it/",
				bulletPoints: [
					{
						label: "ITS Academy AgroAlimentare Veneto",
						list: [
							"Agrifood & Marketing Manager",
							"Agribusiness Manager per le produzioni biologiche",
							"Agribusiness Manager per il marketing territoriale e Unesco",
							"Agribusiness Manager per le produzioni locali",
							"Agribusiness Manager per la sicurezza e la trasformazione degli alimenti",
						],
					},
				],
			},
		],
		classes: "bg-itsred",
	},
	{
		id: "mobilita-sostenibile",
		title: "mobilità sostenibile",
		icon: "/assets/courses/17.png",
		href: "/corsi/mobilita-sostenibile",
		label: "mobilità sostenibile",
		bulletIcon: "/assets/courses/bullet/mobilità.png",
		degrees: [
			{
				img: "/assets/courses/degrees/last.png",
				href: "https://itslogistica.it/",
				bulletPoints: [
					{
						label: "Gestione Infomobilità e infra-strutture logistiche",
						list: ["Tecnico superiore in international logistics management"],
					},
					{
						label:
							"Produzione e mantuenzione dei mezzi di trasporto e/o relative infrastrutture",
						list: ["Automotive service and Sales Management"],
					},
				],
			},
			{
				img: "/assets/courses/degrees/fip.png",
				href: "https://www.itsmarcopolo.it/",
				bulletPoints: [
					{
						label: "Mobilità delle persone e delle merci",
						list: [
							"Logistics manager",
							"logistics manager in ambito portuale o aereoportuale",
							"Macchinista e preparatore trent",
						],
					},
				],
			},
		],
		classes: "bg-itsazure",
	},
	{
		id: "efficienza-energetica",
		title: "Efficienza energetica",
		label: "tecnologia, innovazione, sostenibilità",
		icon: "/assets/courses/18.png",
		href: "/corsi/efficienza-energetica",
		bulletIcon: "/assets/courses/bullet/efficienza-energetica.png",
		degrees: [
			{
				img: "/assets/courses/degrees/its-red.png",
				href: "https://itsred.it/",
				bulletPoints: [
					{
						label:
							"Processi o sistemi ad elevata efficienza e risparmio energetico",
						list: [
							"Tecnico superiore Building manager, tecnologia, innovazione, sostenibilità",
							"Tecnico superiore Energy manager 4.0 efficienza, riqualificazione, energia",
							"Tecnico superiore Construction manager gestione del cantiere",
							"Tecnico superiore Green manager ambiente ed energia",
						],
					},
				],
			},
		],
		classes: "bg-itsgreen",
	},
	{
		id: "design-e-arredo",
		title: "design e arredo",
		icon: "/assets/courses/19.png",
		href: "/corsi/design-e-arredo",
		label: "Sistema Casa",
		bulletIcon: "/assets/courses/bullet/design-e-arredo.png",
		degrees: [
			{
				img: "/assets/courses/degrees/its-red.png",
				href: "https://itsred.it/",
				bulletPoints: [
					{
						label: "ITS Red Academy",
						list: [
							"Tecnico superiore marketing manager settore arredo",
							"Tecnico superiore deisgn manager sistema casa",
						],
					},
				],
			},
		],
		classes: "bg-itsred",
	},
	{
		id: "meccanica-e-meccatronica",
		title: "meccanica e meccatronica",
		icon: "/assets/courses/20.png",
		href: "/corsi/meccanica-e-meccatronica",
		label: "Meccanica - Meccatronica - Informatica Industriale",
		bulletIcon: "/assets/courses/bullet/meccanica.png",
		degrees: [
			{
				img: "/assets/courses/degrees/its-red.png",
				href: "https://itsred.it/",
				bulletPoints: [
					{
						label: "ITS Meccatronico Veneto",
						list: [
							"Tecnico superiore per l'automazione ed sistemi meccatronici",
							"Tecnico superiore per l'innovazione di processi  e prodotti mecanici",
							"Tecnico superiore per l'informatica nell'industria 4.0",
						],
					},
				],
			},
		],
		classes: "bg-itsred",
	},
	{
		id: "servizi-alle-imprese",
		title: "servizi alle imprese",
		icon: "/assets/courses/21.png",
		href: "/corsi/servizi-alle-imprese",
		label: "Sistema Servizi alle Imprese",
		bulletIcon: "/assets/courses/bullet/servizi-alle-imprese.png",
		degrees: [
			{
				img: "/assets/courses/degrees/last.png",
				href: "https://itslogistica.it/",
				bulletPoints: [
					{
						label: "ITS Academy Last",
						list: [
							"Tecnico superiore esperto nei processi di internazionalizzazione d'impresa",
						],
					},
				],
			},
		],
		classes: "bg-itsred",
	},
	{
		id: "information-technologies",
		title: "information technologies",
		icon: "/assets/courses/22.png",
		href: "/corsi/information-technologies",
		label: "Tecnologie dell'informazione e Comunicazione",
		bulletIcon: "/assets/courses/bullet/information-technologies.png",
		degrees: [
			{
				img: "/assets/courses/degrees/last.png",
				href: "https://itslogistica.it/",
				bulletPoints: [
					{
						label:
							"Organizzazione e fruizione dell'informazione e della conoscenza",
						list: [
							"Tecnico superiore digital transformation specialist - Web Developer",
							"Tecnico superiore digital transformation specialist - System administration",
						],
					},
				],
			},
			{
				img: "/assets/courses/degrees/its-digital.png",
				href: "https://itsdigitalacademy.com/",
				bulletPoints: [
					{
						label: "ITS Digital Academy",
						list: [
							"Cyber Security Specialist",
							"Cross Media Communication Specialist",
							"Digital Marketing and Innovation Specialist",
							"Web Developer Full Stack",
						],
					},
				],
			},
		],
		classes: "bg-itsgrey",
	},
	{
		id: "biotech",
		title: "Nuove tecnologie",
		icon: "/assets/courses/11.png",
		href: "/corsi/biotech",
		label: "Nuove tecnologie della vita",
		bulletIcon: "/assets/courses/bullet/biotech.png",
		degrees: [
			{
				img: "/assets/courses/degrees/its-tech.png",
				href: "https://www.itsmeccatronico.it/",
				bulletPoints: [
					{
						label: "Sistemi di produzione nel settore delle materie plastiche",
						list: ["Tecnico superiore di produzione nell'industria plastica"],
					},
				],
			},
		],
		classes: "bg-itspurple",
	},
];
