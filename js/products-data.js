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
        
        sketchfabId: '706ca391f32846ab9c18a3051bafc74f',
        
        specs: {
            'System': 'closed-loop compression',
            'Seal': 'Tpu gasket, 70 Shore A',
            'Venting': '3 radial channels, ∅2 mm, 120° offset',
            'Stroke': '12 mm, mechanical end-stop',
            'DIY materials': 'PETG, ABS, PLA',
            'Optimal layer height': '0.16–0.20 mm',
            'Supports': 'not needed'
        },
        
        gallery: [
            {
                src: '/assets/images/nori/nori-blueprint.jpg',
                alt: '',
                caption: ''
            }
        ],
        
        downloads: {
            stl: '/assets/downloads/nori.stl.zip',
            step: '/assets/downloads/nori.step.zip'
        },
        printProfile: '/assets/downloads/nori-bambu-print-profile.3mf'
    }
};