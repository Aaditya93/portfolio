import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getProjectBySlug, getAdjacentProjects, getAllProjectSlugs } from "@/data/projects";
import { ProjectHero } from "@/components/project/project-hero";
import { ProjectDescription } from "@/components/project/project-description";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectDocuments } from "@/components/project/project-documents";
import { ProjectLinks } from "@/components/project/project-links";
import { ProjectNavigation } from "@/components/project/project-navigation";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Portfolio`,
            description: project.subtitle,
            type: "article",
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const resolvedParams = await params;
    const project = getProjectBySlug(resolvedParams.slug);

    if (!project) {
        notFound();
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
