"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "motion/react"

export function ModeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className="w-9 h-9 rounded-full bg-background/50 border border-border/50 flex items-center justify-center opacity-50">
                <span className="sr-only">Loading theme</span>
            </div>
        )
    }

    // Use resolvedTheme to handle "system" preference correctly
    const isDark = resolvedTheme === "dark" || (theme === "system" && resolvedTheme === "dark")

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark")
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="relative w-9 h-9 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center overflow-hidden hover:bg-accent/50 hover:border-accent transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.05 }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 0 : 1,
                    rotate: isDark ? 90 : 0,
                    opacity: isDark ? 0 : 1
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-[1.1rem] w-[1.1rem] text-orange-500 fill-orange-500/20" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: isDark ? 1 : 0,
                    rotate: isDark ? 0 : -90,
                    opacity: isDark ? 1 : 0
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-[1.1rem] w-[1.1rem] text-blue-400 fill-blue-400/20" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </motion.button>
    )
}
