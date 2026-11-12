import type { ImageMetadata } from "astro";

import riversideImage from "@/assets/project-1.webp";
import meridianImage from "@/assets/project-2.webp";
import westgateImage from "@/assets/project-3.webp";

export interface Project {
	id: string;
	slug: string;
	name: string;
	category: string;
	location: string;
	year: number;
	description: string;
	image: ImageMetadata;
	alt: string;
}

/**
 * The image field holds an imported asset rather than a path string so Astro
 * can emit responsive WebP renditions. Swap these for the real project photos
 * when they land.
 */
export const featuredProjects: Project[] = [
	{
		id: "PRJ-001",
		slug: "riverside-residence",
		name: "Riverside Residence",
		category: "Residential",
		location: "Ho Chi Minh City, Vietnam",
		year: 2025,
		description:
			"A modern residential development combining elegant architecture with functional living spaces.",
		image: riversideImage,
		alt: "Glass office towers viewed from the street",
	},
	{
		id: "PRJ-002",
		slug: "meridian-business-center",
		name: "Meridian Business Center",
		category: "Commercial",
		location: "Binh Duong, Vietnam",
		year: 2024,
		description:
			"A contemporary commercial complex designed for modern businesses and professional workspaces.",
		image: meridianImage,
		alt: "Timber clad building with planted terraces",
	},
	{
		id: "PRJ-003",
		slug: "westgate-industrial-park",
		name: "Westgate Industrial Park",
		category: "Industrial",
		location: "Long An, Vietnam",
		year: 2024,
		description:
			"A large-scale industrial facility focused on operational efficiency and long-term durability.",
		image: westgateImage,
		alt: "Curved facade of a commercial building",
	},
	{
		id: "PRJ-004",
		slug: "canal-view-residences",
		name: "Canal View Residences",
		category: "Residential",
		location: "District 4, Ho Chi Minh City",
		year: 2023,
		description:
			"Waterfront apartments arranged around a shared courtyard, with retail at street level.",
		image: riversideImage,
		alt: "Glass office towers viewed from the street",
	},
	{
		id: "PRJ-005",
		slug: "thu-duc-tech-campus",
		name: "Thu Duc Tech Campus",
		category: "Commercial",
		location: "Thu Duc City, Vietnam",
		year: 2023,
		description:
			"Three connected office blocks built around a shaded central spine for a growing software team.",
		image: meridianImage,
		alt: "Timber clad building with planted terraces",
	},
	{
		id: "PRJ-006",
		slug: "binh-chanh-logistics-hub",
		name: "Binh Chanh Logistics Hub",
		category: "Industrial",
		location: "Binh Chanh, Ho Chi Minh City",
		year: 2022,
		description:
			"A warehousing and distribution site sized for heavy vehicle access and round-the-clock operation.",
		image: westgateImage,
		alt: "Curved facade of a commercial building",
	},
];

