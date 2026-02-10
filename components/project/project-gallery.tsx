"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";
import { ProjectImage } from "@/types/project";
import { cn } from "@/lib/utils";

interface ProjectGalleryProps {
    images: ProjectImage[];
    projectTitle?: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
    if (images.length === 0) return null;

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <TypographyMuted className="uppercase tracking-widest text-xs font-semibold mb-4">
                        Gallery
                    </TypographyMuted>
                    <TypographyH2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight border-none pb-0">
                        Project Visuals
                    </TypographyH2>
                </motion.div>

                {/* Masonry-style grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={cn(
                                "group",
                                // Make first and every 3rd image larger
                                index % 3 === 0 && "md:col-span-2"
                            )}
                        >
                            <div
                                className={cn(
                                    "relative overflow-hidden rounded-xl bg-muted transition-all duration-500",
                                    "group-hover:shadow-2xl group-hover:shadow-primary/5 border border-border/40 hover:border-border/60",
                                    index % 3 === 0 ? "aspect-video" : "aspect-[4/3]"
                                )}
                            >
                                {/* Image */}
                                <Image
                                    src={image.src}
                                    alt={image.alt || projectTitle || "Project Image"}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Placeholder gradient fallback */}
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent to-secondary/30 opacity-0 group-hover:opacity-10 transition-opacity" />

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                            </div>

                            {/* Caption */}
                            {image.caption && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="mt-3 px-1"
                                >
                                    <TypographyMuted>{image.caption}</TypographyMuted>
                                </motion.div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
