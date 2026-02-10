import { getProjectBySlug, getAdjacentProjects, getAllProjectSlugs } from "@/data/projects";
import { ProjectDetailView } from "@/components/project/project-detail-view";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
    const slugs = getAllProjectSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const project = getProjectBySlug(params.slug);
    if (!project) {
        return {
            title: "Project Not Found",
        };
    }
    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
    };
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const { prev, next } = getAdjacentProjects(project.slug);

    return <ProjectDetailView project={project} prev={prev} next={next} />;
}
