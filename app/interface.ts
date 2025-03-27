import { TypedObject } from "sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface skillCard {
    name: string;
    proficiency: number;
    image: SanityImageSource;  // ✅ Corrected
    currentSlug: string;
}

export interface newSkill {
    name: string;
    content: TypedObject[];
    image: SanityImageSource;  // ✅ Corrected
    currentSlug: string;
}

export interface projectCard {
    _id: string;
    title: string;
    description: string;
    currentSlug: string;
    technologies: string;
    image: SanityImageSource;  // ✅ Corrected
    liveDemo: string;
    github: string;
    _createdAt: string;
}
