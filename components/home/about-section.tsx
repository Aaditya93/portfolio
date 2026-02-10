"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { TypographyH2, TypographyP, TypographyMuted } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-32 bg-accent/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
                            <Image
                                src="https://travel-images1234.s3.ap-south-1.amazonaws.com/aaditya.jpg"
                                alt="Aaditya Shewale"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                                priority
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary/20 rounded-2xl -z-10" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-8"
                    >
                        <div className="space-y-4">
                            <TypographyMuted className="uppercase tracking-widest text-xs font-semibold">
                                About Me
                            </TypographyMuted>
                            <TypographyH2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight border-none pb-0">
                                Builder, Shipper, <span className="text-primary/60">AI Enthusiast</span>
                            </TypographyH2>
                        </div>

                        <div className="space-y-6 text-muted-foreground">
                            <TypographyP className="text-lg leading-relaxed">
                                I&apos;m a Full Stack AI Engineer who thrives in fast-paced startup
                                environments. I love building products end-to-end—from architecting
                                backends to crafting polished user experiences.
                            </TypographyP>
                            <TypographyP className="text-lg leading-relaxed">
                                My sweet spot is integrating AI/ML into production systems. Whether
                                it&apos;s LLMs, RAG pipelines, or intelligent automation—I ship
                                solutions that actually work.
                            </TypographyP>
                        </div>

                        {/* Skills */}
                        <div className="grid grid-cols-2 gap-6 pt-4">
                            {[
                                { label: "AI/ML", value: "LLMs, RAG & Agents" },
                                { label: "Frontend", value: "React & Next.js" },
                                { label: "Backend", value: "Python & Node.js" },
                                { label: "Data", value: "MongoDB & PostgreSQL" },
                            ].map((skill, index) => (
                                <motion.div
                                    key={skill.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    className="space-y-1"
                                >
                                    <div className="font-semibold">{skill.label}</div>
                                    <TypographyMuted>{skill.value}</TypographyMuted>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-8">
                            <Button asChild className="group">
                                <a href="https://travel-images1234.s3.ap-south-1.amazonaws.com/projects/Aaditya+Resume+-3.pdf" download="Aaditya_Shewale_Resume.pdf">
                                    Download Resume
                                    <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
