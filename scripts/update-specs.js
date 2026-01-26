
import fs from 'fs';
import path from 'path';
import exifr from 'exifr';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORTFOLIO_DATA_PATH = path.join(__dirname, '../src/data/portfolioData.js');

async function updateSpecs() {
    console.log('Reading portfolioData.js...');
    let content = fs.readFileSync(PORTFOLIO_DATA_PATH, 'utf-8');

    // 1. Extract imports to map variable names to file paths
    const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+)['"]/g;
    const imports = {};
    let match;
    while ((match = importRegex.exec(content)) !== null) {
        imports[match[1]] = match[2];
    }
    console.log(`Found ${Object.keys(imports).length} imports.`);

    // 2. Find portfolioItems array
    // We'll use a regex to find objects with an 'image' property inside the array
    // This is a bit brittle but avoids executing the user's code which might have other deps.
    // We look for objects like: { ... id: '...', ... image: VarName, ... specs: { ... } ... }

    // Strategy: Identify item blocks and extract 'image' variable and current 'specs' range.
    // We will replace the 'specs' object content.

    // Regex to find the image property value (variable name)
    // Matches: image: VariableName
    const imagePropRegex = /image:\s*(\w+)/;

    // Regex to find the whole item object - simplified approach:
    // We'll iterate through the file line by line to track context or use a smarter replace.

    // Better strategy:
    // 1. Find all `image: VarName` occurrences.
    // 2. For each, find the corresponding `specs: { ... }` in the vicinity (same object).
    // 3. Extract metadata for the image.
    // 4. Construct new specs string.
    // 5. Replace the old specs string.

    // Let's iterate over the file content using a regex that captures the object context roughly.
    // Since we want to update `specs`, let's look for `specs: { ... }` and see if we can find the image associated with it *before* it in the same object.

    // Actually, simpler:
    // 1. Parse the file to find where `portfolioItems` are defined.
    // 2. For each item, capture the `image: VarName`.
    // 3. Resolve VarName -> RelativePath -> AbsolutePath.
    // 4. Extract EXIF.
    // 5. Perform a replace in the content for that specific item's `specs`.

    let updatedContent = content;

    // Regex to match an item object roughly: { ... }
    // We will search for `id: '...'` which is unique, then find `image: ...` and `specs: ...` relative to it.

    // Let's try to identify all `image: (\w+)` followed eventually by `specs: \{[^}]+\}`
    // But verify they are in the same object (no `},` in between).

    // NOTE: This regex approach has limits. A robust AST parser is better, but this is a quick script.
    // We will assume standard formatting from the file we saw.

    // Let's verify we can find the image map first.

    // Construct a list of items to process
    // We scan for `id: '...'` to identify starts of items.
    const idRegex = /id:\s*'([^']+)'/g;
    let idMatch;

    const itemsToProcess = [];

    while ((idMatch = idRegex.exec(content)) !== null) {
        const id = idMatch[1];
        const startIndex = idMatch.index;

        // Find the closing brace for this item? Hard with nested objects.
        // Let's just look ahead for `image:` and `specs:` before the next `id:` or end of array.

        // Find image
        const imageRegex = /image:\s*(\w+)/g;
        imageRegex.lastIndex = startIndex;
        const imageMatch = imageRegex.exec(content);

        if (!imageMatch) continue;

        // Check if we passed another 'id:' (meaning we went into next item)
        // Check finding specs
        const specsRegex = /specs:\s*\{([^}]+)\}/g;
        specsRegex.lastIndex = startIndex;
        const specsMatch = specsRegex.exec(content);

        if (specsMatch && imageMatch) {
            // Basic validity check: are they reasonably close? (e.g., within 500 chars)
            // and is imageMatch before specsMatch?
            if (imageMatch.index > startIndex && specsMatch.index > imageMatch.index && (specsMatch.index - startIndex < 1000)) {
                itemsToProcess.push({
                    id,
                    imageVar: imageMatch[1],
                    specsIndex: specsMatch.index,
                    specsContent: specsMatch[0], // "specs: { ... }"
                    specsInner: specsMatch[1] // content inside {}
                });
            }
        }
    }

    console.log(`Found ${itemsToProcess.length} items with specs to update.`);

    for (const item of itemsToProcess) {
        const imagePathRel = imports[item.imageVar];
        if (!imagePathRel) {
            console.log(`[${item.id}] No import found for ${item.imageVar}`);
            continue;
        }

        const imagePathAbs = path.resolve(__dirname, '../src/data', imagePathRel);

        try {
            if (!fs.existsSync(imagePathAbs)) {
                console.log(`[${item.id}] File not found: ${imagePathAbs}`);
                continue;
            }

            console.log(`[${item.id}] Processing ${path.basename(imagePathAbs)}...`);

            // Extract EXIF
            const exif = await exifr.parse(imagePathAbs, ['ExposureTime', 'FNumber', 'ISO', 'Model']);

            if (!exif) {
                console.log(`[${item.id}] No EXIF data found.`);
                continue;
            }

            // Format data
            let shutter = exif.ExposureTime;
            if (shutter && shutter < 1) {
                shutter = `1/${Math.round(1 / shutter)}s`;
            } else if (shutter) {
                shutter = `${shutter}s`;
            }

            const aperture = exif.FNumber ? `f/${exif.FNumber}` : item.specsInner.match(/aperture:\s*'([^']+)'/)?.[1];
            const iso = exif.ISO ? `${exif.ISO}` : item.specsInner.match(/iso:\s*'([^']+)'/)?.[1];
            const camera = exif.Model ? `${exif.Model}` : item.specsInner.match(/camera:\s*'([^']+)'/)?.[1];

            // Construct new specs string
            // We want to preserve order if possible or just standard format:
            // { shutter: '...', aperture: '...', iso: '...', camera: '...' }

            // Default current values if extraction failed for some fields
            const currentSpecs = {};
            item.specsInner.split(',').forEach(pair => {
                const [key, val] = pair.split(':').map(s => s.trim());
                if (key && val) currentSpecs[key] = val.replace(/'/g, '');
            });

            const newSpecs = {
                shutter: shutter || currentSpecs.shutter,
                aperture: aperture || currentSpecs.aperture,
                iso: iso || currentSpecs.iso,
                camera: camera || currentSpecs.camera
            };

            const newSpecsString = `specs: { shutter: '${newSpecs.shutter}', aperture: '${newSpecs.aperture}', iso: '${newSpecs.iso}', camera: '${newSpecs.camera}' }`;

            // Replace in content
            // We use replace with the exact original string to ensure we target the right one
            // Use a global string replace might be dangerous if duplicates exist.
            // But specs strings are usually unique enough or we can assume sequential processing if we update 'content' variable linearly?
            // Actually, string indexes shift if we modify 'content'.
            // Better to accumulate replacements?

            // Since we iterate, if we modify `content`, earlier indexes remain valid if we process back-to-front?
            // Or just do string replacement of the specific block we found?

            // Let's use the exact string match for replacement, hoping for no exact duplicates in other items.
            // Given the file, specs are slightly different usually.

            updatedContent = updatedContent.replace(item.specsContent, newSpecsString);
            console.log(`[${item.id}] Updated specs: ${newSpecsString}`);

        } catch (err) {
            console.error(`[${item.id}] Error processing image:`, err);
        }
    }

    fs.writeFileSync(PORTFOLIO_DATA_PATH, updatedContent, 'utf-8');
    console.log('Done!');
}

updateSpecs();
