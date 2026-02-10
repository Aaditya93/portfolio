"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowUpRight, Globe } from "lucide-react";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";
import { ProjectLink } from "@/types/project";

interface ProjectLinksProps {
    links: ProjectLink[];
}

export function ProjectLinks({ links }: ProjectLinksProps) {
    if (links.length === 0) return null;

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
                        External
                    </TypographyMuted>
                    <TypographyH2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight border-none pb-0">
                        View Live
                    </TypographyH2>
                </motion.div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-6 py-4 bg-accent rounded-full border border-border/50 hover:border-primary/30 hover:bg-accent/80 transition-all duration-300"
                            >
                                <Globe className="h-5 w-5 text-muted-foreground" />
                                <span className="font-medium">{link.title}</span>
                                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
