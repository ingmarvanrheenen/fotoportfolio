import React, { useState } from 'react';
import { X, Info, Sliders, Image as ImageIcon, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingImage from './LoadingImage';

export default function PhotoDetail({ item, onClose }) {
    const [showOriginal, setShowOriginal] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);

    if (!item) return null;

    return (
        <AnimatePresence>
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="absolute inset-0 bg-black/95 backdrop-blur-md"
                />

                {/* Modal Content */}
                <motion.div
                    layoutId={`photo-${item.id}`}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative bg-neutral-900 w-full max-w-7xl h-[90vh] rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10 z-10"
                >

                    {/* Image Section */}
                    <div className="relative md:w-2/3 h-1/2 md:h-full bg-black flex items-center justify-center group">
                        {/* Image Container with Toggle */}
                        <div className="relative w-full h-full p-4 md:p-8 flex items-center justify-center">
                            <LoadingImage
                                key={showOriginal ? 'original' : 'edited'}
                                src={showOriginal ? item.imageOriginal : item.image}
                                alt={item.title}
                                className="w-full h-full flex items-center justify-center"
                                imageClassName="max-w-full max-h-full object-contain cursor-zoom-in"
                                onClick={() => setIsFullScreen(true)}
                            />

                            {/* Maximize Button */}
                            <button
                                onClick={() => setIsFullScreen(true)}
                                className="absolute top-6 right-6 p-2 bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/80"
                                title="Volledig scherm"
                            >
                                <Maximize2 className="h-5 w-5" />
                            </button>

                            {/* Toggle Button */}
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-0 bg-neutral-900/80 backdrop-blur-xl rounded-full p-1 border border-white/10 shadow-lg z-20">
                                <button
                                    onClick={() => setShowOriginal(false)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${!showOriginal ? 'bg-white text-brand-dark shadow-sm' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Bewerkt
                                </button>
                                <button
                                    onClick={() => setShowOriginal(true)}
                                    className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${showOriginal ? 'bg-white text-brand-dark shadow-sm' : 'text-gray-400 hover:text-white'}`}
                                >
                                    Origineel
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Info Sidebar */}
                    <div className="md:w-1/3 h-1/2 md:h-full overflow-y-auto bg-neutral-900 border-l border-white/10 flex flex-col custom-scrollbar">
                        {/* Header */}
                        <div className="p-8 border-b border-white/10 flex justify-between items-start sticky top-0 bg-neutral-900/95 backdrop-blur z-10">
                            <div>
                                <h2 className="text-3xl font-serif text-white mb-2">{item.title}</h2>
                                <p className="text-sm text-brand-accent font-medium tracking-wide">{item.whyInteresting}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-8 space-y-10 flex-grow">

                            {/* Technical Specs Grid */}
                            <div className="grid grid-cols-3 gap-3">
                                {[
                                    { label: 'ISO', value: item.specs.iso },
                                    { label: 'Diafragma', value: item.specs.aperture },
                                    { label: 'Sluitertijd', value: item.specs.shutter },
                                ].map((spec, i) => (
                                    <div key={i} className="text-center p-3 bg-neutral-800/50 rounded-lg border border-white/5">
                                        <span className="block text-[10px] uppercase tracking-wider text-gray-500 mb-1">{spec.label}</span>
                                        <span className="font-mono text-brand-accent font-medium">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Analysis Section */}
                            <div>
                                <div className="flex items-center space-x-2 mb-6 text-white border-b border-white/5 pb-2">
                                    <ImageIcon className="h-5 w-5 text-brand-accent" />
                                    <h3 className="text-lg font-serif">Beeldanalyse</h3>
                                </div>
                                <div className="space-y-4 text-sm">
                                    {[
                                        { label: 'Compositie', value: item.analysis.composition },
                                        { label: 'Kader', value: item.analysis.frame },
                                        { label: 'Licht', value: item.analysis.lighting.direction },
                                        { label: 'Perspectief', value: item.analysis.perspective },
                                    ].map((row, i) => (
                                        <div key={i} className="flex justify-between border-b border-white/5 pb-2 last:border-0">
                                            <span className="text-gray-500">{row.label}</span>
                                            <span className="text-gray-300 text-right">{row.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Critique Section */}
                            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-xl border border-white/5 relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <Info className="h-12 w-12" />
                                </div>
                                <h4 className="text-brand-accent font-medium mb-3 text-xs uppercase tracking-widest">Reflectie van de fotograaf</h4>
                                <p className="text-gray-300 text-sm leading-relaxed italic">"{item.critique}"</p>
                            </div>

                            {/* Editing Section */}
                            <div>
                                <div className="flex items-center space-x-2 mb-4 text-white border-b border-white/5 pb-2">
                                    <Sliders className="h-5 w-5 text-brand-accent" />
                                    <h3 className="text-lg font-serif">Nabewerking</h3>
                                </div>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.editing.process}</p>
                                <div className="flex flex-wrap gap-2">
                                    {item.editing.comparison.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 bg-brand-accent/5 text-brand-accent text-xs font-medium rounded-md border border-brand-accent/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Full Screen Overlay */}
            {isFullScreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[60] bg-black flex items-center justify-center p-0"
                    onClick={() => setIsFullScreen(false)}
                >
                    <button
                        onClick={() => setIsFullScreen(false)}
                        className="absolute top-4 right-4 p-4 text-white hover:text-brand-accent z-50 bg-black/20 rounded-full"
                    >
                        <X className="h-8 w-8" />
                    </button>

                    <LoadingImage
                        src={showOriginal ? item.imageOriginal : item.image}
                        alt={item.title}
                        className="w-full h-full flex items-center justify-center p-4"
                        imageClassName="max-w-full max-h-full object-contain"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
