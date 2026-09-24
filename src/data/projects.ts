export type ProjectLink = {
	label: string;
	href: string;
	primary?: boolean;
};

export type Project = {
	id: string;
	name: string;
	tag: "Producto" | "Cliente" | "Personal";
	date: string;
	description: string;
	tech: string[];
	image: string;
	imageAlt: string;
	links: ProjectLink[];
};

export const projects: Project[] = [
	{
		id: "safebox",
		name: "SafeBox",
		tag: "Producto",
		date: "Febrero 2025",
		description:
			"Gestor de contraseñas local para equipos que no quieren secretos en la nube. App de escritorio con cifrado en dispositivo, interfaz sencilla y almacenamiento en SQLite.",
		tech: ["Electron", "React", "Tailwind", "SQLite"],
		image: "screenshot-sb.png",
		imageAlt: "Captura de SafeBox, gestor de contraseñas de escritorio",
		links: [
			{
				label: "Descargar",
				href: "https://github.com/adriantaf/safe-box/releases",
				primary: true,
			},
			{ label: "Código", href: "https://github.com/adriantaf/safe-box/" },
		],
	},
	{
		id: "spotify-clon",
		name: "Spotify clon",
		tag: "Personal",
		date: "Diciembre 2024",
		description:
			"Clon front-end de Spotify para practicar UI compleja: navegación con React Router, estado global con Context API y una experiencia visual cercana al producto real.",
		tech: ["React", "React Router", "Context API"],
		image: "screenshot-sp.png",
		imageAlt: "Captura del clon de Spotify",
		links: [
			{
				label: "Preview",
				href: "https://spotifymx.vercel.app/",
				primary: true,
			},
			{ label: "Código", href: "https://github.com/adriantaf/spotify" },
		],
	},
	{
		id: "hashi-ramen",
		name: "Hashi Ramen & Pho",
		tag: "Cliente",
		date: "Septiembre 2024",
		description:
			"Sitio oficial de un restaurante local: inicio y menú alimentado por JSON, diseño limpio y listo para móvil. Entrega real para un negocio en Plaza Las Olas.",
		tech: ["Astro", "React", "Tailwind"],
		image: "screenshot-hr.png",
		imageAlt: "Captura del sitio de Hashi Ramen & Pho",
		links: [
			{
				label: "Preview",
				href: "https://hashiramen.vercel.app/",
				primary: true,
			},
		],
	},
	{
		id: "loc-os-linux",
		name: "Loc-OS Linux",
		tag: "Cliente",
		date: "2021",
		description:
			"Rediseño de la página de la distribución Loc-OS Linux para el canal Locos por Linux. Tema oscuro con acentos amarillos; el diseño estuvo en uso durante 2021.",
		tech: ["HTML", "CSS", "JavaScript"],
		image: "screenshot-lpl.png",
		imageAlt: "Captura del rediseño de Loc-OS Linux",
		links: [
			{
				label: "Preview",
				href: "https://adriantaf.github.io/loc-os-linux/",
				primary: true,
			},
			{ label: "Código", href: "https://github.com/adriantaf/loc-os-linux" },
		],
	},
];

export const stack = [
	"Astro",
	"React",
	"Electron",
	"Tailwind CSS",
	"JavaScript",
	"SQLite",
	"MySQL",
	"Express",
];
