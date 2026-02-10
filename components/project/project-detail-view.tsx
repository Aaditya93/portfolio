"use client";

import { Project } from "@/types/project";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectDescription } from "@/components/project/project-description";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectDocuments } from "@/components/project/project-documents";
import { ProjectLinks } from "@/components/project/project-links";
import { ProjectNavigation } from "@/components/project/project-navigation";

interface ProjectDetailViewProps {
    project: Project;
    prev: Project | null;
    next: Project | null;
}

export function ProjectDetailView({ project, prev, next }: ProjectDetailViewProps) {
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
