import { Course, Province } from "@/types/course";

export const courses: Course[] = [
  {
    order: 4,
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
            provinces: [
              {
                province: "Padova",
                list: [
                  "E-COMMERCE FASHION MANAGER - Padova",
                  "FASHION SHOES COORDINATOR - Capriccio di Vigonza (PD)",
                  "DIGITAL MARKETING E SOCIAL COMMUNICATION - Padova",
                  "FASHION COORDINATOR KNIT SPECIALIST - Padova",
                  "FASHION COORDINATOR - Padova",
                  "FASHION LEATHER GOOD COORDINATOR - Capriccio di Vigonza (PD)",
                  "DIGITAL VIDEOMAKER FOR TV, WEB AND CINEMA - Padova",
                  "PATTERN MAKER AND PROTOTYPING - Padova",
                ],
              },
              {
                province: "Vicenza",
                list: [
                  "GREEN LEATHER MANAGER - Arzignano (VI)",

                  "FASHION JEWELLERY COORDINATOR - Vicenza",
                  "FASHION SUSTAINABILITY MANAGER - Valdagno (VI)",
                  "SPORTSWEAR PRODUCT MANAGER - Bassano del Grappa (VI)",

                  "DIGITAL JEWELLERY DESIGN - Vicenza",
                ],
              },
              {
                province: "Verona",
                list: ["FASHION PRODUCT MANAGER - Verona"],
              },
              {
                province: "Treviso",
                list: ["SPORT SYSTEM SPECIALIST - Montebelluna (TV)"],
              },
              {
                province: "Belluno",
                list: ["EYEWEAR PRODUCT MANAGER - Longarone (BL)"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 10,
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
            provinces: [
              {
                province: "Padova",
                list: ["SPA&Wellness Hospitality Marketing - Abano Terme (PD)"],
              },
              {
                province: "Venezia",
                list: [
                  "Hospitality Marketing & Communication - Jesolo (VE)",
                  "Tourism Innovation & Digital 4.0 - Jesolo (VE)",
                ],
              },
              {
                province: "Treviso",
                list: ["Food&Wine Marketing & Communication - Villorba (TV)"],
              },
              {
                province: "Verona",
                list: [
                  "Food&Wine Marketing & Communication - Valeggio sul Mincio (VR)",
                  "Hospitality Marketing & Communication - Bardolino (VR)",
                ],
              },
              {
                province: "Belluno",
                list: ["Dolomiti Tourism Marketing & Communication - Belluno"],
              },
              {
                province: "Vicenza",
                list: [
                  "Tourism Destination Marketing & Communication - Asiago (VI)",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsorange",
  },
  {
    order: 3,
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
            label: "ITS Academy Agroalimentare Veneto",
            provinces: [
              {
                province: "Treviso",
                list: [
                  "Agribusiness Manager per il marketing territoriale e Unesco - Conegliano (TV)",
                  "Agribusiness Manager per la sicurezza e la trasformazione degli alimenti - Vittorio Veneto (TV)",
                ],
              },
              {
                province: "Verona",
                list: [
                  "Agrifood & Marketing Manager Verona",
                  "Agribusiness Manager per le produzioni biologiche - Padova e Buttapietra (VR)",
                ],
              },
              {
                province: "Vicenza",
                list: [
                  "Agribusiness Manager per le produzioni locali - Bassano del Grappa (VI)",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 1,
    id: "mobilita-sostenibile",
    title: "mobilità sostenibile",
    icon: "/assets/courses/17.png",
    href: "/corsi/mobilita-sostenibile",
    label: "mobilità sostenibile",
    bulletIcon: "/assets/courses/bullet/mobilità.png",
    degrees: [
      {
        img: "/assets/courses/degrees/fip.png",
        href: "https://www.itsmarcopolo.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Treviso",
                list: ["Logistics Manager - Treviso"],
              },
              {
                province: "Rovigo",
                list: ["Logistics Manager - Rovigo"],
              },
              {
                province: "Venezia",
                list: [
                  "Mobility & Human resources manager - Mirano (VE)",
                  "Logistics Manager in ambito portuale e aeroportuale - Mestre (VE)",
                  "Macchinista e preparatore treni - Venezia",
                  "Art moving and set up manager - Venezia",
                ],
              },
            ],
          },
        ],
      },
      {
        img: "/assets/courses/degrees/last.png",
        href: "https://itslogistica.it/",
        bulletPoints: [
          {
            provinces: [
              {
                province: "Padova",
                list: ["International logistics management - Padova"],
              },
              {
                province: "Vicenza",
                list: ["International logistics management - Vicenza"],
              },
              {
                province: "Verona",
                list: [
                  "International logistics management - Verona",
                  "Digital transformation specialist - Web developer - Verona",
                  "Automotive Service and Sales management - Verona",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsazure",
  },
  {
    order: 2,
    id: "efficienza-energetica",
    title: "Energia e ambiente",
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
            provinces: [
              {
                province: "Padova",
                list: [
                  "BUILDING MANAGER (Tecnico superiore per l'efficienza energetica nell'edilizia sostenibile) - Padova",
                  "ENERGY MANAGER 4.0 (Tecnico superiore per l'efficienza energetica degli impianti) - Padova",
                  "GREEN MANAGER (Tecnico superiore per la sostenibilità energetica nell'economia circolare) - Padova",
                ],
              },
              {
                province: "Verona",
                list: [
                  "BUILDING MANAGER, (Tecnico superiore per l'efficienza energetica nell'edilizia sostenibile) - Verona",
                  "ENERGY MANAGER 4.0 (Tecnico superiore per l'efficienza energetica degli impianti) - Verona",
                ],
              },
              {
                province: "Treviso",
                list: [
                  "CONSTRUCTION MANAGER (Tecnico superiore per l'efficienza energetica nell'edilizia sostenibile) - Treviso",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsgreen",
  },
  {
    order: 7,
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
            provinces: [
              {
                province: "Treviso",
                list: ["DESIGN MANAGER Sistema casa - Treviso"],
              },
              {
                province: "Vicenza",
                list: [
                  "MARKETING MANAGER Sistema casa e Ambiente costruito - Vicenza",
                ],
              },
              {
                province: "Verona",
                list: ["DESIGN MANAGER Sistema casa - Verona"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 5,
    id: "meccanica-e-meccatronica",
    title: "meccanica e meccatronica",
    icon: "/assets/courses/20.png",
    href: "/corsi/meccanica-e-meccatronica",
    label: "Meccanica - Meccatronica - Informatica Industriale",
    bulletIcon: "/assets/courses/bullet/meccanica.png",
    degrees: [
      {
        img: "/assets/courses/degrees/its-tech.png",
        href: "https://www.itsmeccatronico.it/",
        bulletPoints: [
          {
            label: "ITS Academy Meccatronico Veneto",
            provinces: [
              {
                province: "Vicenza",
                list: [
                  "Automazione e Sistemi meccatronici - Bassano (VI), Schio (VI)",
                  "Innovazione di processi e prodotti meccanici - Schio (VI)",
                  "Informatica nell’Industria 4.0 - Vicenza, Thiene (VI)",
                ],
              },
              {
                province: "Belluno",
                list: ["Automazione e Sistemi meccatronici - Belluno"],
              },
              {
                province: "Treviso",
                list: [
                  "Automazione e Sistemi meccatronici - Conegliano (TV), Castelfranco Montebelluna (TV)",
                  "Innovazione di processi e prodotti meccanici - Treviso",
                ],
              },
              {
                province: "Padova",
                list: ["Automazione e Sistemi meccatronici - Padova"],
              },
              {
                province: "Verona",
                list: ["Automazione e Sistemi meccatronici - Verona"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 9,
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
            provinces: [
              {
                province: "Verona",
                list: [
                  "Esperto nei processi di internazionalizzazione d’impresa - Verona",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsred",
  },
  {
    order: 8,
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
            provinces: [
              {
                province: "Padova",
                list: [
                  "Digital transformation specialist - Web developer - Verona",
                  "Digital transformation specialist - System administration - Villafranca di Verona",
                ],
              },
            ],
          },
        ],
      },
      {
        img: "/assets/courses/degrees/its-digital.png",
        href: "https://itsdigitalacademy.com/",
        bulletPoints: [
          {
            label: "ITS Digital Academy Mario Volpato",
            provinces: [
              {
                province: "Padova",
                list: [
                  "Artificial Intelligence - Padova",
                  "Cloud Developer - Padova",
                  "A/R e V/R & Game Developer e Digital Marketing and Innovation Specialist - Noventa Padovana (PD)",
                  "Crossmedia Communication Specialist - Cittadella (PD) e Venezia",
                ],
              },
              {
                province: "Treviso",
                list: [
                  "Cyber Security Specialist e Artificial Intelligence & Data Specialist - Treviso",
                ],
              },
              {
                province: "Venezia",
                list: ["Crossmedia Communication Specialist - Venezia"],
              },
              {
                province: "Verona",
                list: ["Web Developer Full Stack - Verona"],
              },
              {
                province: "Vicenza",
                list: ["Web Developer Full Stack - Vicenza"],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itsgrey",
  },
  /*  {
    order: 6,
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
            provinces: [
              {
                province: "Padova",
                list: [
                  "Tecnico superiore di produzione nell'industria plastica",
                ],
              },
            ],
          },
        ],
      },
    ],
    classes: "bg-itspurple",
  }, */
].sort((a, b) => a.order - b.order);

export const provinces: Province[] = [
  {
    id: "vicenza",
    label: "Vicenza",
    courses: [
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: [
          "Automazione e Sistemi meccatronici",
          "Innovazione di processi e prodotti meccanici",
          "Informatica nell’Industria 4.0",
        ],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Marketing Manager settore arredo"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: ["Web Developer Full Stack"],
      },
    ],
  },
  {
    id: "belluno",
    label: "Belluno",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Dolomiti Tourism Marketing & Communication"],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: ["Eyewear Product Manager"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Automazione e Sistemi meccatronici"],
      },
    ],
  },
  {
    id: "padova",
    label: "Padova",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Spa&Wellness Hospitality Marketing"],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: ["International Logistics Manager"],
      },
      {
        label: "Tecnologia, innovazione, sostenibilità",
        href: "/corsi/efficienza-energetica",
        list: [
          "Tecnico Superiore Building Manager",
          "Energy Manager 4.0",
          "Green Manager Ambiente ed Energia",
          "Agribusiness Manager per le produzioni biologiche",
        ],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: [
          "Fashion Coordinator",
          "Digital Marketing e Social Communication",
          "Fashion Coordinator Knit Specialist",
          "Pattern Maker and Prototyping",
          "Digital Videomaker for TV, Web and Cinema",
          "Fashion Shoes Coordinator",
          "E-Commerce Fashion Manager",
          "Fashion Leather Good Coordinator",
        ],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: [
          "Automazione e Sistemi meccatronici",
          "Innovazione di processi e prodotti meccanici",
        ],
      },
      {
        label: "Teconologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Artificial Intelligence",
          "Cloud Developer",
          "A/R e V/R & Game Developer",
          "Crossmedia Communication Specialist",
        ],
      },
    ],
  },
  {
    id: "rovigo",
    label: "Rovigo",
    courses: [
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: ["Logistics Manager"],
      },
    ],
  },
  {
    id: "treviso",
    label: "Treviso",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: ["Food&Wine Marketing & Communication"],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: ["Logistics Manager"],
      },
      {
        label: "Agroalimentare",
        href: "/corsi/agroalimentare",
        list: [
          "Agrifood Manager per il marketing territoriale e Unesco",
          "Agribusiness Manager per la sicurezza e la trasformazione degli alimenti",
        ],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: ["Sport System Specialist"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: [
          "Automazione e Sistemi meccatronici",
          "Innovazione di processi e prodotti meccanici",
        ],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Design Manager Sistema Casa"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: ["Construction Manager gestione del cantiere"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Cyber Security Specialist e Artificial Intelligence & Data Specialist",
        ],
      },
    ],
  },
  {
    id: "venezia",
    label: "Venezia",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: [
          "Tourism Innovation & Digital 4.0",
          "Hospitality Marketing & Communication",
        ],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: [
          "Macchinista e preparatore treni",
          "Art moving and set up manager",
          "Logistics Manager in ambito portuale e aeroportuale",
        ],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Automazione e Sistemi meccatronici"],
      },
    ],
  },
  {
    id: "verona",
    label: "Verona",
    courses: [
      {
        label: "Turismo",
        href: "/corsi/turismo",
        list: [
          "Food&Wine Marketing & Communication",
          "Hospitality Marketing & Communication",
        ],
      },
      {
        label: "Mobilità sostenibile",
        href: "/corsi/mobilita-sostenibile",
        list: [
          "Automotive Service and Sales management",
          "International Logistics Manager",
          "Digital transformation specialist - Web developer",
        ],
      },
      {
        label: "Tecnologia, innovazione, sostenibilità",
        href: "/corsi/efficienza-energetica",
        list: ["Tecnico Superiore Building Manager", "Energy Manager 4.0"],
      },
      {
        label: "Agroalimentare",
        href: "/corsi/agroalimentare",
        list: [
          "Agribusiness Manager per le produzioni locali",
          "Agrifood and Marketing manager",
        ],
      },
      {
        label: "Servizi alle imprese",
        href: "/corsi/servizi-alle-imprese",
        list: ["Esperto nei processi di internazionalizzazione d’impresa"],
      },
      {
        label: "Meccanica e Meccatronica",
        href: "/corsi/meccanica-e-meccatronica",
        list: ["Automazione e Sistemi meccatronici"],
      },
      {
        label: "Sistema Casa",
        href: "/corsi/design-e-arredo",
        list: ["Design Manager Sistema Casa"],
      },
      {
        label: "Tecnologie dell'informazione e Comunicazione",
        href: "/corsi/information-technologies",
        list: [
          "Digital transformation specialist - System administration",
          "Web Developer Full Stack",
          "Digital transformation specialist - Web developer",
        ],
      },
      {
        label: "Moda",
        href: "/corsi/moda",
        list: [
          "Fashion Product Manager",
          "Fashion Jewelry Coordinator",
          "Sportswear Product Manager",
          "Fashion Sustainability Manager",
          "Green Leather Manager",
          "Digital Jewelry Design",
        ],
      },
    ],
  },
];
