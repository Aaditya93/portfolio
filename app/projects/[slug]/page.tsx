"use client";

import { notFound, useParams } from "next/navigation";
import { getProjectBySlug, getAdjacentProjects } from "@/data/projects";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectDescription } from "@/components/project/project-description";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectDocuments } from "@/components/project/project-documents";
import { ProjectLinks } from "@/components/project/project-links";
import { ProjectNavigation } from "@/components/project/project-navigation";


export default function ProjectPage() {
    const params = useParams();
    const slug = params?.slug as string;

    // Direct synchronous retrieval allows Next.js to pre-render this content
    // even though it's a Client Component, assuming static data.
    const project = getProjectBySlug(slug);

    if (!project) {
        // We can't use notFound() effectively during initial client render if it's undefined 
        // but during SSG/SSR it might just render nothing or fallback.
        // For a client component with static data, this is safe.
        // However, standard Next.js might prefer returning null or custom 404 UI here.
        return (
            <div className="min-h-screen pt-32 pb-16 px-6 text-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
            </div>
        );
    }

    const { prev, next } = getAdjacentProjects(project.slug);

    return (
        <>
            <ProjectHero project={project} />
            <ProjectDescription project={project} />
            <ProjectGallery images={project.images} projectTitle={project.title} />
            <ProjectDocuments documents={project.documents} />
            <ProjectLinks links={project.links} />
            <ProjectNavigation prev={prev} next={next} />
        </>
    );
}
