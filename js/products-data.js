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
                alt: 'Nori technical blueprint',
                caption: 'Exploded view — compression system'
            },
            {
                src: '/assets/images/nori/nori-assembled.jpg',
                alt: 'Nori assembled',
                caption: 'Final assembly with TPU gasket'
            },
            {
                src: '/assets/images/nori/nori-action.jpg',
                alt: 'Nori in use',
                caption: 'Making onigiri — 12mm compression stroke'
            }
        ],
        
        downloads: {
            stl: '#',
            step: '#',
        },
        
        printProfile: '#',
    },

    mizu: {
        id: 'mizu',
        name: 'Mizu',
        tagline: 'autonomous watering system',
        badge: '06 — Unit Mizu',
        description: 'A smart planter with programmable irrigation, capacitive soil sensor, and 14-day autonomy. Set it and forget it.',
        longDescription: 'Mizu (水 — water) is not a connected gadget. It is a standalone precision irrigation system. No app. No cloud. Just a dial, a display, and a pump that refuses to overwater. Set watering intervals (6/12/24/48/72h), volume per cycle (50–300 ml), and let it run for weeks. Low battery indicator, manual override, and a 2L reservoir that lasts up to a month for most houseplants.',
        priceDigital: 12,
        priceKit: 65,
        kitStatus: 'coming soon',
        
        sketchfabId: '',
        
        specs: {
            'Reservoir capacity': '2.0 L',
            'Pump type': 'Submersible, 3-5V DC',
            'Water volume per cycle': '50–300 ml (adjustable)',
            'Timer intervals': '6/12/24/48/72 hours',
            'Soil sensor': 'Capacitive (corrosion-resistant)',
            'Power': '3x AA batteries (3–6 months) or USB-C',
            'Display': 'OLED 128x32, monochrome',
            'Materials (kit)': 'PETG body, silicone tubing, stainless steel probe',
            'Materials (DIY)': 'PETG, TPU seals, off-the-shelf pump (compatible list included)',
            'Max plant size': 'Up to 25 cm pot diameter'
        },
        
        gallery: [
            {
                src: '/assets/images/mizu/mizu-blueprint.jpg',
                alt: 'Mizu technical blueprint',
                caption: 'Exploded view — reservoir + pump + control board'
            },
            {
                src: '/assets/images/mizu/mizu-assembled.jpg',
                alt: 'Mizu assembled',
                caption: 'Final assembly with 2L transparent reservoir'
            },
            {
                src: '/assets/images/mizu/mizu-interface.jpg',
                alt: 'Mizu control interface',
                caption: 'OLED display + dial — no app required'
            },
            {
                src: '/assets/images/mizu/mizu-installed.jpg',
                alt: 'Mizu installed on a pot',
                caption: 'Mounted on a standard 20cm pot'
            }
        ],
        
        downloads: {
            stl: '#',
            step: '#',
        },
        
        printProfile: '#',
    }
};