import React, { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LoadingImage({
    src,
    alt,
    className = "",
    imageClassName = "",
    ...props
}) {
    const [isLoading, setIsLoading] = useState(true);

    // Reset loading state if src changes (though key prop is preferred usage)
    useEffect(() => {
        setIsLoading(true);
    }, [src]);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            {/* Loading Spinner / Blur Placeholder */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-neutral-900/50 backdrop-blur-sm z-10 transition-opacity duration-300">
                    <Loader2 className="h-8 w-8 text-brand-accent animate-spin" />
                </div>
            )}

            {/* Actual Image */}
            <motion.img
                src={src}
                alt={alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                onLoad={() => setIsLoading(false)}
                className={`w-full h-full transition-transform duration-700 ${imageClassName}`}
                {...props}
            />
        </div>
    );
}
