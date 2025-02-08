let oreList = {
    '🐱': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  },
    '✈️': { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'THEY HIT THE PENTAGON😭😭😭', 'oreTier': 'Infinitesimal',  },
    '💗': { 'decimalRarity': 1 / 150000000000, 'numRarity': 150000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A distant pulse resonates with your heart, synchronising its beat with yours...', 'oreTier': 'Ethereal',  },
    '❤️‍🔥': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A compassionate warmth envelops your heart in a fiery yet comforting embrace...', 'oreTier': 'Sacred',  },
    '😻': { 'decimalRarity': 1 / 5000000005, 'numRarity': 5000000005, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'holy shit is this a real cat??', 'oreTier': 'Celestial',  },
    '🏝️': { 'decimalRarity': 1 / 275320000, 'numRarity': 275320000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Huge, beaming crystals emerge from the ground, creating an ephemeral atmosphere...', 'oreTier': 'Flawless',  },
    '✨': { 'decimalRarity': 1 / 240800000, 'numRarity': 240800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'From every corner of festive depths, bursts of color erupt like fireworks against the velvet sky...', 'oreTier': 'Flawless',  },
    '⛄': { 'decimalRarity': 1 / 183640000, 'numRarity': 183640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...', 'oreTier': 'Flawless',  },
    '🪷': { 'decimalRarity': 1 / 183640000, 'numRarity': 183640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the quiet solitude of a winter landscape, a seed of ice blossoms into a testament to resilience and renewal...', 'oreTier': 'Flawless',  },
    '🦋': { 'decimalRarity': 1 / 12240000000, 'numRarity': 12240000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Deep in the temporal limbo where the threads of time coincide, a mystical figure lay guarding their integrity...', 'oreTier': 'Celestial',  },
    '🌹': { 'noLuck': true, 'decimalRarity': 1 / 194308600, 'numRarity': 194308600, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the grass swaying in the breeze far above the caverns lay a beautiful gift from nature herself...', 'oreTier': 'Celestial',  },
    '🐢': { 'decimalRarity': 1 / 4000000000, 'numRarity': 4000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In a decelerating world, this armoured juggernaut dismisses the bindings of time...', 'oreTier': 'Celestial',  },
    '🐰': { 'decimalRarity': 1 / 17800000, 'numRarity': 17800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🐰 Has Spawned!', 'oreTier': 'Mystical',  },
    '🦾': { 'decimalRarity': 1 / 875000000, 'numRarity': 875000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You must have an arm of steel to have found this, go and try to use it for something more useful...', 'oreTier': 'Celestial',  },
    '🥇': { 'decimalRarity': 1 / 44444444444, 'numRarity': 44444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'turn the shower on PLEASE...', 'oreTier': 'Celestial',  },
    '🩵': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🩵 Has Spawned..?', 'oreTier': 'Celestial',  },
    '⏳': { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏳ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🍂': { 'decimalRarity': 1 / 13500000000000, 'numRarity': 13500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍂 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🦿': { 'decimalRarity': 1 / 875000000000, 'numRarity': 875000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🦿 Has Spawned..?', 'oreTier': 'Celestial',  },
    '👁‍🗨': { 'decimalRarity': 1 / 955200890000, 'numRarity': 955200890000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '👁‍🗨 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🪫': { 'decimalRarity': 1 / 36000000000, 'numRarity': 36000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪫 Has Spawned..?', 'oreTier': 'Celestial',  },
    '📛': { 'decimalRarity': 1 / 256000000000000, 'numRarity': 256000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📛 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🌼': { 'decimalRarity': 1 / 9500000000, 'numRarity': 9500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌼 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🏳️‍🌈': { 'decimalRarity': 1 / 2750000000000, 'numRarity': 2750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🏳️‍🌈 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🎊': { 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎊 Has Spawned..?', 'oreTier': 'Celestial',  },    
    '💧': { 'decimalRarity': 1 / 13000000000000000, 'numRarity': 13000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💧 Has Spawned..?', 'oreTier': 'Celestial',  },    
    '❤️‍🩹': { 'decimalRarity': 1 / 155000000000, 'numRarity': 155000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❤️‍🩹 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🌋': { 'decimalRarity': 1 / 5500000000000, 'numRarity': 5500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌋 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🖋️': { 'decimalRarity': 1 / 165000000000, 'numRarity': 165000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖋️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '⛩️': { 'decimalRarity': 1 / 430000000000000, 'numRarity': 430000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛩️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🌶️': { 'decimalRarity': 1 / 1337000000000, 'numRarity': 1337000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌶️ Has Spawned..?', 'oreTier': 'Celestial',  },
    '🎥': { 'decimalRarity': 1 / 3780000000000, 'numRarity': 3780000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎥 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🔓': { 'decimalRarity': 1 / 9900000000, 'numRarity': 9900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔓 Has Spawned..?', 'oreTier': 'Celestial',  },
    '🎖️': { 'decimalRarity': 1 / 7000000000, 'numRarity': 7000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Dedication may only get you so far, yet you've proven you're willing to complete the mission..", 'oreTier': 'Sacred',  },
    '🤫' : { 'decimalRarity': 1 / 13370000000, 'numRarity': 13370000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "TOP TEN TUTORIAL HOW TO MOG THANK FOR WATCHING...", 'oreTier': 'Celestial',  },
    '🖐' : { 'decimalRarity': 1 / 555555555555, 'numRarity': 555555555555, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "high five! no..? ok...", 'oreTier': 'Celestial',  },
    'korosan' : { 'noLuck':true,'decimalRarity': 1 / 563563563, 'numRarity': 563563563, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Extreme pain tears through your body as your fingers are ripped off one by one...", 'oreTier': 'Celestial',  "hasImage":true, "src" : "media/ores/korosan.png", "oreName":"Korosan", "eId": "<:korosan:1268397967979839610>"},
    'luna' : { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You hear a soft meow behind you, followed by the soft crunching of kibble...", 'oreTier': 'Celestial',  "hasImage":true, "src" : "media/ores/luna.png", "oreName":"Luna", "eId":"<:luna:1267217003828088912>"},
    'pixel' : { 'decimalRarity': 1 / 6000000000, 'numRarity': 6000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You seriously cannot be this unlucky... just craft it already...", 'oreTier': 'Celestial',  "hasImage":true, "src" : "media/ores/pixel.webp", "oreName":"Pixel", "eId":"<:pixel:1267217508969091084> "},
    'matrix' : { 'decimalRarity': 1 / 1011010000, 'numRarity': 1011010000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Caverns so silly, even the matrix is!...", 'oreTier': 'Interstellar',  "hasImage":true, "src" : "media/ores/matrix.webp", "oreName":"Matrix", "eId":"<:matrix:1267217412747558974>"},
    'apatite' : { 'decimalRarity': 1 / 3250000000, 'numRarity': 3250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A bright,sparkly, and gleaming crystal illuminates the caverns as it slowly appears...", 'oreTier': 'Metaversal',  "hasImage":true, "src" : "media/ores/apatite.webp", "oreName":"Apatite", "eId": "<:apatite:1268367312881320016>"},
    'draedon' : { 'decimalRarity': 1 / 480000000000, 'numRarity': 480000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "An unknown factor - a catalyst is what you are...", 'oreTier': 'Celestial',   "hasImage":true, "src" : "media/ores/draedon.webp", "oreName":"Draedon", "eId":"<:me:1265484170893987890>"},
    'HD 160529' : { 'decimalRarity': 1 / 2500000000000000, 'numRarity': 2500000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Every droplet of water condenses into an unstable singularity...", 'oreTier': 'Hyperdimensional',   "hasImage":true, "src" : "media/ores/HD160529.png", "oreName":"HD 160529", "eId":"<:HD160529:1267216998564233399>"},
    'Goober' : { 'decimalRarity': 1 / 6210000000000, 'numRarity': 6210000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You feel the earth shake as the big cate appears...", 'oreTier': 'Infinitesimal', "hasImage":true, "src" : "media/ores/ryouiishereinstead.webp", "oreName":"HOLY SHIT ITS RYOUI???", "eId": "<:goober:1269098402768093225>"},
    'eternalCoral' : { 'decimalRarity': 1 / 50000000000000, 'numRarity': 50000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': "A sea of stars expands across dimensions, opening the gateway to an oceanic anomaly...", 'oreTier': 'Hyperdimensional', "hasImage":true, "src" : "media/ores/eternalCoral.png", "oreName":"Eternal Coral", "eId":"<:eternal_coral:1268367410541367428>"},
    'intercept' : { 'decimalRarity': 1 / 10000000000000000, 'numRarity': 10000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A shape of seemingly infinite size emerges from the mines, engulfing everything around it...", 'oreTier': 'Infinitesimal', "hasImage":true, "src" : "media/ores/intercept.png", "oreName":"Intercept", "eId": "<:intercept:1268367354870370436>"},
    'aFleetingSoul' : { 'decimalRarity': 1 / 6666000000000000, 'numRarity': 6666000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Hollowed souls howl from their buried tomb, echoing the death of a civilization long lost. The pained cry dissipating as abruptly as it started...", 'oreTier': 'Hyperdimensional', "hasImage":true, "src" : "media/ores/aFleetingSoul.png", "oreName":"A Fleeting Soul", "eId":"<:aFleetingSoul:1267216891777253417>"},
    
    //summer event fuck i forgot my bad chat
    //🏐🌴🐙🐬🍧🏖️🏄‍♂️🎋☀️
    '🏐' : { 'decimalRarity': 1 / 1475000, 'numRarity': 1475000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "🏐 Has Spawned!", 'oreTier': 'Antique', },
    '🌴' : { 'decimalRarity': 1 / 10400000, 'numRarity': 10400000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "🌴 Has Spawned!", 'oreTier': 'Mystical', },
    '🐙' : { 'decimalRarity': 1 / 87500000, 'numRarity': 87500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "🐙 Has Spawned!", 'oreTier': 'Divine', },
    '🐬' : { 'decimalRarity': 1 / 345975000, 'numRarity': 345975000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "The sound of clicking draws you nearer to the ocean's edge...", 'oreTier': 'Flawless', },
    '🍧' : { 'decimalRarity': 1 / 900350000, 'numRarity': 900350000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "mmmmm tamsty :3...", 'oreTier': 'Interstellar', },
    '🏖️' : { 'decimalRarity': 1 / 4650000000, 'numRarity': 4650000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "An umbrella descends from the heavens, providing the perfect amount of shade...", 'oreTier': 'Metaversal', },
    '🏄‍♂️' : { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A strange board washes ashore...", 'oreTier': 'Sacred',  "oreName": "why doesnt this have a name lol"},
    '🎋' : { 'decimalRarity': 1 / 150000000000, 'numRarity': 150000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "The wishes of billions intertwine, bringing prosperity to all...", 'oreTier': 'Ethereal', },
    '☀️' : { 'decimalRarity': 1 / 2750000000000, 'numRarity': 2750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Reality is warped as the birth of a new star brings upon a new age...", 'oreTier': 'Imaginary', },
    

    '🐞': { 'decimalRarity': 1 / 241200000000, 'numRarity': 241200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the keeper of time dons new wings, and sacrifices beauty for survivability...", 'oreTier': 'Celestial',  },
    '🍓': { 'decimalRarity': 1 / 560000000000, 'numRarity': 560000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A sweet aroma guides you to one of nature's finest delicacies...", 'oreTier': 'Ethereal',  },
    '🌳': { 'decimalRarity': 1 / 9250000000, 'numRarity': 9250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'CAKECORE13...', 'oreTier': 'Sacred',  },
    '💐': { 'decimalRarity': 1 / 3750000000, 'numRarity': 3750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "From the depths of nature's embrace, a delicate bloom unfurls, casting a fragrant aura upon its surroundings...", 'oreTier': 'Metaversal',  },
    '🥬': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A leafy green surprise decides to join the vegetable party...', 'oreTier': 'Sacred',  },
    '🥗': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A state of alignment with the natural rhythms of life, sings a harmony that resonates from the inside out...', 'oreTier': 'Interstellar',  },
    '🌪️': { 'decimalRarity': 1 / 247010000, 'numRarity': 247010000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the vortex descends from the heavens, the atmosphere trembles with its raw power...', 'oreTier': 'Flawless',  },
    '🌏': { 'decimalRarity': 1 / 213200000, 'numRarity': 213200000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Ancient energies resonate in the depths with the essence of primordial earth...', 'oreTier': 'Flawless',  },
    '🌲': { 'decimalRarity': 1 / 71000000, 'numRarity': 71000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌲 Has Spawned!', 'oreTier': 'Divine',  },
    '🎃': { 'decimalRarity': 1 / 69000000, 'numRarity': 69000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎃 Has Spawned!', 'oreTier': 'Divine',  },
    '🎍': { 'decimalRarity': 1 / 35000000, 'numRarity': 35000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎍 Has Spawned!', 'oreTier': 'Divine',  },
    '🎄': { 'decimalRarity': 1 / 12500000, 'numRarity': 12500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎄 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪵': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪵 Has Spawned!', 'oreTier': 'Mystical',  },
    '🌻': { 'decimalRarity': 1 / 9500000, 'numRarity': 9500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌻 Has Spawned!', 'oreTier': 'Mystical',  },
    '🍁': { 'decimalRarity': 1 / 8900000, 'numRarity': 8900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍁 Has Spawned!', 'oreTier': 'Mystical',  },
    


    '🥈': { 'decimalRarity': 1 / 444444444444, 'numRarity': 444444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'uh.. idk man your choice what you do with the shower...', 'oreTier': 'Celestial',  },
    "🏯": { 'decimalRarity': 1 / 430000000000, 'numRarity': 430000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Past architecture laughs in the face of the present and its lack of grandeur...', 'oreTier': 'Ethereal',  },
    '🏰': { 'decimalRarity': 1 / 8888888888, 'numRarity': 8888888888, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An essence of royalty graces the air of majestic opulence...', 'oreTier': 'Sacred',  },
    '🌇': { 'decimalRarity': 1 / 4300000000, 'numRarity': 4300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The city shines bright as the rising sun illuminates it...', 'oreTier': 'Metaversal',  },
    '🥉': { 'decimalRarity': 1 / 444444444, 'numRarity': 444444444, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'turn the shower off...', 'oreTier': 'Flawless',  },
    '🪞': { 'decimalRarity': 1 / 426800050, 'numRarity': 426800050, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You embrace the beauty of the grayscale world, where light and shadow dance in a timeless symphony of existence...', 'oreTier': 'Flawless',  },
    '🔩': { 'decimalRarity': 1 / 420836000, 'numRarity': 420836000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A piece to the puzzle of construction, the parts may be different sizes, but all are just as integral to the end result...', 'oreTier': 'Flawless',  },
    '🧲': { 'decimalRarity': 1 / 43500000, 'numRarity': 43500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧲 Has Spawned!', 'oreTier': 'Divine',  },
    '🪬': { 'decimalRarity': 1 / 37000000, 'numRarity': 37000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪬 Has Spawned!', 'oreTier': 'Divine',  },
    '🧨': { 'decimalRarity': 1 / 31500000, 'numRarity': 31500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧨 Has Spawned!', 'oreTier': 'Divine',  },
    '🔗': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔗 Has Spawned!', 'oreTier': 'Divine',  },
    '🪙': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪙 Has Spawned!', 'oreTier': 'Mystical',  },
    '🗿': { 'decimalRarity': 1 / 12000000, 'numRarity': 12000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗿 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪚': { 'decimalRarity': 1 / 9600000, 'numRarity': 9600000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪚 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪜': { 'decimalRarity': 1 / 7950000, 'numRarity': 7950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪜 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🚬': { 'decimalRarity': 1 / 192000000000, 'numRarity': 192000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the air is unbreathable as plumes of toxic fumes overtake the atmosphere...", 'oreTier': 'Celestial',  },
    "🦚": { 'decimalRarity': 1 / 245000000000, 'numRarity': 245000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through the mist, the brief glint of a hundred eyes freezes you dead in your tracks...', 'oreTier': 'Ethereal',  },
    '🚿': { 'decimalRarity': 1 / 6000000000, 'numRarity': 6000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A refreshing cascade rejuvenates the area...', 'oreTier': 'Sacred',  },
    '👁️': { 'decimalRarity': 1 / 1920000000, 'numRarity': 1920000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A cosmic anomaly of nothingness emerges past the boundaries of an unseen realm...', 'oreTier': 'Metaversal',  },
    '💸': { 'decimalRarity': 1 / 754000000, 'numRarity': 754000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Softly descending, celestial radiance brings serenity to the infinite depths...', 'oreTier': 'Interstellar',  },
    '⌛': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Seconds pass, centuries pass, what's the difference? We are all mere specks of life in the concept of eternity...", 'oreTier': 'Flawless',  },
    '🧵': { 'decimalRarity': 1 / 201061929, 'numRarity': 201061929, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A geometrical marvel adds an element of mathematical elegance...', 'oreTier': 'Flawless',  },
    '🕯️': { 'decimalRarity': 1 / 62500000, 'numRarity': 62500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕯️ Has Spawned!', 'oreTier': 'Divine',  },
    '🕋': { 'decimalRarity': 1 / 55000000, 'numRarity': 55000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🕋 Has Spawned!', 'oreTier': 'Divine',  },
    '🎨': { 'decimalRarity': 1 / 44000000, 'numRarity': 44000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎨 Has Spawned!', 'oreTier': 'Divine',  },
    '🎴': { 'decimalRarity': 1 / 13450000, 'numRarity': 13450000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎴 Has Spawned!', 'oreTier': 'Mystical',  },
    '🥽': { 'decimalRarity': 1 / 12350000, 'numRarity': 12350000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥽 Has Spawned!', 'oreTier': 'Mystical',  },
    '🪄': { 'decimalRarity': 1 / 9460000, 'numRarity': 9460000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪄 Has Spawned!', 'oreTier': 'Mystical',  },
    '🎭': { 'decimalRarity': 1 / 7650000, 'numRarity': 7650000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎭 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🪸': { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the seabed is impossible to access, as living stony vines had colonised the surface of the deep...", 'oreTier': 'Celestial',  },
    "⚓": { 'decimalRarity': 1 / 750000000000, 'numRarity': 750000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A mass of iron dropped into the abyss and a chain is all that prevents an indefinite oceanic isolation..,', 'oreTier': 'Ethereal',  },
    '🐋': { 'decimalRarity': 1 / 8000000000, 'numRarity': 8000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the vast expanse of the ocean, where the horizon stretches endlessly and the waters teem with life, a beautiful whale emerges from the depths...', 'oreTier': 'Sacred',  },
    '💫': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Celestial bodies collide illuminating the depths with cosmic enchantment...', 'oreTier': 'Metaversal',  },
    '🪩': { 'decimalRarity': 1 / 999999999, 'numRarity': 999999999, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your vision expands as your head spikes with an adrenaline rush...', 'oreTier': 'Interstellar',  },
    '👿': { 'decimalRarity': 1 / 750000000, 'numRarity': 750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Cosmic energies radiate from the depths, casting an enigmatic darkness...', 'oreTier': 'Flawless',  },
    '🌀': { 'decimalRarity': 1 / 618000000, 'numRarity': 618000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A giant celestial body emerges, releasing cosmic energy that absorbs nearby quasars...', 'oreTier': 'Flawless',  },
    '🔱': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔱 Has Spawned!', 'oreTier': 'Divine',  },
    '👑': { 'decimalRarity': 1 / 65000000, 'numRarity': 65000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '👑 Has Spawned!', 'oreTier': 'Divine',  },
    '🐟': { 'decimalRarity': 1 / 26000000, 'numRarity': 26000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🐟 Has Spawned!', 'oreTier': 'Divine',  },
    '🫧': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🫧 Has Spawned!', 'oreTier': 'Mystical',  },
    '🤿': { 'decimalRarity': 1 / 8670000, 'numRarity': 8670000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤿 Has Spawned!', 'oreTier': 'Mystical',  },
    '🎣': { 'decimalRarity': 1 / 8230000, 'numRarity': 8230000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎣 Has Spawned!', 'oreTier': 'Mystical',  },
    '⛵': { 'decimalRarity': 1 / 7895000, 'numRarity': 7895000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛵ Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🪦': { 'decimalRarity': 1 / 386500000000, 'numRarity': 386500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, society is linked between the dead and the living, as humans and spectres live as one...", 'oreTier': 'Celestial',  },
    "🪤": { 'decimalRarity': 1 / 800000000000, 'numRarity': 800000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An extermination held through a siege, as success is just one stakeout away...', 'oreTier': 'Ethereal',  },
    '🏔️': { 'decimalRarity': 1 / 5500000000, 'numRarity': 5500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A tear comes to your eye as you gaze upon a beautiful landscape...', 'oreTier': 'Sacred',  },
    '🌈': { 'decimalRarity': 1 / 2750000000, 'numRarity': 2750000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vivid spectrum bursts forth, painting the surroundings with radiant color...', 'oreTier': 'Metaversal',  },
    '🧊': { 'decimalRarity': 1 / 583000000, 'numRarity': 583000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A frigid touch brings an icy embrace from the depths...', 'oreTier': 'Flawless',  },
    '❄️': { 'decimalRarity': 1 / 386500000, 'numRarity': 386500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The world around you takes on a surreal quality as if draped in a cloak of frozen silence...', 'oreTier': 'Flawless',  },
    '💎': { 'decimalRarity': 1 / 170000000, 'numRarity': 170000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Unearthed from the abyss, a dazzling gemstone emerges, casting a mesmerizing glow upon you...', 'oreTier': 'Flawless',  },
    '☄️': { 'decimalRarity': 1 / 72500000, 'numRarity': 72500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '☄️ Has Spawned!', 'oreTier': 'Divine',  },
    '🔮': { 'decimalRarity': 1 / 60000000, 'numRarity': 60000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned!', 'oreTier': 'Divine',  },
    '🔋': { 'decimalRarity': 1 / 36000000, 'numRarity': 36000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔋 Has Spawned!', 'oreTier': 'Divine',  },
    '💍': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💍 Has Spawned!', 'oreTier': 'Mystical',  },
    '🥏': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🥏 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚜️': { 'decimalRarity': 1 / 6250000, 'numRarity': 6250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚜️ Has Spawned!', 'oreTier': 'Mystical',  },
    '💠': { 'decimalRarity': 1 / 6000000, 'numRarity': 6000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💠 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🚨': { 'decimalRarity': 1 / 666666666666, 'numRarity': 666666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, those who survived are forced into hiding as the world is overcome with plague...", 'oreTier': 'Celestial',  },
    "🤖": { 'decimalRarity': 1 / 640000000000, 'numRarity': 640000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Come to think of it, robots and humans aren't so unalike.. their wires for our veins, their electric current for our bloodstream and their CPU for our brains...", 'oreTier': 'Ethereal',  },
    '⚠️': { 'decimalRarity': 1 / 6666666666, 'numRarity': 6666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'EXTREMELY LOUD INCORRECT BUZZER...', 'oreTier': 'Sacred',  },
    '🎆': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A sparkling burst appears as dazzling fireworks lights up the scene...', 'oreTier': 'Metaversal',  },
    '🧀': { 'decimalRarity': 1 / 618000000, 'numRarity': 618000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the scent envelops you, your mouth may water in anticipation of the delectable flavors that await...', 'oreTier': 'Flawless',  },
    '🌌': { 'decimalRarity': 1 / 550000000, 'numRarity': 550000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An infinite collection of galaxies converge creating an enchanting radiance...', 'oreTier': 'Flawless',  },
    '🥀': { 'decimalRarity': 1 / 538000000, 'numRarity': 538000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "With bated breath, you stand paralyzed, engulfed by the suffocating grip of fear as the terrible beast's gaze falls upon you...", 'oreTier': 'Flawless',  },
    '🎇': { 'decimalRarity': 1 / 67500000, 'numRarity': 67500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎇 Has Spawned!', 'oreTier': 'Divine',  },
    '🔳': { 'decimalRarity': 1 / 46000000, 'numRarity': 46000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔳 Has Spawned!', 'oreTier': 'Divine',  },
    '⏹️': { 'decimalRarity': 1 / 29000000, 'numRarity': 29000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⏹️ Has Spawned!', 'oreTier': 'Divine',  },
    '🧩': { 'decimalRarity': 1 / 14500000, 'numRarity': 14500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧩 Has Spawned!', 'oreTier': 'Mystical',  },
    '🔔': { 'decimalRarity': 1 / 12250000, 'numRarity': 12250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔔 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚗️': { 'decimalRarity': 1 / 9750000, 'numRarity': 9750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚗️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🧪': { 'decimalRarity': 1 / 7500000, 'numRarity': 7500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧪 Has Spawned!', 'oreTier': 'Mystical',  },
    

    '🍖': { 'decimalRarity': 1 / 160000000000, 'numRarity': 160000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, the desert thrived, and is the most habitable environment in this world...", 'oreTier': 'Celestial',  },
    "🦴": { 'decimalRarity': 1 / 175000000000, 'numRarity': 175000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Deep within the arid sands lay fossils of an olden age, one can only wonder what beasts roamed the earth back then...', 'oreTier': 'Ethereal',  },
    '🐪': { 'decimalRarity': 1 / 7800000000, 'numRarity': 7800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the midst of a violent sandstorm, an incredibly durable being treks the desolation of a once fruitful seabed...', 'oreTier': 'Sacred',  },
    '🏵️': { 'decimalRarity': 1 / 2600000000, 'numRarity': 2600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A flower imparts a fleeting beauty to the terrain...', 'oreTier': 'Metaversal',  },
    '🪐': { 'decimalRarity': 1 / 709000750, 'numRarity': 709000750, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Like tendrils of gentle embrace, a serene mist glides through the air...', 'oreTier': 'Flawless',  },
    '💥': { 'decimalRarity': 1 / 375000000, 'numRarity': 375000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Chaos reigns supreme as the forces of destruction sweep across the land...', 'oreTier': 'Flawless',  },
    '🔥': { 'decimalRarity': 1 / 160000000, 'numRarity': 160000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'oh wow 🔥🔥🔥...', 'oreTier': 'Flawless',  },
    '🔆': { 'decimalRarity': 1 / 75000000, 'numRarity': 75000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔆 Has Spawned!', 'oreTier': 'Divine',  },
    '⭐': { 'decimalRarity': 1 / 70600600, 'numRarity': 70600600, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⭐ Has Spawned!', 'oreTier': 'Divine',  },
    '🎀': { 'decimalRarity': 1 / 31000000, 'numRarity': 31000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎀 Has Spawned!', 'oreTier': 'Divine',  },
    '🗡️': { 'decimalRarity': 1 / 13000000, 'numRarity': 13000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗡️ Has Spawned!', 'oreTier': 'Mystical',  },
    '📟': { 'decimalRarity': 1 / 8750000, 'numRarity': 8750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📟 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚱️': { 'decimalRarity': 1 / 7467000, 'numRarity': 7467000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚱️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🖍️': { 'decimalRarity': 1 / 6800000, 'numRarity': 6800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖍️ Has Spawned!', 'oreTier': 'Mystical',  },
    

    '📜': { 'decimalRarity': 1 / 200000000000, 'numRarity': 200000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "In this alternate earth, words of the ancients are heeded, and the world is given a second chance...", 'oreTier': 'Celestial',  },
    "🎩": { 'decimalRarity': 1 / 300500000000, 'numRarity': 300500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'wanna see a magic trick ^w^...', 'oreTier': 'Ethereal',  },
    '💵': { 'decimalRarity': 1 / 8900000000, 'numRarity': 8900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'MONEY MONEY KACHINGGGG JACKPOT...', 'oreTier': 'Sacred',  },
    '🪅': { 'decimalRarity': 1 / 3250000000, 'numRarity': 3250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Effervescently, festive confetti materializes bringing bursts of celebratory charm to the surroundings...', 'oreTier': 'Metaversal',  },
    '👀': { 'decimalRarity': 1 / 955200890, 'numRarity': 955200890, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In this tumultuous symphony of the senses, time loses its meaning, and everything becomes a mere illusion...', 'oreTier': 'Interstellar',  },
    '🌟': { 'decimalRarity': 1 / 257280000, 'numRarity': 257280000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the far reaches of outer space, a gleaming light catches your attention...', 'oreTier': 'Flawless',  },
    '📝': { 'decimalRarity': 1 / 200000000, 'numRarity': 200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In this wondrous realm, the lines between fantasy and reality blur...', 'oreTier': 'Flawless',  },
    '⌚': { 'decimalRarity': 1 / 52000000, 'numRarity': 52000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌚ Has Spawned!', 'oreTier': 'Divine',  },
    '🏆': { 'decimalRarity': 1 / 38000000, 'numRarity': 38000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🏆 Has Spawned!', 'oreTier': 'Divine',  },
    '🗜️': { 'decimalRarity': 1 / 42000000, 'numRarity': 42000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🗜️ Has Spawned!', 'oreTier': 'Divine',  },
    '🎲': { 'decimalRarity': 1 / 7777777, 'numRarity': 7777777, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎲 Has Spawned!', 'oreTier': 'Mystical',  },
    '✂️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✂️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🃏': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🃏 Has Spawned!', 'oreTier': 'Mystical',  },
    '⚙️': { 'decimalRarity': 1 / 5000000, 'numRarity': 5000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⚙️ Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    '🎁': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🎮': { 'decimalRarity': 1 / 6890000, 'numRarity': 6890000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🎫': { 'decimalRarity': 1 / 8230000, 'numRarity': 8230000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🚗': { 'decimalRarity': 1 / 12700000, 'numRarity': 12700000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '📢': { 'decimalRarity': 1 / 68900000, 'numRarity': 68900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🎑': { 'decimalRarity': 1 / 92350200, 'numRarity': 92350200, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '📿': { 'decimalRarity': 1 / 279000000, 'numRarity': 279000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Magical beads that seem to grant your every wish drop on the ground in front of you...', 'oreTier': 'Flawless',  },
    '🎎': { 'decimalRarity': 1 / 587650200, 'numRarity': 587650200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'I wonder whats inside...', 'oreTier': 'Flawless',  },
    '🗳️': { 'decimalRarity': 1 / 824900725, 'numRarity': 824900725, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A mysterious box, able to change reality at will through enough votes, appears next to you...', 'oreTier': 'Interstellar',  },
    '⚛️': { 'decimalRarity': 1 / 3333333333, 'numRarity': 3333333333, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The discovery of the Atom shakes the mine to its core...', 'oreTier': 'Metaversal',  },
    '🛢️': { 'decimalRarity': 1 / 11430000000, 'numRarity': 11430000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'oil..? DID SOMEOME ASK FOR SOME FREEDOM???...', 'oreTier': 'Sacred',  },
    '💽': { 'decimalRarity': 1 / 290000000000, 'numRarity': 290000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A disc containing all the wonders of humanity emerges from one of the gifts around you...', 'oreTier': 'Ethereal',  },
    '🍭': { 'decimalRarity': 1 / 2500000000000, 'numRarity': 2500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A sweet treat that you have been craving for centuries is finally unearthed...', 'oreTier': 'Imaginary', },

    // 

    '🐸': { 'decimalRarity': 1 / 900000000000, 'numRarity': 900000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "hehe.. ribbit...", 'oreTier': 'Celestial',  },
    '🫶': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A heartfelt gesture beckons you closer, both physically and mentally...', 'oreTier': 'Imaginary',  },
    '🎉': { 'decimalRarity': 1 / 1000000000000, 'numRarity': 1000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'YIPPEEEE YIPEYIPEYIPEYIPE YIIIPPPPEEEEEEEEEE!!!...', 'oreTier': 'Imaginary',  },
    '🧌': { 'decimalRarity': 1 / 696969696969, 'numRarity': 696969696969, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'WHAT ARE YOU DOING IN MY SWAMP?!!', 'oreTier': 'Ethereal',  },
    '♾️': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'life goes on and on and on and on and on and on and on and on...', 'oreTier': 'Sacred',  },
    '💅': { 'decimalRarity': 1 / 11201200200, 'numRarity': 11201200200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'GURLLLLLLL NO WAYYYYYYYY OMGGGGGGGGG...', 'oreTier': 'Sacred',  },
    '😁': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Nothing bad was ever in this layer...', 'oreTier': 'Sacred',  },
    '🪢': { 'decimalRarity': 1 / 8181818181, 'numRarity': 8181818181, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Halfheartedly sauntering into existence, a lackluster piece of twine makes a feeble attempt at garnering attention, or not...', 'oreTier': 'Sacred',  },
    
    
    '🪽': { 'decimalRarity': 1 / 260000000000, 'numRarity': 260000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The wings of glory travelled with you to this world, but are now free to roam the skies...', 'oreTier': 'Ethereal',  },
    '⚡': { 'decimalRarity': 1 / 96000000000, 'numRarity': 96000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Bestowed upon you by the Stormseer himself, as a congratulations for your electrified finds..', 'oreTier': 'Sacred',  },
    '🍃': { 'decimalRarity': 1 / 13500000000, 'numRarity': 13500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Leaves of green elegantly glide through the sky to wherever their aerial current leads...', 'oreTier': 'Sacred',  },
    '🪶': { 'decimalRarity': 1 / 2060000000, 'numRarity': 2060000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Dancing on the air, this feather is one of the many as part of something much greater...', 'oreTier': 'Metaversal',  },
    '🌦️': { 'decimalRarity': 1 / 275000000, 'numRarity': 275000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the storm dissipates, a bright light shines upon you...', 'oreTier': 'Flawless',  },
    '🌩️': { 'decimalRarity': 1 / 175000000, 'numRarity': 175000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The sky darkens, yet beautiful streaks of electrical light zap the ground below...', 'oreTier': 'Flawless',  },
    '⛈️': { 'decimalRarity': 1 / 74000000, 'numRarity': 74000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⛈️ Has Spawned!', 'oreTier': 'Divine',  },
    '🪁': { 'decimalRarity': 1 / 45500000, 'numRarity': 45500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪁 Has Spawned!', 'oreTier': 'Divine',  },
    '🪂': { 'decimalRarity': 1 / 30000000, 'numRarity': 30000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪂 Has Spawned!', 'oreTier': 'Divine',  },
    '🌨️': { 'decimalRarity': 1 / 25000000, 'numRarity': 25000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌨️ Has Spawned!', 'oreTier': 'Divine',  },
    '🌥️': { 'decimalRarity': 1 / 14400000, 'numRarity': 14400000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌥️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🌤️': { 'decimalRarity': 1 / 7800000, 'numRarity': 7800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌤️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🌧️': { 'decimalRarity': 1 / 7000000, 'numRarity': 7000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🌧️ Has Spawned!', 'oreTier': 'Mystical',  },
    '🎐': { 'decimalRarity': 1 / 5500000, 'numRarity': 5500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🎐 Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '🔫': { 'decimalRarity': 1 / 615000000000, 'numRarity': 615000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your nerves spike to an all time high as your body starts to tremble in fear...', 'oreTier': 'Ethereal',  },
    '👾': { 'decimalRarity': 1 / 9000000000, 'numRarity': 9000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A wave of nostalgia sweeps over you as 8-bit sound effects take you back to where it all began...', 'oreTier': 'Sacred',  },
    '🏹': { 'decimalRarity': 1 / 4210000000, 'numRarity': 4210000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "A bow fires an arrow, whistling through the wind as it's poised to pierce its target...", 'oreTier': 'Metaversal',  },
    '💣': { 'decimalRarity': 1 / 771100000, 'numRarity': 771100000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Fuse lighted, explosive placed, all that's left is to wait for chaos and catastrophe to ensue...", 'oreTier': 'Interstellar',  },
    '🔨': { 'decimalRarity': 1 / 540000000, 'numRarity': 540000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Where scents of sawdust mingled with the sharp tang of metal, there lie a beautiful hammer...', 'oreTier': 'Flawless',  },
    '🪓': { 'decimalRarity': 1 / 82000000, 'numRarity': 82000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪓 Has Spawned!', 'oreTier': 'Divine',  },
    '🪃': { 'decimalRarity': 1 / 12210000, 'numRarity': 12210000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🪃 Has Spawned!', 'oreTier': 'Mystical',  },
    '🛡️': { 'decimalRarity': 1 / 9980000, 'numRarity': 9980000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🛡️ Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '🗝️': { 'decimalRarity': 1 / 420000000000, 'numRarity': 420000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You thought the key to this world was special? Just you wait until this one finds its designated lock...', 'oreTier': 'Ethereal',  },
    '🪝': { 'decimalRarity': 1 / 75000000000, 'numRarity': 75000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As graceful as a key may look, breaking a lock with this is infinitely cooler...', 'oreTier': 'Sacred',  },
    '🪡': { 'decimalRarity': 1 / 23000000000, 'numRarity': 23000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Why did you make a lacklustre key to this world when you could've just lockpicked it? Minimal brain cells I swear...", 'oreTier': 'Sacred',  },
    '🛎️': { 'decimalRarity': 1 / 4730000000, 'numRarity': 4730000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A timeless ringing severes your hearing...', 'oreTier': 'Metaversal',  },
    '🚧': { 'decimalRarity': 1 / 1100000000, 'numRarity': 1100000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A feeling of authorisation stops you in your tracks, giving you the inclination to turn back...', 'oreTier': 'Interstellar',  },
    '⛓️': { 'decimalRarity': 1 / 345000000, 'numRarity': 345000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An endless intertwining of metal keeps the world safe from otherworldly threats...', 'oreTier': 'Flawless',  },
    '🔏': { 'decimalRarity': 1 / 243800000, 'numRarity': 243800000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An unknown mystery is revealed as a key is summoned to you...', 'oreTier': 'Flawless',  },
    '🖇️': { 'decimalRarity': 1 / 31337000, 'numRarity': 31337000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖇️ Has Spawned!', 'oreTier': 'Divine',  },
    '🔑': { 'decimalRarity': 1 / 12700000, 'numRarity': 12700000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔑 Has Spawned!', 'oreTier': 'Mystical',  },
    '🔒': { 'decimalRarity': 1 / 9900000, 'numRarity': 9900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔒 Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '💰': { 'decimalRarity': 1 / 857000000000, 'numRarity': 857000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A silky bag showers you with money, scattering riches all around...', 'oreTier': 'Ethereal',  },
    "💞": { 'decimalRarity': 1 / 96300000000, 'numRarity': 96300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Though it was thought impossible, an intertwining aura of love blesses two lucky individuals...', 'oreTier': 'Sacred',  },
    "💘": { 'decimalRarity': 1 / 35000000000, 'numRarity': 35000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A deep, sharp sensation pierces your heart, filling your mind with overwhelming thoughts of love...', 'oreTier': 'Sacred',  },
    '🚽': { 'decimalRarity': 1 / 20240000000, 'numRarity': 20240000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Don't even THINK about it...", 'oreTier': 'Sacred',  },
    '📽️': { 'decimalRarity': 1 / 3780000000, 'numRarity': 3780000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You're alone, and yet you feel the eyes of millions stare upon you through a peculiar lens...", 'oreTier': 'Metaversal',  },
    '🧂': { 'decimalRarity': 1 / 1337000000, 'numRarity': 1337000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "As if on the seaside, the air tastes of salt, yet there's the faint sound of yelling and profanity in the distance...", 'oreTier': 'Interstellar',  },
    '🔪': { 'decimalRarity': 1 / 632000000, 'numRarity': 632000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Life is a beautiful thing, and all it takes is a sharp slash of steel to take...', 'oreTier': 'Flawless',  },
    '💔': { 'decimalRarity': 1 / 155000000, 'numRarity': 155000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💔 Has Spawned!', 'oreTier': 'Divine',  },
    '🍆': { 'decimalRarity': 1 / 69696969, 'numRarity': 69696969, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🍆 Has Spawned!', 'oreTier': 'Divine',  },
    '🖱️': { 'decimalRarity': 1 / 11101000, 'numRarity': 11101000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖱️ Has Spawned!', 'oreTier': 'Mystical',  },
    '⌨️': { 'decimalRarity': 1 / 10010000, 'numRarity': 10010000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '⌨️ Has Spawned!', 'oreTier': 'Mystical',  },
    '💻': { 'decimalRarity': 1 / 6320000, 'numRarity': 6320000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💻 Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '⚖️': { 'decimalRarity': 1 / 123321000000, 'numRarity': 123321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You feel your fate hang in the balance, as every one of your actions are weighed against one another...', 'oreTier': 'Ethereal',  },
    '🌱': { 'decimalRarity': 1 / 83000000000, 'numRarity': 83000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Did you know that the mitochondria is the powerhouse of the cell?...', 'oreTier': 'Sacred',  },
    '🎓': { 'decimalRarity': 1 / 7900000000, 'numRarity': 7900000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An influx of knowledge passes you by as you reap the reward of years of turmoil...', 'oreTier': 'Sacred',  },
    '📍': { 'decimalRarity': 1 / 4321000000, 'numRarity': 4321000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Mark after mark, record after record, the earth below unfolds its interior on paper before you...', 'oreTier': 'Metaversal',  },
    '📌': { 'decimalRarity': 1 / 1230000000, 'numRarity': 1230000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'You briefly see the mine in all its splendor, as if all its intricacies had been mapped to a tee...', 'oreTier': 'Interstellar',  },
    '🔎': { 'decimalRarity': 1 / 725000000, 'numRarity': 725000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through the glass, you gain a feeling of omniscience as your vision achieves clarity...', 'oreTier': 'Flawless',  },
    '🖊️': { 'decimalRarity': 1 / 165000000, 'numRarity': 165000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A mystical object of creativity draws in a reality of imagination...', 'oreTier': 'Flawless',  },
    '📚': { 'decimalRarity': 1 / 48100000, 'numRarity': 48100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📚 Has Spawned!', 'oreTier': 'Divine',  },
    '📐': { 'decimalRarity': 1 / 34000000, 'numRarity': 34000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📐 Has Spawned!', 'oreTier': 'Divine',  },
    '📖': { 'decimalRarity': 1 / 16000000, 'numRarity': 16000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📖 Has Spawned!', 'oreTier': 'Mystical',  },
    '🧠': { 'decimalRarity': 1 / 15500000, 'numRarity': 15500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧠 Has Spawned!', 'oreTier': 'Mystical',  },
    '✏️': { 'decimalRarity': 1 / 8200000, 'numRarity': 8200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '✏️ Has Spawned!', 'oreTier': 'Mystical',  },
    
    
    
    '🩸': { 'decimalRarity': 1 / 13000000000000, 'numRarity': 13000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "So be it.. take your blood trophy..! You.. are truly the bane of this world aren't you...- <br>May.. the clover be our final saving grace... from the wielder of the void.....-", 'oreTier': 'Imaginary',  },
    '♨️': { 'decimalRarity': 1 / 6700000000000, 'numRarity': 6700000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "..I see what you want. I'm in no state to object.. and yet I will do everything in my power to make your life hell...", 'oreTier': 'Imaginary',  },
    '🚫': { 'decimalRarity': 1 / 1660000000000, 'numRarity': 1660000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "That's not.. possible.. how? What do you want from me? I.. don't have anything more to offer you...", 'oreTier': 'Imaginary',  },
    '🔈': { 'decimalRarity': 1 / 666666666666, 'numRarity': 666666666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "As you wish. May my silence deafen you further as your search runs dry forevermore...", 'oreTier': 'Ethereal',  },
    '⛔': { 'decimalRarity': 1 / 256000000000, 'numRarity': 256000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Another breach?! What are you!? You are no regular entity, perhaps I must tend to you personally...", 'oreTier': 'Ethereal',  },
    '💢': { 'decimalRarity': 1 / 26000000000, 'numRarity': 26000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "Why do you persist?! What are you trying to prove!? You're enraging me.. and I will make you suffer...", 'oreTier': 'Sacred',  },
    '🔇': { 'decimalRarity': 1 / 3300000000, 'numRarity': 3300000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Do not speak further, for I know your determination will falter...', 'oreTier': 'Metaversal',  },
    '🛑': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Curious.. very curious.. you found what you came for, now leave...', 'oreTier': 'Interstellar',  },
    '⭕': { 'decimalRarity': 1 / 600000000, 'numRarity': 600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You're still here? Very well. Do not say you were never warned...", 'oreTier': 'Flawless',  },
    '🔕': { 'decimalRarity': 1 / 225000000, 'numRarity': 225000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You shouldn't be here. Turn back while you still can...", 'oreTier': 'Flawless',  },
   
    '✡️': { 'decimalRarity': 1 / 6666666, 'numRarity': 6666666, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'In a magical zone where all things intertwine, the star of creation itself shines bright...', 'oreTier': 'Celestial',  },
    '🇮🇴': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇻🇬': { 'decimalRarity': 1 / 3130500, 'numRarity': 3130500, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇨🇽': { 'decimalRarity': 1 / 14020000, 'numRarity': 14020000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇯🇪': { 'decimalRarity': 1 / 92890000, 'numRarity': 92890000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇲🇵': { 'decimalRarity': 1 / 495510000, 'numRarity': 495510000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇹🇰': { 'decimalRarity': 1 / 14110000000, 'numRarity': 14110000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇻🇮': { 'decimalRarity': 1 / 34177600000, 'numRarity': 34177600000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },
    '🇲🇴': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    
    '🇦🇸': { 'decimalRarity': 1 / 44270000, 'numRarity': 44270000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇨🇰': { 'decimalRarity': 1 / 104600000, 'numRarity': 104600000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇬🇵': { 'decimalRarity': 1 / 395700000, 'numRarity': 395700000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇲🇶': { 'decimalRarity': 1 / 3764000000, 'numRarity': 3764000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇵🇳': { 'decimalRarity': 1 / 6700000000, 'numRarity': 6700000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇹🇨': { 'decimalRarity': 1 / 45700000000, 'numRarity': 45700000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇨🇨': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    
    '🇦🇮': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇨🇼': { 'decimalRarity': 1 / 17500000, 'numRarity': 17500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇬🇺': { 'decimalRarity': 1 / 111000000, 'numRarity': 111000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇾🇹': { 'decimalRarity': 1 / 150000000, 'numRarity': 150000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇷🇪': { 'decimalRarity': 1 / 8590000000, 'numRarity': 8590000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇼🇫': { 'decimalRarity': 1 / 15200000000, 'numRarity': 15200000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },

    '🇬🇬': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇦🇼': { 'decimalRarity': 1 / 1640000, 'numRarity': 1640000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇮🇪': { 'decimalRarity': 1 / 3628000, 'numRarity': 3628000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇲🇸': { 'decimalRarity': 1 / 63788000, 'numRarity': 63788000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇬🇱': { 'decimalRarity': 1 / 269220000, 'numRarity': 269220000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇧🇱': { 'decimalRarity': 1 / 9131000000, 'numRarity': 9131000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },

    '🇦🇽': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇧🇲': { 'decimalRarity': 1 / 6350000, 'numRarity': 6350000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Mystical', },
    '🇬🇫': { 'decimalRarity': 1 / 29400000, 'numRarity': 29400000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇬🇮': { 'decimalRarity': 1 / 32649000, 'numRarity': 32649000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇳🇺': { 'decimalRarity': 1 / 162000000, 'numRarity': 162000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇸🇭': { 'decimalRarity': 1 / 5600000000, 'numRarity': 5600000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇧🇶': { 'decimalRarity': 1 / 39424242424, 'numRarity': 39424242424, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },

    '🇫🇴': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer', },
    '🇰🇾': { 'decimalRarity': 1 / 6870000, 'numRarity': 6870000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Divine', },
    '🇫🇰': { 'decimalRarity': 1 / 33090000, 'numRarity': 33090000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Flawless', },
    '🇳🇫': { 'decimalRarity': 1 / 216900000, 'numRarity': 216900000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Interstellar', },
    '🇬🇸': { 'decimalRarity': 1 / 819800850, 'numRarity': 819800850, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Metaversal', },
    '🇵🇲': { 'decimalRarity': 1 / 5888888888, 'numRarity': 5888888888, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Sacred', },
    '🇮🇲': { 'decimalRarity': 1 / 34500000000, 'numRarity': 34500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Ethereal', },
    '🇭🇰': { 'decimalRarity': 1 / 734000000000, 'numRarity': 734000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Imaginary', },

    '⚕️': { 'decimalRarity': 1 / 50000000000, 'numRarity': 50000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Gently materializing, a healing symbol radiates a serene energy, offering tranquility...', 'oreTier': 'Sacred',  },
    '🌙': { 'decimalRarity': 1 / 26262626262, 'numRarity': 26262626262, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Lunar rays of light dance upon your iris, captivating your adoring gaze...', 'oreTier': 'Imaginary',  },
    '🪔': { 'decimalRarity': 1 / 2000000000, 'numRarity': 2000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'A lamp illuminates everything around you...', 'oreTier': 'Sacred',  },
    '🎷': { 'decimalRarity': 1 / 2500000000, 'numRarity': 2500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'A jazzed melody fills the room with rhythmic notes...', 'oreTier': 'Sacred',  },
    '🧫': { 'decimalRarity': 1 / 4000000000, 'numRarity': 4000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Under the watchful gaze, the bacteria undergo a myriad of transformations...', 'oreTier': 'Sacred',  },
    '🩺': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The heartbeats grow louder...', 'oreTier': 'Metaversal',  },
    '🌡️': { 'decimalRarity': 1 / 3000000000, 'numRarity': 3000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'As you stand amid an increasingly sweltering atmosphere, the air grows hotter and hotter...', 'oreTier': 'Metaversal',  },
    '🛸': { 'decimalRarity': 1 / 1000000000, 'numRarity': 1000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The sky becomes a canvas of extraterrestrial wonder as aliens fly everywhere...', 'oreTier': 'Metaversal',  },
    '🪘': { 'decimalRarity': 1 / 500000000, 'numRarity': 500000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The bass of drums grow increasingly louder and louder...', 'oreTier': 'Metaversal',  },
    '💱': { 'decimalRarity': 1 / 180000000, 'numRarity': 180000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Essences of exchange and trade fall through the depths, filling the cosmos with currency...', 'oreTier': 'Interstellar',  },
    '💊': { 'decimalRarity': 1 / 800000000, 'numRarity': 800000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Taking this will for sure get you dizzy...', 'oreTier': 'Interstellar',  },
    '🍄': { 'decimalRarity': 1 / 250000000, 'numRarity': 250000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'OH MY GOD ITS THE LAST OF US PART 2024 SOMEONE SAVE US...', 'oreTier': 'Interstellar',  },
    '🥁': { 'decimalRarity': 1 / 100000000, 'numRarity': 100000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'The drums of liberation echo closer and closer...', 'oreTier': 'Interstellar',  },
    '🕸️': { 'decimalRarity': 1 / 40000000, 'numRarity': 40000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'As you struggle against the silken embrace of the web, you feel its delicate fibers tightening around you...', 'oreTier': 'Flawless',  },
    '🔭': { 'decimalRarity': 1 / 15000000, 'numRarity': 15000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Unveiling cosmic wonders, an unknown gadget reveals the unseen...', 'oreTier': 'Flawless',  },
    '🪇': { 'decimalRarity': 1 / 20000000, 'numRarity': 20000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Rhythmic and lively beats infuse the air with a festive atmosphere...', 'oreTier': 'Flawless',  },
    '🧬': { 'decimalRarity': 1 / 70000000, 'numRarity': 70000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'Mysteriously emerging, a double-helix subtly unveils the secrets encoded within the fabric of existence...', 'oreTier': 'Flawless',  },
    '📡': { 'decimalRarity': 1 / 8000000, 'numRarity': 8000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '📡 Has Spawned!', 'oreTier': 'Divine',  },
    '🎹': { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🎹 Has Spawned!', 'oreTier': 'Divine',  },
    '💉': { 'decimalRarity': 1 / 17500000, 'numRarity': 17500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '💉 Has Spawned!', 'oreTier': 'Divine',  },
    '🍥': { 'decimalRarity': 1 / 27500000, 'numRarity': 27500000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '🍥 Has Spawned!', 'oreTier': 'Divine',  },
    
    //'' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    //🇳🇬 🇪🇹 🇪🇬 🇨🇩 🇹🇿 🇿🇦 🇰🇪 🇺🇬 🇸🇩 🇩🇿 🇸🇨
    '🇸🇨' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇩🇿' : { 'decimalRarity': 1 / 1000100, 'numRarity': 1000100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Antique',  },
    '🇸🇩' : { 'decimalRarity': 1 / 1202020, 'numRarity': 1202020, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Antique',  },
    '🇺🇬' : { 'decimalRarity': 1 / 6789000, 'numRarity': 6789000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇰🇪' : { 'decimalRarity': 1 / 7457000, 'numRarity': 7457000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇿🇦' : { 'decimalRarity': 1 / 8673000, 'numRarity': 8673000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇹🇿' : { 'decimalRarity': 1 / 9001400, 'numRarity': 9001400, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇨🇩' : { 'decimalRarity': 1 / 14675000, 'numRarity': 14675000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇪🇬' : { 'decimalRarity': 1 / 17900250, 'numRarity': 17900250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇪🇹' : { 'decimalRarity': 1 / 20780970, 'numRarity': 20780970, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    '🇳🇬' : { 'decimalRarity': 1 / 24000000, 'numRarity': 24000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Mystical',  },
    //🇨🇳 🇮🇳 🇮🇩 🇵🇰 🇧🇩 🇯🇵 🇵🇭 🇻🇳 🇮🇷 🇹🇷 🇧🇳
    '🇧🇳' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇹🇷' : { 'decimalRarity': 1 / 26870000, 'numRarity': 26870000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇮🇷' : { 'decimalRarity': 1 / 33568900, 'numRarity': 33568900, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇻🇳' : { 'decimalRarity': 1 / 39832400, 'numRarity': 39832400, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇵🇭' : { 'decimalRarity': 1 / 46630980, 'numRarity': 46630980, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇯🇵' : { 'decimalRarity': 1 / 53900000, 'numRarity': 53900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇧🇩' : { 'decimalRarity': 1 / 58230475, 'numRarity': 58230475, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇵🇰' : { 'decimalRarity': 1 / 74500670, 'numRarity': 74500670, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇮🇩' : { 'decimalRarity': 1 / 95675090, 'numRarity': 95675090, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇮🇳' : { 'decimalRarity': 1 / 114360780, 'numRarity': 114360780, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    '🇨🇳' : { 'decimalRarity': 1 / 135600980, 'numRarity': 135600980, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Divine',  },
    //🇺🇸 🇲🇽 🇨🇦 🇬🇹 🇭🇹 🇨🇺 🇩🇴 🇭🇳 🇳🇮 🇸🇻 🇰🇳
    //160m - 1.5b
    '🇰🇳' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇸🇻' : { 'decimalRarity': 1 / 267890000, 'numRarity': 267890000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless',  },
    '🇳🇮' : { 'decimalRarity': 1 / 376543900, 'numRarity': 376543900, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless',  },
    '🇭🇳' : { 'decimalRarity': 1 / 490870430, 'numRarity': 490870430, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Flawless',  },
    '🇩🇴' : { 'decimalRarity': 1 / 790875100, 'numRarity': 790875100, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇨🇺' : { 'decimalRarity': 1 / 955600700, 'numRarity': 955600700, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇭🇹' : { 'decimalRarity': 1 / 1000250250, 'numRarity': 1000250250, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇬🇹' : { 'decimalRarity': 1 / 1057890700, 'numRarity': 1057890700, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇨🇦' : { 'decimalRarity': 1 / 1176943540, 'numRarity': 1176943540, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇲🇽' : { 'decimalRarity': 1 / 1245965270, 'numRarity': 1245965270, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
    '🇺🇸' : { 'decimalRarity': 1 / 1489009500, 'numRarity': 1489009500, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Interstellar',  },
   
    //🇷🇺 🇩🇪 🇬🇧 🇫🇷 🇮🇹 🇪🇸 🇵🇱 🇺🇦 🇷🇴 🇳🇱 🇻🇦
    //1.5b - 5b
    '🇻🇦' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇳🇱' : { 'decimalRarity': 1 / 1560943200, 'numRarity': 1560943200, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇷🇴' : { 'decimalRarity': 1 / 1890230560, 'numRarity': 1890230560, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇺🇦' : { 'decimalRarity': 1 / 2130400290, 'numRarity': 2130400290, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇵🇱' : { 'decimalRarity': 1 / 2468900300, 'numRarity': 2468900300, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇪🇸' : { 'decimalRarity': 1 / 2678234560, 'numRarity': 2678234560, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇮🇹' : { 'decimalRarity': 1 / 2900000120, 'numRarity': 2900000120, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇫🇷' : { 'decimalRarity': 1 / 3260870600, 'numRarity': 3260870600, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇬🇧' : { 'decimalRarity': 1 / 3790234090, 'numRarity': 3790234090, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇩🇪' : { 'decimalRarity': 1 / 4230543650, 'numRarity': 4230543650, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    '🇷🇺' : { 'decimalRarity': 1 / 4783285008, 'numRarity': 4783285008, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Metaversal',  },
    
    //🇧🇷 🇨🇴 🇦🇷 🇵🇪 🇻🇪 🇨🇱 🇪🇨 🇧🇴 🇵🇾 🇺🇾 🇸🇷
    //5b - 100b
    '🇸🇷' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇺🇾' : { 'decimalRarity': 1 / 7236954010, 'numRarity': 7236954010, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇵🇾' : { 'decimalRarity': 1 / 11256256256, 'numRarity': 11256256256, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇧🇴' : { 'decimalRarity': 1 / 21455875000, 'numRarity': 21455875000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇪🇨' : { 'decimalRarity': 1 / 29599600000, 'numRarity': 29599600000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇨🇱' : { 'decimalRarity': 1 / 34100200300, 'numRarity': 34100200300, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇻🇪' : { 'decimalRarity': 1 / 44500125090, 'numRarity': 44500125090, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇵🇪' : { 'decimalRarity': 1 / 57145672606, 'numRarity': 57145672606, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇦🇷' : { 'decimalRarity': 1 / 68154633000, 'numRarity': 68154633000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇨🇴' : { 'decimalRarity': 1 / 79233400050, 'numRarity': 79233400050, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    '🇧🇷' : { 'decimalRarity': 1 / 92350777000, 'numRarity': 92350777000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Sacred',  },
    
    //🇦🇺 🇵🇬 🇳🇿 🇫🇯 🇸🇧 🇫🇲 🇻🇺 🇵🇫 🇳🇨 🇼🇸 🇹🇻
    //100b+
    '🇹🇻' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🇼🇸' : { 'decimalRarity': 1 / 180245870000, 'numRarity': 180245870000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇳🇨' : { 'decimalRarity': 1 / 246780900230, 'numRarity': 246780900230, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇵🇫' : { 'decimalRarity': 1 / 467900875030, 'numRarity': 467900875030, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇻🇺' : { 'decimalRarity': 1 / 590600700800, 'numRarity': 590600700800, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇫🇲' : { 'decimalRarity': 1 / 687500020007, 'numRarity': 687500020007, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇸🇧' : { 'decimalRarity': 1 / 754478890340, 'numRarity': 754478890340, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇫🇯' : { 'decimalRarity': 1 / 8999054000250, 'numRarity': 899905400025, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Ethereal',  },
    '🇳🇿' : { 'decimalRarity': 1 / 1350883247005, 'numRarity': 1350883247005, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    '🇵🇬' : { 'decimalRarity': 1 / 2690225460780, 'numRarity': 2690225460780, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    '🇦🇺' : { 'decimalRarity': 1 / 5200540900510, 'numRarity': 5200540900510, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    
    //🏳️‍⚧️ 🇺🇳 
    '🇺🇳' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🏁': { 'decimalRarity': 1 / 12500000000000, 'numRarity': 12500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    '🏳️‍⚧️' : { 'decimalRarity': 1 / 500000000000000, 'numRarity': 500000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Imaginary',  },
    
    '🍀': { 'decimalRarity': 1 / 234000000000000, 'numRarity': 234000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'This is it..? The symbol of luck itself, a simple four-leafed clover..?', 'oreTier': 'Imaginary',  },
    '☘️': { 'decimalRarity': 1 / 12300000000000, 'numRarity': 12300000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A peculiar three-leafed clover.. there must be more to this strange aura it emanates, this feels.. incomplete...', 'oreTier': 'Imaginary',  },
    
    
    '🤍': { 'decimalRarity': 1 / 2000000, 'numRarity': 2000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤍 Has Spawned!', 'oreTier': 'Antique',  },
    '🖤': { 'decimalRarity': 1 / 1750000, 'numRarity': 1750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🖤 Has Spawned!', 'oreTier': 'Antique',  },
    '🤎': { 'decimalRarity': 1 / 1500000, 'numRarity': 1500000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🤎 Has Spawned!', 'oreTier': 'Antique',  },
    '💜': { 'decimalRarity': 1 / 1250000, 'numRarity': 1250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💜 Has Spawned!', 'oreTier': 'Antique',  },
    '❤️': { 'decimalRarity': 1 / 1000000, 'numRarity': 1000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '❤️ Has Spawned!', 'oreTier': 'Antique',  },
    '🧡': { 'decimalRarity': 1 / 950000, 'numRarity': 950000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🧡 Has Spawned!', 'oreTier': 'Antique',  },
    '💛': { 'decimalRarity': 1 / 900000, 'numRarity': 900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💛 Has Spawned!', 'oreTier': 'Antique',  },
    '💙': { 'decimalRarity': 1 / 800000, 'numRarity': 800000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💙 Has Spawned!', 'oreTier': 'Antique',  },
    '💚': { 'decimalRarity': 1 / 750000, 'numRarity': 750000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💚 Has Spawned!', 'oreTier': 'Antique',  },
    //🔶🔷🔸🔹🔺🔻🔘🔲🟨🟦⬛⬜🧧◾◽
    '🔶': { 'decimalRarity': 1 / 700000, 'numRarity': 700000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔷': { 'decimalRarity': 1 / 650000, 'numRarity': 650000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔸': { 'decimalRarity': 1 / 590000, 'numRarity': 590000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔹': { 'decimalRarity': 1 / 475000, 'numRarity': 475000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔺': { 'decimalRarity': 1 / 400000, 'numRarity': 400000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔻': { 'decimalRarity': 1 / 325000, 'numRarity': 325000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔘': { 'decimalRarity': 1 / 200000, 'numRarity': 200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🔲': { 'decimalRarity': 1 / 110000, 'numRarity': 110000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '🟨': { 'decimalRarity': 1 / 65000, 'numRarity': 65000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '🟦': { 'decimalRarity': 1 / 34000, 'numRarity': 34000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⬛': { 'decimalRarity': 1 / 12000, 'numRarity': 12000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '⬜': { 'decimalRarity': 1 / 4000, 'numRarity': 4000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '🧧': { 'decimalRarity': 1 / 2000, 'numRarity': 2000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '◾': { 'decimalRarity': 1 / 950, 'numRarity': 950, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '◽': { 'decimalRarity': 1 / 785, 'numRarity': 785, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '⚫': { 'decimalRarity': 1 / 650, 'numRarity': 650, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟤': { 'decimalRarity': 1 / 540, 'numRarity': 540, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟣': { 'decimalRarity': 1 / 460, 'numRarity': 460, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔴': { 'decimalRarity': 1 / 290, 'numRarity': 290, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟠': { 'decimalRarity': 1 / 200, 'numRarity': 200, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟡': { 'decimalRarity': 1 / 145, 'numRarity': 145, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔵': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟢': { 'decimalRarity': 1 / 70, 'numRarity': 70, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟪': { 'decimalRarity': 1 / 55, 'numRarity': 55, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟥': { 'decimalRarity': 1 / 40, 'numRarity': 40, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🟧': { 'decimalRarity': 1 / 30, 'numRarity': 30, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },

    '❔' : { 'noLuck': true, 'decimalRarity': 1 / 1111111111, 'numRarity': 1111111111, 'hasLog': true, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': ':trol:', 'oreTier': 'Interstellar',  },
    '📘': { 'decimalRarity': 1 / 1900000, 'numRarity': 1900000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📘 Has Spawned!', 'oreTier': 'Antique',  },
    '📙': { 'decimalRarity': 1 / 1500500, 'numRarity': 1500500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📙 Has Spawned!', 'oreTier': 'Antique',  },
    '📕': { 'decimalRarity': 1 / 1230560, 'numRarity': 1230560, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📕 Has Spawned!', 'oreTier': 'Antique',  },
    '📗': { 'decimalRarity': 1 / 854000, 'numRarity': 854000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '📗 Has Spawned!', 'oreTier': 'Antique',  },
    '⏏️': { 'decimalRarity': 1 / 300000, 'numRarity': 300000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '▶️': { 'decimalRarity': 1 / 250000, 'numRarity': 250000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏸️': { 'decimalRarity': 1 / 200000, 'numRarity': 200000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏯️': { 'decimalRarity': 1 / 175000, 'numRarity': 175000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏺️': { 'decimalRarity': 1 / 100000, 'numRarity': 100000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏭️': { 'decimalRarity': 1 / 90000, 'numRarity': 90000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '⏮️': { 'decimalRarity': 1 / 75000, 'numRarity': 75000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏩': { 'decimalRarity': 1 / 70000, 'numRarity': 70000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏪': { 'decimalRarity': 1 / 60000, 'numRarity': 60000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏬': { 'decimalRarity': 1 / 50000, 'numRarity': 50000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Legendary',  },
    '⏫': { 'decimalRarity': 1 / 25000, 'numRarity': 25000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '✴️': { 'noLuck': true, 'decimalRarity': 1 / 5000, 'numRarity': 5000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Godly',  },
    '◀️': { 'decimalRarity': 1 / 20000, 'numRarity': 20000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '🔼': { 'decimalRarity': 1 / 17500, 'numRarity': 17500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '🔽': { 'decimalRarity': 1 / 15000, 'numRarity': 15000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '➡️': { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Rare',  },
    '↖️': { 'decimalRarity': 1 / 9000, 'numRarity': 9000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '↘️': { 'decimalRarity': 1 / 5000, 'numRarity': 5000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⬇️': { 'decimalRarity': 1 / 3000, 'numRarity': 3000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⬆️': { 'decimalRarity': 1 / 2500, 'numRarity': 2500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⬅️': { 'decimalRarity': 1 / 1750, 'numRarity': 1750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '↪️': { 'decimalRarity': 1 / 1500, 'numRarity': 1500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '↩️': { 'decimalRarity': 1 / 1250, 'numRarity': 1250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⤴️': { 'decimalRarity': 1 / 1000, 'numRarity': 1000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Uncommon',  },
    '⤵️': { 'decimalRarity': 1 / 750, 'numRarity': 750, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔀': { 'decimalRarity': 1 / 500, 'numRarity': 500, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔁': { 'decimalRarity': 1 / 300, 'numRarity': 300, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔂': { 'decimalRarity': 1 / 250, 'numRarity': 250, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔄': { 'decimalRarity': 1 / 175, 'numRarity': 175, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    '🔃': { 'decimalRarity': 1 / 100, 'numRarity': 100, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    
    'stars' : { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', "hasImage":true, "src": "media/ores/stars.png", "oreName": "Stars"},
    '🟫': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🧱': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌫️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌊': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🪨': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '☢️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '📰': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🎂': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🪈': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🦠': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '☣️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🎵': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '❓': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '☁️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '📺': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🚪': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🌐': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '♟️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '✖️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '❌': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    '🕳️': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': '', 'oreTier': 'Layer',  },
    'void': { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer', "hasImage":true, "src": "media/ores/void.webp", "oreName": "Void"},

    'bitcoin' : { 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'erm', 'oreTier': 'Common',  },
    ':3' : { 'decimalRarity': 1 / 1000000000000000000000000, 'numRarity': 1000000000000000000000000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Meow meow meow meow meow meow meow meow', 'oreTier': 'Silly :3', 'hasImage' : true, "src" : "media/ores/kitty.gif", "oreName" : ":3"},
    'SCP-3567-J' : { 'decimalRarity': 1 / 356735673567, 'numRarity': 356735673567, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The Gay', 'oreTier': 'Silly :3',  'hasImage' : true, "src" : "media/ores/Astolfo_Bean.png", "oreName" : "Astolfo :3"},
    'Nyerd' : { 'decimalRarity': 1 / 450000000000, 'numRarity': 450000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "you're a NYERD!!!", 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/NYERD.webp", "oreName" : "nyerd", "eId":"<:nyerd:1232461600087343156>"},
    'Fox' : { 'decimalRarity': 1 / 200000000000, 'numRarity': 200000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'what the fox is going on here!!', 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/STUPID_FOX.webp", "oreName" : "fox",},
    'Bismuth' : { 'decimalRarity': 1 / 830209019000, 'numRarity': 830209019000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vibrant mineral is barely detected due to its nearly unnoticeable α-decay...', 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/bismuth.png", "oreName" : "Bismuth", "eId":"<:bismuth:1268369596268941313>"},
    'variousMinerals' : { 'decimalRarity': 1 / 2048000000000, 'numRarity': 2048000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'bro casually just found the clump of various minerals 🤑🤑...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/clump_of_various_minerals.webp", "oreName" : "Various Minerals", "eId":"<:clump_of_various_minerals:1267218192908947506>"},
    'watermelonDiamond' : { 'decimalRarity': 1 / 170000000000, 'numRarity': 170000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '💎 Has Spawned..?', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/diamondcelestial.png", "oreName" : "Watermelon Diamond", "eId":"<:diamondcelestial:1267216988196044964>"},
    'godOfTheMine' : { 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'yo pickaxe sucks, mine harder...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/god-export.png", "oreName" : "God of The Mine", "eId":"<:god_of_the_mine:1268342662738481203>"},
    'Omnipotent God of The Mine' : { 'decimalRarity': 1 / 3000000000000000, 'numRarity': 3000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'i didnt mean mine this hard...', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/allSeeingGod.webp", "oreName" : "Omnipotent God of The Mine", "eId":"<:omnipotent_gotm:1269139359135698964>"},
    'mushroomCats' : { 'decimalRarity': 1 / 14140000000000, 'numRarity': 14140000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'In the wild, many poisonous things can ruin your life...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/highcats.png", "oreName" : "Mushroom Cats", "eId":"<:highcats:1267216999935901817>"},
    'jellyfish' : { 'decimalRarity': 1 / 600000000000, 'numRarity': 600000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '🔮 Has Spawned..?', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/jellyfish.png", "oreName" : "Magical Jellyfish", "eId":"<:jellyfish:1267217002586705970>"},
    'kaleidoscope' : { 'decimalRarity': 1 / 9180274130450, 'numRarity': 9180274130450, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Your vision begins to distort as you hallucinate vibrant colors flying around you...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/kaleidoscope.png", "oreName" : "Kaleidoscope",},
    'qrCode' : { 'decimalRarity': 1 / 281907640568244, 'numRarity': 281907640568244, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A QR Code has appeared in the mines, I wonder where it leads you?...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/qrcode.png", "oreName" : "QR Code", "eId":"<:qrcode:1267217004834717888>"},
    'mutatedGrowth' : { 'decimalRarity': 1 / 3666006060600, 'numRarity': 3666006060600, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Thick vines extend throughout the tunnels, covering everything in poison filled thorns...', 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/silly_mines_flower.png", "oreName" : "Mutated Growth", "eId":"<:silly_mines_flower:1267217643291672618>"},
    'sillyMiner' : {"noLuck": true, 'decimalRarity': 1 / 5000000000000, 'numRarity': 5000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'You found someone else mining. Thou must get rid of competitors...', 'oreTier': 'Celestial',  'hasImage' : true, "src" : "media/ores/sillyminer.png", "oreName" : "Silly Miner", "eId":"<:sillyminer:1267217007741505609>"},
    'starglint' : { 'decimalRarity': 1 / 670000000, 'numRarity': 670000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A vibrant pink and purple diamond shines its hue everywhere in a glorious fashion...', 'oreTier': 'Flawless',  'hasImage' : true, "src" : "media/ores/starglint.png", "oreName" : "Starglint", "eId":"<:starglint:1267217763857076325>"},
    'txtfile' : { 'decimalRarity': 1 / 60000000000000000, 'numRarity': 60000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'IN̷V̷ALI̷D̷A̷TED̷...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/txtfile.png", "oreName" : "txtfile", "eId":"<:invalidated:1268341621238403205>"},
    'unstableCore' : { 'decimalRarity': 1 / 20000000000000000, 'numRarity': 20000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The space around you starts to deconstruct itself...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/unstableCore.png", "oreName" : "Unstable Core", "eId":"<:unstable_core:1268341714188369971>"},
    'australiumIngot' : { 'decimalRarity': 1 / 450000000, 'numRarity': 450000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A familiar ingot that can give indefinite life shines above the rest...', 'oreTier': 'Flawless',  'hasImage' : true, "src" : "media/ores/australiumIngot.png", "oreName" : "Australium Ingot"},
    'cosmicIridium':{ 'decimalRarity': 1 / 125000000000000000, 'numRarity': 125000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An elusive material thought to only be legend smashes through the space around you...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/cosmicIridium.png", "oreName" : "Cosmic Iridium", "eId":"<:cosmic_iridium:1268341401666453504>"},
    'nebula':{ 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  'hasImage' : true, "src" : "media/ores/nebula (2).png", "oreName" : "Nebula",},
    'ascendedArtifact':{ 'decimalRarity': 1 / 30000000000000000, 'numRarity': 30000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An alien artifact hidden from view for millenium is finally visible to our astronomers...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/ascendedartifact.png", "oreName" : "Ascended Artifact", "eId": "<:ascended_artifact:1269156869667291206>"},
    'J1407b':{ 'decimalRarity': 1 / 22000000000000000, 'numRarity': 22000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "You marvel at this celestial giant's stunning, expansive rings, their vibrant colors shimmering in the vastness of space...", 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/J1407b.png", "oreName" : "J1407b",},
    'otherside':{ 'decimalRarity': 1 / 58000000000000000, 'numRarity': 58000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Look up at the moon...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/otherside.png", "oreName" : "The Other Side",},
    'Retina':{ 'decimalRarity': 1 / 20000000000000000, 'numRarity': 20000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An indefinite number of hallucinations reaves your mind...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/retina.gif", "oreName" : "Retina", "hasAudio": true, "audiosrc": "audios/oreAudios/retina.mp3", "playbackSpeed": 1, "rolloffDistance": 100, "volume": 100},
    'UHD':{ 'decimalRarity': 1 / 500000000000, 'numRarity': 500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'this cat caused a big problem', 'oreTier': 'Ethereal',  'hasImage' : true, "src" : "media/ores/UHD.png", "oreName" : "Universe Heat Death",},
    'catgirl':{ 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'dhjbdfghjgdshbgsdhbgdhg...', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/osaka-sata-andagi.gif", "oreName" : "Ok.",},
    'pleiades':{ 'decimalRarity': 1 / 7500000000000000, 'numRarity': 7500000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A brilliant display of blue hues dance in the cosmos, providing a beautiful sight to all who stumble upon it...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/pleidas.webp", "oreName" : "Pleidas",},
    'noradrenaline':{ 'decimalRarity': 1 / 999999999999999999, 'numRarity': 999999999999999999, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A chill goes down your spine...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/noradrenaline.gif", "srcElectrified": "media/ores/ionepine.gif", "oreName" : "Noradrenaline", "hasAudio": true, "audiosrc": "audios/oreAudios/noradrenaline.mp3", "playbackSpeed": 2, "rolloffDistance": 100, "volume": 25},
    /*gif credits: https://rex-reincarnated.fandom.com/wiki/Epinephrine*/
    
    'lowtaperfade':{ 'decimalRarity': 1 / 999999999999999999999, 'numRarity': 999999999999999999999, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A low taper fade goes down your spine...', 'oreTier': 'Silly :3',  'hasImage' : true, "src" : "media/ores/lowtaperfade.gif", "oreName" : "Low Taper Fade", "hasAudio": true, "audiosrc": "audios/oreAudios/lowtaperfade.mp3", "playbackSpeed": 1, "rolloffDistance": 100, "volume": 25},
    'singularityEgg':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/singularityegg.webp", "oreName" : "Singularity Egg",},
    'orbOfLife':{ 'decimalRarity': 1 / 5000000000000000000, 'numRarity': 5000000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore3.gif", "oreName" : "Orb of Life",},
    'orbOfIntelligence':{ 'decimalRarity': 1 / 9750000000000000000, 'numRarity': 9750000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore4.gif", "oreName" : "Orb of Intelligence",},
    'orbOfSound':{ 'decimalRarity': 1 / 16850000000000000000, 'numRarity': 16850000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore5.gif", "oreName" : "Orb of Sound",},
    'orbOfTheUnknown':{ 'decimalRarity': 1 / 35000000000000000000, 'numRarity': 35000000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore1.gif", "oreName" : "Orb of The Unknown",},
    'orbOfCreation':{ 'decimalRarity': 1 / 100000000000000000000, 'numRarity': 100000000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore2.gif", "oreName" : "Orb of Creation",},
    'ah!SoSorgy!':{ 'decimalRarity': 1 / 1000000000000000000000, 'numRarity': 1000000000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'CAPITALISM WILL NOT STOP MY NEED FOR SOUR PATCH KIDS!...', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/HEHEHEHEHE.png", "oreName" : "mmmm yummers chat",},
    'estrogen???':{ 'decimalRarity': 1 / 500000000000, 'numRarity': 500000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': true, 'spawnMessage': 'this shit soooo tasty i need more i need more i need more', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/estrogen.gif", "oreName" : "Estrogen",},
    'YourReward':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/thankyou.png", "oreName" : "Your Reward!",},
    'luna2':{ 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'crunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunchcrunch', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/luna2.gif", "oreName" : "Luna 2",},
    'Desolation':{ 'decimalRarity': 1 / 247000000423000000, 'numRarity': 247000000423000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A powerful and formidable force drags you into the emptiness of the great void...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/desolation.png", "oreName" : "Desolation",},
    'Sakura':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/sakura.png", "oreName" : "Sakura",},
    'Omniscient Clover':{ 'decimalRarity': 1 / 3450000000000000, 'numRarity': 3450000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A viridescent clover shines and floats, the luck itself materializes before your eyes...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/omniscientClover.png", "oreName" : "Omniscient Clover",},
    'Koreosensei':{ 'decimalRarity': 1 / 153454153454153454153, 'numRarity': 153454153454153454153, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The tentacles asked him "what do you want to be?" and he answered "I want to be weak." He is now here to teach you the truth of the mines.', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/COREosensei.png", "oreName" : "Koreosensei",},
    'Saitamore':{ 'decimalRarity': 1 / 100100100010365001000, 'numRarity': 100100100010365001000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Ok.', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/Saitamore.gif", "oreName" : "Saitamore",},
    'Miku':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/miku.gif", "oreName" : "Miku",},
    'Hyper':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/Hyper.png", "oreName" : "Hyper",},
    'Panselinos':{ 'decimalRarity': 1 / 430000000000000000, 'numRarity': 430000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Hidden away from astronomers for centuries, the envenomed planet comes into view at last...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/panselinos.png", "oreName" : "Panselinos",},
    'Real Scribbal':{ 'decimalRarity': 1 / 2000000000000000, 'numRarity': 2000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A figment of your imagination springs to life from inside your sketchbook...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/realScribbal.gif", "oreName" : "Real Scribbal",},
    'Temporalite':{ 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'As the day became the night, and the night to day, this was found in the centre of the anomaly...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/temporalite.png", "oreName" : "Temporalite",},
    'Chronomorph':{ 'decimalRarity': 1 / 4200000000000000000, 'numRarity': 4200000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Beneath a forgotten city, an ancient clock tower ticks with unnatural precision, its gears controlling time itself…', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/chronomorph.png", "oreName" : "Chronomorph",},
    'Charybdis':{ 'decimalRarity': 1 / 1500000000000000, 'numRarity': 1500000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'A red planet shaped like the eye of a dragon is discovered, a breathtaking cosmic presence that defies all explanation...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/charybdis.png", "oreName" : "",},
    'cateye':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'The universal eye of a universal being chooses to spend its existence with you...', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/cateye.png", "oreName" : "CATEYE"},
    'True Infinity':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'An incomprehensible thought appears before you in a recognizable shape...', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/trueInfinity.png", "oreName" : "True Infinity",},
    'First Anniversary Cake':{ 'decimalRarity': 1 / Infinity, 'numRarity': Infinity, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/cakeeeeeee.png", "oreName" : "First Anniversary Cake",},
    'orbOfFlight':{ 'decimalRarity': 1 / 250000000000000000000, 'numRarity': 250000000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore6.gif", "oreName" : "Orb of Flight",},
    'orbOfFire':{ 'decimalRarity': 1 / 500000000000000000000, 'numRarity': 500000000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'meowww :3', 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/ore7.gif", "oreName" : "Orb of Fire",},
    'Flaroreon':{ 'decimalRarity': 1 / (1920000000*1920000000), 'numRarity': 1920000000*1920000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'WHAT! NILNAL! I GOT NILNAL! I GOT NILNAL! I GOT NILNAL ! I GOT NILNAL! I GOT NILNAL! I GOT NILNAL! I GOT IT! I GOT NILNAL! I GOT NILNAL! I GOT NILNAL! OH MY GOD! OH MY GOD! OH MY GOD OH MY GODD BUAHHAHAHHAH! OH MY GODD!! I GOT NILNAL!', 'oreTier': 'Infinitesimal',  'hasImage' : true, "src" : "media/ores/Flaroreon.png", "oreName" : "Flaroreon",},
    'TheHowlingMoon':{ 'decimalRarity': 1 / 29500000000000000000, 'numRarity': 29500000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "The Moon's Penumbra turns to Leer at You, its Blue Blood Corrupted...", 'oreTier': 'Polychromatical',  'hasImage' : true, "src" : "media/ores/howlingmoon.png", "oreName" : "The Howling Moon",},
    'Pasta':{ 'decimalRarity': 1 / 1000000000000000, 'numRarity': 1000000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Something about pasta...', 'oreTier': 'Hyperdimensional',  'hasImage' : true, "src" : "media/ores/pasta.png", "oreName" : "Pasta",},
    'Star Core':{ 'decimalRarity': 1 / 950000000000000, 'numRarity': 950000000000000, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': "The gears spin and spin, generating the energy to make the star's radiant glow...", 'oreTier': 'Imaginary',  'hasImage' : true, "src" : "media/ores/starcore.png", "oreName" : "Star Core",},
    
    "☯️" : { 'decimalRarity': 1 / 987656789, 'numRarity': 987656789, 'hasLog': true, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': 'Through light and darkness, only one may guide you to the truth...', 'oreTier': 'Celestial',  },
    "⛏️": { 'decimalRarity': 1 / 10000000, 'numRarity': 10000000, 'hasLog': false, 'isBreakable': false, 'caveExclusive': false, 'spawnMessage': 'Thoughts of what lies on the other side cloud your mind until.. a mirror image appears..?', 'oreTier': 'Celestial',  },
    "⚪": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Common',  },
    "🟩": { 'decimalRarity': 1 / 1, 'numRarity': 1, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Layer',  },
    "🩶": { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Celestial',  },
    "🩷": { 'decimalRarity': 1 / 10000, 'numRarity': 10000, 'hasLog': false, 'isBreakable': true, 'caveExclusive': false, 'spawnMessage': '', 'oreTier': 'Celestial',  }
}
const playerInventory = {
    
}
let variantInvNames = ["normalAmt", "electrifiedAmt", "radioactiveAmt", "explosiveAmt"];
//ALL LAYERS
const layerList = {
"dirtLayer" : ["mutatedGrowth", "sillyMiner", "🍓", "🌳", "💐", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"dirtLayer2" : ["mutatedGrowth", "sillyMiner", "🍓", "🌳", "💐", "🥬", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"dirtLayer3" : ["mutatedGrowth", "sillyMiner", "🍓", "🌳", "💐", "🤫", "🥗", "🌪️", "🌏", "🌲", "🎃", "🎍", "🎄", "🪵", "🌻", "🍁", "🟫"],
"brickLayer" : ["sillyMiner", "🏯", "🏰", "🌇", "🥉", "🪞", "🔩", "🧲", "🪬", "🧨", "🔗", "🪙", "🗿", "🪚", "🪜", "🧱"],
"foggyLayer" : ["sillyMiner", "🦚", "🚿", "👁️", "💸", "⌛", "🧵", "🕯️", "🕋", "🎨", "🎴", "🥽", "🪄", "🎭", "🌫️"],
"waterLayer" : ["HD 160529", "sillyMiner", "⚓", "🐋", "💫", "🪩", "👿", "🌀", "🔱", "👑", "🐟", "🫧", "🤿", "🎣", "⛵", "🌊"],
"rockLayer" : ["apatite", "Star Core", "sillyMiner", "variousMinerals", "🪤", "🏔️", "🌈", "🧊", "❄️", "💎", "☄️", "🔮", "🔋", "💍", "🥏", "⚜️", "💠", "🪨"],
"radioactiveLayer" : ["sillyMiner", "Bismuth", "🤖", "⚠️", "🎆", "🧀", "🌌", "🥀", "🎇", "🔳", "⏹️", "🧩", "🔔", "⚗️", "🧪", "☢️"],
"cactusLayer" : ["sillyMiner", "🦴", "🐪", "🏵️", "🪐", "💥", "🔥", "🔆", "⭐", "🎀", "🗡️", "📟", "⚱️", "🖍️", "🌵", ],
"paperLayer" : ["Real Scribbal", "sillyMiner", "🎩", "💵", "🪅", "👀", "🌟", "📝", "⌚", "🗜️", "🏆", "🎲", "✂️", "🃏", "⚙️", "📰"],
"giftLayer": ["sillyMiner", "🍭", "💽", "🛢️", "⚛️", "🗳️", "🎎", "📿", "🎑", "📢", "🚗", "🎫", "🎮", "🎁"],
"worldOneCommons" : ["godOfTheMine", "🤍", "🖤", "🤎", "💜", "❤️", "🧡", "💛", "💙", "💚", "🔶", "🔷", "🔸", "🔹", "🔺", "🔻", "🔘", "🔲", "🟨", "🟦", "⬛", "⬜", "🧧", "◾", "◽", "⚫", "🟤", "🟣", "🔴", "🟠", "🟡", "🔵", "🟢", "🟪", "🟥", "🟧"],
"sillyLayer" : [":3", "ah!SoSorgy!", "Pasta", "sillyMiner", "UHD", "qrCode", "kaleidoscope", "🎉", "🧌", "Nyerd", "Fox", "♾️", "💅", "😁", "🪢", "🎂"],
"fluteLayer" : ["sillyMiner", "mushroomCats", "🫶", "🪈"],
"cloudLayer" : ["TheHowlingMoon", "starglint", "sillyMiner",  "🪽", "⚡", "🍃", "🪶", "🌦️", "🌩️", "⛈️", "🪁", "🪂", "🌨️", "🌥️", "🌤️", "🌧️", "🎐", "☁️"],
"cloudLayer2" : ["TheHowlingMoon", "🖐", "starglint", "sillyMiner",  "🪽", "⚡", "🍃", "🪶", "🌦️", "🌩️", "⛈️", "🪁", "🪂", "🌨️", "🌥️", "🌤️", "🌧️", "🎐", "☁️"],
"tvLayer" : ["sillyMiner", "🔫", "👾", "🏹", "💣", "🔨", "🪓", "🪃", "🛡️", "📺"],
"doorLayer" : ["Chronomorph", "sillyMiner", "🗝️", "🪝", "🪡", "🛎️", "🚧", "⛓️", "🔏", "🖇️", "🔑", "🔒", "🚪"],
"globeLayer" : ["matrix", "sillyMiner", "💰", "💞", "💘", "🚽", "📽️", "🧂", "🔪", "💔", "🍆", "🖱️", "⌨️", "💻", "🌐"],
"chessLayer" : ["sillyMiner", "⚖️", "🌱", "🎓", "📍", "📌", "🔎", "🖊️", "📚", "📐", "📖", "🧠", "✏️", "♟️"],
"barrierLayer" : ["❔",  "✴️", "✖️"],
"borderLayer" : ["sillyMiner", "🩸", "♨️", "🚫", "🔈", "⛔", "💢", "🔇", "🛑", "⭕", "🔕", "❌"],
"worldTwoCommons" : ["Omniscient Clover", "🍀", "☘️", "📘", "📙", "📕", "📗", "⏏️", "▶️", "⏸️", "⏯️", "⏺️", "⏭️", "⏮️", "⏩", "⏪", "⏬", "⏫", "◀️", "🔼", "🔽", "➡️", "↖️", "↘️", "⬇️", "⬆️", "⬅️", "↪️", "↩️", "⤴️", "⤵️", "🔀", "🔁", "🔂", "🔄", "🔃"],
"grassLayer" : ["sillyMiner", "🌹", "🟩"],
"unknownLayer" : [],
"scLayer" : ["sillyMiner", '🇳🇬', '🇪🇹', '🇪🇬', '🇨🇩', '🇹🇿', '🇿🇦', '🇰🇪', '🇺🇬', '🇸🇩', '🇩🇿', '🇸🇨'],
"bnLayer" : ["sillyMiner", '🇨🇳', '🇮🇳', '🇮🇩', '🇵🇰', '🇧🇩', '🇯🇵', '🇵🇭', '🇻🇳', '🇮🇷', '🇹🇷', '🇧🇳'],
"knLayer" : ["sillyMiner", '🇺🇸', '🇲🇽', '🇨🇦', '🇬🇹', '🇭🇹', '🇨🇺', '🇩🇴', '🇭🇳', '🇳🇮', '🇸🇻', '🇰🇳'],
"vaLayer" : ["sillyMiner", '🇷🇺', '🇩🇪', '🇬🇧', '🇫🇷', '🇮🇹', '🇪🇸', '🇵🇱', '🇺🇦', '🇷🇴', '🇳🇱', '🇻🇦'],
"srLayer" : ["sillyMiner", '🇧🇷', '🇨🇴', '🇦🇷', '🇵🇪', '🇻🇪', '🇨🇱', '🇪🇨', '🇧🇴', '🇵🇾', '🇺🇾', '🇸🇷'],
"ocLayer" : ["sillyMiner", '🇦🇺', '🇵🇬', '🇳🇿', '🇫🇯', '🇸🇧', '🇫🇲', '🇻🇺', '🇵🇫', '🇳🇨', '🇼🇸', '🇹🇻'],
"catcatLayer" : [ '🏳️‍⚧️', '🏁', '🇺🇳'],
"starLayer" : ["Koreosensei", "Panselinos", "txtfile", "cosmicIridium", "unstableCore", "pleiades", "australiumIngot", "stars"],
"nebulaLayer" : ["Koreosensei", "noradrenaline", "Desolation", "otherside", "ascendedArtifact", "J1407b", "Charybdis", "nebula"],
"voidLayer" : ["Retina", "void"]

}
const createdLayers = {

}
let worldOneLayers = ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer", "paperLayer", "giftLayer"];
let worldTwoLayers = ["cloudLayer", "tvLayer", "doorLayer", "globeLayer", "chessLayer"];
let galacticaLayers = ["starLayer", "nebulaLayer", "voidLayer"]
let subRealmOneLayers = ["scLayer", "bnLayer", "knLayer", "vaLayer", "srLayer", "ocLayer", "catcatLayer"];
let waterWorldLayers = ["waterLayer"]
let specialLayers = ["sillyLayer", "fluteLayer", "grassLayer", "dirtLayer2", "dirtLayer3", "barrierLayer", "borderLayer"]
let allLayers = ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer", "paperLayer", "giftLayer"];

//SETTING LAYERS
const layerDictionary = {
    //{layer : [], num : 0}
}
const repeatingLayers = {

}
const layerIndex = {
    worldOne : {
        0 : "dirtLayer",
        1 : "brickLayer",
        2 : "foggyLayer",
        3 : "waterLayer",
        4 : "rockLayer",
        5 : "radioactiveLayer",
        6 : "cactusLayer",
        7 : "paperLayer",
        8 : "giftLayer",
        4000 : "fluteLayer",
        7777 : "sillyLayer",
        1337 : "unknownLayer"
    },
    worldTwo : {
        0 : "cloudLayer",
        1 : "tvLayer",
        2 : "doorLayer",
        3 : "globeLayer",
        4 : "chessLayer",
        5 : "borderLayer",
        6 : "barrierLayer"
    },
    subrealmOne : {
        0 : "scLayer",
        1 : "bnLayer",
        2 : "knLayer",
        3 : "vaLayer",
        4 : "srLayer",
        5 : "ocLayer",
        6 : "catcatLayer"
    },
    waterWorld: {
        0 : "waterLayer"
    },
galacticaLayers : {
    0 : "starLayer",
    1 : "nebulaLayer",
    2 : "voidLayer"
}
}
let lastRepeatedLayer = -1;
let currentLayer = "dirtLayer";
function setLayer(y) {
    if (currentWorld === 1) {
        let tempNum = y;
        if (tempNum < 18000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                a88();
                currentLayerNum = tempNum;
                currentLayer = allLayers[tempNum];
                lastRepeatedLayer = -1;
            }
        } else {
            const repeatingLayerNum = Math.floor((y - 18000) / 10000);
            if (repeatingLayerNum !== lastRepeatedLayer && repeatingLayers[repeatingLayerNum] === undefined) {
                milestoneVariables.inRepeating = true;
                a88();
                let force = false;
                if (Math.random() < 1/1337) {
                    currentLayerNum = 1337;
                    updateAllLayers();
                    currentLayer = "unknownLayer";
                    specialLayerLocations["unknownLayer"] ??= tempNum;
                    milestoneVariables.unknownFound = true;
                } else if (Math.random() < 1/77) {
                    currentLayerNum = 7777;
                    force = a87(7777)
                    currentLayer = "sillyLayer";
                    specialLayerLocations["sillyLayer"] ??= tempNum;
                } else if (Math.random() < 1/40) {
                    currentLayerNum = 4000;
                    currentLayer = "fluteLayer";
                    specialLayerLocations["fluteLayer"] ??= tempNum;
                } else {
                    let num = Math.floor(Math.random() * 8)
                    currentLayerNum = num;
                    force = a87(num);
                    currentLayer = allLayers[num];
                }
                repeatingLayers[repeatingLayerNum] ??= {layer: currentLayerNum, force: force};
                lastRepeatedLayer = repeatingLayerNum;
                specialLayerLocations["lastLayer"] = {y: tempNum, num: repeatingLayerNum};
                rebuildSpecialLayerObject();
            } else {
                if (lastRepeatedLayer !== repeatingLayerNum) {
                    lastRepeatedLayer = repeatingLayerNum;
                    a88();
                    currentLayerNum = repeatingLayers[repeatingLayerNum].layer;
                    currentLayer = layerIndex.worldOne[currentLayerNum];
                    if (repeatingLayers[repeatingLayerNum].force) a87(currentLayerNum, repeatingLayers[repeatingLayerNum].force)
                }
            }
        }
    } else if (currentWorld === 1.1) {
        let tempNum = Math.floor(y / 2000);
        tempNum = tempNum > allLayers.length - 1 ? allLayers.length - 1 : tempNum;
        currentLayer = layerIndex.subrealmOne[tempNum];
    } else if (currentWorld === 1.2) {
        currentLayer = "waterLayer";
    }
    else {
        let tempNum = y;
        if (tempNum < 10000) {
            tempNum = Math.floor(tempNum / 2000);
            if (tempNum !== currentLayerNum) {
                currentLayerNum = tempNum;
                currentLayer = allLayers[tempNum];
            }
        } else {
            if (currentLayer != layerList["borderLayer"]) {
                currentLayer = "borderLayer";
                currentLayerNum = 5;
            }
        }
    }
}

function getLayer(y) {
    if (currentWorld === 1) {
        if (y < 18000) {
            if (y === 0) return layerDictionary["grassLayer"];
            if (y === 1) return layerDictionary["dirtLayer2"];
            if (y === 1337 && hasConverted) return layerDictionary["dirtLayer3"]
            return layerDictionary[layerIndex.worldOne[Math.floor(y / 2000)]];
        } else {
            const num = Math.floor((y - 18000) / 10000);
            if (repeatingLayers[num] === undefined) setLayer(y);
            return layerDictionary[layerIndex.worldOne[repeatingLayers[num].layer]];
        }
    } else if (currentWorld === 2) {
        if (y < 10000) {
            if (y === 0) return layerDictionary["cloudLayer2"];
            if (y === 2000) return layerDictionary["grassLayer"];
            else return layerDictionary[layerIndex.worldTwo[Math.floor(y / 2000)]];
        } else {
            if (y === 10000) return layerDictionary["barrierLayer"];
            else if (curY < 10000) return layerDictionary["chessLayer"];
            else return layerDictionary["borderLayer"];
        }
    } else if (currentWorld === 1.1) {
        if (y === 0) return layerDictionary["grassLayer"];
        if (y < 14000) {
            return layerDictionary[layerIndex.subrealmOne[Math.floor(y / 2000)]];
        } else {
            return layerDictionary[layerIndex.subrealmOne[6]];
        }
        
    } else if (currentWorld === 1.2) {
        return layerDictionary["waterLayer"];
    } else if (currentWorld === 0.9) {
        if (y === 0) return layerDictionary["starLayer"];
        if (y < galacticaLayers.length*2000) return layerDictionary[layerIndex.galacticaLayers[Math.floor(y / 2000)]];
        else return layerDictionary[layerIndex.galacticaLayers[galacticaLayers.length-1]];
    }
}
function a87(num, force, g) {
    force ??= false;
    let added = false;
    let korone = false;
    switch (num) {
        case 0:
            if (Math.random() < 1/29 || force) {
                if (g) return "dirtLayer";
                insertIntoLayers({"ore":"🐞", "layers":["dirtLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 1:
            if (Math.random() < 1/25 || force) {
                if (g) return "brickLayer";
                insertIntoLayers({"ore":"🥈", "layers":["brickLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 2:
            if (Math.random() < 1/17 || force) {
                if (g) return "foggyLayer";
                insertIntoLayers({"ore":"🚬", "layers":["foggyLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 3:
            if (Math.random() < 1/40 || force) {
                if (g) return "waterLayer";
                insertIntoLayers({"ore":"🪸", "layers":["waterLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 4:
            if (Math.random() < 1/15 || force) {
                if (g) return "rockLayer";
                insertIntoLayers({"ore":"🪦", "layers":["rockLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 5:
            if (Math.random() < 1/27 || force) {
                if (g) return "radioactiveLayer";
                insertIntoLayers({"ore":"🚨", "layers":["radioactiveLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 6:
            if (Math.random() < 1/19 || force) {
                if (g) return "cactusLayer";
                insertIntoLayers({"ore":"🍖", "layers":["cactusLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 7:
            if (Math.random() < 1/35 || force) {
                if (g) return "paperLayer";
                insertIntoLayers({"ore":"📜", "layers":["paperLayer"], "useLuck":true});
                added = true;
            }
            break;
        case 7777:
            const sillyRandom = Math.random();
            if (sillyRandom < 1/563 || force === "KORONE") {
                if (g) return "sillyLayer";
                insertIntoLayers({"ore":"korosan", "layers":["sillyLayer"], "useLuck":true});
                added = true;
                korone = true;
            }
            else if (sillyRandom < 1/13 || force) {
                if (g) return "sillyLayer";
                insertIntoLayers({"ore":"🐸", "layers":["sillyLayer"], "useLuck":true});
                added = true;
            }
            break;
    }
    if (g) return undefined;
    if (added) {
        milestoneVariables.triggerFound = true;
        if (korone) typeWriter("<i>An unusual presence lurks within the silly layer, making your body feel numb...</i>", get("spawnMessage"), 3);
        else typeWriter("<i>In the endless depths of the world, repetitions of earlier environments make up the lower earth, and yet.. a strange sense of unfamiliarity consumes you...</i>", 3);
        eventSpawn.currentTime = 0;
        eventSpawn.play();
    }
    return (korone ? "KORONE" : added);
}
function a88() {
    const toRemove = ["🐞","🥈","🚬","🪸","🪦","🚨","🍖","📜","🐸"];
    for (let i = 0; i < worldOneLayers.length; i++) {
        removeFromLayers({"ore":toRemove[i], "layers":[worldOneLayers[i]]})
    }
    removeFromLayers({"ore":toRemove[8], "layers":["sillyLayer"]})
    removeFromLayers({"ore":"korosan", "layers":["sillyLayer"]})
}
function a89() {
    const addLuck = ["🐞","🥈","🚬","🪸","🪦","🚨","🍖","📜","🐸"];
    const luck = verifiedOres.getCurrentLuck();
    for (let i = 0; i < addLuck.length; i++) {
        oreList[addLuck[i]]["decimalRarity"] = 1/(oreList[addLuck[i]]["numRarity"]/luck);
    }
}
function createLayer(layers) {
    let output = [];
    for (let i = 0; i < layers.length; i++) {
        output = output.concat(layers[i]);
    }
    output = applyLuckToLayer(output, verifiedOres.getCurrentLuck());
    return output;
}
function createAllLayers() {
    for (let i = 0; i < worldOneLayers.length; i++) layerDictionary[worldOneLayers[i]] = {layer: createLayer([layerList[worldOneLayers[i]], layerList["worldOneCommons"]]), probabilities: [], layerMat: layerFromArr(layerList[worldOneLayers[i]])};
    for (let i = 0; i < worldTwoLayers.length; i++) layerDictionary[worldTwoLayers[i]] = {layer: createLayer([layerList[worldTwoLayers[i]], layerList["worldTwoCommons"]]), probabilities: [], layerMat: layerFromArr(layerList[worldTwoLayers[i]])};
    for (let i = 0; i < subRealmOneLayers.length; i++) layerDictionary[subRealmOneLayers[i]] = {layer: createLayer([layerList[subRealmOneLayers[i]]]), probabilities: [], layerMat: layerFromArr(layerList[subRealmOneLayers[i]])};
    for (let i = 0; i < galacticaLayers.length; i++) layerDictionary[galacticaLayers[i]] = {layer: createLayer([layerList[galacticaLayers[i]]]), probabilities: [], layerMat: layerFromArr(layerList[galacticaLayers[i]])};
    for (let i = 0; i < specialLayers.length; i++) layerDictionary[specialLayers[i]] = {layer: layerList[specialLayers[i]], probabilities: [], layerMat: layerFromArr(layerList[specialLayers[i]])};
    layerDictionary["dirtLayer2"] = {layer: createLayer([layerList["dirtLayer2"], layerList["worldOneCommons"]]), probabilities: [], layerMat: layerFromArr(layerList["dirtLayer"])};
    layerDictionary["dirtLayer3"] = {layer: createLayer([layerList["dirtLayer3"], layerList["worldOneCommons"]]), probabilities: [], layerMat: layerFromArr(layerList["dirtLayer"])};
    layerDictionary["cloudLayer2"] = {layer: createLayer([layerList["cloudLayer2"], layerList["worldTwoCommons"]]), probabilities: [], layerMat: layerFromArr(layerList["cloudLayer"])};
    let tier = "Uncommon";
    let arr = [];
    while (!(oreInformation.tierGrOrEqTo({"tier1":tier, "tier2":"Antique"}))) {
        let tierOres = oreInformation.getOresByTier(tier);
        for (let i = 0; i < tierOres.length; i++)
            arr.push(tierOres[i]);
            tier = oreInformation.getNextTier(tier);
    }
    arr.splice(tier.indexOf("✴️"), 1);
    const unknownLayer = createLayer([arr, ["🥇", "🟩"], ["Saitamore", "Temporalite"]]);
    layerDictionary["unknownLayer"] = {layer: unknownLayer, probabilities: [], layerMat: "🟩"}
    layerList["unknownLayer"] = [...unknownLayer];
    createGenerationProbabilities();
    caveList["abysstoneCave"] = createGsCave();
    //for (let i = 0; i < worldOneLayers.length; i++) layerDictionary[worldOneLayers[i]] = createLayer([layerList[worldOneLayers[i]], layerList["worldOneCommons"]]);
}
function layerFromArr(arr) {
    for (let i = arr.length-1; i >= 0; i--) if (oreList[arr[i]]["oreTier"] === "Layer") return arr[i];
}
function updateAllLayers() {
    const luck = verifiedOres.getCurrentLuck();
    for (let layer in layerDictionary) layerDictionary[layer].layer = applyLuckToLayer(layerDictionary[layer].layer, luck);
    oreList["luna"]["decimalRarity"] = 1/(oreList["luna"]["numRarity"] / luck);
    createGenerationProbabilities();
}
function createGenerationProbabilities() {
    for (let layer in layerDictionary) {
        let temp = 0;
        let tempArr = [];
        let tempLayer = layerDictionary[layer].layer;
        const sim = (player.settings.simulatedRng || pickaxeStats[player.stats.currentPickaxe].isDimensional);
        for (let i = 0; i < tempLayer.length; i++) {
            if (sim) temp = oreList[tempLayer[i]]["decimalRarity"];
            else temp += oreList[tempLayer[i]]["decimalRarity"];
            tempArr[i] = temp;
        }
        layerDictionary[layer].probabilities = tempArr;
    }
}
function sortLayerRarities(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (oreList[arr[j]]["decimalRarity"] > oreList[arr[j + 1]]["decimalRarity"]) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}
function sortLayerBase(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (oreList[arr[j]]["numRarity"] < oreList[arr[j + 1]]["numRarity"]) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}
let commons = ["Common","Uncommon","Rare","Legendary","Godly"];
function applyLuckToLayer(layer, luck) {
    for (let i = 0; i < layer.length; i++) {
        let layerluck = debug ? cat : luck;
        if (player.powerupVariables.currentChosenOre.ore === layer[i])
            layerluck *= 1.5;
        if (currentActiveEvent !== undefined) if (layer[i] === events[currentActiveEvent.name].ore) layerluck *= events[currentActiveEvent.name].boost;
        let baseValue = oreList[layer[i]]["numRarity"];
        if (specialOreValues[layer[i]] !== undefined) {
            baseValue = specialOreValues[layer[i]].newBaseRarity;
        }
        let newRarity = (oreList[layer[i]]["noLuck"] || oreList[layer[i]]["oreTier"] === "Layer") ? oreList[layer[i]]["numRarity"] : (baseValue / layerluck);
        if (commons.indexOf(oreList[layer[i]]["oreTier"]) < 0)
            if (oreList[layer[i]]["oreTier"] === "Layer" || 1/newRarity <= 1/1000) oreList[layer[i]]["decimalRarity"] = (1/newRarity);
            else oreList[layer[i]]["decimalRarity"] = (1/20);
        else {
            if (player.powerupVariables.commonsAffected.state) oreList[layer[i]]["decimalRarity"] = 1/((oreList[layer[i]]["numRarity"] * oreInformation.commonMultiplier) / (layerluck >= 3.5 ? 3.5 : layerluck));
            else oreList[layer[i]]["decimalRarity"] = 1/(oreList[layer[i]]["numRarity"] * oreInformation.commonMultiplier)
        }
    }
    layer = sortLayerRarities(layer);
    return layer;
}

function changeLayerOres() {
    if (player.stats.currentPickaxe === "pickaxe13" && currentWorld === 2) {
        insertIntoLayers({"ore":"☯️", "layers":undefined, "useLuck":true})
    } else {
        removeFromLayers({"ore":"☯️", "layers":undefined});
    }
}
//insertIntoLayers({"ore":"🐢", "layers":undefined, "useLuck":true})
function insertIntoLayers(obj) {
    let ore = obj["ore"];
    let layers = obj["layers"];
    let useLuck = obj["useLuck"];
    if (layers === undefined) layers = allLayers;
    const luck = verifiedOres.getCurrentLuck();
    for (let i = 0; i < layers.length; i++) {
        if (!(layerDictionary[layers[i]].layer.includes(ore))) {
            if (useLuck) oreList[ore]["decimalRarity"] = 1/(oreList[ore]["numRarity"] / luck);
            let layer = layerDictionary[layers[i]].layer;
            for (let j = 0; j < layer.length; j++) {
                if (oreList[layer[j]]["decimalRarity"] > oreList[ore]["decimalRarity"]) {
                    layer.splice(j, 0, ore);
                    updateAllLayers();
                    break;
                }
            }
        }
    }
}
//removeFromLayers({"ore":"🐢", "layers":undefined})
function removeFromLayers(obj) {
    let ore = obj["ore"];
    let layers = obj["layers"];
    if (layers === undefined) layers = Object.keys(layerDictionary);
    for (let i = 0; i < layers.length; i++) {
        if (layerDictionary[layers[i]].layer.includes(ore)) {
            layerDictionary[layers[i]].layer.splice(layerDictionary[layers[i]].layer.indexOf(ore), 1);
            updateAllLayers();
        }
    }
}

const transformableOres = {
    "SCP-3567-J": {
        "rarity": 1 / 1,
        "oresRequired": {
            "💅": {
                "amount": 5,
                "catalyst": true
            }
        }
    }
}

const limitedOres = {
    "❤️‍🔥" : {
        "layers" : ["foggyLayer"],
        "timeType" : "month",
        "timeValues" : [1]
    },
    "💗" : {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [1]
    },
    "😻" : {
        "layers" : ["dirtLayer"],
        "timeType" : "minute",
        "timeValues" : [27]
    },
    "🏝️" : {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    } ,
    "✨" : {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    },
    "🪷": {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [11]
    },
    "🦋": {
        "layers" : ["dirtLayer"],
        "timeType" : "hour",
        "timeValues" : [Math.round(Math.random() * 23)]
    },
    "🏐": {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🌴": {
        "layers" : ["dirtLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🐙": {
        "layers" : ["waterLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🐬": {
        "layers" : ["waterLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🍧": {
        "layers" : ["rockLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🏖️": {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🏄‍♂️": {
        "layers" : ["waterLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "🎋": {
        "layers" : ["dirtLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "☀️": {
        "layers" : ["cactusLayer"],
        "timeType" : "month",
        "timeValues" : [5, 6, 7]
    },
    "draedon": {
        "layers" : ["radioactiveLayer"],
        "timeType" : "day",
        "timeValues" : [4]
    },
    "aFleetingSoul": {
        "layers" : ["foggyLayer"],
        "timeType" : "month",
        "timeValues" : [9]
    },
}
function checkLimitedOres() {
    let time = new Date();
    for (let propertyName in limitedOres) {
        let type = limitedOres[propertyName]["timeType"];
        let timeValue;
        if (type === "month") {
            timeValue = time.getMonth();
        } else if (type === "day") {
            timeValue = time.getDay();
        } else if(type === "hour") {
            timeValue = time.getHours();
        } else if (type === "minute") {
            timeValue = time.getMinutes()
        }
        if (limitedOres[propertyName]["timeValues"].includes(timeValue))
            insertIntoLayers({"ore":propertyName,"layers":limitedOres[propertyName]["layers"], "useLuck":true});
        else
            removeFromLayers({"ore":propertyName,"layers":limitedOres[propertyName]["layers"]});
    }
    if (player.luna !== undefined) {
        if (new Date().getDate() !== player.luna.lastAddedOn) {
            player.luna.layer = Math.round(Math.random() * 100000);
            player.luna.lastAddedOn = new Date().getDate();
        }
    }
}

class ores {
    constructor () {

    }
    commonMultiplier = 1;
    oreTiers = {
        "Layer" : {
            colors : {"backgroundColor" : "#656565", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Common" : {
            colors : {"backgroundColor" : "#888888", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Uncommon" : {
            colors : {"backgroundColor" : "#90A2E1", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Rare" : {
            colors : {"backgroundColor" : "#D04373", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Legendary" : {
            colors : {"backgroundColor" : "#FFD55F", "textColor" : "#000000"},
            tierMessage : ``,
        },
        "Godly" : {
            colors : {"backgroundColor" : "#FF24A1", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Antique" : {
            colors : {"backgroundColor" : "#5A865A", "textColor" : "#ffffff"},
            tierMessage : `You unearth an old artifact...`,
        },
        "Mystical" : {
            colors : {"backgroundColor" : "#841F8C", "textColor" : "#ffffff"},
            tierMessage : `A magical substance catches your attention...`,
        },
        "Divine" : {
            colors : {"backgroundColor" : "#FFFEAB", "textColor" : "#000000"},
            tierMessage : `You receive a blessing from above...`,
        },
        "Flawless" : {
            colors : {"backgroundColor" : "#31E8FF", "textColor" : "#000000"},
            tierMessage : `The discovery of a perfect material brings you great excitement...`,
        },
        "Interstellar" : {
            colors : {"backgroundColor" : "#FF8041", "textColor" : "#ffffff"},
            tierMessage : `The stars align in your favor...`,
        },
        "Metaversal" : {
            colors : {"backgroundColor" : "#3BD216", "textColor" : "#ffffff"},
            tierMessage : `An interdimensional object manifests before your very eyes...`,
        },
        "Sacred" : {
            colors : {"backgroundColor" : "#FF3C3C", "textColor" : "#ffffff"},
            tierMessage : `A relic with a godly aura graces you with its presence...`,
        },
        "Celestial" : {
            colors : {"backgroundColor" : "#6C0000", "textColor" : "#ffffff"},
            tierMessage : `The fabric of the universe coalesces into a bizarre form of matter...`,
        },
        "Ethereal" : {
            colors : {"backgroundColor" : "#ac47ff", "textColor" : "#ffffff"},
            tierMessage : `An incomprehensible creation puts you in a trance...`,
        },
        "Imaginary" : {
            colors : {"backgroundColor" : "#41FF6D", "textColor" : "#000000"},
            tierMessage : `Reality itself bends and contorts as your mind fails to process what you are looking at...`,
        },
        "Hyperdimensional" : {
            colors : {"backgroundColor" : "#041407", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Infinitesimal" : {
            colors : {"backgroundColor" : "#021752", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Polychromatical" : {
            colors : {"backgroundColor" : "#ff0526", "textColor" : "#ffffff"},
            tierMessage : ``,
        },
        "Silly :3" : {
            colors : {"backgroundColor" : "linear-gradient(90deg, hsla(325, 100%, 86%, 1) 0%, hsla(301, 100%, 50%, 1) 90%, hsla(0, 0%, 0%, 1) 100%)", "textColor" : "#ffffff", "isGradient" : true},
            tierMessage : `Blehhh im so silly :P`,
        },
    }
    getTierMessage(tier) {
        return this.oreTiers[tier].tierMessage;
    }
    getColors(tier) {
        return this.oreTiers[tier].colors;
    } 
    getOresByTier(tier) {
        let collectedOres = [];
        for (let propertyName in oreList) {
            if (oreList[propertyName]["oreTier"] === tier) {
                collectedOres.push(propertyName);
            }
        }
        return collectedOres;
    }

    getPreviousTier(tier) {
        let tierNames = Object.keys(this.oreTiers);
        for (let i = 0; i < tierNames.length; i++) {
            if (tierNames[i] === tier) {
                i = i === 0 ? tierNames.length : i;
                return tierNames[i - 1];
            }
        }
    }
    getNextTier(tier) {
        let tierNames = Object.keys(this.oreTiers);
        for (let i = 0; i < tierNames.length; i++) {
            if (tierNames[i] === tier) {
                i = i === tierNames.length - 1 ? -1 : i;
                return tierNames[i + 1];
            }
        }
    }
    getTierAt(num) {
        let tierNames = Object.keys(this.oreTiers);
        if (num < 0) return tierNames[0];
        if (num > tierNames.length - 1) return tierNames[15];
        return tierNames[num];
    }
    isCommon(tier) {
        let tierNames = Object.keys(this.oreTiers);
        if (tierNames.indexOf(tier) > 5) return false;
        else return true;
    }
    tierGrOrEqTo(tiers) {
        if (tiers["tier1"] === tiers["tier2"]) return true;
        if (tiers["tier1"] === "") return false;
        if (tiers["tier2"] === "") return true;
        for (let propertyName in this.oreTiers) {
            if (propertyName === tiers["tier1"]) return false;
            if (propertyName === tiers["tier2"]) return true;
        }
    }
    getEffectByTier(tier) {
        if (tier === "Interstellar") return "blur 4s linear 1";
        if (tier === "Metaversal") return "sepia 4s linear 1";
        if (tier === "Sacred") return "saturate 4s linear 1";
        if (tier === "Celestial") return "invert 4s ease-in-out 1";
        if (tier === "Ethereal") return "darken 4s ease-in-out 1";
        if (tier === "Imaginary") return "rotate 4s linear 1";
        if (tier === "Hyperdimensional") return "blackout 10s linear 1";
        if (tier === "Infinitesimal") return "invisible 7s linear 1";
        if (tier === "Polychromatical") return "chaos 4s linear 1"
        if (tier === "Silly :3") return "rainbow 5s linear 1"
        return "";
    }
}
const variantInformation = {
    "Normal" : {
        color: ""
    },
    "Electrified" : {
        color: "#e365fc"
    },
    "Radioactive" : {
        color: "#c9fc3a"
    },
    "Explosive" : {
        color: "#ff4b33"
    },
    getVariantColor: function(name) {
        return variantInformation[name].color;
    }
}
const oreInformation = new ores();
/*
for (let propertyName in temp) {
    for (let j = 0; j < 4; j++) {
        oreList[propertyName][1][j] += temp[propertyName][j]
    }
}
*/
