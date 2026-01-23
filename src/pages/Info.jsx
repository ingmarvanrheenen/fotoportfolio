import React from 'react';
import { motion } from 'framer-motion';

export default function Info() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl font-serif text-white mb-20 text-center"
            >
                Over dit Portfolio
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-24"
            >
                {/* Voorwoord */}
                <motion.section id="voorwoord" variants={sectionVariants}>
                    <div className="flex items-baseline space-x-4 mb-8 border-b border-white/10 pb-4">
                        <span className="text-brand-accent font-mono text-sm">01.</span>
                        <h2 className="text-3xl font-serif text-white">Voorwoord</h2>
                    </div>
                    <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed">
                        <p>
                            Voor u ligt mijn fotografie portfolio, een verzameling beelden die mijn groei en visie als fotograaf weerspiegelen.
                            De opdracht om beweging, portret, architectuur en productfotografie vast te leggen heeft mij uitgedaagd om
                            technisch preciezer te werken en bewuster om te gaan met licht.
                        </p>
                        <p className="mt-4">
                            In dit digitale portfolio navigeert u door verschillende disciplines. Elke foto is voorzien van technische specificaties
                            en een reflectie op de compositie en nabewerking. De keuze voor een web-based presentatie stelt mij in staat om
                            de beelden interactief en in hoge kwaliteit te tonen.
                        </p>
                    </div>
                </motion.section>

                {/*  */}

                {/* Nawoord */}
                <motion.section id="nawoord" variants={sectionVariants}>
                    <div className="flex items-baseline space-x-4 mb-8 border-b border-white/10 pb-4">
                        <span className="text-brand-accent font-mono text-sm">02.</span>
                        <h2 className="text-3xl font-serif text-white">Nawoord</h2>
                    </div>
                    <div className="prose prose-invert prose-lg text-gray-300 leading-relaxed">
                        <p>
                            Het samenstellen van dit portfolio heeft mij inzicht gegeven in mijn eigen stijl.
                            Vooral het analyseren van mijn eigen werk ("critique") was leerzaam; het dwingt je om niet alleen naar "mooi"
                            te kijken, maar ook naar "waarom". Ik heb geleerd dat licht niet alleen een hulpmiddel is om te belichten,
                            maar de kwast waarmee je de sfeer schildert.
                        </p>
                        <p className="mt-4">
                            Ik kijk met trots terug op dit project en zie het als een startpunt voor verdere ontwikkeling in de fotografie.
                        </p>
                        <p className="mt-12 text-brand-accent font-serif italic text-xl">
                            — Ingmar van Rheenen
                        </p>
                    </div>
                </motion.section>

            </motion.div>

        </div>
    );
}
