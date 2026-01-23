import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera } from 'lucide-react';

export default function LoadingOverlay() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Minimum time to show the logo
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-50 bg-black flex items-center justify-center"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <motion.div
                            animate={{
                                rotate: [0, 360],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="mb-6 relative"
                        >
                            <div className="absolute inset-0 bg-brand-accent/20 blur-xl rounded-full" />
                            <Camera className="h-12 w-12 text-brand-accent relative z-10" />
                        </motion.div>

                        <h1 className="text-3xl font-serif text-white tracking-widest uppercase mb-2">
                            Ingmar van Rheenen
                        </h1>
                        <p className="text-brand-accent/60 text-xs tracking-[0.3em] uppercase">
                            Photography
                        </p>

                        {/* Progress Line */}
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: 100 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="h-0.5 bg-brand-accent mt-8"
                        />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
