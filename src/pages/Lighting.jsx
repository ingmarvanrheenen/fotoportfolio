import React from 'react';
import { Lightbulb, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Lighting() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-serif text-white mb-12 border-b border-brand-accent/30 pb-4 inline-block"
            >
                Lichtplan
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Studio Diagram */}
                {/* Studio Diagrams Column */}
                <div className="space-y-8">
                    {/* Portrait Setup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <Lightbulb className="h-5 w-5 text-brand-accent" />
                            <h3 className="text-xl font-serif text-white">Portret Opstelling</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Eén enkele lichtbron van de linker zijkant voor dramatisch contrast (Rembrandt/Split lighting).
                        </p>

                        {/* Portrait Diagram: Light from Bottom-Left (approx 7-8 o'clock) */}
                        <div className="aspect-video bg-neutral-900 rounded-lg relative overflow-hidden border border-white/5 shadow-inner">
                            {/* Subject */}
                            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center text-[10px] text-gray-500 z-10">
                                Subject
                            </div>
                            {/* Light Bottom-Left */}
                            <div className="absolute bottom-1/4 left-1/4 w-0 h-0">
                                {/* Light Source Circle (Centered on 0,0) */}
                                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-brand-accent rounded-full shadow-[0_0_40px_15px_rgba(212,175,55,0.25)] relative z-20 -translate-x-1/2 -translate-y-1/2"></div>

                                {/* Text Label */}
                                <div className="absolute top-6 left-1/2 -translate-x-1/2 w-max text-[10px] text-brand-accent font-mono uppercase z-20">Side/Back Light</div>

                                {/* Beam (Originates from 0,0) */}
                                <div
                                    className="absolute top-1/2 left-1/2 w-48 h-32 bg-gradient-to-r from-brand-accent/40 to-transparent transform -translate-y-1/2 -rotate-45 origin-[center_left] pointer-events-none blur-md z-10"
                                    style={{ clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)' }}
                                ></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Product Setup */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-neutral-900/50 p-6 rounded-xl border border-white/10 backdrop-blur-sm"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <Lightbulb className="h-5 w-5 text-brand-accent" />
                            <h3 className="text-xl font-serif text-white">Product Opstelling</h3>
                        </div>
                        <p className="text-gray-400 text-sm mb-6">
                            Frontale belichting voor maximale helderheid en minimale schaduwen.
                        </p>

                        {/* Product Diagram: Light from Front (Bottom) */}
                        <div className="aspect-video bg-neutral-900 rounded-lg relative overflow-hidden border border-white/5 shadow-inner">
                            {/* Subject */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-white/20 text-[10px] flex items-center justify-center text-gray-500 z-10">
                                Item
                            </div>
                            {/* Light Front (Bottom) */}
                            <div className="absolute bottom-6 left-1/2 w-0 h-0">
                                {/* Light Source Circle */}
                                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-white/80 rounded-full shadow-[0_0_30px_10px_rgba(255,255,255,0.15)] relative z-20 -translate-x-1/2 -translate-y-1/2"></div>

                                {/* Text Label */}
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-max text-[10px] text-white/70 font-mono uppercase z-20">Front Light</div>

                                {/* Beam (Pointing Up) */}
                                <div
                                    className="absolute bottom-0 left-1/2 w-32 h-48 bg-gradient-to-t from-white/10 to-transparent transform -translate-x-1/2 origin-bottom pointer-events-none blur-md z-10"
                                    style={{ clipPath: 'polygon(0% 0%, 100% 0%, 65% 100%, 35% 100%)' }}
                                ></div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Natural Light */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-neutral-900/50 p-8 rounded-xl border border-white/10 backdrop-blur-sm"
                >
                    <div className="flex items-center space-x-3 mb-6">
                        <Sun className="h-6 w-6 text-brand-accent" />
                        <h3 className="text-2xl font-serif text-white">Natuurlijk Licht</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                        Bij architectuur en landschap is de zon mijn primaire lichtbron. Planning is cruciaal.
                        Mijn aanpak omvat het bestuderen van de zonnestand en weersvoorspelling.
                    </p>
                    <ul className="space-y-6">
                        {[
                            { title: 'Golden Hour', desc: 'Warme tinten, lange schaduwen. Ideaal voor landschap en portret op locatie.' },
                            { title: 'Blue Hour', desc: 'Koel licht voor zonsopkomst of na zonsondergang. Perfect voor stadsarchitectuur.' },
                            { title: 'Hard Light', desc: 'Midden op de dag. Gebruikt voor high-contrast zwart-wit architectuur.' }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2 mr-4 flex-shrink-0 shadow-[0_0_10px_rgba(212,175,55,1)]" />
                                <div>
                                    <strong className="block text-white font-serif mb-1">{item.title}</strong>
                                    <span className="text-gray-400 text-sm">{item.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </div>
    );
}
