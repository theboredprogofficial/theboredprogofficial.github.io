const PRODUCTS = {
    nori: {
        id: 'nori',
        name: 'Nori',
        tagline: 'precision onigiri press',
        badge: '01 — Unit Nori',
        description: 'A compression system for perfect rice onigiris with nine air-release vents, integrated gasket and a mechanical end-stop.',
        longDescription: 'Nori is not a mold, it is a precision pressing system. Three variables define output quality: compression uniformity, final shape and taste.',
        priceDigital: 5,
        priceKit: 20,
        kitStatus: 'coming soon',
        
        specs: {
            'Parts': 'Body, Lid, Bottom (PETG) + Gasket (TPU)',
            'Seal': 'TPU gasket (95A–98A recommended)',
            'Food safety note': 'Use food-safe filament (PETG or PLA). Do not wash in dishwasher.',
            'Venting': '8 radial channels, ∅3 mm, 30° offset',
            'Layer height': '0.16–0.20 mm',
            'Infill': '15–20% (gyroid or grid)',
            'Supports': 'Not needed'
        },
        
        printInstructions: {
            files: [
                'nori-body.stl',
                'nori-lid.stl',
                'nori-bottom.stl',
                'nori-gasket.stl (TPU)',
                'nori-print-profile.3mf (Bambu Lab / Orca Slicer)'
            ],
            materials: [
                { part: 'Body', material: 'PETG (food-safe)', color: 'Any', notes: 'Must resist contact with rice' },
                { part: 'Lid', material: 'PETG (food-safe)', color: 'Any', notes: 'Same as body' },
                { part: 'Bottom', material: 'PETG (food-safe)', color: 'Any', notes: 'Same as body' },
                { part: 'Gasket', material: 'TPU (95A or 98A)', color: 'Any', notes: 'Flexible, creates airtight seal' }
            ],
            importantNote: 'If you plan to use Nori with food, always use food-safe filament (PETG or PLA certified for food contact). Do not use standard PLA or ABS.',
            settings: [
                { setting: 'Layer height', value: '0.16 – 0.20 mm' },
                { setting: 'Infill', value: '15–20% (gyroid or grid)' },
                { setting: 'Walls', value: '3–4 perimeters' },
                { setting: 'Top/bottom layers', value: '4–5' },
                { setting: 'Supports', value: '❌ Not needed' },
                { setting: 'Build plate adhesion', value: 'Brim for TPU (optional for PETG)' }
            ],
            perPart: [
                { part: 'Body', notes: 'Print upright (top face up). No supports needed.' },
                { part: 'Lid', notes: 'Print knob side up. The 8 radial channels will print cleanly.' },
                { part: 'Bottom', notes: 'Print flat face down. Very easy.' },
                { part: 'Gasket', notes: 'Print in TPU. Use slow speed (20–30 mm/s). No retraction recommended.' }
            ],
            postProcessing: [
                'Remove any stringing with a heat gun or fine tweezers.',
                'For food safety: Apply a food-grade epoxy coating (e.g., ArtResin) to all surfaces that contact rice. This seals layer lines and makes the surface easy to clean.',
                'Assemble: Insert the TPU gasket into the groove on the bottom of the lid. Press gently.',
                'Test: Press a small amount of rice to check compression and venting.'
            ],
            cleaning: [
                'Hand wash only with mild soap and water.',
                '❌ Do not use dishwasher (heat may deform PETG/TPU).',
                '❌ Do not soak for long periods.',
                'Let air dry completely before storing.'
            ],
            disclaimer: 'This is a 3D printed tool. Even with food-safe filament, layer lines can trap bacteria. Always hand wash immediately after use. For commercial use or frequent use, consider professional manufacturing (e.g., vacuum casting with FDA-approved resin).'
        }
    }
};