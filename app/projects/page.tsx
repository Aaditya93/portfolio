"use client";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TypographyH2, TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen pt-32 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-16"
                >
                    <TypographyMuted className="uppercase tracking-widest text-xs font-semibold mb-4">
                        Portfolio
                    </TypographyMuted>
                    <TypographyH2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight border-none pb-0">
                        All <span className="text-primary/60">Projects</span>
                    </TypographyH2>
                    <TypographyMuted className="mt-4 text-lg">
                        A collection of my work in AI engineering, web development, and product design.
                    </TypographyMuted>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative"
                        >
                            <Link href={`/projects/${project.slug}`} className="block h-full">
                                <div
                                    className={cn(
                                        "relative overflow-hidden rounded-2xl bg-muted transition-all duration-500",
                                        "border border-border/80 hover:border-border",
                                        "group-hover:shadow-2xl group-hover:shadow-primary/5",
                                        "aspect-video"
                                    )}
                                >
                                    {/* Project image */}
                                    <Image
                                        src={project.thumbnailImage || project.heroImage}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-all duration-700 group-hover:scale-105 z-0"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority={index < 4}
                                    />

                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent z-10" />

                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500 z-20" />

                                    {/* Category badge */}
                                    <div className="absolute top-6 left-6 z-30">
                                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-background/90 backdrop-blur-md text-xs font-medium text-foreground">
                                            {project.category}
                                        </span>
                                    </div>

                                    {/* Arrow indicator */}
                                    <motion.div
                                        className="absolute top-6 right-6 p-3 rounded-full bg-background/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <ArrowUpRight className="h-4 w-4" />
                                    </motion.div>

                                    {/* Content overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
                                        <div className="space-y-2">
                                            <TypographyH3 className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-white drop-shadow-md">
                                                {project.title}
                                            </TypographyH3>
                                            <TypographyMuted className="line-clamp-2 text-zinc-100/90 font-medium drop-shadow-sm">
                                                {project.subtitle}
                                            </TypographyMuted>
                                        </div>
                                    </div>
                                </div>

                                {/* Project meta */}
                                <div className="flex items-center justify-between mt-4 px-1">
                                    <div className="flex items-center gap-3">
                                        {project.tags.slice(0, 2).map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-xs text-muted-foreground"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <span className="text-xs text-muted-foreground">
                                        {project.year}
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}
