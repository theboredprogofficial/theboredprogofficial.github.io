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

    kata: {
        id: 'kata',
        name: 'Kata',
        tagline: 'modular laptop riser',
        badge: '02 — Unit Kata',
        description: 'A three-height adjustable laptop stand with cable management channel and anti-slip silicone pads.',
        longDescription: 'Kata is not a generic riser. It is a study in structural efficiency. Folded from a single sheet of laser-cut aluminum or printed in three interlocking parts. No wobble. No noise. Just your screen at eye level.',
        priceDigital: 8,
        priceKit: 35,
        kitStatus: 'available',
        
        sketchfabId: '',
        
        specs: {
            'Material (DIY)': 'PETG, ASA, or 3mm plywood',
            'Material (kit)': 'Bent 1.5mm aluminum, anodized black',
            'Height positions': '3 (75/120/165 mm)',
            'Max load': '15 kg',
            'Cable channel': '12 mm width',
            'Non-slip': 'Silicone pads, 60 Shore A',
            'Assembly': 'Tool-free, snap-fit'
        },
        
        gallery: [
            {
                src: '/assets/images/kata/kata-blueprint.jpg',
                alt: 'Kata technical blueprint',
                caption: 'Exploded view — three interlocking parts'
            },
            {
                src: '/assets/images/kata/kata-low.jpg',
                alt: 'Kata low position',
                caption: '75mm — portable mode'
            },
            {
                src: '/assets/images/kata/kata-high.jpg',
                alt: 'Kata high position',
                caption: '165mm — standing desk friendly'
            },
            {
                src: '/assets/images/kata/kata-cable.jpg',
                alt: 'Kata cable management',
                caption: 'Integrated cable channel'
            }
        ],
        
        downloads: {
            stl: '#',
            step: '#',
        },
        
        printProfile: '#',
    },

    shiro: {
        id: 'shiro',
        name: 'Shiro',
        tagline: 'ceramic-style planter system',
        badge: '03 — Unit Shiro',
        description: 'A self-watering planter with visible water level and modular tray system for 3D printed ceramics aesthetics.',
        longDescription: 'Shiro mimics the texture and weight of ceramic without the fragility. Printed in matte PLA or stone-filled filament. The double-wall design creates an air gap for root insulation, while the wicking system keeps soil moisture optimal for 14+ days.',
        priceDigital: 7,
        priceKit: 28,
        kitStatus: 'coming soon',
        
        sketchfabId: '',
        
        specs: {
            'Diameter': '140 mm (outer)',
            'Height': '120 mm',
            'Soil volume': '0.8 L',
            'Water reservoir': '200 mL',
            'Wicking material': 'Cotton or nylon rope (user provided)',
            'Visible water level': 'Yes, translucent window',
            'Recommended layer height': '0.12 mm for stone finish'
        },
        
        gallery: [
            {
                src: '/assets/images/shiro/shiro-blueprint.jpg',
                alt: 'Shiro technical blueprint',
                caption: 'Cross-section — double wall + reservoir'
            },
            {
                src: '/assets/images/shiro/shiro-white.jpg',
                alt: 'Shiro white matte',
                caption: 'Matte PLA — ceramic look'
            },
            {
                src: '/assets/images/shiro/shiro-stone.jpg',
                alt: 'Shiro stone filament',
                caption: 'Stone-filled filament — raw texture'
            }
        ],
        
        downloads: {
            stl: '#',
            step: '#',
        },
        
        printProfile: '#',
    },

    tori: {
        id: 'tori',
        name: 'Tori',
        tagline: 'gate-style espresso WDT tool',
        badge: '04 — Unit Tori',
        description: 'A magnetic WDT tool with 0.3 mm needles, calibrated depth stop, and silicone docking station.',
        longDescription: 'Tori is not a glorified paperclip holder. It is a precision distribution tool for espresso. Nine stainless steel needles arranged in a gate pattern. Adjustable depth from 2 to 8 mm. Magnetic base keeps it upright and clean. For people who care about channeling.',
        priceDigital: 6,
        priceKit: 32,
        kitStatus: 'available',
        
        sketchfabId: '',
        
        specs: {
            'Needles': '9x 0.3 mm stainless steel',
            'Pattern': 'Gate (3x3 grid)',
            'Depth adjustment': '2–8 mm, threaded collar',
            'Magnetic base': 'Yes, 3x N52 magnets',
            'Handle material (kit)': 'Machined aluminum, anodized',
            'Handle material (DIY)': 'PETG or resin',
            'Dip cleaning': 'Compatible with isopropyl alcohol'
        },
        
        gallery: [
            {
                src: '/assets/images/tori/tori-blueprint.jpg',
                alt: 'Tori technical blueprint',
                caption: 'Exploded — needle assembly + magnetic base'
            },
            {
                src: '/assets/images/tori/tori-action.jpg',
                alt: 'Tori in use',
                caption: 'Distributing grounds — no channeling'
            },
            {
                src: '/assets/images/tori/tori-dock.jpg',
                alt: 'Tori docking station',
                caption: 'Silicone dock + cleaning pin'
            }
        ],
        
        downloads: {
            stl: '#',
            step: '#',
        },
        
        printProfile: '#',
    },

    kaze: {
        id: 'kaze',
        name: 'Kaze',
        tagline: 'ultralight cable organizer',
        badge: '05 — Unit Kaze',
        description: 'A magnetic, snap-together cable management system that mounts anywhere without adhesive.',
        longDescription: 'Kaze is wind. Invisible until you need it. Three sizes of clips that snap into universal baseplates. Mount on desk edges, monitor arms, or wall panels using existing screws or magnets. No sticky residue. No plastic waste. Just organized chaos.',
        priceDigital: 4,
        priceKit: 18,
        kitStatus: 'coming soon',
        
        sketchfabId: '',
        
        specs: {
            'Cable capacities': '1x USB-C, 2x USB-C, 1x power brick',
            'Mounting': 'Magnetic (included) or screw (M3/M4)',
            'Clip rotation': '360°',
            'Material': 'TPU + PETG hybrid print',
            'Weight (kit)': '24 g (3 clips + base)',
            'Temperature range': '-20°C to 80°C',
            'Colors': 'Black, white, or raw'
        },
        
        gallery: [
            {
                src: '/assets/images/kaze/kaze-blueprint.jpg',
                alt: 'Kaze technical blueprint',
                caption: 'Modular clip + baseplate system'
            },
            {
                src: '/assets/images/kaze/kaze-desk.jpg',
                alt: 'Kaze on desk edge',
                caption: 'Mounted on 25 mm desk edge'
            },
            {
                src: '/assets/images/kaze/kaze-cable.jpg',
                alt: 'Kaze holding cables',
                caption: 'Three cables — clean pass-through'
            }
        ],
        
        downloads: {
            stl: '#',
            step: '#',
        },
        
        printProfile: '#',
    }
};