import { projects } from "@/data/projects";
import { ProjectListView } from "@/components/project/project-list-view";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Projects | Portfolio",
    description: "A collection of my work in AI engineering, web development, and product design.",
};

export default function ProjectsPage() {
    return <ProjectListView projects={projects} />;
}
