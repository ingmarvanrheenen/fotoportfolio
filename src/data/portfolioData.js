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

// Portrait Item 2 Images
import Portrait2Image from '../assets/portret/cover/two/rouzbehsayadifar_after.jpg';
import Portrait2Original from '../assets/portret/cover/two/rouzbehsayadifar_before.jpg';

// Portrait Item 3 Images
import Portrait3Image from '../assets/portret/cover/three/rouzbehsayadifar_1_after.JPG';
import Portrait3Original from '../assets/portret/cover/three/rouzbehsayadifar_1_before.jpg';

// Personal Items
import Pers1Image from '../assets/personal/cover/one/paal_after.jpg';
import Pers1Original from '../assets/personal/cover/one/paal_before.jpg';

import Pers2Image from '../assets/personal/cover/two/plant_after.jpg';
import Pers2Original from '../assets/personal/cover/two/plant_before.jpg';

import Pers3Image from '../assets/personal/cover/three/kraan_after.jpg';
import Pers3Original from '../assets/personal/cover/three/kraan_before.jpg';

import Pers4Image from '../assets/personal/cover/four/boom_after (2).jpg';
import Pers4Original from '../assets/personal/cover/four/boom_before (2).jpg';

import Pers5Image from '../assets/personal/cover/five/lamp_before.jpg'; // Using before as main if after is missing, or single image

import Pers6Image from '../assets/personal/cover/boom_after.jpg';
// Assuming boom_before.jpg exists or single image

import Pers7Image from '../assets/personal/cover/six/kwal_after.jpg';
import Pers7Original from '../assets/personal/cover/six/kwal_before.jpg';


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
    },
    {
        id: 'personal',
        title: "Mijn Foto's",
        description: 'Vrij werk en persoonlijke projecten.',
        image: Pers4Image // Using the tree bark/structure image as cover
    }
];

export const categories = [
    { id: 'all', label: 'Alles' },
    { id: 'portrait', label: 'Portret' },
    { id: 'architecture', label: 'Architectuur' },
    { id: 'product', label: 'Product' },
    { id: 'motion', label: 'Beweging' },
    { id: 'personal', label: "Mijn Foto's" } // Added new category
];

export const portfolioItems = [
    // --- Motion ---
    {
        id: 'm1',
        categoryId: 'motion',
        title: 'De buurt vanuit de auto',
        image: Motion1Image,
        imageOriginal: Motion1Original,
        description: 'In een snele oogomslach een foto van uit de auto.',
        whyInteresting: 'De snelheid en dynamiek van de foto.',
        critique: 'De bewegingsonscherpte van de voorbijrazende auto contrasteert sterk met de statische architectuur. De grauwe lucht draagt bij aan de stedelijke sfeer.',
        specs: { shutter: '1/125s', aperture: 'f/7.1', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Diagonale lijnen van het gebouw en de auto.',
            frame: 'Totaal shot',
            format: 'Landschap',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Diffuus', intensity: 'Bewolkt', source: 'Natuurlijk' },
            depthOfField: 'Groot, maar onscherpte door beweging',
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
        description: 'Zwart-wit portret met een krachtig handgebaar.',
        whyInteresting: 'De blik is direct en zelfverzekerd.',
        critique: 'De omzetting naar zwart-wit versterkt het drama. De schaduwen zijn gewaagd.',
        specs: { shutter: '1/160s', aperture: 'f/8', iso: '100', camera: 'NIKON D5600' },
        analysis: {
            composition: 'Centraal, hand vormt een kader.',
            frame: 'Borstbeeld (Bust shot)',
            format: 'Rechthoek',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Hard licht', intensity: 'Hoog contrast', source: 'Studio' },
            depthOfField: 'Scherp',
        },
        editing: { process: 'Zwart-Wit contrast en schaduwen opgehelderd.', comparison: ['Retouch', 'Color Balance'] }
    },
    {
        id: 'p2',
        categoryId: 'portrait',
        title: 'Rouzbeh I',
        image: Portrait2Image,
        imageOriginal: Portrait2Original,
        description: 'Een intiem studio portret dat rust en introspectie uitstraalt.',
        whyInteresting: 'De fluwelen textuur van de trui contrasteert prachtig met de donkere achtergrond.',
        critique: 'De zachte verlichting accentueert de gelaatstrekken zonder harde schaduwen, wat zorgt voor een benaderbare uitstraling.',
        specs: { shutter: '1/125s', aperture: 'f/8.0', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Centraal geplaatst met klassieke driekwart houding.',
            frame: 'Medium shot',
            format: 'Portret',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Zacht zijlicht', intensity: 'Gedempt', source: 'Softbox' },
            depthOfField: 'Scherp op de ogen, zachte fall-off naar achteren.',
        },
        editing: { process: 'Huidtonen geëgaliseerd en zwartwaarden verdiept.', comparison: ['Retouch', 'Color Grading'] }
    },
    {
        id: 'p3',
        categoryId: 'portrait',
        title: 'Rouzbeh II',
        image: Portrait3Image,
        imageOriginal: Portrait3Original,
        description: 'Een profiel portret dat speelt met houding en ondersteuning.',
        whyInteresting: 'De interactie met de stoel voegt een narratief element toe aan de compositie.',
        critique: 'De pose is onconventioneel en trekt de aandacht naar de lijn van de nek en kaak.',
        specs: { shutter: '1/160s', aperture: 'f/5.6', iso: '200', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Zijaanzicht (profiel) met diagonale lijnen van de stoel.',
            frame: 'Medium shot',
            format: 'Landschap',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Rembrandt-achtig', intensity: 'Contrastrijk', source: 'Studioflitser' },
            depthOfField: 'Focus op het profiel.',
        },
        editing: { process: 'Contrast verhoogd om de vormen te accentueren.', comparison: ['Retouch', 'Contrast'] }
    },

    // --- Personal ---
    {
        id: 'pers1',
        categoryId: 'personal',
        title: 'Fundering',
        image: Pers1Image,
        imageOriginal: Pers1Original,
        description: 'Een spel van licht en schaduw onder de pier.',
        whyInteresting: 'De ritmische herhaling van de betonnen pilaren creëert diepte en structuur.',
        critique: 'De warme gloed van de zon op het kille beton zorgt voor een interessant contrast in temperatuur en materiaal.',
        specs: { shutter: '1/250s', aperture: 'f/6', iso: '720', camera: 'NIKON D5200' },
        analysis: { composition: 'Repetitie en lijnenperspectief.', frame: 'Totaal shot', format: 'Landschap', perspective: 'Ooghoogte', lighting: { direction: 'Zijlicht (gouden uur)', intensity: 'Hard', source: 'Zon' }, depthOfField: 'Grote scherptediepte.' },
        editing: { process: 'Contrast verhoogd om de texturen in het zand te benadrukken.', comparison: ['Retouch'] }
    },
    {
        id: 'pers2',
        categoryId: 'personal',
        title: 'Duinlandschap',
        image: Pers2Image,
        imageOriginal: Pers2Original,
        description: 'De wind gevangen in het helmgras.',
        whyInteresting: 'De textuur van het zand en de dynamiek van het gras vertellen het verhaal van de kust.',
        critique: 'Het lage standpunt trekt de kijker direct het landschap in, waarbij de voorgrond de diepte versterkt.',
        specs: { shutter: '1/160s', aperture: 'f/6.3', iso: '200', camera: 'NIKON D5200' },
        analysis: { composition: 'Diagonaal (duinlijn).', frame: 'Medium shot', format: 'Landschap', perspective: 'Kikvorsperspectief', lighting: { direction: 'Strijklicht', intensity: 'Zacht', source: 'Natuurlijk' }, depthOfField: 'Focus op voorgrondgras.' },
        editing: { process: 'Warme tonen versterkt.', comparison: ['Retouch'] }
    },
    {
        id: 'pers3',
        categoryId: 'personal',
        title: 'Ochtendmist',
        image: Pers3Image,
        imageOriginal: Pers3Original,
        description: 'Industriële stilte in de vroege morgen.',
        whyInteresting: 'De mist abstraheert de vormen van de bouwkraan, waardoor een minimalistisch beeld ontstaat.',
        critique: 'De subtiele kleurovergangen in de lucht (van koel naar warm) geven sfeer aan het silhouet.',
        specs: { shutter: '1/640s', aperture: 'f/11', iso: '100', camera: 'NIKON D5200' },
        analysis: { composition: 'Derdenregel (kraan).', frame: 'Ver weg', format: 'Landschap', perspective: 'Neutraal', lighting: { direction: 'Diffuus', intensity: 'Zwak', source: 'Atmosferisch' }, depthOfField: 'Oneindig' },
        editing: { process: 'Nevelreductie toegepast voor iets meer definitie.', comparison: ['Retouch'] }
    },
    {
        id: 'pers4',
        categoryId: 'personal',
        title: 'Natuur-architectuur',
        image: Pers4Image,
        imageOriginal: Pers4Original,
        description: 'Patronen en structuren in boomschors.',
        whyInteresting: 'De close-up onthult details die normaal aan het oog ontsnappen, bijna als een abstract schilderij.',
        critique: 'De verticale lijnen trekken de blik omhoog, en het mos voegt een mooie kleurvariatie toe aan de bruine tinten.',
        specs: { shutter: '1/640s', aperture: 'f/11', iso: '100', camera: 'NIKON D5200' },
        analysis: { composition: 'Centraal / Textuur.', frame: 'Close-up / Kikvorsperspectief', format: 'Portret', perspective: 'Kikvorsperspectief', lighting: { direction: 'Diffuus', intensity: 'Gelijkmatig', source: 'Schaduw' }, depthOfField: 'Ondiep makro-effect.' },
        editing: { process: 'Scherpte en structuur (clarity) verhoogd.', comparison: ['Retouch'] }
    },
    {
        id: 'pers5',
        categoryId: 'personal',
        title: 'Gloed',
        image: Pers5Image,
        imageOriginal: Pers5Image,
        description: 'De schoonheid van techniek in detail.',
        whyInteresting: 'De gloeidraad vormt een perfecte spiraal die licht geeft in de duisternis.',
        critique: 'Het sterke contrast tussen de felle draad en de zwarte achtergrond maakt dit een krachtig grafisch beeld.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Centraal.', frame: 'Macro', format: 'Landschap', perspective: 'Recht van voren', lighting: { direction: 'Interne bron', intensity: 'Fel', source: 'Kunstlicht' }, depthOfField: 'Zeer ondiep (focus op draad).' },
        editing: { process: 'Hooglichten beheerst, zwartpunt verlaagd.', comparison: ['Retouch'] }
    },
    {
        id: 'pers6',
        categoryId: 'personal',
        title: 'Veldboom',
        image: Pers6Image,
        imageOriginal: Pers6Image,
        description: 'Eenzaamheid en groei in een open veld.',
        whyInteresting: 'De grillige takken steken sterk af tegen de strakke blauwe lucht.',
        critique: 'De compositie plaatst de boom in een context van ruimte, wat een gevoel van vrijheid geeft.',
        specs: { shutter: '', aperture: '', iso: '', camera: '' },
        analysis: { composition: 'Diagonaal / Asymmetrisch.', frame: 'Totaal', format: 'Portret', perspective: 'Ooghoogte', lighting: { direction: 'Zonlicht', intensity: 'Helder', source: 'Natuurlijk' }, depthOfField: 'Alles scherp.' },
        editing: { process: 'Blauwe lucht verzadigd en contrast in het riet verhoogd.', comparison: ['Retouch'] }
    },
    {
        id: 'pers7',
        categoryId: 'personal',
        title: 'Kwal',
        image: Pers7Image,
        imageOriginal: Pers7Original,
        description: 'Een kwal die door het donkere water zweeft.',
        whyInteresting: 'De symmetrie en doorschijnendheid van de kwal tegen de donkere achtergrond.',
        critique: 'Het zachte, natuurlijke licht benadrukt de details van de tentakels en de bel.',
        specs: { shutter: '1/320s', aperture: 'f/6.3', iso: '800', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Centraal',
            frame: 'Close-up',
            format: 'Rechthoek',
            perspective: 'Bovenaanzicht',
            lighting: { direction: 'Diffuus', intensity: 'Zacht', source: 'Natuurlijk' },
            depthOfField: 'Focus op de kwal',
        },
        editing: { process: 'Contrast verhoogd en kleurbalans aangepast.', comparison: ['Retouch'] }
    },

    // --- Architecture ---
    {
        id: 'a1',
        categoryId: 'architecture',
        title: 'Lichtspel in Beton',
        image: Arch1Image,
        imageOriginal: Arch1Original,
        description: 'Het spel van zonlicht op een betonnen trap in aanbouw.',
        whyInteresting: 'De herhaling van patronen werkt rustgevend.',
        critique: 'De harde schaduwen creëren een abstract patroon.',
        specs: { shutter: '1/500s', aperture: 'f/11', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Diagonale lijnen.',
            frame: 'Totaalshot',
            format: 'Landschap',
            perspective: 'Kikkerperspectief',
            lighting: { direction: 'Zonlicht', intensity: 'Hard', source: 'Zon' },
            depthOfField: 'Groot (alles scherp)',
        },
        editing: { process: 'Keystone correctie, blauwverzadiging verhoogd en contrast verhoogd.', comparison: ['Perspective', 'Saturation'] }
    },

    // --- Product ---
    {
        id: 'pr1',
        categoryId: 'product',
        title: 'Klassiek Beeldje',
        image: Product1Image,
        imageOriginal: Product1Original,
        description: 'Detailopname van een klassiek beeldje.',
        whyInteresting: 'De zachte verlichting benadrukt de vorm.',
        critique: 'De donkere achtergrond laat het onderwerp loskomen.',
        specs: { shutter: '1/125s', aperture: 'f/16', iso: '100', camera: 'NIKON D5300' },
        analysis: {
            composition: 'Centraal',
            frame: 'Ten voeten uit',
            format: 'Rechthoek',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Zacht', intensity: 'Warm', source: 'Studio' },
            depthOfField: 'Groot (alles scherp)',
        },
        editing: { process: 'Kleur iets verhoogd en contrast verhoogd ook heb ik de foto gecroped.', comparison: ['Color Balance', 'croping'] }
    },
    {
        id: 'pr2',
        categoryId: 'product',
        title: 'Monster',
        image: Product2Image,
        imageOriginal: Product2Original,
        description: 'Low-key productshot van een blikje.',
        whyInteresting: 'De mysterieuze sfeer door randverlichting.',
        critique: 'Rim lighting (randverlichting) scheidt het onderwerp van de achtergrond.',
        specs: { shutter: '1/100s', aperture: 'f/18', iso: '200', camera: 'NIKON D5600' },
        analysis: {
            composition: 'Liggend, centraal',
            frame: 'Medium',
            format: 'Landschap',
            perspective: 'Ooghoogte',
            lighting: { direction: 'Rim light', intensity: 'Accent', source: 'Studio' },
            depthOfField: 'Scherp',
        },
        editing: { process: 'Lokale contrasten, kleurkalibratie.', comparison: ['Contrast', 'Color'] }
    },

    // --- Best Of ---
];
