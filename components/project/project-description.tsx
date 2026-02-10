"use client";

import { motion } from "motion/react";
import { TypographyH2, TypographyP, TypographyMuted } from "@/components/ui/typography";
import { Project } from "@/types/project";

interface ProjectDescriptionProps {
    project: Project;
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Main description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2"
                    >
                        <TypographyMuted className="uppercase tracking-widest text-xs font-semibold mb-4">
                            Overview
                        </TypographyMuted>
                        <TypographyH2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight border-none pb-0 mb-8">
                            About the Project
                        </TypographyH2>
                        <TypographyP className="text-lg text-muted-foreground leading-relaxed">
                            {project.description}
                        </TypographyP>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TypographyMuted className="uppercase tracking-widest text-xs font-semibold mb-4">
                            Tags
                        </TypographyMuted>
                        <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-accent rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
