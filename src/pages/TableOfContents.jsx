import React from 'react';
import { Link } from 'react-router-dom';
import { List, Camera, Lightbulb, Info as InfoIcon, Home } from 'lucide-react';

export default function TableOfContents() {
    const sections = [
        { number: '01', title: 'Voorblad', path: '/', icon: <Home className="h-5 w-5" /> },
        { number: '02', title: 'Voorwoord', path: '/info#voorwoord', icon: <InfoIcon className="h-5 w-5" /> },
        { number: '05', title: 'Bewegingsfoto’s', path: '/gallery', sub: true },
        { number: '06', title: 'Portretten Studio', path: '/gallery', sub: true },
        { number: '07', title: 'Architectuur / Landschap', path: '/gallery', sub: true },
        { number: '08', title: 'Productfotografie', path: '/gallery', sub: true },
        { number: '09', title: 'Mooiste Foto’s', path: '/gallery', sub: true },
        { number: '10', title: 'Lichtplan', path: '/lighting', icon: <Lightbulb className="h-5 w-5" /> },
        { number: '11', title: 'Beschrijvingen bij foto’s', path: '/gallery', sub: true, note: 'Zie details per foto' },
        { number: '12', title: 'Technische specs', path: '/gallery', sub: true, note: 'Zie details per foto' },
        { number: '13', title: 'Nawoord', path: '/info#nawoord', icon: <InfoIcon className="h-5 w-5" /> },
        { number: '14', title: 'Originele foto’s', path: '/info#structuur', note: '(Los bijgeleverd)' },
    ];

    return (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-4xl font-serif text-white mb-12 border-b border-brand-accent/30 pb-4 inline-block">
                Inhoudsopgave
            </h2>

            <div className="space-y-4">
                {sections.map((section, index) => (
                    <Link
                        key={index}
                        to={section.path}
                        className={`block group ${section.active ? 'pointer-events-none' : ''}`}
                    >
                        <div className={`
              flex items-center justify-between p-4 rounded-lg border transition-all duration-300
              ${section.active
                                ? 'bg-brand-accent/10 border-brand-accent/50'
                                : 'bg-neutral-900/50 border-white/5 hover:border-brand-accent/30 hover:bg-neutral-900'}
            `}>
                            <div className="flex items-center space-x-6">
                                <span className={`font-mono text-sm ${section.active ? 'text-brand-accent' : 'text-gray-500 group-hover:text-brand-accent'}`}>
                                    {section.number}.
                                </span>
                                <div className="flex items-center space-x-3">
                                    {section.icon && (
                                        <span className="text-gray-400 group-hover:text-white transition-colors">
                                            {section.icon}
                                        </span>
                                    )}
                                    <span className={`font-serif text-lg ${section.active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                                        {section.title}
                                    </span>
                                </div>
                            </div>

                            {(section.note || section.sub) && (
                                <span className="text-xs text-gray-500 italic hidden sm:block">
                                    {section.note || (section.sub ? 'Onderdeel van Portfolio' : '')}
                                </span>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
