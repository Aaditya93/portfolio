"use client";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient mesh */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/50 via-background to-background" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    className="absolute bottom-40 right-1/4 w-80 h-80 bg-secondary/30 rounded-full blur-3xl"
                />
                {/* Grain overlay */}
                <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]" />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    {/* Eyebrow text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border/50"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-sm font-medium text-muted-foreground">
                            Open to remote opportunities
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <TypographyH1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] border-none">
                            Hi, I&apos;m Aaditya
                            <span className="block mt-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground/60 bg-clip-text text-transparent">
                                Full Stack AI Engineer
                            </span>
                        </TypographyH1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl mx-auto"
                    >
                        <TypographyLead className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            I build intelligent products that blend AI with great engineering.
                            Obsessed with shipping fast and solving real problems.
                        </TypographyLead>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <a
                            href="#work"
                            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium overflow-hidden transition-all hover:shadow-lg"
                        >
                            <span className="relative z-10">View My Work</span>
                            <motion.div
                                className="absolute inset-0 bg-primary/80"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </a>
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 text-foreground rounded-full font-medium border border-border hover:bg-accent transition-colors"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2 text-muted-foreground"
                    >
                        <span className="text-xs uppercase tracking-widest">Scroll</span>
                        <ChevronDown className="h-4 w-4" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
