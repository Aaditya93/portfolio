export interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
}

export interface ProjectDocument {
    title: string;
    url: string;
    type: "pdf" | "figma" | "notion" | "other";
    thumbnail?: string;
}

export interface ProjectLink {
    title: string;
    url: string;
    icon?: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    category: string;
    year: string;
    featured?: boolean;
    heroImage: string;
    thumbnailImage: string;
    description: string;
    role?: string;
    duration?: string;
    client?: string;
    images: ProjectImage[];
    documents: ProjectDocument[];
    links: ProjectLink[];
    tags: string[];
}
