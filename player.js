class playerTemplate {
    constructor() {
        this.gears = {
            "gear0": false, 
            "gear1": false,
            "gear2": false,
            "gear3": false,
            "gear4": false,
            "gear5": false,
            "gear6": false,
            "gear7": false,
            "gear8": false,
            "gear9": false,
            "gear10": false,
            "gear11": false,
            "gear12": false,
            "gear13": false,
            "gear14": false,
            "gear15": false,
            "gear16": false,
            "gear17": false,
            "gear18": false,
            "gear19": false,
            "gear20": false,
            "gear21": false,
            "gear22": false,
            "gear23": false,
            "gear24": false,
            "gear25": false,
            "gear26": false,
            "gear27": false,
            "gear28": false,
            "gear29": false,
            "gear30": false,
            "gear31": false,
            "gear32": false,
            "gear33": false,
            "gear34": false,
            "gear35": false,
            "gear36": false,
            "gear37": false,
            "gear38": false, 
            "gear39": false, 
            "gear40": false, //poly 1, 1.5x base luck
            "gear41": false, //poly 2, 1/10 chance for +500000 simulated amount, applied before simulated amount multipliers
            "gear42": false, //poly 3, 
            "gear43": false, //poly 4, allows use of wormhole in sr1
            "gear44": false, //poly 5, +50 reps
            "gear45": false, 
            "gear46": false, 
            "gear47": false, 
            "gear48": false, //+0.1x luck per minute of session time
            
        }
        this.pickaxes = {
            "pickaxe0": true,
            "pickaxe1": false,
            "pickaxe2": false,
            "pickaxe3": false,
            "pickaxe4": false,
            "pickaxe5": false,
            "pickaxe6": false,
            "pickaxe7": false,
            "pickaxe8": false,
            "pickaxe9": false,
            "pickaxe10": false,
            "pickaxe11": false,
            "pickaxe12": false,
            "pickaxe13": false,
            "pickaxe14": false,
            "pickaxe15": false,
            "pickaxe16": false,
            "pickaxe17": false,
            "pickaxe18": false,
            "pickaxe19": false,
            "pickaxe20": false,
            "pickaxe21": false,
            "pickaxe22": false,
            "pickaxe23": false,
            "pickaxe24": false,
            "pickaxe25": false,
            "pickaxe26": false,
            "pickaxe28" : false,
            "pickaxe29" : false,
            "pickaxe30" : false,
            "pickaxe31" : false,
            "pickaxe32" : false,
            "pickaxe33" : false,
            "pickaxe34" : false,
            "pickaxe35" : false,
            "pickaxe36": false,
        }
        this.settings = {
            audioSettings: {
                "Antique": {canPlay: true, volume: 50},
                "Mystical": {canPlay: true, volume: 50},
                "Divine": {canPlay: true, volume: 50},
                "Flawless": {canPlay: true, volume: 50},
                "Interstellar": {canPlay: true, volume: 50},
                "Metaversal": {canPlay: true, volume: 50},
                "Sacred": {canPlay: true, volume: 50},
                "Ethereal": {canPlay: true, volume: 15},
                "Celestial": {canPlay: true, volume: 50},
                "Imaginary": {canPlay: true, volume: 50},
                "Hyperdimensional" : {canPlay: true, volume:50},
                "Infinitesimal" : {canPlay: true, volume:50},
                "Polychromatical" : {canPlay: true, volume:50},
                "Silly :3" : {canPlay: true, volume:100},
                "Transform": {canPlay: true, volume:50}
            },
            musicSettings: {
                active: true,
                volume: 50
            },
            baseMineCapacity: 250000,
            minSpeed: 0,
            stopOnRare: {active: true, allowList: ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary", "Hyperdimensional", "Polychromatical", "Infinitesimal", "Silly :3"]},
            useNumbers: false,
            inventorySettings: {invToIndex: true, craftingToIndex: true},
            usePathBlocks: true,
            cavesEnabled: true,
            useDisguisedChills: false,
            usingNewEmojis: false,
            minRarityNum: 0,
            minLogRarity: 1,
            doSpawnEffects: true,
            latestLength: 10,
            useNewMusic: true,
            useNyerd: false,
            automineUpdate: 25,
            spawnMessageTiers: ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary", "Hyperdimensional", "Polychromatical", "Infinitesimal","Silly :3"],
            lastWorld: 1,
            simulatedRng: false,
            hideCompleted: false,
            favoritedElements: [],
            accurateSpeed: false,
            display: true
        },
        this.stats = {
            currentPickaxe: "pickaxe0",
            blocksMined: 0,
            timePlayed: 0,
            cavesGenerated: 0,
            minesReset: 0,
            furthestPosX: 1000000,
            furthestNegX: 1000000,
            furthestY: 0,
            manualMined: 0,
            caveGenerated: 0
        },
        this.loungeSettings = {
            updateElements: true,
            deleteUnusedElements: true,
        }
        this.powerupCooldowns = {
            "powerup1": {cooldown: Date.now(), unlocked: false, canAuto: false},
            "powerup2": {cooldown: Date.now(), unlocked: false, canAuto: false},
            "powerup3": {cooldown: Date.now(), unlocked: false, canAuto: false},
            "powerup4": {cooldown: Date.now(), unlocked: false, canAuto: false},
            "powerup5": {cooldown: Date.now(), unlocked: false, canAuto: false},
        },
        this.powerupVariables = {
            currentChosenOre : {ore: undefined, removeAt: 0, lastOre: undefined},
            commonsAffected : {state: false, removeAt: 0},
            fakeEquipped: {originalState: undefined, item: undefined, removeAt: 0},
            fakeTreeLevel: {originalState: undefined, level: undefined, removeAt: 0},
            nextAuto: Date.now(),
            autoNum: 0,
            caveBoosts: {removeAt: 0, active: false}
        },
        this.oreTracker = {
            existingOres : [],
            tracking : false,
            locationX : 0,
            locationY : 0
        },
        this.currentEffect = "";
        this.upgrades = {
            "pickaxe27" : {
                level: 0,
                maxLevel: 5,
                bought: 0,
                levelLuck: [1, 3, 10, 20, 40, 100]
            }
        },
        this.wasUsing = undefined;
        this.sr1Unlocked = false;
        this.galacticaUnlocked = false;
        this.faqOffered = false;
        this.webHook = {
            active: false,
            ids : {

            },
            link: "",
        }
        this.luna = {
            layer: Math.round(Math.random() * 100000),
            lastAddedOn: new Date().getDate()
        }
        this.viewedMessages = {}
        this.avgSpeed = 0;
        this.trophyProgress = {
            "worldOneCompletion" : {
                lastMinedAmt : 0,
                lastPickaxeUsed : 0,
                blocksWithWOG : 0,
                trophyOwned : false
            },
            "worldTwoCompletion" : {
                lastMinedAmt : 0,
                lastPickaxeUsed : 0,
                blocksWithCoronary : 0,
                trophyOwned : false
            },
            "subrealmOneCompletion" : {
                trophyOwned : false
            },
        }
        this.displayStatistics = {
            blocksPerMinute: 0,
            luck: 1
        },
        this.webhookKey = "";
        this.lastOnline = Date.now();
        this.offlineProgress = 0;
        this.p = {
            "orbOfLife": false,
            "orbOfIntelligence": false,
            "orbOfSound": false,
            "orbOfTheUnknown": false,
            "orbOfCreation": false,
            "orbOfFlight": false,
            "orbOfFire": false
        }
        this.eventManager = {
            cooldown: Date.now()
        }
        this.completedMilestones = [],
        this.watrEntered = false,
        this.galacticaEntered = false,
        this.sr1Entered = false
    }
}
let player = new playerTemplate();
function setPlayerName(val) {
    if (get("submitName").textContent === "Enter a name!") return;
    if (val !== "") {
        player.name = val;
        return true;
    } else {
        flashRed(get("submitName"));
        get("submitName").textContent = "Enter a name!";
        setTimeout(() => {
            get("submitName").textContent = "Confirm!";  
        }, 1500);
    }
    return false;
}
const powerupOrder = ["powerup1", "powerup2", "powerup3", "powerup4", "powerup5"];
let currentPowerupDisplayed = "powerup1";
let powerupDisplayed = false;
const randBuff = {
    count: 0,
    luck: false,
    proc: false,
    reps: false
}
const powerupList = {
    "powerup1" : {
        title: "Terrestrial Terror",
        description: "Mines a 101x101 area around the player, the size growing the more blocks mined you have. Has a cooldown of 15 minutes.",
        cooldown: 900000,
        gradient: "linear-gradient(to right, #00ffff, #ff00ff, #ffff00)",
        checkRequirements: function() {
            if (player.stats.blocksMined >= 500000) return true;
            else return false;
        },
        displayProgress: function() {
            return `${player.stats.blocksMined.toLocaleString()}/500,000 Blocks Mined.`
        },
        getActiveFor: function() {
            get("powerupInformation").innerHTML = "";
            return {progress: 0, active: 0};
        },
        doAbility: "powerup1(curX, curY); updatePowerupCooldowns();",
    },
    "powerup2" : {
        title: "The Spelunker",
        description: "Increases cave spawn chance, cave size, and cave luck for 2:30 minutes. Has a cooldown of 15 minutes",
        cooldown: 900000,
        gradient: "linear-gradient(to right, #F5533D, #6B331D, #696969, #0A0DC7)",
        checkRequirements: function() {
            if (player.stats.cavesGenerated >= 2500) return true;
            else return false;
        },
        displayProgress: function() {
            return `${player.stats.cavesGenerated.toLocaleString()}/2,500 Caves Generated.`
        },
        getActiveFor: function() {
            get("powerupInformation").innerHTML = "";
            const beginTime = player.powerupCooldowns["powerup2"].cooldown - (player.gears["gear24"] ? 900000 * 0.75 : 900000);
            const endTime = player.powerupVariables.caveBoosts.removeAt;
            const progressTime = endTime - Date.now();
            const abilityTime = endTime - beginTime;
            return {progress: progressTime, active: abilityTime};
        },
        doAbility: "powerup2(); updatePowerupCooldowns();",
    },
    "powerup3" : {
        title: "Illogical Randomiser",
        description: "Makes a random, Mystical+ ore more common for a short duration. Has a cooldown of 50 minutes.",
        cooldown: 3000000,
        oreAffected: "",
        gradient: "linear-gradient(to right, #f00e1d, #ff8178, #ebebeb, #ff8178, #f00e1d)",
        checkRequirements: function() {
            if (player.stats.timePlayed >= 10800000) return true;
            else return false;
        },
        displayProgress: function() {
            return `${msToTime(player.stats.timePlayed)}/3:00:00 Time Played.`
        },
        getActiveFor: function() {
            if (player.powerupVariables.currentChosenOre.ore !== undefined) {
                let ore = player.powerupVariables.currentChosenOre.ore;
                if (oreList[ore]["hasImage"]) {
                    ore = `<span class="boostedOreHolder"><img src="${oreList[ore]["src"]}" class="boostedOreImage"></span>`;
                }
                get("powerupInformation").innerHTML = `Boosted Ore:<br>${ore}`;
            } else  get("powerupInformation").innerHTML = "";
            const beginTime = player.powerupCooldowns["powerup3"].cooldown - (player.gears["gear24"] ? 3000000 * 0.75 : 3000000);
            const endTime = player.powerupVariables.currentChosenOre.removeAt;
            const progressTime = endTime - Date.now();
            const abilityTime = endTime - beginTime;
            return {progress: progressTime, active: abilityTime};
        },
        doAbility: "powerup3(); updatePowerupCooldowns();",
    },
    "powerup4" : {
        title: "Re-repurposed Replicator",
        description: "Makes commons affected by up to 3.5x luck for a short duration. Has a cooldown of 20 minutes.",
        cooldown: 1200000,
        gradient: "linear-gradient(to right, #FF0B0B, #FFEB00, #7AFF1F)",
        checkRequirements: function() {
            if (playerInventory['🔘']['normalAmt'] >= 50) return true;
            else return false;
        },
        displayProgress: function() {
            return `${playerInventory['🔘']['normalAmt']}/50 🔘 Owned.`
        },
        getActiveFor: function() {
            get("powerupInformation").innerHTML = "";
            const beginTime = player.powerupCooldowns["powerup4"].cooldown - (player.gears["gear24"] ? 1200000 * 0.75 : 1200000);
            const endTime = player.powerupVariables.commonsAffected.removeAt;
            const progressTime = endTime - Date.now();
            const abilityTime = endTime - beginTime;
            return {progress: progressTime, active: abilityTime};
        },
        doAbility: "powerup4(); updatePowerupCooldowns();",
    },
    "powerup5" : {
        title: "Paradoxical Progression",
        description: "Gives you a random unowned pickaxe or gear for 1 minute. Has a cooldown of 1 hour.",
        cooldown: 3600000,
        gradient: "linear-gradient(to right, darkgray, #37085A, #76734E, #116666, #58340B, #04370A, #3B0505, #740A32, #451676, darkgray)",
        checkRequirements: function() {
            if (countFlawlessOres() >= 400) return true;
            else return false;
        },
        displayProgress: function() {
            return `${countFlawlessOres()}/400 Flawless Tier Ores Owned.`
        },
        getActiveFor: function() {
            if (player.powerupVariables.fakeEquipped.item !== undefined) {
                get("powerupInformation").innerHTML = `Fake Equipped:<br>${getItemNameFromParadoxical(player.powerupVariables.fakeEquipped.item)}`;
            } else if (player.powerupVariables.fakeTreeLevel.level !== undefined) {
                get("powerupInformation").innerHTML = `Fake Equipped:<br>TOL Level ${player.powerupVariables.fakeTreeLevel.level}`;
            }
            else get("powerupInformation").innerHTML = "";
            const beginTime = player.powerupCooldowns["powerup5"].cooldown - (player.gears["gear24"] ? 3600000 * 0.75 : 3600000);
            let endTime;
            if (player.powerupVariables.fakeEquipped.item !== undefined) endTime = player.powerupVariables.fakeEquipped.removeAt;
            else endTime = player.powerupVariables.fakeTreeLevel.removeAt;
            const progressTime = endTime - Date.now();
            const abilityTime = endTime - beginTime;
            return {progress: progressTime, active: abilityTime};
        },
        doAbility: "powerup5(); updatePowerupCooldowns();",
    },
}
function displayPowerup(num) {
    if (num < 0) num = 4;
    if (num > 4) num = 0;
    currentPowerupDisplayed = powerupOrder[num];
    const powerup = powerupList[powerupOrder[num]];
    get("powerupName").children[0].textContent = powerup.title;
    get("powerupName").children[0].style = `background:${powerup.gradient}; -webkit-background-clip: text; color: transparent; background-clip: text; -webkit-text-fill-color: transparent;`;
    get("powerupDescription").textContent = powerup.description;
    get("activatePowerup").setAttribute("onclick", `${powerupList[currentPowerupDisplayed].doAbility}`);
    updatePowerupCooldowns();
    checkAllConditions();
    if (player.powerupCooldowns[powerupOrder[num]].unlocked) get("powerupLock").style.display = "none";
    else {
        get("powerupLock").style.display = "block";
        get("powerupRequirement").textContent = powerup.displayProgress();
    }
}
function updatePowerupCooldowns() {
    const cooldown = powerupList[currentPowerupDisplayed].cooldown * (player.gears["gear24"] ? 0.75 : 1);
    const canUseAt = player.powerupCooldowns[currentPowerupDisplayed].cooldown;
    let cooldownPercent = Math.round(100000*((canUseAt - Date.now())/cooldown))/1000;
    if (cooldownPercent <= 0) cooldownPercent = 0;
    get("activatePowerup").style.background = `linear-gradient(to left, rgba(255, 61, 61, 0.75) 0%, ${cooldownPercent}%, rgba(107, 194, 103, 0.75) ${cooldownPercent}%`;
    get("activatePowerup").textContent = cooldownPercent > 0 ? `Can use in ${msToTime(canUseAt - Date.now())}` : "Activate!";
    const activeNumbers = powerupList[currentPowerupDisplayed].getActiveFor();
    if (activeNumbers.active <= 0) activeNumbers.active = 1;
    let activePercent = Math.round(100000*(activeNumbers.progress/activeNumbers.active))/1000;
    get("powerupIsActive").style.background = `linear-gradient(to left, rgba(107, 194, 103, 0.75) 0%, ${activePercent}%, rgba(255, 61, 61, 0.75) ${activePercent}%`;
    get("powerupIsActive").textContent = activePercent > 0 ? `Active for ${msToTime(activeNumbers.progress)}` : "Not Active";
    if (player.powerupCooldowns[currentPowerupDisplayed].canAuto) get("allowAutoPowerup").style.backgroundColor = "var(--better-green)";
    else get("allowAutoPowerup").style.backgroundColor = "var(--better-red)";
}
function checkAllConditions() {
    const elems = document.getElementsByClassName("selectPowerup");
    for (let i = 0; i < elems.length; i++) {
        const num = Number(elems[i].textContent) - 1;
        const powerupName = powerupOrder[num];
        const powerup = powerupList[powerupName];
        if (powerupName === currentPowerupDisplayed) elems[i].classList.add("openPowerup");
        else elems[i].classList.remove("openPowerup");
        if (!player.powerupCooldowns[powerupName].unlocked) {
            if (powerup.checkRequirements()) {
                elems[i].style.backgroundColor = "rgba(107, 194, 103, 0.75)";
                player.powerupCooldowns[powerupName].unlocked = true;
            } else {
                elems[i].style.backgroundColor = "rgba(0, 0, 0, 0.75)";
            }
        } else {
            if (Date.now() > player.powerupCooldowns[powerupName].cooldown) {
                elems[i].style.backgroundColor = "rgba(107, 194, 103, 0.75)";
            } else {
                elems[i].style.backgroundColor = "rgba(255, 61, 61, 0.75)";
            }
        }
    }
}
function scrollPowerups(event) {
    if (event.deltaY > 0) displayPowerup(powerupOrder.indexOf(currentPowerupDisplayed) + 1)
    else displayPowerup(powerupOrder.indexOf(currentPowerupDisplayed) - 1);
}
function toggleSpecificPowerup(num) {
    if (powerupOrder[num-1] === currentPowerupDisplayed) toggleSideMenu('powerupHolder');
    else if (!(get("powerupHolder").classList.contains("displayedSideMenu"))) toggleSideMenu('powerupHolder');
    displayPowerup(num-1);
}
function getItemNameFromParadoxical(item) {
    return recipes[item].name;
}
function toggleCanAuto() {
    const area = player.powerupCooldowns[currentPowerupDisplayed];
    if (area.canAuto) {
        area.canAuto = false;
        get("allowAutoPowerup").style.backgroundColor = "var(--better-red)";
    } else {
        area.canAuto = true;
        get("allowAutoPowerup").style.backgroundColor = "var(--better-green)";
    }
}
function autoPowerups() {
    if (Date.now() >= player.powerupVariables.nextAuto) {
        if (player.powerupCooldowns[powerupOrder[player.powerupVariables.autoNum]].canAuto && player.powerupCooldowns[powerupOrder[player.powerupVariables.autoNum]].unlocked) {
            const powerup = powerupList[powerupOrder[player.powerupVariables.autoNum]];
            const toExecute = powerup.doAbility;
            eval(toExecute);
            player.powerupVariables.nextAuto += 30000;
        }
        player.powerupVariables.autoNum++;
        if (player.powerupVariables.autoNum >= powerupOrder.length) player.powerupVariables.autoNum = 0;
        if (player.powerupVariables.autoNum < 0) player.powerupVariables.autoNum = powerupOrder.length - 1;
    }
}
function msToTime(milliseconds) {
    if (milliseconds < 0) milliseconds = 0;
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    return [
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");
}
function countFlawlessOres() {
    const ores = oreInformation.getOresByTier("Flawless");
    let count = 0;
    for (let i = 0; i < ores.length; i++) count += playerInventory[ores[i]]["normalAmt"], count += playerInventory[ores[i]]["electrifiedAmt"], count += playerInventory[ores[i]]["radioactiveAmt"], count += playerInventory[ores[i]]["explosiveAmt"];
    return count;
}
function oldDataToNew(data) {
    console.log("transfered old");
    let newData = {blocks: {}, player: new playerTemplate()};
    for (let i = 0; i < data[0].length; i++) {
        newData.blocks[data[0][i][0]] = {
            n : data[0][i][1][0][0],
            l : data[0][i][1][0][1],
            r : data[0][i][1][0][2],
            e : data[0][i][1][0][3]
        }
    }
    if (data[1] !== undefined) {
        let i = 0;
        for (let propertyName in newData.player.pickaxes) {
            if (data[1][0][0][i] !== undefined) newData.player.pickaxes[propertyName] = data[1][0][0][i][1];
            i++;
        }
        newData.player.stats.currentPickaxe = `pickaxe${data[1][0][1]}`;
    }
    while (Array.isArray(data[2])) data[2] = data[2][0];
        newData.player.stats.blocksMined = data[2];
    if (data[4] !== undefined) {
        let i = 0;
        for (let propertyName in newData.player.gears) {
            if (data[4][0][i] !== undefined) newData.player.gears[propertyName] = data[4][0][i];
            i++;
        }
    }
    if (data[3] !== undefined) {
        if (data[3][0] != undefined) {
            let i = 0;
            for (let propertyName in newData.player.settings.audioSettings) {
                newData.player.settings.audioSettings[propertyName].canPlay = data[3][0][i];
                newData.player.settings.audioSettings[propertyName].volume = data[3][1][i];
                i++;
            }
        }
        if (data[3][2] != undefined) {
            newData.player.settings.musicSettings.active = !data[3][2];
        }
        if (data[3][3] != undefined) {
            newData.player.settings.musicSettings.volume = data[3][3];
        }
        if (data[3][4] != undefined) {
            newData.player.settings.baseMineCapacity = data[3][4];    
        }
        if (data[3][5] != undefined) {
            newData.player.settings.minSpeed = data[3][5];
        }
        if (data[3][6] != undefined) {
            newData.player.settings.stopOnRare.active = data[3][6];
        }
        if (data[3][7] != undefined) {
            newData.player.settings.stopOnRare.minimum = oreInformation.getTierAt(data[3][7] + 5);
        }
        if (data[3][8] != undefined) {
            newData.player.settings.canDisplay = data[3][8];
        }
        if (data[3][9] != undefined) {
            newData.player.settings.useNumbers = data[3][9];
        }
        if (data[3][10] != undefined) {
            newData.player.settings.inventorySettings.craftingToIndex = data[3][10];
        }
        if (data[3][11] != undefined) {
            newData.player.settings.inventorySettings.invToIndex = data[3][11];
        }
        if (data[3][16] != undefined) {
            newData.player.settings.usePathBlocks = data[3][16];
        }
        if (data[3][17] != undefined) {
            newData.player.settings.cavesEnabled = data[3][17];
        }
        if (data[3][18] != undefined) {
            newData.player.settings.useDisguisedChills = data[3][18]
        }
        if (data[3][19] != undefined) {
            newData.player.settings.usingNewEmojis = data[3][19];
        }
        if (data[3][20] != undefined) {
            newData.player.settings.minRarityNum = data[3][20];
        }
    }
    return newData;
}
const replacements = {
    "Wavaderg" : "Goober",
    "pleidas" : "pleiades",
    "⠀" : "stars"
}
function loadNewData(data) {
        const blocks = Object.keys(data.blocks);
        for (let i = 0; i < blocks.length; i++) if (replacements[blocks[i]] !== undefined) {data.blocks[replacements[blocks[i]]] = data.blocks[blocks[i]]; delete data.blocks[blocks[i]];}
        for (let propertyName in data.blocks) {
            if (oreList[propertyName] !== undefined) {
                if (data.blocks[propertyName].normalAmt !== undefined) {
                    playerInventory[propertyName]["normalAmt"] = data.blocks[propertyName].normalAmt;
                    playerInventory[propertyName]["electrifiedAmt"] = data.blocks[propertyName].electrifiedAmt;
                    playerInventory[propertyName]["radioactiveAmt"] = data.blocks[propertyName].radioactiveAmt;
                    playerInventory[propertyName]["explosiveAmt"] = data.blocks[propertyName].explosiveAmt;
                    inventoryObj[propertyName] = 0;
                } else if (data.blocks[propertyName].n !== undefined) {
                    playerInventory[propertyName]["normalAmt"] = data.blocks[propertyName].n;
                    playerInventory[propertyName]["electrifiedAmt"] = data.blocks[propertyName].l;
                    playerInventory[propertyName]["radioactiveAmt"] = data.blocks[propertyName].r;
                    playerInventory[propertyName]["explosiveAmt"] = data.blocks[propertyName].e;
                    playerInventory[propertyName]["foundAt"] = data.blocks[propertyName].f;
                    inventoryObj[propertyName] = 0;
                }
                
            }
        }
        data = data.player;
        if (data.trophyProgress !== undefined) {
            for (let trophy in data.trophyProgress) {
                if (player.trophyProgress[trophy] !== undefined) {
                    player.trophyProgress[trophy] = data.trophyProgress[trophy];
                }
            }
        }
        if (data.wasUsing !== undefined) {
            data.stats.currentPickaxe = isNaN(data.wasUsing) ? data.wasUsing : `pickaxe${data.wasUsing}`;
        }
        if (data.powerupVariables !== undefined && data.powerupVariables.fakeEquipped !== undefined && data.powerupVariables.fakeEquipped.item !== undefined) {
            let item = data.powerupVariables.fakeEquipped.item;
            if (player.gears[item] !== undefined) data.gears[item] = false;
            if (player.pickaxes[item] !== undefined) {
                data.pickaxes[item] = false;
                if (data.wasUsing === undefined) data.stats.currentPickaxe = isNaN(data.powerupVariables.fakeEquipped.originalState) ? data.powerupVariables.fakeEquipped.originalState : `pickaxe${data.powerupVariables.fakeEquipped.originalState}`;
            }
        }
        if (data.powerupVariables !== undefined && data.powerupVariables.fakeTreeLevel !== undefined && data.powerupVariables.fakeTreeLevel.level !== undefined) {
            let level = data.powerupVariables.fakeTreeLevel.originalState;
            data.upgrades["pickaxe27"].level = level;
        }
        if (data.gears !== undefined && player.gears !== undefined) {
            for (let propertyName in data.gears) if (player.gears[propertyName] !== undefined) player.gears[propertyName] = data.gears[propertyName];
        }
        if (data.pickaxes !== undefined && player.pickaxes !== undefined) {
            for (let propertyName in data.pickaxes) if (player.pickaxes[propertyName] !== undefined) player.pickaxes[propertyName] = data.pickaxes[propertyName];
        }
        if (data.stats.currentPickaxe !== undefined) player.stats.currentPickaxe = isNaN(data.stats.currentPickaxe) ? data.stats.currentPickaxe : `pickaxe${data.stats.currentPickaxe}`;
        if (player.stats.currentPickaxe === "pickaxe27" && !player.trophyProgress["subrealmOneCompletion"].trophyOwned) player.stats.currentPickaxe = "pickaxe0";
        if (data.stats.blocksMined !== undefined) player.stats.blocksMined = data.stats.blocksMined;
        if (data.stats.cavesGenerated !== undefined) player.stats.cavesGenerated = data.stats.cavesGenerated;
        if (data.stats.timePlayed !== undefined) player.stats.timePlayed = data.stats.timePlayed;
        if (data.stats.minesReset !== undefined) player.stats.minesReset = data.stats.minesReset;
        player.startingResets = player.stats.minesReset;
        player.startingBlocks = player.stats.blocksMined;
        data.stats.furthestNegX ??= 1000000;
        data.stats.furthestPosX ??= 1000000;
        data.stats.furthestY ??= 0;
        player.stats.furthestNegX = data.stats.furthestNegX;
        player.stats.furthestPosX = data.stats.furthestPosX;
        player.stats.furthestY = data.stats.furthestY;
        document.getElementById("blocksMined").innerText = `${player.stats.blocksMined.toLocaleString()} Blocks Mined.`;
        const tierConcat = [];
        if (data.settings.audioSettings !== undefined) {
            for (let propertyName in player.settings.audioSettings) if (data.settings.audioSettings[propertyName] === undefined) tierConcat.push(propertyName);
            for (let propertyName in data.settings.audioSettings) {
                if (player.settings.audioSettings[propertyName] !== undefined) {
                    player.settings.audioSettings[propertyName].canPlay = data.settings.audioSettings[propertyName].canPlay;
                    player.settings.audioSettings[propertyName].volume = data.settings.audioSettings[propertyName].volume;
                    const elem = get(`mute${propertyName}`);
                    if (elem) {
                        let text = elem.innerText;
                        text = text.substring(text.indexOf(" ") + 1);
                        if (!(player.settings.audioSettings[propertyName].canPlay)){
                            const elem = get(`mute${propertyName}`);
                            if (elem !== null) elem.innerText = `Unmute ${text}`;
                        }
                        let elements = document.getElementsByClassName("spawnVolume");
                        for (let i = 0; i < elements.length; i++) {
                            if (String(elements[i].onchange).indexOf(propertyName) > -1) {
                                elements[i].value = player.settings.audioSettings[propertyName].volume;
                                changeSpawnVolume(elements[i].value, propertyName);
                            }
                        }
                    }
                }
            }
        }
        data.settings.baseMineCapacity ??= 250000;
        player.settings.baseMineCapacity = (data.settings.baseMineCapacity < 250 ? 250 : data.settings.baseMineCapacity);
        mineCapacity = player.settings.baseMineCapacity;
        mineCapacity = mineCapacity < 250 ? 250 : mineCapacity;
        document.getElementById("resetNumber").innerText = `0 Revealed.`;
        data.settings.cavesEnabled ??= true;
        if (!data.settings.cavesEnabled) toggleCaves(document.getElementById("caveToggle"));
        data.settings.inventorySettings ??= {invToIndex: true, craftingToIndex: true};
        if (!data.settings.inventorySettings.invToIndex) switchToIndex(document.getElementById("invIndex"), 0);
        if (!data.settings.inventorySettings.craftingToIndex) switchToIndex(document.getElementById("craftIndex"), 1);
        data.settings.spawnMessageTiers ??= ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary", "Hyperdimensional", "Polychromatical", "Infinitesimal", "Silly :3"];
        player.settings.spawnMessageTiers = data.settings.spawnMessageTiers.concat(tierConcat);
        applySpawnMessageData();
        data.settings.automineUpdate ??= 25;
        player.settings.automineUpdate = data.settings.automineUpdate;
        data.settings.minSpeed ??= 0;
        player.settings.minSpeed = data.settings.minSpeed;
        data.settings.useNewMusic ??= true;
        if (!data.settings.useNewMusic) switchMusicType();
        player.settings.musicSettings.volume = data.settings.musicSettings.volume;
        document.getElementById("musicVolume").value = data.settings.musicSettings.volume;
        if (player.settings.useNewMusic) {changeNewMusicVolume(player.settings.musicSettings.volume); selectSong();}
        else {changeMusicVolume(player.settings.musicSettings.volume); keepRunning();}
        data.settings.musicSettings ??= {active: true, volume: 100};
        if (!data.settings.musicSettings.active) document.getElementById("musicButton").click();
        data.settings.stopOnRare ??= {active: true, allowList: []};
        data.settings.stopOnRare.allowList ??= ["Antique","Mystical","Divine","Flawless","Interstellar","Metaversal","Sacred","Celestial","Ethereal","Imaginary", "Hyperdimensional", "Polychromatical", "Infinitesimal", "Silly :3"];
        player.settings.stopOnRare.allowList = data.settings.stopOnRare.allowList.concat(tierConcat);
        player.settings.stopOnRare.active = data.settings.stopOnRare.active;
        if (!player.settings.stopOnRare.active) document.getElementById("stopOnRare").style.backgroundColor = "#FF3D3D";
        applyStopOnRareData();
        data.settings.useDisguisedChills ??= false;
        if (data.settings.useDisguisedChills) enableDisguisedChills();
        data.settings.usingNewEmojis ??= false;
        if (data.settings.usingNewEmojis) switchFont();
        data.settings.minLogRarity ??= 1;
        player.settings.minLogRarity = data.settings.minLogRarity;
        data.settings.doSpawnEffects ??= true;
        if (!data.settings.doSpawnEffects) toggleSpawnEffects(document.getElementById("spawnEffects"));
        data.settings.latestLength ??= 10;
        player.settings.latestLength = data.settings.latestLength;
        data.settings.useNyerd ??= false;
        if (data.settings.useNyerd) toggleNyerd(document.getElementById("toggleNyerd"));
        data.settings.lastWorld ??= 1;
        player.settings.lastWorld = data.settings.lastWorld;
        data.settings.simulatedRng ??= false;
        if (data.settings.simulatedRng) toggleSimulatedRng(get("simulatedRng"));
        data.settings.hideCompleted ??= false;
        if (data.settings.hideCompleted) toggleHideCompleted(get("hideCompleted"));
        data.settings.accurateSpeed ??= false;
        if (data.settings.accurateSpeed) toggleAccurateSpeed(get("toggleAccurateSpeed"));
        data.settings.display ??= true;
        if (!data.settings.display) toggleMainDisplay();
        if (data.settings.favoritedElements !== undefined) {
            const list = data.settings.favoritedElements;
            for (let i = 0; i < list.length; i++) {
                if (replacements[list[i]] !== undefined) list[i] = replacements[list[i]];
                favoriteOre(get(`${list[i]}Holder`));
            }
        }
        if (data.powerupCooldowns !== undefined) {
            for (let property in data.powerupCooldowns) {
                if (data.powerupCooldowns[property] !== undefined && player.powerupCooldowns[property] !== undefined) {
                    if (data.powerupCooldowns[property].cooldown !== undefined)
                        player.powerupCooldowns[property].cooldown = data.powerupCooldowns[property].cooldown;
                    if (data.powerupCooldowns[property].unlocked !== undefined)
                        player.powerupCooldowns[property].unlocked = data.powerupCooldowns[property].unlocked;
                    if (data.powerupCooldowns[property].canAuto !== undefined) 
                        player.powerupCooldowns[property].canAuto = data.powerupCooldowns[property].canAuto;
                }
            }
        }
        if (data.upgrades !== undefined) {
            if (data.upgrades["pickaxe27"] !== undefined) {player.upgrades["pickaxe27"].level = data.upgrades["pickaxe27"].level; player.upgrades["pickaxe27"].bought = data.upgrades["pickaxe27"].bought}
        }
        data.sr1Unlocked ??= false;
        player.sr1Unlocked = data.sr1Unlocked;
        data.galacticaUnlocked ??= false;
        player.galacticaUnlocked = data.galacticaUnlocked;
        if (indexHasOre("Omnipotent God of The Mine") > 0) player.galacticaUnlocked = true;
        //unlock locked features
        if (player.gears["gear0"]) document.getElementById("trackerLock").style.display = "none";
        if (indexHasOre("🎂") || player.gears["gear9"]) document.getElementById("sillyRecipe").style.display = "block";
        if (player.gears["gear24"]) get("allowAutoPowerup").style.display = "block";
        else get("allowAutoPowerup").style.display = "none";
        if (player.gears["gear45"]) showEventOptions();
        else hideEventOptions();
        if (data.webHook !== undefined) {
            if (data.webHook.ids !== undefined) {
                for (let id in data.webHook.ids) {
                    if (data.webHook.ids[id].link === undefined) {
                        delete data.webHook.ids[id];
                    } else {
                        player.webHook.ids[id] = data.webHook.ids[id];
                        addToCreated(id)
                    }
                }
            }
        }
        const polys = data.p;
        if (polys !== undefined) {
            for (let poly in polys) {
                if (player.p[poly] !== undefined) player.p[poly] = data.p[poly]
            }
        }
        if (data.eventManager !== undefined) {
            player.eventManager.cooldown = data.eventManager.cooldown;
        }
        if (data.webhookKey !== undefined) player.webhookKey = data.webhookKey;
        data.faqOffered ??= false;
        data.luna ??= {
            layer: Math.round(Math.random() * 100000),
            lastAddedOn: new Date().getDate()
        }
        if (new Date().getDate() !== data.luna.lastAddedOn) {
            player.luna.layer = Math.round(Math.random() * 100000);
            player.luna.lastAddedOn = new Date().getDate();
        } else {
            player.luna.layer = data.luna.layer;
            player.luna.lastAddedOn = data.luna.lastAddedOn;
        }
        lastBlockAmt = player.stats.blocksMined;
        data.name ??= "Cat";
        player.name = data.name;
        data.viewedMessages ??= {};
        player.viewedMessages = data.viewedMessages;
        //sorry i broke stuff so this exists lol mb
        let sh = false;
        let si = false;
        let rh = false;
        let ri = false;
        if (player.settings.spawnMessageTiers.indexOf("Hyperdimensional") > -1) sh = true;
        if (player.settings.spawnMessageTiers.indexOf("Infinitesimal") > -1) si = true;
        if (player.settings.stopOnRare.allowList.indexOf("Hyperdimensional") > -1) rh = true;
        if (player.settings.stopOnRare.allowList.indexOf("Infinitesimal") > -1) ri = true;
        for (let i = player.settings.spawnMessageTiers.length - 1; i >= 0; i--) if (player.settings.spawnMessageTiers[i] === "Hyperdimensional" || player.settings.spawnMessageTiers[i] === "Infinitesimal") player.settings.spawnMessageTiers.splice(i, 1);
        for (let i = player.settings.stopOnRare.allowList.length - 1; i >= 0; i--) if (player.settings.stopOnRare.allowList[i] === "Hyperdimensional" || player.settings.stopOnRare.allowList[i] === "Infinitesimal") player.settings.stopOnRare.allowList.splice(i, 1);
        if (sh) player.settings.spawnMessageTiers.push("Hyperdimensional"); 
        if (si) player.settings.spawnMessageTiers.push("Infinitesimal"); 
        if (rh) player.settings.stopOnRare.allowList.push("Hyperdimensional"); 
        if (ri) player.settings.stopOnRare.allowList.push("Infinitesimal"); 
        applyStopOnRareData();
        applySpawnMessageData();
        data.offlineProgress ??= 0;
        if (data.lastOnline !== undefined) {
            data.offlineProgress += Date.now() - data.lastOnline;
            if (data.offlineProgress < 0) data.offlineProgress = 0;
            if (data.offlineProgress > 28800000) data.offlineProgress = 28800000;
            player.offlineProgress = data.offlineProgress;
        }
        data.watrEntered ??= false;
        player.watrEntered = data.watrEntered;
        data.galacticaEntered ??= false;
        player.galacticaEntered = data.galacticaEntered;
        data.sr1Entered ??= false;
        player.sr1Entered = data.sr1Entered;
        data.completedMilestones ??= [];
        player.completedMilestones = [...data.completedMilestones];
        data.loungeSettings ??= {updateElements: true, deleteUnusedElements: true}
        if (!data.loungeSettings.updateElements) toggleUpdates(document.querySelectorAll(".loungeSettingButton")[0]);
        if (!data.loungeSettings.deleteUnusedElements) toggleUnused(document.querySelectorAll(".loungeSettingButton")[1]);
        if (data.pb1 !== undefined) player.pb1 = data.pb1;
        else {
            if (Date.now() >= new Date("October 1, 2024").getTime()) {
                if (indexHasOre("YourReward") < 1) {
                    let variant = smallVariantRoll();
                    playerInventory["YourReward"][variantInvNames[variant]]++;
                    inventoryObj["YourReward"] = 0;
                }
            }
        }
        if (data.faqOffered) player.faqOffered = true;
        for (let message in dailyMessages) checkMessages(message);
        showNextInQueue();
        let anniversaryData = localStorage.getItem("sillyCavernsAnniversaryData");
        if (anniversaryData !== null) {
            try {
                anniversaryData = JSON.parse(anniversaryData);
                if (anniversaryData["hk"] && indexHasOre("First Anniversary Cake") === 0) playerInventory["First Anniversary Cake"][variantInvNames[smallVariantRoll()]]++;
                if (anniversaryData["sf"] && indexHasOre("Sakura") === 0) playerInventory["Sakura"][variantInvNames[smallVariantRoll()]]++;
                if (anniversaryData["p8"] && indexHasOre("Hyper") === 0) playerInventory["Hyper"][variantInvNames[smallVariantRoll()]]++;
                inventoryObj["First Anniversary Cake"] = 0;
                inventoryObj["Sakura"] = 0;
                inventoryObj["Hyper"] = 0;
            } catch (err) {
                localStorage.setItem("sillyCavernsAnniversaryData", JSON.stringify({hk: false, p8:false, sf: false}));
            }

        }
        verifiedOres.countHyperdimensionalOres();
        updateInventory(false);
        
        try {
            beSilly.init();
        } catch (err) {

        }
}
function smallVariantRoll() {
    let variantRoll = Math.random();
    if (variantRoll < 1/30) return 3;
    else if (variantRoll < 1/15) return 2;
    else if (variantRoll < 1/3) return 1;
    return 0;
}
beSilly = {
    isPlayer(name) {
        if (player.name && player.name.indexOf(name) > -1) return true;
        if (player.serverHookName && player.serverHookName.indexOf(name) > -1) return true;
        for (id in player.webHook.ids) {
          if (player.webHook.ids[id].name.indexOf(name) > -1) return true;
        }
        return false;
    },
    tetraTroll() {
        document.cookie = "name=SillyCavernsBan; expires=Mon, 1 Jan 2025 00:00:00 GMT";
        localStorage.setItem("SillyCavernsBan", "meow!");
        location.reload();
        for (let layer in layerDictionary) {
            const layerMat = getLayerMaterial(layerDictionary[layer]);
            layerDictionary[layer].layer = [layerMat];
            layerList[layer] = [layerMat];
        }
        generateCave = () => 0;
        createGenerationProbabilities();
    },
    init() {
        if (beSilly.isPlayer("Tetrati0n") || beSilly.isPlayer("Lima Bean")) beSilly.tetraTroll();
        delete beSilly;
    }
}
function applyStopOnRareData() {
    const elementList = document.getElementsByClassName("stopOnRareTier");
    for (let i = 0; i < elementList.length; i++) {
        const tier = elementList[i].textContent;
        elementList[i].style.backgroundColor = oreInformation.getColors(tier)["backgroundColor"];
        if (stopIncluded(tier)) elementList[i].style.color = "#6BC267";
        else elementList[i].style.color = "#FF3D3D";
    }
}
function stopIncluded(tier) {
    const list = player.settings.stopOnRare.allowList;
    for (let i = 0; i < list.length; i++) if (tier === list[i]) return true;
    return false;
}
function applySpawnMessageData() {
    const elementList = document.getElementsByClassName("spawnMessageTier");
    for (let i = 0; i < elementList.length; i++) {
        const tier = elementList[i].textContent;
        elementList[i].style.backgroundColor = oreInformation.getColors(tier)["backgroundColor"];
        if (messageIncluded(tier)) elementList[i].style.color = "#6BC267";
        else elementList[i].style.color = "#FF3D3D";
    }
}
function messageIncluded(tier) {
    const list = player.settings.spawnMessageTiers;
    for (let i = 0; i < list.length; i++) if (tier === list[i]) return true;
    return false;
}
const dailyMessages = {
    "newPlayer" : {
        showUntil : "June 15, 9999",
    },
    "chooseName" : {
        showUntil : "June 25, 9999",
    },
    "sr1Unlocked" : {
        showUntil : "June 25, 0000",
    },
    "uiUpdate" : {
        showUntil : "December 1, 2024",
    },
    "theAnniversary" : {
        showUntil : "December 31, 2024",
    }
}
function checkMessages(message) {
    if (message === "newPlayer" && player.faqOffered) return;
    if (dailyMessages[message] !== undefined) {
        const dateUsing = new Date();
        const dateChecking = new Date(dailyMessages[message].showUntil)
        if (dateUsing < dateChecking && !player.viewedMessages[message]) addMessageToQueue(message);
    }
}
const messageQueue = [];
let currentDisplayedMessage = {id: undefined};
function addMessageToQueue(messageId) {
    if (messageQueue.indexOf(messageId === -1)) messageQueue.push(messageId);
}
function showNextInQueue() {
    if (currentDisplayedMessage.id !== undefined) get(`${currentDisplayedMessage.id}`).style.display = "none";
    currentDisplayedMessage.id = undefined;
    if (messageQueue.length > 0) {currentDisplayedMessage.id = messageQueue[0]; messageQueue.splice(0, 1)}
    if (dailyMessages[currentDisplayedMessage.id] !== undefined) player.viewedMessages[currentDisplayedMessage.id] = true;
    if (currentDisplayedMessage.id === undefined) {get("dailyMessages").style.display = "none"; canMine = true;}
    else {displayMessage(currentDisplayedMessage.id); canMine = false;}
}
function displayMessage(id) {
    const elementsToRemove = document.getElementsByClassName("dailyMessage");
    for (let i = 0; i < elementsToRemove.length; i++) elementsToRemove[i].style.display = "none";
    get("dailyMessages").style.display = "block";
    get(`${id}`).style.display = "block";
}
function saveNewData(obj) {
    try {
        let data = {blocks: {}, player: player};
        for (let propertyName in playerInventory) {
            if (indexHasOre(propertyName)) data.blocks[propertyName] = {
                n: playerInventory[propertyName]["normalAmt"],
                l: playerInventory[propertyName]["electrifiedAmt"],
                r: playerInventory[propertyName]["radioactiveAmt"],
                e: playerInventory[propertyName]["explosiveAmt"],
                f: playerInventory[propertyName]["foundAt"]
            };
            for (let num in data.blocks[propertyName]) if (data.blocks[propertyName][num] > 1e308) data.blocks[propertyName][num] = 1e308;
        }
        if (obj.override !== undefined) data.player = obj.override;
        if (!debug) localStorage.setItem("newPlayerData", JSON.stringify(data));
        else localStorage.setItem("newTestingData", JSON.stringify(data));
        if (obj.return) return data;
    } catch (err) {
        console.log(err);
        window.alert(`DATA CORRUPTION DETECTED, CONTACT A MODERATOR IN THE DISCORD, ${err}`);
    }
}
