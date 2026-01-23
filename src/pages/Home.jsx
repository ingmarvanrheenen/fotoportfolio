import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, ArrowRight, Camera, Aperture, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { portfolioItems } from '../data/portfolioData';
import LoadingImage from '../components/LoadingImage';
import LoadingOverlay from '../components/LoadingOverlay';
import IngmarImage from '../assets/home/Ingmar.jpg';

export default function Home() {
    const scrollRef = useRef(null);

    // Get 3 featured items (e.g., from 'best' or varied categories)
    const featuredItems = portfolioItems.filter(item => ['b1', 'm2', 'p1'].includes(item.id));

    return (
        <div className="relative overflow-x-hidden">
            <LoadingOverlay />

            {/* --- HERO SECTION --- */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden" ref={scrollRef}>
                {/* Dynamic Background */}
                <div className="absolute inset-0 z-0">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/10 to-black z-10" />

                    {/* Floating Parallax Images */}
                    <ParallaxImages />

                    {/* Animated Orbs/Glows */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[128px]"
                    />
                    <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[128px]"
                    />
                </div>

                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-brand-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4">
                            Ingmar van Rheenen
                        </h2>
                        <h1 className="text-6xl md:text-9xl font-serif text-white mb-6 leading-tight">
                            Vang het <span className="italic text-brand-accent">Moment</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light tracking-wide mb-10">
                            Een curatie van beweging, licht, en architectuur. Ontdek de wereld door mijn lens.
                        </p>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                            <Link
                                to="/gallery"
                                className="px-8 py-3 bg-brand-accent text-brand-dark font-medium rounded-full hover:bg-brand-accent-hover transition-colors shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
                            >
                                Bekijk mijn werk
                            </Link>
                            <Link
                                to="/info"
                                className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition-colors"
                            >
                                Over dit project
                            </Link>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    style={{ opacity: useTransform(useScroll({ target: scrollRef }).scrollYProgress, [0, 0.2], [1, 0]) }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-32 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce z-20"
                >
                    <ChevronDown className="w-6 h-6" />
                </motion.div>
            </section>

            {/* --- FEATURED WORK SECTION --- */}
            <section className="py-24 bg-neutral-900/50 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-end mb-12"
                    >
                        <div>
                            <h2 className="text-4xl font-serif text-white mb-2">Uitgelicht Werk</h2>
                            <div className="h-1 w-20 bg-brand-accent" />
                        </div>
                        <Link to="/gallery" className="hidden md:flex items-center text-brand-accent hover:text-white transition-colors group">
                            Bekijk alles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {featuredItems.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-800"
                            >
                                <LoadingImage
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full"
                                    imageClassName="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-serif text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm">{item.category}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <Link to="/gallery" className="md:hidden mt-8 flex items-center justify-center text-brand-accent hover:text-white transition-colors group">
                        Bekijk alles <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* --- SERVICES / DISCIPLINES --- */}
            <section className="py-24 bg-black relative overflow-hidden">
                {/* Background noise texture via CSS is applied globally, but we can add more overlay here */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-white mb-4">Disciplines</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Mijn passie ligt in het vastleggen van de diversiteit van het leven.
                            Van de verstilde momenten in de studio tot de hectiek van de sport.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                                <Camera className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3">Portret & Studio</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Het vangen van karakter en emotie door middel van gecontroleerd licht en regie.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                                <Aperture className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3">Actie & Beweging</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                De snelheid van het moment bevriezen met technische perfectie.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-accent/30 transition-colors"
                        >
                            <div className="w-16 h-16 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-accent">
                                <ImageIcon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-3">Architectuur</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Spelen met lijnen, vormen en natuurlijk licht voor abstracte composities.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- ABOUT TEASER --- */}
            <section className="py-24 bg-brand-dark border-t border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2 relative"
                        >
                            <div className="aspect-[3/4] rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Placeholder for photographer portrait */}
                                <LoadingImage
                                    src={IngmarImage}
                                    alt="Photographer"
                                    className="w-full h-full"
                                    imageClassName="object-cover"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-accent/10 rounded-full blur-xl z-0" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 border border-brand-accent/30 rounded-full z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="md:w-1/2"
                        >
                            <h4 className="text-brand-accent uppercase tracking-widest text-sm mb-2">De Fotograaf</h4>
                            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Ingmar van Rheenen</h2>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Fotografie is voor mij meer dan alleen een plaatje schieten; het is kijken met aandacht.
                                <br /><br />
                                Dit portfolio project is het resultaat van een intensieve periode van experimenteren met techniek,
                                licht en compositie. Elk beeld vertelt een verhaal en elke fout was een les.
                            </p>
                            <Link to="/info" className="text-white border-b border-brand-accent pb-1 hover:text-brand-accent transition-colors">
                                Lees het volledige voorwoord
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    );
}

function ParallaxImages() {
    const { scrollY } = useScroll();

    // Create multiple transforms for different "depths"
    // As we scroll down (Y increases), these move UP faster or slower
    const y1 = useTransform(scrollY, [0, 500], [0, -200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -400]);
    const y3 = useTransform(scrollY, [0, 500], [0, -600]);
    const y4 = useTransform(scrollY, [0, 500], [0, -800]);

    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Select 4-5 random images from portfolioItems (stable selection)
    const floatingImages = [
        { src: portfolioItems[0]?.image, left: '15%', top: '20%', speed: y1, scale: 0.8, rotation: -5 },
        { src: portfolioItems[2]?.image, left: '80%', top: '15%', speed: y2, scale: 1.1, rotation: 10 },
        { src: portfolioItems[3]?.image, left: '10%', top: '70%', speed: y3, scale: 0.9, rotation: 15 },
        { src: portfolioItems[4]?.image, left: '85%', top: '60%', speed: y4, scale: 1.2, rotation: -10 },
        // Central-ish back layer
        { src: portfolioItems[1]?.image, left: '45%', top: '50%', speed: y1, scale: 1.6, rotation: 0, className: "blur-[1px] opacity-30" },
    ].filter(img => img.src);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {floatingImages.map((img, i) => (
                <motion.div
                    key={i}
                    style={{
                        left: img.left,
                        top: img.top,
                        y: img.speed,
                        opacity: opacity,
                        rotate: img.rotation,
                        scale: img.scale,
                        translateX: '-50%', // Center the element on its coordinate
                        translateY: '-50%'
                    }}
                    className={`absolute w-48 h-64 md:w-64 md:h-80 rounded-lg overflow-hidden shadow-2xl border border-white/10 ${img.className || 'opacity-40'}`}
                >
                    <img src={img.src} alt="" className="w-full h-full object-cover grayscale contrast-125" />
                </motion.div>
            ))}
        </div>
    );
}
