"use client";

import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { TypographyH1, TypographyMuted } from "@/components/ui/typography";
import { Project } from "@/types/project";

interface ProjectHeroProps {
    project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
            {/* Background image */}


            {/* Content */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 w-full">
                {/* Back button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
                    {/* Title and description */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="space-y-2">
                            <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent border border-border/50 text-xs font-medium">
                                {project.category}
                            </span>
                        </div>
                        <TypographyH1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                            {project.title}
                        </TypographyH1>
                        <TypographyMuted className="text-lg md:text-xl max-w-2xl">
                            {project.subtitle}
                        </TypographyMuted>
                    </motion.div>

                    {/* Project meta */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="space-y-6"
                    >
                        {project.role && (
                            <div className="space-y-1">
                                <TypographyMuted className="text-xs uppercase tracking-widest">
                                    Role
                                </TypographyMuted>
                                <div className="font-medium">{project.role}</div>
                            </div>
                        )}
                        {project.client && (
                            <div className="space-y-1">
                                <TypographyMuted className="text-xs uppercase tracking-widest">
                                    Client
                                </TypographyMuted>
                                <div className="font-medium">{project.client}</div>
                            </div>
                        )}
                        {project.duration && (
                            <div className="space-y-1">
                                <TypographyMuted className="text-xs uppercase tracking-widest">
                                    Duration
                                </TypographyMuted>
                                <div className="font-medium">{project.duration}</div>
                            </div>
                        )}
                        <div className="space-y-1">
                            <TypographyMuted className="text-xs uppercase tracking-widest">
                                Year
                            </TypographyMuted>
                            <div className="font-medium">{project.year}</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
