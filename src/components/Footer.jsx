import React from 'react';
import { Camera, Mail, Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-neutral-900 border-t border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-2 text-white">
                            <span className="text-xl font-serif tracking-wide">Ingmar van Rheenen</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Vang het moment. Een portfolio dat passie voor licht, compositie en verhalen combineert.
                            Gespecialiseerd in portret, architectuur en productfotografie.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <SocialIcon icon={<Instagram size={18} />} href="#" label="Instagram" />
                            <SocialIcon icon={<Linkedin size={18} />} href="#" label="LinkedIn" />
                            <SocialIcon icon={<Mail size={18} />} href="mailto:contact@example.com" label="Email" />
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h3 className="text-white font-serif mb-4 text-lg">Navigatie</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><FooterLink to="/" label="Home" /></li>
                            <li><FooterLink to="/gallery" label="Portfolio" /></li>
                            <li><FooterLink to="/lighting" label="Lichtplannen" /></li>
                            <li><FooterLink to="/info" label="Over Mij" /></li>
                        </ul>
                    </div>

                    {/* Contact/Extra */}
                    <div>
                        <h3 className="text-white font-serif mb-4 text-lg">Contact</h3>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex items-center space-x-2">
                                <span>Amsterdam, Nederland</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <a href="mailto:info@ingmarvanrheenen.nl" className="hover:text-brand-accent transition-colors">
                                    info@ingmarvanrheenen.nl
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {currentYear} Ingmar van Rheenen. Alle rechten voorbehouden.</p>
                    <div className="flex items-center space-x-1 mt-4 md:mt-0">
                        <span>Gemaakt met</span>
                        <Heart size={12} className="text-brand-accent fill-brand-accent" />
                        <span>en oog voor detail.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href, label }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-accent hover:text-black transition-all duration-300"
        >
            {icon}
        </a>
    );
}

function FooterLink({ to, label }) {
    return (
        <Link
            to={to}
            className="hover:text-brand-accent hover:translate-x-1 transition-all duration-300 inline-block"
        >
            {label}
        </Link>
    );
}
