"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <nav className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo - Only show on homepage */}
                    {pathname === "/" ? (
                        <Link href="/" className="relative z-50">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="font-serif text-2xl font-bold tracking-tighter"
                            >
                                aaditya<span className="text-primary/60">.</span>
                            </motion.div>
                        </Link>
                    ) : (
                        <div /> /* Spacer to keep layout if needed, or just null */
                    )}

                    {/* Desktop Navigation */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="hidden md:flex items-center gap-1"
                    >
                        <div className="flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md border border-border/50 px-2 py-1.5">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                                        "hover:bg-accent hover:text-accent-foreground",
                                        "text-muted-foreground hover:text-foreground"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}

                        </div>
                        <div className="ml-2">
                            <ModeToggle />
                        </div>
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 md:hidden p-2 rounded-full bg-background/80 backdrop-blur-md border border-border/50"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="h-5 w-5" />
                        ) : (
                            <Menu className="h-5 w-5" />
                        )}
                    </motion.button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={false}
                animate={isOpen ? { opacity: 1, pointerEvents: "auto" as const } : { opacity: 0, pointerEvents: "none" as const }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 bg-background/95 backdrop-blur-xl md:hidden"
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-serif font-bold tracking-tight hover:text-primary/60 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                    <ModeToggle />
                </div>
            </motion.div>
        </header >
    );
}
