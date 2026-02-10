"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ImageDialogProps {
    images: {
        src: string;
        alt: string;
        caption?: string;
    }[];
    initialIndex?: number;
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function ImageDialog({
    images,
    initialIndex = 0,
    open,
    onOpenChange,
}: ImageDialogProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };

    const currentImage = images[currentIndex];

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-background/95 backdrop-blur-xl border-0 overflow-hidden">
                <DialogTitle className="sr-only">Image Gallery</DialogTitle>
                <DialogDescription className="sr-only">
                    Viewing image {currentIndex + 1} of {images.length}
                </DialogDescription>

                {/* Close button */}
                <button
                    onClick={() => onOpenChange(false)}
                    className="absolute top-4 right-4 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 hover:bg-accent transition-colors"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 hover:bg-accent transition-colors"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background/80 backdrop-blur-md border border-border/50 hover:bg-accent transition-colors"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}

                {/* Image container */}
                <div className="relative w-full h-full flex items-center justify-center p-8 md:p-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative max-w-full max-h-full"
                        >
                            <div className="relative aspect-video w-[80vw] max-w-5xl">
                                <Image
                                    src={currentImage.src}
                                    alt={currentImage.alt}
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                            {currentImage.caption && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="absolute -bottom-12 left-0 right-0 text-center text-sm text-muted-foreground"
                                >
                                    {currentImage.caption}
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Pagination dots */}
                {images.length > 1 && (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-all duration-300",
                                    index === currentIndex
                                        ? "bg-foreground w-6"
                                        : "bg-foreground/30 hover:bg-foreground/50"
                                )}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
