// Import cover images
// Note: Ensure these files exist in src/assets/... before importing!
import PortraitCover from '../assets/portret/cover/cover_portret.jpg';
import MotionCover from '../assets/motion/cover/motion_cover.jpg';
import ArchCover from '../assets/Architectuur/cover/architecture_cover.jpg';
import ProductCover from '../assets/product/cover/product_cover.jpg';
import BestCover from '../assets/Mooiste/cover/mooiste_cover.jpg';

// Architecture Item 1 Images
import Arch1Image from '../assets/Architectuur/one/stairs_after.jpg';
import Arch1Original from '../assets/Architectuur/one/stairs_before.jpg';

// Product Item 1 Images
import Product1Image from '../assets/product/one/product_after.jpg';
import Product1Original from '../assets/product/one/product_before.JPG';

// Product Item 2 Images
import Product2Image from '../assets/product/two/product_after.jpg';
import Product2Original from '../assets/product/two/product_before.jpg';

// Portrait Item 1 Images
import Portrait1Image from '../assets/portret/cover/one/portret_after.jpg';
import Portrait1Original from '../assets/portret/cover/one/portret_before.jpg';

// Motion Item 1 Images
import Motion1Image from '../assets/motion/cover/one/motion_after.jpg';
import Motion1Original from '../assets/motion/cover/one/motion_before.JPG';

export const portfolioCategories = [
    {
        id: 'motion',
        title: 'Bewegingsfoto’s',
        description: 'Dynamiek en snelheid vastgelegd in een enkel moment.',
        image: MotionCover
    },
    {
        id: 'portrait',
        title: 'Portretten Studio',
        description: 'Karakter en emotie in gecontroleerd licht.',
        image: PortraitCover
    },
    {
        id: 'architecture',
        title: 'Architectuur / Landschap',
        description: 'Lijnen, vormen en de omgeving.',
        image: ArchCover
    },
    {
        id: 'product',
        title: 'Productfotografie',
        description: 'Commerciële perfectie en detail.',
        image: ProductCover
    },
    {
        id: 'best',
        title: 'Mooiste Foto’s',
        description: 'Mijn persoonlijke favorieten.',
        image: BestCover
    }
];

export const portfolioItems = [
    // --- Motion ---
    {
        id: 'm1',
        categoryId: 'motion',
        title: 'De Eindsprint',
        image: Motion1Image,
        imageOriginal: Motion1Original,
        description: 'Het beslissende moment tijdens de lokale atletiekwedstrijd.',
        whyInteresting: 'De gezichtsuitdrukking toont pure wilskracht en uitputting.',
        critique: 'De onscherpe achtergrond isoleert het onderwerp goed. De sluitertijd was perfect om de beweging te bevriezen maar toch snelheid te suggereren.',
        specs: { shutter: '1/125s', aperture: 'f/7.1', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Centraal perspectief met leidende lijnen van de baan.',
            frame: 'Ruim kader om de context van het stadion te tonen.',
            format: 'Landschap',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Tegenlicht', intensity: 'Harde zon', source: 'Natuurlijk' },
            depthOfField: 'Gering (f/2.8)',
        },
        editing: { process: 'Contrast verhoogd, schaduwen opgehelderd, kleurtemperatuur warmer.', comparison: ['Crop', 'Color Grade'] }
    },

    // --- Portrait ---
    {
        id: 'p1',
        categoryId: 'portrait',
        title: 'Intense Blik',
        image: Portrait1Image,
        imageOriginal: Portrait1Original,
        description: 'Intense blik van een model in Rembrandt-verlichting.',
        whyInteresting: 'De blik is direct en zelfverzekerd.',
        critique: 'Rembrandt-verlichting is goed gelukt, schaduwzijde niet te donker.',
        specs: { shutter: '1/160s', aperture: 'f/8', iso: '100', camera: 'Sony A7IV' },
        analysis: {
            composition: 'Gulden snede (ogen op de lijn).',
            frame: 'Borstbeeld (Bust shot).',
            format: 'Portret',
            perspective: 'Ooghoogte',
            lighting: { direction: '45 graden', intensity: 'Softbox', source: 'Studio' },
            depthOfField: 'Scherp van neus tot oren',
        },
        editing: { process: 'Huidretouche (frequentie separatie), tanden licht gewit.', comparison: ['Retouch', 'Color Balance'] }
    },

    // --- Architecture ---
    {
        id: 'a1',
        categoryId: 'architecture',
        title: 'Symmetrie in Beton',
        image: Arch1Image,
        imageOriginal: Arch1Original,
        description: 'Moderne trap met strakke lijnen.',
        whyInteresting: 'De herhaling van patronen werkt rustgevend.',
        critique: 'Perfecte symmetrie bereikt door perspectiefcorrectie in nabewerking.',
        specs: { shutter: '1/500s', aperture: 'f/11', iso: '100', camera: 'Canon R5' },
        analysis: {
            composition: 'Symmetrisch',
            frame: 'Totaalshot',
            format: 'Landschap',
            perspective: 'Kikkerperspectief',
            lighting: { direction: 'Zonlicht (Hoog)', intensity: 'Hard', source: 'Zon' },
            depthOfField: 'Groot (alles scherp)',
        },
        editing: { process: 'Keystone correctie, blauwverzadiging verhoogd.', comparison: ['Perspective', 'Saturation'] }
    },

    // --- Product ---
    {
        id: 'pr1',
        categoryId: 'product',
        title: 'Tijdloos Uurwerk',
        image: Product1Image,
        imageOriginal: Product1Original,
        description: 'Luxe horloge met focus op de wijzerplaat.',
        whyInteresting: 'De weerspiegeling in het glas en de metalen details.',
        critique: 'Reflecties goed onder controle gehouden d.m.v. polarisatiefilter.',
        specs: { shutter: '1/125s', aperture: 'f/16', iso: '100', camera: 'Macro Lens 100mm' },
        analysis: {
            composition: 'Centraal',
            frame: 'Medium',
            format: 'rechthoek',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Rondom', intensity: 'Diffuus', source: 'Lichttent' },
            depthOfField: 'Groot voor macrobegrippen',
        },
        editing: { process: 'Focus stacking voor maximale scherpte, stofjes weggepoetst en croping.', comparison: ['Stacking', 'Cleanup', 'Color Balance', 'croping'] }
    },
    {
        id: 'pr2',
        categoryId: 'product',
        title: 'Parfum Noir',
        image: Product2Image,
        imageOriginal: Product2Original,
        description: 'Productfotografie met low-key verlichting.',
        whyInteresting: 'De mysterieuze sfeer past bij het merk.',
        critique: 'Randverlichting (rim light) scheidt het zwarte flesje goed van de zwarte achtergrond.',
        specs: { shutter: '1/100s', aperture: 'f/18', iso: '200', camera: 'NIKON D5600' },
        analysis: {
            composition: 'Asymmetrisch',
            frame: 'Medium',
            format: 'Portret',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Tegenlicht/Zijlicht', intensity: 'Accent', source: 'Snoots' },
            depthOfField: 'Scherp',
        },
        editing: { process: 'Lokale contrasten, kleurkalibratie.', comparison: ['Contrast', 'Color'] }
    },

    // --- Best Of ---
];
