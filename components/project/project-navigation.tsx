"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TypographyMuted } from "@/components/ui/typography";
import { Project } from "@/types/project";

interface ProjectNavigationProps {
    prev: Project | null;
    next: Project | null;
}

export function ProjectNavigation({ prev, next }: ProjectNavigationProps) {
    if (!prev && !next) return null;

    return (
        <section className="py-16 border-t border-border/50">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Previous project */}
                    {prev ? (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href={`/projects/${prev.slug}`}
                                className="group flex items-center gap-4 hover:text-primary/80 transition-colors"
                            >
                                <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                                    <ChevronLeft className="h-5 w-5" />
                                </div>
                                <div className="text-left">
                                    <TypographyMuted className="text-xs uppercase tracking-widest">
                                        Previous
                                    </TypographyMuted>
                                    <div className="font-medium">{prev.title}</div>
                                </div>
                            </Link>
                        </motion.div>
                    ) : (
                        <div />
                    )}

                    {/* Next project */}
                    {next ? (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <Link
                                href={`/projects/${next.slug}`}
                                className="group flex items-center gap-4 hover:text-primary/80 transition-colors"
                            >
                                <div className="text-right">
                                    <TypographyMuted className="text-xs uppercase tracking-widest">
                                        Next
                                    </TypographyMuted>
                                    <div className="font-medium">{next.title}</div>
                                </div>
                                <div className="p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors">
                                    <ChevronRight className="h-5 w-5" />
                                </div>
                            </Link>
                        </motion.div>
                    ) : (
                        <div />
                    )}
                </div>
            </div>
        </section>
    );
}
