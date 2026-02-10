"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { TypographyMuted } from "@/components/ui/typography";

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aaditya-shewale-515136249/" },
    { label: "Twitter", href: "https://x.com/AdityaS37527045" },
    { label: "GitHub", href: "https://github.com/Aaditya93" },
];

export function Footer() {
    return (
        <footer className="border-t border-border/50 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <div className="font-serif text-2xl font-bold tracking-tighter">
                            aaditya<span className="text-primary/60">.</span>
                        </div>
                        <TypographyMuted>
                            Crafting digital experiences with purpose and precision.
                        </TypographyMuted>
                    </motion.div>

                    {/* Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            Connect
                        </div>
                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                    <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <div className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                            Get in touch
                        </div>
                        <Link
                            href="mailto:aadityashewale@gmail.com"
                            className="text-lg font-medium hover:text-primary/80 transition-colors"
                        >
                            aadityashewale@gmail.com
                        </Link>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <TypographyMuted>
                        © {new Date().getFullYear()} Aaditya Shewale. All rights reserved.
                    </TypographyMuted>
                    <TypographyMuted>
                        Designed & built with intention
                    </TypographyMuted>
                </motion.div>
            </div>
        </footer>
    );
}
