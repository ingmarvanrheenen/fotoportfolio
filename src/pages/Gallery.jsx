import React, { useState } from 'react';
import { portfolioCategories, portfolioItems } from '../data/portfolioData';
import PhotoDetail from '../components/PhotoDetail';
import LoadingImage from '../components/LoadingImage';
import { ArrowLeft, Camera, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Gallery() {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const filteredItems = selectedCategory
        ? portfolioItems.filter(item => item.categoryId === selectedCategory.id)
        : [];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">

            {/* Header / Breadcrumbs */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 flex items-center justify-between"
            >
                <div className="flex items-center space-x-4">
                    {selectedCategory ? (
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className="flex items-center text-gray-400 hover:text-white transition-colors group"
                        >
                            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
                            Terug naar overzicht
                        </button>
                    ) : (
                        <div>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-2">Portfolio</h2>
                            <div className="h-1 w-20 bg-brand-accent" />
                        </div>
                    )}
                </div>

                {selectedCategory && (
                    <motion.h2
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-3xl font-serif text-brand-accent hidden md:block"
                    >
                        {selectedCategory.title}
                    </motion.h2>
                )}
            </motion.div>

            <AnimatePresence mode='wait'>
                {/* Categories Grid */}
                {!selectedCategory && (
                    <motion.div
                        key="categories"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {portfolioCategories.map((category, index) => (
                            <motion.button
                                key={category.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => setSelectedCategory(category)}
                                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-900 border border-white/5 hover:border-brand-accent/50 transition-all duration-500 text-left shadow-2xl hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

                                {/* Background Image */}
                                {category.image ? (
                                    <div className="absolute inset-0">
                                        <LoadingImage
                                            src={category.image}
                                            alt={category.title}
                                            className="w-full h-full"
                                            imageClassName="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
                                        />
                                    </div>
                                ) : (
                                    <div className={`absolute inset-0 bg-neutral-800 transition-transform duration-700 group-hover:scale-110 opacity-50`} />
                                )}

                                {!category.image && (
                                    <div className="absolute inset-0 flex items-center justify-center text-neutral-700 group-hover:text-brand-accent/20 transition-colors z-0">
                                        <FolderOpen className="h-32 w-32 opacity-10" />
                                    </div>
                                )}

                                <div className="absolute bottom-0 left-0 p-8 z-20 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl font-serif text-white group-hover:text-brand-accent transition-colors mb-2">
                                        {category.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {category.description}
                                    </p>
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                )}

                {/* Photos Grid */}
                {selectedCategory && (
                    <motion.div
                        key="photos"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredItems.length === 0 ? (
                            <div className="col-span-full text-center py-20 text-gray-500">
                                <Camera className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>Nog geen foto's in deze categorie.</p>
                            </div>
                        ) : (
                            filteredItems.map((item, index) => (
                                <motion.button
                                    key={item.id}
                                    layoutId={`photo-${item.id}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setSelectedPhoto(item)}
                                    className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-900 border border-white/5 shadow-lg"
                                >
                                    <LoadingImage
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full"
                                        imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                                        <span className="text-brand-accent font-serif text-xl italic mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            {item.title}
                                        </span>
                                        <span className="text-white text-xs tracking-widest uppercase border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors">
                                            Bekijk Details
                                        </span>
                                    </div>
                                </motion.button>
                            ))
                        )}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Detail Modal */}
            {selectedPhoto && (
                <PhotoDetail item={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
            )}
        </div>
    );
}
