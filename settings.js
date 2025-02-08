function showLoungeScreen(id, button) {
    const cid = showLoungeScreen.current
    if (cid === undefined) {
        button.classList.add("selectedLoungeArea");
        showLoungeScreen.current = id;
        showLoungeScreen.cButton = button;
        get(id).style.display = "inline-flex";
    }
    else if (cid === id) {
        showLoungeScreen.cButton.classList.remove("selectedLoungeArea");
        showLoungeScreen.cButton = undefined;
        showLoungeScreen.current = undefined;
        get(cid).style.display = "none";
    } else {
        get(id).style.display = "inline-flex";
        get(showLoungeScreen.current).style.display = "none";
        showLoungeScreen.cButton.classList.remove("selectedLoungeArea");
        showLoungeScreen.cButton = button;
        button.classList.add("selectedLoungeArea");
        showLoungeScreen.current = id;  
    }
    checkMilestoneStatus();
    checkIndexStatus();
}
showLoungeScreen.current = undefined;
showLoungeScreen.cButton = undefined;
function toggleLounge() {
    if (toggleLounge.toggled) {
        get("loungeHolder").style.display = "none";
        toggleLounge.toggled = false;
        checkMilestoneStatus();
        checkInventoryStatus();
        checkIndexStatus();
    } else {
        get("loungeHolder").style.display = "inline-flex";
        toggleLounge.toggled = true;
        checkMilestoneStatus();
        checkInventoryStatus();
        checkIndexStatus();
    }
}
toggleLounge.toggled = false;
function checkMilestoneStatus() {
    if (showLoungeScreen.current !== "loungeMilestones" && player.loungeSettings.deleteUnusedElements && checkCurrentMilestones.shown) {
        checkCurrentMilestones.shown = false;
        deleteMilestoneElements();
    }
    else if (showLoungeScreen.current === "loungeMilestones" && !toggleLounge.toggled && player.loungeSettings.deleteUnusedElements && checkCurrentMilestones.shown) {
        checkCurrentMilestones.shown = false;
        deleteMilestoneElements();
    }
    else if (showLoungeScreen.current === "loungeMilestones" && !checkCurrentMilestones.shown) {
        checkCurrentMilestones.shown = true
        createMilestones();
    }
}
function checkInventoryStatus() {
    if (toggleLounge.toggled && player.loungeSettings.deleteUnusedElements) {
        const c = get("inventory");
        while (c.firstChild) c.firstChild.remove();
    } else if (!toggleLounge.toggled && get("inventory").children.length === 0) {
        createInventory();
        const list = [...player.settings.favoritedElements];
        player.settings.favoritedElements = [];
        for (let i = 0; i < list.length; i++) {
            favoriteOre(get(`${list[i]}Holder`));
        }
        for (const ore in oreList) inventoryObj[ore] = 0;
        updateInventory();
    }
}
checkInventoryStatus.created = true;
function checkIndexStatus() {
    if (toggleLounge.toggled && player.loungeSettings.deleteUnusedElements && showLoungeScreen.current !== "loungeOreIndex") {
        const h = get("loungeCardHolder");
        while (h.firstChild) h.firstChild.remove();
    }
    else if (!toggleLounge.toggled && player.loungeSettings.deleteUnusedElements && showLoungeScreen.current === "loungeOreIndex") {
        const h = get("loungeCardHolder");
        while (h.firstChild) h.firstChild.remove();
    } else if (toggleLounge.toggled && get("loungeCardHolder").children.length === 0 && showLoungeScreen.current === "loungeOreIndex" && createIndexCards.indexing !== undefined) {
        createIndexCards(createIndexCards.indexing);
    }
}
function toggleUnused(b) {
    if (player.loungeSettings.deleteUnusedElements) {
        player.loungeSettings.deleteUnusedElements = false;
        b.style.backgroundColor = "var(--better-red)";
    } else {
        player.loungeSettings.deleteUnusedElements = true;
        b.style.backgroundColor = "var(--better-green)";
        checkInventoryStatus();
        checkMilestoneStatus();
    }
}
function toggleUpdates(b) {
    if (player.loungeSettings.updateElements) {
        player.loungeSettings.updateElements = false;
        b.style.backgroundColor = "var(--better-red)";
    } else {
        player.loungeSettings.updateElements = true;
        b.style.backgroundColor = "var(--better-green)";
    }
}
function toggleMainDisplay() {
    if (gameInfo.display) {
        gameInfo.display = false;
        player.settings.display = false;
        get("blockDisplay").style.display = "none";
        get("displayDisabled").style.display = "block";
    } else {
        gameInfo.display = true;
        player.settings.display = true;
        get("blockDisplay").style.display = "flex";
        get("displayDisabled").style.display = "none";
        displayArea();
    }
    get("toggleMainDisplay").textContent = "Display: " + (gameInfo.display ? "Enabled" : "Disabled");
}
function switchMovementType() {
    if (gameInfo.movementType === "auto") {
        gameInfo.movementType = "single";
        get("switchMovementType").textContent = "Mining: Single";
    } else {
        gameInfo.movementType = "auto";
        get("switchMovementType").textContent = "Mining: Auto";
    }
    const buttons = document.getElementsByClassName("movementButton");
    const order = ["left", "down", "up", "right"];
    for (let i = 0; i < buttons.length; i++) {
        if (gameInfo.movementType === "auto") buttons[i].style.backgroundImage = `url("media/${order[i]}automine.png")`;
        else buttons[i].style.backgroundImage = `url("media/${order[i]}one.png")`;
    }
}
let useNumbers = false;
let allPickaxeNames = 
["Mulch Mallet", 
"Mud Sickle", 
"Dirt Ravager", 
"Crystalline Excavator",
"Ballast Breaker",
"Tropical Carver",
"Void Crusher", 
"Geode Staff", 
"Earth Soiler", 
"Crypt Smasher", 
"Labyrinthian Tide", 
"77 Leaf Destroyer", 
"Planet Buster", 
"Whirlpool of Fate", 
"Wings of Glory",
"The Key",
"Extreme Echolocator",
"Corundum Caver",
"Starborne Slasher",
"Nyabomb",
"Lunar Lightsabre",
"Gemstone Engraver",
"Gambler's Fallacy",
"Exponential Centrifuge",
"Singularity Slammer",
"Staff of Binding",
"Stormseer's Superspark Sceptre",
"Coronary Catastrophe",
"N̴̡̠͍̰̓̀̉́͘͟͜͠͠͝uͧ̆̃͂̔̂͛̆̇ͫ̍̒̍͑̅̎̾͒҉̶̶̧̡̨͘͟͟͡͞͡͏̷̧͈̣̱͚̼̹̤̘̹l̷̷̸̴̨̡̢̜͈̭̰͕̪̯̭͓͓̲̱̹̥̜̝̩̝ͤ̀̕͝͠͠͝͠l̴͋̄̋͐ͪ̒ͦ̄̆̅̂̍͂ͧ͛ͮ̏̒̓ͨ̓͊̓̆ͤ̓̇̽̎͏̷͔̬̟̣͍̗̦̝̮̱̳̼͔̻̭͍̗̦͉̗̥͍͇̭̘͉̕͜͡ ̸̸̶̨̢̳̍̐̓ͪͥ̐͋̃̉͒̓̓̀̌͑̾ͩͯ͋ͦ͗ͮͯͪͥ̅͊ͩͣͨ̆̒̂̂̽̀̀͘͘͘͜͞͠C̵̵̷̸̸̵ͦ͒͆͡͞͡͏̶̵̡͔̙̱͢ḩ̸͙͙̼̖̥̦̻͈̖̫̖̯̣̣͍͎̖̹̜͇̯ͧͥ̎̒ͨ̎̓ͫ͛̅ͨͧͤͤͫ̊̓̈̒͐ͥ̎̓ͤ̃ͧͣ͊̉̄͛͡r̵̸̴̢̢͒ͮ̈́̓ͬ̉͆ͪ̀̓͋̉́͌̾ͬ̾̐ͫ̑ͮ̒̂̈͆͆̆͌̿ͭ́͑̂ͯ͛ͩ̇̚͜͡͏̸̼̫̪̮̲͉͔͇̯̻͇̫͚̰̦̤͈͉̟̙̻̖͇͖̱͕̘̣̫̥̝͍͔͝o̷͐̏̈́ͭ̔̇ͬͣ͑̂̉̑̓̊ͯͪ͏̶̸͏̷̴̴̶̷̷̧́̀̀͘͟͢͞҉̠̩͇͙̥̫̻̮̯̳̖̙͕̹̤͈͓̻͇̘͖͔m͑͐̃́̚͏̷̶̸̴̧̢̧̡̭̰́̕̕͢͡a̷̶̛̓̉͐͋̄̍͊̓ͪ̏̑̍͋ͮ̔͋̒ͧͭ̐̋͛͆̌̚̕͏͏̶͜͢͞͏̵̸̧̢̹̯͎̫̜̪̪̥̫̖̻̝̘͖̼̰̝͈͝͝͡",
"The Tree of Life"
];
function changeLatestMax(button) {
    amt = Number(button.value);
    if (!isNaN(amt) && amt > 0 && amt < 1000) {
        player.settings.latestLength = amt;
        flashGreen(button);
    } else {
        flashRed(button)
    }
}
function changeStopOnRare(button) {
    if (player.settings.stopOnRare.active) {
        player.settings.stopOnRare.active = false;
        button.style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.stopOnRare.active = true;
        button.style.backgroundColor = "#6BC267";
    }   
}
function flashRed(element) {
    element.style.animation = "flashRed 1s linear 1";
    element.onanimationend = () => {
        element.style.animation = "";
        element.value = "";
        element.onanimationend = undefined;
    }
}
function flashGreen(element) {
    element.style.animation = "flashGreen 1s linear 1";
    element.onanimationend = () => {
        element.style.animation = "";
        element.value = "";
        element.onanimationend = undefined;
    }
}
//latestDisplay
//inventoryDisplay
//col-2
/*
let chill;
let ringing;
let visionblur;
let unfath;
let ow;
let magnificent;
let zenith;
let keepRunningAudio;
*/
function changeSpawnVolume(percent, name) {
    percent = Number(percent);
    if (!(isNaN(percent))) {
    if (percent > 100)
        percent = 100;
    allAudios[name].volume = (percent / 100);
    player.settings.audioSettings[name].volume = percent;
    }
}

let minMiningSpeed = 0;

function changeMinMiningSpeed(element) {
    elementValue = element.value;
    let num = elementValue === "" ? "none" : elementValue;
    num = Number(num);
    if (!isNaN(num)) {
        if (num > 25)
            num = 25;
        if (num < 0)
            num = 0;
        player.settings.minSpeed = num;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}

function toggleCaves() {
    if (player.settings.cavesEnabled) {
        player.settings.cavesEnabled = false;
        document.getElementById("caveToggle").style.backgroundColor = "#FF3D3D";
    }
    else {
        player.settings.cavesEnabled = true;
        document.getElementById("caveToggle").style.backgroundColor = "#6BC267";
    }
}

function updateCapacity(element) {
    elementValue = element.value;
    let value = elementValue === "" ? "none" : elementValue;
    value = Number(value);
    if (!(isNaN(value)) && value >= 250) {
        player.settings.baseMineCapacity = value;
        mineCapacity = value;
        flashGreen(element);
    } else {
        flashRed(element);
    }        
    document.getElementById("resetNumber").innerText = `${blocksRevealedThisReset} Revealed.`;
    displayArea();
}
function updateAutomineUpdateSpeed(element) {
    let speed = element.value;
    speed ??= "na";
    if (!isNaN(speed) && speed > 0) {
        player.settings.automineUpdate = speed;
        flashGreen(element);
    } else {
        flashRed(element);
    }
}
function shouldIgnore(ore) {
    return oreInformation.tierGrOrEqTo({"tier1": oreList[ore]["oreTier"], "tier2": "Sacred"});
}
let noLuck = "✴️🌹";     
function formatEventLayers(arr) {
    let layerOutput = "";
    for (let i = 0; i < arr.length; i++) {
        const toSearch = layerDictionary[arr[i]].layer;
        for (let i = toSearch.length - 1; i >= 0; i--) {
            if (oreList[toSearch[i]]["oreTier"] === "Layer") {
                layerOutput += `${toSearch[i]}, `;
                break;
            }
        }
    }
    layerOutput = layerOutput.substring(0, layerOutput.length - 2);
    return `in ${layerOutput}`;
}
function formatEventMonths(arr) {
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let monthOutput = "";
    for (let i = 0; i < arr.length; i++) {
        monthOutput += `${monthNames[arr[i]]}, `
    }
    monthOutput = monthOutput.substring(0, monthOutput.length - 2);
    return `${monthOutput}`;
}

const activeSounds = {};

function endOreSound(key) {
    if (activeSounds[key]) {
        if (activeSounds[key]) {
            activeSounds[key].pause();
            activeSounds[key].currentTime = 0;
            delete activeSounds[key];
        } 
    } 
}

function playOreSound(ore, x, y) {
    const key = `${y},${x}`;
    endOreSound(key)
    if (oreList[ore]["hasAudio"]) {
        const oreSound = new Audio(oreList[ore]["audiosrc"]);
        const volumeSet = (oreList[ore]["volume"] / 100);
        oreSound.volume = volumeSet
        oreSound.playbackRate = oreList[ore]["playbackSpeed"];
        oreSound.loop = true

        oreSound.preservesPitch = false;
        oreSound.mozPreservesPitch = false;
        oreSound.webkitPreservesPitch = false;
    
        oreSound.play();
        
        activeSounds[key] = oreSound;
        activeSounds[key]["rolloffDistance"] = oreList[ore]["rolloffDistance"];
        activeSounds[key]["maxVolume"] = volumeSet;
    }
}

let isPlacing = false;
function handleInventoryClick(element, from) {
    const ore = element.id.substring(0, element.id.length - 6);
    const elemInv = gameInfo.selectedInventory;
    transformTable[`${curY},${curX + 1}`] = {ore: ore, variant: elemInv + 1, isPlaced: true};
    if (isPlacing) {
        mine[curY][curX + 1] = {ore: ore, variant: elemInv+1, isPlaced: true}; 
        displayArea();
        playOreSound(ore, (curX + 1), curY)
    }
    else if (elemInv === 0) randomFunction(ore, from);
    else goToConvert(ore, elemInv);
}
function randomFunction(ore, cause, elem) {
    if ((cause === "inv" && player.settings.inventorySettings.invToIndex) || (cause === "crafting" && player.settings.inventorySettings.craftingToIndex)) {
        let layer = undefined;
        let world = currentWorld;
        if (ore === "❤️‍🔥")
            return;
        if (ore === "🕳️")
            return;
        if (!shouldIgnore(ore) || indexHasOre(ore)) {
            for (const worldList in indexOrder) {
                if (worldList !== "events") {
                    const list = indexOrder[worldList];
                    for (const layerIndex in list) {
                        const toSearch = list[layerIndex].l;
                        for (let i = 0; i < toSearch.length; i++) {
                            if (caveList[toSearch[i]] !== undefined) {
                                if (caveList[toSearch[i]].indexOf(ore) > -1 && ((ore === "estrogen???" || ore === "✡️") && toSearch[i] === "abysstoneCave")) {
                                    layer = toSearch[i];
                                    world = worldList;
                                    break;
                                }
                            }
                            else if (layerList[toSearch[i]].indexOf(ore) > -1) {
                                layer = toSearch[i];
                                world = worldList;
                                break;
                            }
                        }
                    }
                }
            }
            if (layer != undefined) {
                for (const s in indexOrder) {
                    for (const l in indexOrder[s]) {
                        if ((indexOrder[s][l].l.includes(layer)) && indexOrder[s][l].req()) {
                            toggleLounge();
                            if (showLoungeScreen.current !== "loungeOreIndex") showLoungeScreen("loungeOreIndex", document.querySelectorAll(".loungeMenuLocationButton")[6]);
                            addIndexLayers.current = String(world);
                            addIndexLayers(addIndexLayers.current);
                            createIndexCards(layer);
                            return;
                        }
                    }
                }
            }
        }
    }
}

function indexHasOre(ore) {
    return (playerInventory[ore]["normalAmt"] || playerInventory[ore]["electrifiedAmt"] || playerInventory[ore]["radioactiveAmt"] || playerInventory[ore]["explosiveAmt"]);
}
function indexVariants(ore) { 
    let imageOutput = "";
    let isImage = false;
    if (oreList[ore]["hasImage"]) {
        imageOutput = `<span class="${playerInventory[ore]["normalAmt"] ? "" : "blackoutImage"}"><img src="${oreList[ore]["src"]}" class="indexImageVariant"></img></span>`
        isImage = true;
    }
    return "" + (isImage ? imageOutput : (playerInventory[ore]["normalAmt"] ? ore : (`<span class='indexBlackout'>${ore}</span>`))) + (playerInventory[ore]["electrifiedAmt"] ? "⚡️" : "<span class='indexBlackout'>⚡️</span>") + (playerInventory[ore]["radioactiveAmt"] ? "☢️" : "<span class='indexBlackout'>☢️</span>") + (playerInventory[ore]["explosiveAmt"] ? "💥" : "<span class='indexBlackout'>💥</span>")
}
function switchToIndex(button, num) {
    if (num === 0) {
        if (player.settings.inventorySettings.invToIndex) {
            player.settings.inventorySettings.invToIndex = false;
            button.style.backgroundColor = "#FF3D3D";
        } else {
            player.settings.inventorySettings.invToIndex = true;
            button.style.backgroundColor = "#6BC267";
        }
    } else if (num === 1) {
        if (player.settings.inventorySettings.craftingToIndex) {
            player.settings.inventorySettings.craftingToIndex = false;
            button.style.backgroundColor = "#FF3D3D";
        } else {
            player.settings.inventorySettings.craftingToIndex = true;
            button.style.backgroundColor = "#6BC267";
        }
    }
    
}
const indexOrder = {
    1: {
        "worldOne" : {l: ["dirtLayer", "brickLayer", "foggyLayer", "waterLayer", "rockLayer", "radioactiveLayer", "cactusLayer",  "paperLayer", "giftLayer"], req: function() {return true;}},
        "worldOneCommons" : {l: ["worldOneCommons"], req: function() {return true;}},
        "worldOneSpecial1" : {l: ["fluteLayer"], req: function() {return indexHasOre("🪈") > 1000000}},
        "worldOneSpecial2" : {l: ["sillyLayer"], req: function() {return indexHasOre("🎂") > 1000000}},
        "worldOneSpecial3" : {l: ["unknownLayer"], req: function() {return indexHasOre("🟩") > 1000000}},
    },
    2: {
        "worldTwo" : {l: ["cloudLayer", "tvLayer", "doorLayer", "globeLayer", "chessLayer"], req: function() {return player.pickaxes["pickaxe13"]}},
        "worldTwoCommons" : {l: ["worldTwoCommons"], req: function() {return true;}},
        "worldTwoSpecial1" : {l: ["barrierLayer"], req: function() {return indexHasOre("✴️") > 0}},
        "worldTwoSpecial2" : {l: ["borderLayer"], req: function() {return indexHasOre("❌") > 1000000}},
    },
    1.1: {
        "subrealmOne" : {l: ["scLayer", "bnLayer", "knLayer", "vaLayer", "srLayer", "ocLayer", "catcatLayer"], req: function() {return player.sr1Unlocked}},
    },
    0.9: {
        "galactica" : {l: ["starLayer", "nebulaLayer", "voidLayer"], req: function() {return player.galacticaUnlocked}},
    },
    "caves" : {
        "caves1" : {l: ["bacteriaCave", "biohazardCave", "musicCave", "mysteryCave"], req: function() {return player.pickaxes["pickaxe5"]}},
        "caves2" : {l: ["ccCave", "moCave", "foCave", "axCave", "ioCave", "ggCave"], req: function() {return player.sr1Unlocked}},
        "caves3" : {l: ["watrCave"], req: function() {return player.pickaxes["pickaxe26"]}},
        "caves4" : {l: ["abysstoneCave"], req: function() {return indexHasOre("🕳️") > 100000}},
    },
    "events" : {
        "events1" : {l: ["event"], req: function() {return true;}}
    }
}
function addIndexLayers(world) {
    const elems = document.getElementsByClassName("loungeLayerSelector");
    for (let i = elems.length - 1; i >= 0; i--) elems[i].remove();
    for (const layer in indexOrder[world]) {
        let list = indexOrder[world][layer].l;
        let thisUnlocked = indexOrder[world][layer].req();
        for (let i = 0; i < list.length; i++) {
            const button = document.createElement("button");
            button.classList = "loungeLayerSelector";
            if (thisUnlocked) {
                let allOres;
                if (world === "caves") allOres = caveList[list[i]];
                else if (world === "events") {allOres = ["🟩"]}
                else allOres = layerList[list[i]];
                const thisMat = getIndexLayerOre(allOres);
                if (layer.indexOf("worldOneSpecial") === -1) {
                    if (world === "caves") button.textContent = `${thisMat} 0-∞m`;
                    else if (list[i].indexOf("Commons") > -1) button.textContent = `${allOres[allOres.length-1]} 0-∞m`;
                    else if (list[i] === "event") button.textContent = "Limited Ores"
                    else if (world === "2") {
                        if (thisMat === "✖️") button.textContent = `${thisMat} ${8000}m`
                        else if (thisMat === "❌") button.textContent = `${thisMat} ${8001}-∞m`
                        else button.textContent = `${thisMat} ${(i - 1) * 2000}m`
                    } else button.textContent = `${thisMat} ${i * 2000}m`
                } else {
                    button.textContent = `${thisMat} ????m`
                }
                button.setAttribute("onclick", `createIndexCards("${list[i]}")`);
                button.classList.add(`indexButton${list[i]}`);
                if (createIndexCards.indexing === list[i]) button.classList.add("currentIndexWorld")
            } else {
                button.textContent = "[Research Required]";
                button.disabled = true;
            }
            get("loungeLayersHolder").appendChild(button);
        }
    }
}
addIndexLayers.current = "1";
function nextLayers(num) {
    if (num !== 0) {
        const l = Object.keys(indexOrder);
        const i = l.indexOf(String(addIndexLayers.current));
        const g = l.splice(i + num, 1);
        addIndexLayers.current = (g[0] !== undefined ? g[0] : "1");
        addIndexLayers(addIndexLayers.current);
    }
}
function getIndexLayerOre(list) {
    for (let i = list.length - 1; i >- 0; i--) {
        if (oreList[list[i]]["oreTier"] === "Layer") return list[i];
    }
    return undefined;
}
function createIndexCards(layer) {
    const r = document.getElementsByClassName("currentIndexWorld");
    for (let i = 0; i < r.length; i++) r[i].classList.remove("currentIndexWorld");
    const n = document.getElementsByClassName(`indexButton${layer}`);
    if (n.length > 0) n[0].classList.add("currentIndexWorld");
    createIndexCards.indexing = layer;
    const h = get("loungeCardHolder");
    const ic = layer.indexOf("Commons") > -1
    while (h.firstChild) h.firstChild.remove();
    let list;
    if (caveList[layer] === undefined) {
        if (ic) list = [...layerList[layer]];
        else if (layer === "event") {
            list = Object.keys(limitedOres); 
            list.splice(list.indexOf("draedon"), 1); 
            list.splice(list.indexOf("🦋"), 1); 
            list.splice(list.indexOf("😻"), 1);
            for (let i = 0; i < list.length; i++) {
                for (let j = 0; j < list.length - i - 1; j++) {
                    let rarity1 = oreList[list[j]]["numRarity"];
                    let rarity2 = oreList[list[j + 1]]["numRarity"];
                    if (rarity1 < rarity2) {
                        const lesser = list[j + 1];
                        list[j + 1] = list[j];
                        list[j] = lesser;
                    }
                }
            }
        }
        else list = [...layerDictionary[layer].layer];

        for (let i = list.length - 1; i >= 0; i--) {
            const ore = list[i];
            const tier = oreList[ore]["oreTier"];
            if (((!oreInformation.tierGrOrEqTo({"tier1":tier, "tier2": "Mystical"}) && !ic) || tier === "Celestial") && ore !== "✴️") list.splice(i, 1);
        }
    } else {
        list = [...caveList[layer]];
        for (let i = list.length - 1; i >= 0; i--) {
            const ore = list[i];
            const tier = oreList[ore]["oreTier"];
            if (tier === "Celestial" || tier === "Layer") list.splice(i, 1);
        }
    }
    for (key in list) {
        const copying = get("indexCardCopy").cloneNode(true);
        copying.id = "";
        get("loungeCardHolder").prepend(copying);
        const ore = list[key];
        const tier = oreList[ore]["oreTier"];
        const hide = (oreInformation.tierGrOrEqTo({"tier1":tier, "tier2":"Sacred"}) && oreList[ore]["foundAt"] === undefined) && indexHasOre(ore) === 0;
        if (oreList[ore]["hasImage"]) {
            document.querySelector(".indexCardOre").innerHTML = `<span class="indexCardImageOre ${hide ? "indexCardBlackout" : ""}"><img src="${oreList[ore]["src"]}"></span>`;
        } else {
            document.querySelector(".indexCardOre").innerHTML = `<span class="${hide ? "indexCardBlackout" : ""}">${ore}</span>`;
        }
        let e = document.querySelector(".indexCardTier").children[0];
        let colors = oreInformation.getColors(tier)
        e.style.color =  colors["backgroundColor"];
        e.innerHTML = e.innerHTML.replace("Polychromatical", tier);
        const f = playerInventory[ore]["foundAt"];
        document.querySelector(".indexCardFound").textContent = `${hide || (indexHasOre(ore) === 0 && f === undefined) ? "Never Found!" : (f === undefined ? "No Date Detected!" : new Date(f).toUTCString())}`;
        if (caveList[layer] !== undefined) {
            document.querySelector(".indexCardLuck").textContent = `${hide ? "1/??? Base Rarity" : `1/${(oolProbabilities[ore] !== undefined ? formatIndexNum(1/oolProbabilities[ore]) : formatIndexNum(oreList[ore]["numRarity"]))} Base Rarity`}`;
            document.querySelector(".indexCardRng").textContent = `${hide ? "1/??? Adjusted" : `1/${(oolProbabilities[ore] !== undefined ? formatIndexNum(1/oolProbabilities[ore] * getCaveMulti(layer)) : formatIndexNum(oreList[ore]["numRarity"] * getCaveMulti(layer)))} Adjusted`}`;
        } else {
            document.querySelector(".indexCardLuck").textContent = `${hide ? "1/??? Base Rarity" : `1/${formatIndexNum(oreList[ore]["numRarity"])} Base Rarity`}`;
            if (player.settings.simulatedRng || pickaxeStats[player.stats.currentPickaxe].isDimensional) {
                let bulkAmt = 0;
                let pickaxe = pickaxeStats[player.stats.currentPickaxe];
                if (player.stats.currentPickaxe === "pickaxe27") bulkAmt = pickaxe[player.upgrades["pickaxe27"].level].mined;
                else bulkAmt = pickaxe.mined;
                if (player.gears["gear41"]) bulkAmt += 50000;
                if (player.gears["gear34"]) bulkAmt = Math.floor(bulkAmt*2);
                if (player.gears["gear39"]) bulkAmt = Math.floor(bulkAmt*3);
                const rarity = oreList[ore]["decimalRarity"] * bulkAmt;
                if (rarity > 1) document.querySelector(".indexCardRng").textContent = `${hide ? "Guaranteed ??? With Simulated" : `Guaranteed ${formatNumber(Math.floor(rarity))}x With Simulated.`}`;
                else document.querySelector(".indexCardRng").textContent = `${hide ? "1/??? With Simulated" : `1/${formatIndexNum(Math.floor(1/oreList[ore]["decimalRarity"]))} With Simulated.`}`;
            } else {
                document.querySelector(".indexCardRng").textContent = `${hide ? "1/??? With Luck" : `1/${formatIndexNum(Math.floor(1/oreList[ore]["decimalRarity"]))} With Luck`}`;
            }
        }
        document.querySelector(".indexCardVariants").innerHTML = indexVariants(ore);
        if (layer === "event") document.querySelector(".indexCardEvent").textContent =`${formatEventMonths(limitedOres[ore].timeValues)} ${formatEventLayers(limitedOres[ore].layers)}`;
        if (oreList[ore]["hasImage"] && !hide) document.querySelector(".indexCardBackground").style.backgroundImage = `url("${oreList[ore]["src"]}")`;
        else if (!hide) document.querySelector(".indexCardBackground").textContent = ore;
        if (!hide) document.querySelector(".indexCardBackground").style.background = colors["backgroundColor"];
        copying.remove();
        get("loungeCardHolder").appendChild(copying);
    }
}
createIndexCards.indexing = undefined;
function formatIndexNum(num) {
    if (num >= 1000000000000000) return formatNumber(num, 2);
    else return num.toLocaleString();
}
let testSoundTimeout = null;
function testSound(name, element) {
    if (allAudios[name].currentTime === 0) {
        toggleLounge();
        playSound(name);
        element.style.backgroundColor = "#6BC267";
        allAudios[name].onended = (event) => {
            allAudios[name].onended = "";
            element.style.backgroundColor = "#FF3D3D";
            allAudios[name].pause();
            allAudios[name].currentTime = 0;
            clearTimeout(testSoundTimeout);
            get("blockContainer").style.animation = "";
            get("blockDisplay").style.animation = "";
        };
    } else {
        allAudios[name].onended = "";
        allAudios[name].pause();
        allAudios[name].currentTime = 0;
        element.style.backgroundColor = "#FF3D3D";
        clearTimeout(testSoundTimeout);
        get("blockContainer").style.animation = "";
        get("blockDisplay").style.animation = "";
    }
}
function enableDisguisedChills() {
    if (player.settings.useDisguisedChills) {
        player.settings.useDisguisedChills = false;
        document.getElementById("disguisedChills").style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.useDisguisedChills = true;
        document.getElementById("disguisedChills").style.backgroundColor = "#6BC267";
    }
}
function switchFont() {
    if (player.settings.usingNewEmojis) {
        player.settings.usingNewEmojis = false;
        document.body.style.fontFamily = "";
        document.getElementById("switchFont").style.backgroundColor = "#FF3D3D";
    } else {
        player.settings.usingNewEmojis = true;
        document.body.style.fontFamily = `system-ui, Tahoma, Verdana, sans-serif, Noto Color Emoji`;
        document.getElementById("switchFont").style.backgroundColor = "#6BC267";
    }
}
let minTier = "Antique";
function changeSpawnMessageRarity(button) {
    player.settings.minRarityNum++;
    if (player.settings.minRarityNum > 9) player.settings.minRarityNum = 0;
    minTier = oreInformation.getTierAt(player.settings.minRarityNum + 6);
    button.innerText = "Minimum Spawn Message Tier: " + minTier + "+";
    let colors = oreInformation.getColors(minTier);
    button.style.color = colors["textColor"]
    button.style.backgroundImage = "linear-gradient(to right, " + colors["backgroundColor"] + " 70%, black)";
}
let timeUpdater;
function showTierStats(tier) {
    get("tierStatsHolder").style.display = "flex";
    get("playerStatisticsHolder").style.display = "none";
    get("currentTierInformation").style.display = "table";
    const ores = oreInformation.getOresByTier(tier);
    let completionAmt = 0;
    let totals = {
        "normalAmt": 0,
        "electrifiedAmt": 0,
        "radioactiveAmt": 0,
        "explosiveAmt": 0,
    }
    for (let i = 0; i < ores.length; i++) {
        let amts = 0;
        for (let j = 0; j < variantInvNames.length; j++) {
            totals[variantInvNames[j]] += playerInventory[ores[i]][variantInvNames[j]];
            amts += playerInventory[ores[i]][variantInvNames[j]];
        }
        completionAmt += amts > 0 ? 1 : 0;
    }
    const elems = document.getElementsByClassName("tierInfoRow");
    elems[0].textContent = "Variant Statistics For: " + tier;
    for (let i = 1; i < 5; i++) {
        elems[i].textContent = `${names[i - 1]} Amount: ${totals[variantInvNames[i - 1]] > 1000000000 ? formatNumber(totals[variantInvNames[i - 1]], 3) : totals[variantInvNames[i - 1]].toLocaleString()}`;
    }
    elems[5].textContent = `Completion Progress: ${Math.round(completionAmt / ores.length * 10000)/100}% at ${completionAmt}/${ores.length}`;
}
function updateTimes() {
    get("tierStatsHolder").style.display = "none";
    get("playerStatisticsHolder").style.display = "inline-flex";
    get("currentTierInformation").style.display = "none";
    document.getElementById("statsTotalTime").textContent = `${longTime(player.stats.timePlayed)} Time Played.`;
    document.getElementById("statsSessionTime").textContent = `${longTime(Date.now() - verifiedOres.getStartTime())} Session Time.`;
    document.getElementById("statsCavesGenerated").textContent = `${player.stats.cavesGenerated.toLocaleString()} Caves Generated.`;
    document.getElementById("statsBlocksMined").textContent = `${player.stats.blocksMined.toLocaleString()} Blocks Mined.`;
    get("statsSessionReset").textContent = `${(player.stats.minesReset - player.startingResets).toLocaleString()} Session Resets.`
    get("statsReset").textContent = `${player.stats.minesReset.toLocaleString()} Total Resets.`
    get("furthestPosX").textContent = `${player.stats.furthestPosX - 1000000} Furthest X.`
    get("furthestNegX").textContent = `${player.stats.furthestNegX - 1000000} Furthest -X.`
    get("furthestY").textContent = `-${player.stats.furthestY} Furthest Y.`;
    get("sessionMined").textContent = `${formatNumber((player.stats.blocksMined-player.startingBlocks), 3)} Session Mined.`
}
function calcAverageSpeed() {
    if (movementsX > 0) {
        const timeUsing = Date.now();
        const totalMoves = 1000 * (movementsX / (timeUsing - lastXCheck));
        movementsX = 0;
        lastXCheck = timeUsing;
        lastXValues.push(totalMoves);
        if (lastXValues.length > 10) lastXValues.splice(0, 1);
        let total = 0;
        for (let i = 0; i < lastXValues.length; i++) total += lastXValues[i];
        total /= lastXValues.length;
        return total;
    }
}
function longTime(milliseconds) {
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    let days = Math.floor((milliseconds / 1000 / 60 / 60 / 24) % 365);
    let years = Math.floor((milliseconds / 1000 / 60 / 60 / 24 / 365));
    const finalTime = [
        years.toString().padStart(20, "0"),
        days.toString().padStart(3, "0"),
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":");
    for (let i = 0; i < finalTime.indexOf(":") + 1; i++) if (finalTime[i] !== "0") {
        return (finalTime[i] === ":" ? finalTime.substring(i + 1) : finalTime.substring(i));
    }
    return finalTime;
}
function switchHighRarity(element) {
    const value = Number(element.value);
    if (!isNaN(value) && value > 0) {
        player.settings.minLogRarity = value;
        flashGreen(element);
    } else {
        flashRed(element)
    }
}
function setWebhookLink(element) {
    if (element.value !== "") {
        player.webhookKey = element.value;
        flashGreen(element);
    } else {
        player.webhookKey = undefined;
        flashGreen(element);
    }
}
function createWebhookId(parent) {
    const children = parent.children;
    const webhookName = children[0].children[0].value;
    const rarityNum = Number(children[1].children[0].value);
    const idName = children[2].children[0].value;
    const webhookLink = children[3].children[0].value;
    if (isNaN(rarityNum) || webhookLink === undefined || idName === undefined || webhookName === undefined) return;
    if (player.webHook.ids[idName] !== undefined) {
        removeWebhookId(undefined, idName);
    }
    player.webHook.ids[idName] = {name: webhookName, rarity:rarityNum, link:webhookLink}
    parent.remove();
    addToCreated(idName);
}
function addToNew() {
    const element = get("newHookCopyable").cloneNode(true);
    element.id = "";
    if (get("customHookContainer").children.length < 2) {
        get("customHookContainer").appendChild(element);
    }
}
function addToCreated(id) {
    const element = get("createdHookCopyable").cloneNode(true);
    element.id = "";
    const children = element.children;
    children[0].textContent = player.webHook.ids[id].name;
    children[1].textContent = player.webHook.ids[id].rarity;
    children[2].textContent = id;
    get("createdWebhooks").appendChild(element);
}
function removeWebhookId(element, id) {
    let toRemove;
    if (id === undefined) {
        toRemove = element.children[2].textContent;
    }
    else toRemove = id;
    if (player.webHook.ids[toRemove] !== undefined) delete player.webHook.ids[toRemove];
    if (element === undefined) {
        const toSearch = get("createdWebhooks").children;
        for (let i = 0; i < toSearch.length; i++) {
            if ( i > 0 && toSearch[i].children[2].textContent === toRemove) {toSearch[i].remove(); break;}
        }
    } else {
        element.remove();
    }

}
const conversionRates = {
    "Electrified" : 5,
    "Radioactive" : 10,
    "Explosive" : 30
}
let hasConverted = false;
let isErroring = false;
function convertVariant(type) {
    const multi = conversionRates[type];
    for (const ore in playerInventory) {
        if (playerInventory[ore][variantInvNames[names.indexOf(type)]] - 1 > 0) {
            playerInventory[ore]["normalAmt"] += ((playerInventory[ore][variantInvNames[names.indexOf(type)]] - 1) * multi);
            playerInventory[ore][variantInvNames[names.indexOf(type)]] -= (playerInventory[ore][variantInvNames[names.indexOf(type)]] - 1);
            inventoryObj[ore] ??= 0;
        }
    }
    resetVariantVals();
}
function convertOre(ore, amt, type) {
    if (playerInventory[ore] === undefined) {oreNotFound(); return;}
    if (isErroring) return;
    amt = Number(amt);
    const multi = conversionRates[type];
    if (amt <= playerInventory[ore][variantInvNames[names.indexOf(type)]] && amt > 0 && !isNaN(amt)) {
        playerInventory[ore]["normalAmt"] += amt*multi;
        playerInventory[ore][variantInvNames[names.indexOf(type)]] -= amt;
        inventoryObj[ore] ??= 0;
    } else {
        notEnoughOre();
        return;
    }
    if (ore === "🧱" && amt === 1337 && type === "Electrified") {
        typeWriter("<i>The ground shakes beneath you as something makes its presence known...</i>", 3);
        eventSpawn.currentTime = 0;
        eventSpawn.play();
        toggleLounge();
        hasConverted = true;
    }
    resetVariantVals();
}
function allButOne(ore) {
    if (playerInventory[ore] === undefined) {oreNotFound(); return;}
    if (isErroring) return;
    for (let i = 1; i < 4; i++) {
        const multi = conversionRates[names[i]]
        if (playerInventory[ore][variantInvNames[i]] - 1 > 0) {
            playerInventory[ore]["normalAmt"] += (playerInventory[ore][variantInvNames[i]] - 1) * multi;
            playerInventory[ore][variantInvNames[i]] -= (playerInventory[ore][variantInvNames[i]] - 1);
            inventoryObj[ore] ??= 0;
        }
    }
    resetVariantVals();
}
function resetVariantVals() {
    get("variantInputName").value = "";
    get("variantInputAmt").value = "";
}
function oreNotFound() {
    const editing = get("variantInputName");
    const input = editing.value;
    editing.value = "Ore Not Found!";
    editing.style.color = "var(--better-red)";
    setTimeout(() => {
        editing.value = input;
        editing.style.color = "white";
    }, 1000);
}
function notEnoughOre() {
    const editing = get("variantInputAmt");
    const input = editing.value;
    editing.value = "Invalid Amount!";
    editing.style.color = "var(--better-red)";
    setTimeout(() => {
        editing.value = input;
        editing.style.color = "white";
    }, 1000);
}
function timeSinceLastAutosave() {
    let milliseconds = (cloudsaving.save_interval - (cloudsaving.next_save_time - Date.now()));
    let seconds = Math.floor((milliseconds / 1000) % 60);
    let minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    let hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);
    document.getElementById("lastAutosave").innerHTML = `Time Since Last Galaxy Cloud Save: ${[
        hours.toString().padStart(2, "0"),
        minutes.toString().padStart(2, "0"),
        seconds.toString().padStart(2, "0")
    ].join(":")}`;
}
function toggleSpawnEffects(button) {
    if (player.settings.doSpawnEffects) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.doSpawnEffects = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.doSpawnEffects = true;
    }
}
function toggleNyerd(button) {
    if (player.settings.useNyerd) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.useNyerd = false;
        document.getElementById("nyerd").style.display = "none";
        document.getElementById("trackerArrow").style.display = "block";
        if (player.oreTracker.tracking) {
            getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
        }
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.useNyerd = true;
        document.getElementById("trackerArrow").style.display = "none";
        document.getElementById("nyerd").style.display = "block";
        if (player.oreTracker.tracking) {
            getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
        }
    }
    removeTrackerInformation();
}
function toggleSimulatedRng(button) {
    if (player.settings.simulatedRng) {
        button.style.backgroundColor = "#FF3D3D";
        player.settings.simulatedRng = false;
    } else {
        button.style.backgroundColor = "#6BC267";
        player.settings.simulatedRng = true;
    }
    updateAllLayers();
}
function toggleAccurateSpeed(button) {
    if (player.settings.accurateSpeed) {
        button.style.backgroundColor = "var(--better-red)";
        player.settings.accurateSpeed = false;
    } else {
        button.style.backgroundColor = "var(--better-green)";
        player.settings.accurateSpeed = true;
    }
    updateAllLayers();
}
function togglePlacement() {
    const placer = get("toggleOrePlacer");
    if (isPlacing) {
        placer.style.border = "0.1vw solid red";
        placer.style.boxShadow = "0px 0px 0.5vw red";
        isPlacing = false;
    } else {
        placer.style.border = "0.1vw solid green";
        placer.style.boxShadow = "0px 0px 0.5vw green";
        isPlacing = true;
    }
}
function goToConvert(ore, variant) {
    toggleLounge();
    if (showLoungeScreen.current !== "loungeForgeAndVariants") showLoungeScreen("loungeForgeAndVariants", document.querySelectorAll(".loungeMenuLocationButton")[9]);
    document.getElementById("variantInputName").value = ore;
    document.getElementById("variantInputAmt").value = playerInventory[ore][variantInvNames[variant]];
}
let inafk = false
function AFKmode(button){
    if(!inafk){
        get("loungeExit").textContent = "bnack";
        button.style.backgroundColor = "var(--better-green)"
    } else {
        get("loungeExit").textContent = "Exit";
        button.style.backgroundColor = "var(--better-red)"
    }
    inafk = !inafk
}
function convertAllButOne() {
    let ore = document.getElementById("oreInput").value;
    ore = ore.replaceAll(" ", "");
    if (oreList[ore] !== undefined) {
        const elecAmt = playerInventory[ore]["electrifiedAmt"] - 1;
        const radiAmt = playerInventory[ore]["radioactiveAmt"] - 1;
        const explAmt = playerInventory[ore]["explosiveAmt"] - 1;
        const uses = [false, false, false];
        const amts = [elecAmt, radiAmt, explAmt]
        if (elecAmt > 0) uses[0] = true;
        if (radiAmt > 0) uses[1] = true;
        if (explAmt > 0) uses[2] = true;
        for (let i = 1; i < 4; i++) {
            if (uses[i - 1]) {
                playerInventory[ore][variantInvNames[i]] -= amts[i - 1];
                playerInventory[ore]["normalAmt"] += (amts[i - 1] * conversionRates[i - 1])
            }
        }
        inventoryObj[ore] = 0;
    } else return;
}
function toggleStopRareList() {
const element = get("stopOnRareList");
const editingButton = get("stopOnRareDisplay")
if (element.style.display === "none") {
    element.style.display = "inline-flex"; 
    editingButton.textContent = "Hide Tiers"; 
}
  else {
    element.style.display = "none"; 
    editingButton.textContent = "Show Tiers"; 
  }
}
function allowList(tier) {
    const currentList = player.settings.stopOnRare.allowList;
    let removing = false;
    for (let i = 0; i < currentList.length; i++) if (currentList[i] === tier) {removing = true; break;}
    if (removing) player.settings.stopOnRare.allowList.splice(currentList.indexOf(tier), 1);
    else (player.settings.stopOnRare.allowList.push(tier));
    const elementsToSearch = document.getElementsByClassName("stopOnRareTier");
    for (let i = 0; i < elementsToSearch.length; i++) if (elementsToSearch[i].textContent === tier) elementsToSearch[i].style.color = (removing ? "#FF3D3D" : "#6BC267");
}
function toggleSpawnMessageList() {
    const element = get("spawnTierList");
    const editingButton = get("changeSMrarityDisplay")
    if (element.style.display === "none") {
        element.style.display = "inline-flex"; 
        editingButton.textContent = "Hide Spawn Message Tiers"; 
    }
      else {
        element.style.display = "none"; 
        editingButton.textContent = "Show Spawn Message Tiers"; 
      }
    }
function allowMessage(tier) {
    const currentList = player.settings.spawnMessageTiers;
    let removing = false;
    for (let i = 0; i < currentList.length; i++) if (currentList[i] === tier) {removing = true; break;}
    if (removing) player.settings.spawnMessageTiers.splice(currentList.indexOf(tier), 1);
    else (player.settings.spawnMessageTiers.push(tier));
    const elementsToSearch = document.getElementsByClassName("spawnMessageTier");
    for (let i = 0; i < elementsToSearch.length; i++) if (elementsToSearch[i].textContent === tier) elementsToSearch[i].style.color = (removing ? "#FF3D3D" : "#6BC267");
}
const portalLocations = {
    1: {
        title: "World One",
        desc: "The Main Silly Caverns World!<br><br>All gears work here!<br><br>All pickaxes work here!<br><br>Unlock Requirement: None!<br><br>\"<i>Where the sillies all began...</i>\" - Remsy",
        req: function() {return true;},
        to: 1,
        hue: "0deg",
        url: "worldOneImage.png"
    },
    2: {
        title: "World Two",
        desc: "The Second Silly Caverns World!<br><br>RNG Manipulator, Ore Tracker, Abyssal Leaper, Subrealm One, watr, and Galactica gears work here!<br><br>Galactica and watr pickaxes work here!<br><br>Unlock Requirement: The Key!<br><br>\"<i>The world thats just using all the unused stuff</i>\" - Remsy",
        req: function() {return player.pickaxes["pickaxe13"];},
        to: 2,
        hue: "-40deg",
        url: "worldTwoImage.png"
    },
    1.1: {
        title: "Subrealm One",
        desc: "The World of Flags!<br><br>Ore Tracker, Abyssal Leaper, Statistical Amplifier, Structural Service, Infinity Collector work here!<br><br>Tree of Life works here!<br><br>Unlock Requirement: 1 Flawless Tier Ore!<br><br>\"<i>The dreaded world of flags, the only good one being the trans flag</i>\" - Remsy",
        req: function() {return player.sr1Unlocked;},
        to: 1.1,
        hue: "40deg",
        url: "subrealmOneImage.png"
    },
    0.9: {
        title: "Galactica",
        desc: "The Endgame World!<br><br>All gears work here!<br><br>Undersea Eviscerator works here!<br><br>Unlock Requirement: Omnipotent God of The Mine!<br><br>\"<i>Sometimes when I look up into the sky, I can see cheese</i>\" - Remsy",
        req: function() {return player.galacticaUnlocked || indexHasOre("Omnipotent God of The Mine") > 0;},
        to: 0.9,
        hue: "190deg",
        url: "galacticaImage.png"
    },
    1.2: {
        title: "watr watr",
        desc: "watr watr!<br><br>All gears work here!<br><br>Null Chroma, Galactica Pickaxes work here!<br><br>Unlock Requirement: Visit Watr Once!<br><br>\"<i>All I have to say is watr watr watr watr</i>\" - Remsy",
        req: function() {return player.watrEntered;},
        to: 1.2,
        hue: "150deg",
        url: "watrWorldImage.webp"
    },
}
function displayWorldInformation(world) {
    const info = portalLocations[world];
    get("worldTitle").textContent = info.title;
    get("worldDescription").innerHTML = info.desc;
    const unlocked = isUnlocked(world);
    if (unlocked) get("portalLock").style.display = "none";
    else get("portalLock").style.display = "block";
    get("worldPortal").style.filter = isUnlocked(world) ? `hue-rotate(${info.hue})` : "grayscale(1)";
    get("loungeWorldImage").style.backgroundImage = `url("media/${info.url}")`;
}
function switchPortal(event) {
    if (event.deltaY > 0) {
        const portals = Object.keys(portalLocations);
        const index = portals.indexOf(String(switchPortal.currentPortal)) - 1;
        switchPortal.currentPortal = index < 0 ? portals[portals.length-1] : portals[index];
    } else {
        const portals = Object.keys(portalLocations);
        const index = portals.indexOf(String(switchPortal.currentPortal)) + 1;
        switchPortal.currentPortal = index > portals.length-1 ? portals[0] : portals[index];
    }
    switchPortal.currentPortal = Number(switchPortal.currentPortal);
    displayWorldInformation(switchPortal.currentPortal);
}
switchPortal.currentPortal = 1;
function isUnlocked(portal) {
    return portalLocations[portal].req();
}
//SILLINESS BELOW!!!!!!!
function showCatText() {
    get("catStuff").style.display = "flex";
}
let curCatStep = 0;
let curCatMode = undefined;
function sillyKittyCat(text) {
    const catFaceOrder = [
        "ᓚᘏᗢ",
        "≽^•⩊•^≼",
        "ദ്ദി（• ˕ •マ.ᐟ",
        "ᓚ₍ ^. .^₎",
        "BALLIN CAT 43",
        "•⩊•",
        "/ᐠ｡‸｡ᐟ\\",
        "₊˚⊹♡ ᓚ₍ ^. .^₎",
        "⎛⎝ ≽  >  ⩊   < ≼ ⎠⎞",
        "ᨐᵉᵒʷ",
        "/ᐠ˵- ⩊ -˵マ",
        "I LOVE CATLAND CENTRAL",
        "◕⩊◕"
    ]
    if (curCatMode === undefined) {
        if (text === catFaceOrder[0]) curCatMode = "goober";
        else if (text === "crunchycat") curCatMode = "luna2";
    }
    if (curCatMode === "goober") {
        if (text === catFaceOrder[curCatStep]) {
            get("catText").value = "";
            curCatStep++;
            new Audio("audios/meow-1.mp3").play();
            if (curCatStep === catFaceOrder.length) {
                typeWriter("WHY DO YOU KNOW SO MANY CAT EMOTICONS YOU FUCKING FURRY :SOB:", 3);
                get("catStuff").style.display = "none";
                catstuff.layer = currentLayer;
                insertIntoLayers({ore: "Goober", layers:[currentLayer], "useLuck": true});
            }
        } else {
            new Audio("audios/meow-2.mp3").play();
            curCatStep = 0;
            get("catText").value = "";
            get("catStuff").style.display = "none";
            curCatMode = undefined;
        }
    } else if (curCatMode === "luna2") {
        const questions = [
            "Q: What is luna best at doing?",
            "Q: What does luna love crunching on?",
            "Q: How old is luna?",
            "Q: Where is luna from?",
            "Q: How many sauces tall is luna?",
        ]
        const answers = {
            0: {correct: "crunching", incorrect: "eeping, loafing, yammering"},
            1: {correct: "uranium", incorrect: "dog food, tree bark, car"},
            2: {correct: "5 years old", incorrect: "2 years old, 3 years old, 4 years old"},
            3: {correct: "Greece", incorrect: "United States, United Kingdom, Uganda"},
            4: {correct: "4 sauces", incorrect: "7 sauces, 3 sauces, 5 sauces"},
        }
        get("catText").value = "";
        if (text !== "crunchycat") {
            if (sillyKittyCat.lunaType === "C") {
                if (text === answers[sillyKittyCat.lunaNum].correct) {
                    new Audio("audios/meow-1.mp3").play();
                    sillyKittyCat.lunaType = "I";
                    get("catText").value = "";
                } else {
                    new Audio("audios/meow-2.mp3").play();
                    get("catText").value = "";
                    get("catStuff").style.display = "none";
                    curCatMode = undefined;
                }
            } else if (sillyKittyCat.lunaType === "I") {
                if (text === answers[sillyKittyCat.lunaNum].incorrect) {
                    sillyKittyCat.lunaNum++;
                    sillyKittyCat.lunaType = "C";
                    get("catText").value = "";
                    if (sillyKittyCat.lunaNum > 4) {
                        insertIntoLayers({ore: "luna2", layers:[currentLayer], "useLuck": true})
                        new Audio("audios/meow-1.mp3").play();
                        sillyKittyCat.lunaNum = 0;
                        get("catDescriptions").textContent = `I have nothing to say to you.`;
                        curCatMode = undefined;
                        get("catText").value = "";
                        get("catStuff").style.display = "none";
                        return;
                    }
                } else {
                    new Audio("audios/meow-2.mp3").play();
                    get("catText").value = "";
                    get("catStuff").style.display = "none";
                    curCatMode = undefined;
                }
            }
        }
        get("catDescriptions").textContent = `${questions[sillyKittyCat.lunaNum]} ${sillyKittyCat.lunaType === "C" ? "Enter correct answers:" : "Enter incorrect answers:"}`;
    }
}
sillyKittyCat.lunaNum = 0;
sillyKittyCat.lunaType = "C";
function toggleHideCompleted() {
    if (player.settings.hideCompleted) {
        player.settings.hideCompleted = false;
        get("hideCompleted").style.filter = "";
    } else {
        player.settings.hideCompleted = true;
        get("hideCompleted").style.filter = "invert(56%) sepia(33%) saturate(6891%) hue-rotate(89deg) brightness(123%) contrast(125%)";
    }
    updateActiveRecipe()
}
//lounge stuff down here
function updateLoungeStats() {
    const settings = player.loungeSettings;
    if (settings.updateElements) {
        get("updateLuck").textContent = `${player.displayStatistics.luck.toLocaleString()}x Luck`;
        const blocks = getAvgBlockSpeed();
        get("updateGenerations").textContent = `${formatNumber(blocks, 2)} Generations/Min`;
        get("updateLayer").textContent = `Mining In: ${getLayer(curY).layerMat}`
        const dir = curDirection;
        let selDir;
        if (curDirection === "w") selDir = "Up";
        else if (curDirection === "a") selDir = "Left (why?)";
        else if (curDirection === "s") selDir = "Down";
        else if (curDirection === "d") selDir = "Right";
        else selDir = "N/A";
        get("updateDirection").textContent = `Current Direction: ${selDir}`;
        const cl = verifiedOres.getCaveLuck();
        const ctl = verifiedOres.getCaveTypeLuck();
        const cm = verifiedOres.getCaveModifier();
        get("updateCL").textContent = `${cl}x Cave Luck`;
        get("updateCTL").textContent = `${ctl}x Cave Type Luck`;
        get("updateCM").textContent = `${cm} Cave Modifier`;
        const list = player.powerupCooldowns;
        const now = Date.now();
        let count = 0;
        for (let p in list) {
            if (now >= list[p].cooldown && list[p].unlocked) count++;
        }
        get("updatePowerups").textContent = `${count} Powerups Ready`;
        const cs = player.avgSpeed;
        const times = calcSpeed();
        const es = (1000/times.speed) * (times.reps) + times.extra;
        get("updateSpeed").textContent = `${Math.round(cs).toLocaleString()}/${Math.round(es).toLocaleString()} Speed`;
        let c = spawnMessage.count;
        get("updateOreCount").textContent = `${c > 0 ? `Ore Spawn Count: ${formatNumber(c, 2)}` : "No Ores Spawned Yet!"}`;
        let o = spawnMessage.lastOre;
        if (o !== undefined) get("updateLastOre").textContent = `Last Ore Spawned: ${o}`;
        let e = getCurrentEventOre();
        get("updateEvent").textContent = `Current Event: ${e === undefined ? "N/A" : e}`;
    }
}
function deleteMilestoneElements() {
    const elems = get("milestonesHolder").children;
    for (let i = elems.length - 1; i >= 0; i--) {
        if (!(elems[i].id.toLowerCase().includes("copy"))) elems[i].remove();
    }
}
