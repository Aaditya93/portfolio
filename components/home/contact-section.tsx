"use client";

import { motion } from "motion/react";
import { Mail, ArrowUpRight } from "lucide-react";
import { TypographyH2, TypographyLead, TypographyMuted } from "@/components/ui/typography";

export function ContactSection() {
    return (
        <section id="contact" className="py-32 bg-accent/30">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-8">
                    {/* Section header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-4"
                    >
                        <TypographyMuted className="uppercase tracking-widest text-xs font-semibold">
                            Get in Touch
                        </TypographyMuted>
                        <TypographyH2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight border-none pb-0">
                            Let&apos;s create something <span className="text-primary/60">extraordinary</span>
                        </TypographyH2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <TypographyLead className="text-lg md:text-xl text-muted-foreground">
                            Building something interesting? I love working with ambitious teams
                            on products that push boundaries. Let&apos;s talk.
                        </TypographyLead>
                    </motion.div>

                    {/* Email CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pt-8"
                    >
                        <a
                            href="mailto:aadityashewale@gmail.com"
                            className="group inline-flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-medium text-lg transition-all hover:shadow-lg hover:shadow-primary/20"
                        >
                            <Mail className="h-5 w-5" />
                            <span>aadityashewale@gmail.com</span>
                            <ArrowUpRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        </a>
                    </motion.div>

                    {/* Availability status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex items-center justify-center gap-3 pt-4"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <TypographyMuted>
                            Open to full-time remote roles
                        </TypographyMuted>
                    </motion.div>

                    {/* Quick response time */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-border/50 mt-16"
                    >
                        {[
                            { label: "Timezone", value: "Flexible (IST)" },
                            { label: "Work Style", value: "Async & Remote" },
                            { label: "Availability", value: "Immediate" },
                        ].map((item, index) => (
                            <div key={item.label} className="space-y-1">
                                <div className="text-2xl font-bold">{item.value}</div>
                                <TypographyMuted>{item.label}</TypographyMuted>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
