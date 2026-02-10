"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FileText, Figma, FileIcon, ArrowUpRight } from "lucide-react";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";
import { ProjectDocument } from "@/types/project";

interface ProjectDocumentsProps {
    documents: ProjectDocument[];
}

const getDocumentIcon = (type: ProjectDocument["type"]) => {
    switch (type) {
        case "pdf":
            return FileText;
        case "figma":
            return Figma;
        case "notion":
            return FileIcon;
        default:
            return FileIcon;
    }
};

export function ProjectDocuments({ documents }: ProjectDocumentsProps) {
    if (documents.length === 0) return null;

    return (
        <section className="py-24 bg-accent/30">
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
                        Resources
                    </TypographyMuted>
                    <TypographyH2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight border-none pb-0">
                        Documents & Files
                    </TypographyH2>
                </motion.div>

                {/* Documents grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {documents.map((doc, index) => {
                        const Icon = getDocumentIcon(doc.type);

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={doc.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block p-6 bg-background rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-lg bg-accent">
                                                <Icon className="h-6 w-6 text-primary/80" />
                                            </div>
                                            <div>
                                                <div className="font-medium group-hover:text-primary/80 transition-colors">
                                                    {doc.title}
                                                </div>
                                                <TypographyMuted className="text-xs uppercase tracking-wider">
                                                    {doc.type}
                                                </TypographyMuted>
                                            </div>
                                        </div>
                                        <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
