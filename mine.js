function createMine() {
    for (let r = curY - 101; r < curY + 101; r++) {
        if (r > -1)
            mine[r] = [];
    }
    mine[curY][1000000] = "⛏️"; //trusty pickaxe
    currentLayerNum = -1;
    setLayer(curY);
    checkAllAround(curX, curY, 1);
    displayArea();
}

function checkAllAround(x, y) {
    mine[y] ??= [];
    if (x - 1 >= 0) {
        if (mine[y][x - 1] === undefined) {
            generateBlock({"Y" : y, "X" : x-1}, curDirection === "a");
        }
    }
    if (mine[y][x + 1] === undefined) {
        generateBlock({"Y" : y, "X" : x+1}, curDirection === "d");
    }
    mine[y + 1] ??= [];
    if (mine[y + 1][x] === undefined) {
        generateBlock({"Y" : y + 1, "X" : x}, curDirection === "s"); 
    }
        
    if (y - 1 >= 0) {
        mine[y - 1] ??= [];
        if (mine[y - 1][x] === undefined) {
            generateBlock({"Y" : y - 1, "X" : x}, curDirection === "w");
        }
        
    }
}
//MINING
function mineBlock(x, y, cause) {
    let mineBlockOre;
    let mineBlockVariant;
    const key = `${y},${x}`;
    endOreSound(key)
    if (mine[y][x].ore !== undefined) {
        if (mine[y][x].isPlaced) {
            mine[y][x] = "⚪";
            checkAllAround(x, y); 
            return;
        }
        mineBlockOre = mine[y][x].ore;
        mineBlockVariant = mine[y][x].variant;
    } else {
        mineBlockOre = mine[y][x];
        mineBlockVariant = undefined;
    }
    if (mineBlockOre === "⚪") return;
    if (oreList[mineBlockOre]["isBreakable"]) {
        if (cause !== "infinity") checkAllAround(x, y);
        else placeLayerAround(x, y);
        if (oreList[mineBlockOre]["numRarity"] >= 750000) {
            if (checkFromCave({"X":x, "Y":y})["fromCave"]) {
                giveBlock({type: mineBlockOre, x:x, y:y, fromReset:false, fromCave:true, caveMulti:checkFromCave({"X":x, "Y":y})["multi"], variant:mineBlockVariant, amt:1});
                mine[y][x] = "⚪";
                checkAllAround(x, y);
                player.stats.blocksMined++;
                return;
            }
        }
        player.stats.blocksMined++;
        giveBlock({type: mineBlockOre, x:x, y:y, fromReset: cause === "reset", fromCave:undefined, caveMulti:undefined, variant:mineBlockVariant, amt:1});
        mine[y][x] = "⚪";
        (cause === "mining") ? rollAbilities() : undefined;
    }
}
function placeLayerAround(x, y) {
    mine[y + 1] ??= [];
    mine[y - 1] ??= [];
    if (mine[y + 1][x] === undefined) {mine[y + 1][x] = getLayerMaterial(getLayer(y + 1)); blocksRevealedThisReset++;}
    if (mine[y - 1][x] === undefined) {mine[y - 1][x] = getLayerMaterial(getLayer(y - 1)); blocksRevealedThisReset++;}
    if (mine[y][x + 1] === undefined) {mine[y][x + 1] = getLayerMaterial(getLayer(y)); blocksRevealedThisReset++;}
    if (mine[y][x - 1] === undefined) {mine[y][x - 1] = getLayerMaterial(getLayer(y)); blocksRevealedThisReset++;}

}
function getLayerMaterial(layer) {
    if (layer !== undefined) return layer.layerMat;
    else return undefined;
}
//ORE GENERATION AND OBTAINING

let multis = [1, 50, 250, 500];
//{type: x, x:x, y:y, fromReset:x, fromCave:x, caveMulti:x, variant:x}
function giveBlock(obj) {
    if (obj.type === "⚪") return;
    let oreRarity = oreList[obj.type]["numRarity"];
    let inv;
    if (obj.variant === undefined) {
        vInfo = rollVariant();
        if (player.gears["gear25"] && vInfo.v === 1) vInfo = rollVariant();
        inv = vInfo.v;
    } else {
        inv = obj.variant;
    }
    const layerMaterial = getLayer(obj.y).layerMat;
    if (currentWorld < 2 && player.gears["gear4"]) {
        playerInventory[layerMaterial]["normalAmt"]++;
    }
    playerInventory[obj.type][variantInvNames[inv - 1]] += obj.amt;
    if (oreRarity >= 750000) {
        if (obj.fromCave) {oreRarity *= obj.caveMulti;}
        if (player.gears["gear22"] && Math.random() < 1/10) {playerInventory[obj.type][variantInvNames[inv - 1]]++; obj.amt++;}
        if (currentWorld < 2 && player.gears["gear7"]) {gearAbility1();}
        if (messageIncluded(oreList[obj.type]["oreTier"])) {
            logFind(obj.type, obj.x, obj.y, namesemojis[inv - 1], player.stats.blocksMined, obj.fromReset, obj.amt, {cave: obj.fromCave, multi: obj.caveMulti}); 
        }
        if (oreList[obj.type]["oreTier"] === "Flawless") {
            if (!player.sr1Unlocked) {
                player.sr1Unlocked = true;
                displayMessage("sr1Unlocked");
                stopMining();
            }
        }
        if (obj.type === "Omnipotent God of The Mine") player.galacticaUnlocked = true;
        if (oreList[obj.type]["hasLog"] || oreRarity >= 160000000) {
            verifiedOres.verifyFind(mine[obj.y][obj.x], obj.y, obj.x, names[inv - 1], obj.amt);
        }
        if (Math.random() < 1/100000) {
            playerInventory["bitcoin"]["normalAmt"]++;
            inventoryObj["bitcoin"] = 0;
        }
        if (oreList[obj.type]["oreTier"] === "Hyperdimensional") {
            verifiedOres.addHyperdimensionalCount(obj.amt)
        }
        playerInventory[obj.type]["foundAt"] ??= Date.now();
    } else {
        if (oreRarity === 1) {
            if (player.gears["gear15"] && Math.random() < 0.5) playerInventory[obj.type]["normalAmt"] += 2;
            if (player.gears["gear26"] && Math.random() < 1/20) playerInventory[layerMaterial]["normalAmt"] += 30;
        } else {
            if (player.gears["gear13"] && Math.random() < 0.75) {
                playerInventory[obj.type]["normalAmt"]++;
            }
        }
    }
    
    inventoryObj[obj.type] = 0;
}
function rollVariant() {
    let vRand = {r: aleaRandom(), c:gameInfo.overallCount, s:gameInfo.seed, v: 1};
    vRand.rand = Math.round(vRand.r * 499 + 1)
    if (vRand.rand === 1) {vRand.v = 4;} // 1:500
    else if (vRand.rand <= 3) {vRand.v = 3;} // 1:250
    else if (vRand.rand <= 13) {vRand.v = 2;} // 1:50
    return vRand;
}
let cat = 1;
let mainProbabilityTable;
let mainGenerationTable;
let lunaY = 1;
const specialCases = "💙🌻🔋⌛🦾👀🌈🍃⛔🎉🔒📽️🧂🏯🖊️🏔️💔🩸💎🔮💠godOfTheMine♾️👁️";
function aleaRandom() {
    if (gameInfo.count === gameInfo.loopLength) {
        gameInfo.count = 0
        gameInfo.loops += 123000;
        rand = new Math.seedrandom(gameInfo.seed + String(gameInfo.loops));
    }
    gameInfo.count++;
    gameInfo.overallCount++;
    return rand();
}
const generateBlock = function(location, wbm) {
    wbm ??= false;
    blocksRevealedThisReset++;
    mainProbabilityTable = getLayer(location["Y"]);
    mainGenerationTable = mainProbabilityTable.probabilities;
    let arr = mainProbabilityTable.layer;
    if (location["Y"] === player.luna.layer && currentWorld === 1) {let lunaLayer = addLuna([...arr], [...mainGenerationTable]); arr = lunaLayer[0]; mainGenerationTable = lunaLayer[1];}
    const genVals = {rand: aleaRandom(), count: gameInfo.overallCount, seed: gameInfo.seed};
    const chosenValue = genVals.rand;
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = (low + high) >> 1;
        if (chosenValue >= mainGenerationTable[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    let blockToGive = arr[low];
    let oreRarity = oreList[blockToGive]["numRarity"];
    mine[location["Y"]][location["X"]] = blockToGive;
    if (oreRarity >= 750000) {
        let vInfo = rollVariant();
        if (player.gears["gear25"] && vInfo.v === 1) vInfo = rollVariant();
        const variant = vInfo.v;
        if (blockToGive === "sillyMiner") {
            const nextOre = layerDictionary[currentLayer].layer[layerDictionary[currentLayer].layer.indexOf("sillyMiner") + 1];
            if (oreList[nextOre]["numRarity"] >= 750000) mine[location["Y"]][location["X"]] = {ore: nextOre, variant:variant}; 
            else mine[location["Y"]][location["X"]] = nextOre;
            if (Math.floor(1/oreList[nextOre]["decimalRarity"] < 750000)) return;
            else blockToGive = nextOre;
        }
        if (specialCases.indexOf(blockToGive) > -1) {
            blockToGive = checkSpecials(blockToGive);
            mine[location["Y"]][location["X"]] = blockToGive;
        }
        mine[location["Y"]][location["X"]] = {ore: blockToGive, variant: variant};
        const tier = oreList[blockToGive]["oreTier"];
        if (oreList[blockToGive]["hasLog"]) {
            verifiedOres.createLog(location["Y"],location["X"],{ore: blockToGive, variant: variant}, new Error(), undefined, genVals, vInfo);
            verifiedOres.verifyLog(location["Y"], location["X"]);
        }
        playSound(oreList[blockToGive]["oreTier"], blockToGive);
        playOreSound(blockToGive, location["X"], location["Y"])
        if (messageIncluded(oreList[blockToGive]["oreTier"])) spawnMessage({block: blockToGive, location: location, caveInfo: undefined, variant: variant,});
        let canCollect = (currentWorld < 2 && (player.gears["gear3"] || player.gears["gear17"]));
        if (!canCollect) (canCollect = currentWorld === 2 && player.gears["gear17"]);
        if (tier === "Celestial" && !player.gears["gear28"]) canCollect = false;
        if (canCollect) mineBlock(location["X"], location["Y"], "infinity");
        if (blocksRevealedThisReset / mineCapacity >= 0.9) mineBlock(location["X"], location["Y"], "reset");
        if (player.settings.stopOnRare.active && stopIncluded(oreList[blockToGive]["oreTier"]) && !wbm) stopMining();
        if (currentActiveEvent !== undefined) {
            if (getCurrentEventOre() === blockToGive && blockToGive !== "🪸") endEvent();
        } 
    }
}
const bulkGenerate = function(y, amt, caveInfo, fromOffline) {
    const p = player.stats.currentPickaxe;
    if ((p === "pickaxe0" || p === "pickaxe13") && !fromOffline && caveInfo === undefined) return;
    player.stats.blocksMined += (caveInfo === undefined ? amt : 0);
    const originAmt = amt;
    const layer = getLayer(y);
    let generationInfo = {layer: [...layer.layer], probabilities: [...layer.probabilities], layerMat: layer.layerMat};
    const thisTable = (caveInfo !== undefined && caveInfo.type !== "currentLayer") ? [...caveList[caveInfo.type]] : [...generationInfo.layer];
    if (fromOffline) for (let i = thisTable.length - 1; i >= 0; i--) if (oreList[thisTable[i]]["oreTier"] === "Celestial") thisTable.splice(i, 1);
    const sm = (caveInfo !== undefined && caveInfo.type === "currentLayer");
    if (sm) caveInfo = undefined;
    const isCave = (!sm && caveInfo !== undefined);
    const results = {};
    const curCaveLuck = verifiedOres.getCaveLuck();
    for (let i = 0; i < thisTable.length; i++) {
        let estAmt;
        if (isCave) {
            if (caveInfo.type === "abysstoneCave") estAmt = amt*(1/oreList[thisTable[i]]["numRarity"])
            else if (oolProbabilities[thisTable[i]] !== undefined) estAmt = amt*(oolProbabilities[thisTable[i]]*curCaveLuck);
            else estAmt = amt*oreList[thisTable[i]]["decimalRarity"];
        } else {
            estAmt = amt*generationInfo.probabilities[generationInfo.layer.indexOf(thisTable[i])];
        }
        let oldEst = estAmt;
        const aleaVals = {rand: aleaRandom(), count: gameInfo.overallCount, seed: gameInfo.seed};
        if (aleaVals.rand < estAmt%1) estAmt++;
        estAmt = Math.floor(estAmt);
        results[thisTable[i]] = {est: estAmt, rand: oldEst, c: aleaVals}
        amt -= estAmt;
        if (estAmt > 0 && specialCases.indexOf(thisTable[i]) > -1 && !isCave && !fromOffline) {
            const celestialRoll = checkSpecials(thisTable[i], true);
            if (celestialRoll.c !== thisTable[i]) {
                oreList[celestialRoll.c]["decimalRarity"] = oreList[thisTable[i]]["decimalRarity"]/celestialRoll.r;
                let cEstAmt = results[thisTable[i]].est*(1/celestialRoll.r);
                let cOldEst = cEstAmt;
                if (results[thisTable[i]].rand < 1) cOldEst*=results[thisTable[i]].rand;
                const celestialVals = {rand: aleaRandom(), count: gameInfo.overallCount, seed: gameInfo.seed};
                if (cEstAmt < 1 && celestialVals.rand < cEstAmt) cEstAmt++;
                cEstAmt = Math.floor(cEstAmt);
                results[thisTable[i]].est -= cEstAmt;
                results[celestialRoll.c] = {est: cEstAmt, rand: cOldEst, c:celestialVals}
            }
        }
    }
    let rngModifier = 1;
    if (originAmt > 35899) {
        rngModifier = originAmt/35899;
    }
    if (!sm && results["sillyMiner"]) delete results["sillyMiner"];
    for (let blockToGive in results) {
        if (results[blockToGive].est > 0) {
            if (results[blockToGive].est > 1e308) results[blockToGive].est = 1e308;
            let rng;
            if (rngModifier > 1) {
                rng = results[blockToGive].rand;
                rng /= originAmt;
                rng *= rngModifier;
            } else {
                rng = oreList[blockToGive]["decimalRarity"];
            }
            if (isCave) {
                if (caveInfo.type === "abysstoneCave") rng = 1/oreList[blockToGive]["numRarity"];
                else if (oolProbabilities[blockToGive] !== undefined) rng = oolProbabilities[blockToGive]*curCaveLuck;
                else rng = oreList[blockToGive]["decimalRarity"]*curCaveLuck;
                rng/=caveInfo.multi;
                if (oreList[blockToGive]["oreTier"] === "Layer") rng = 1;
            }
            let wasDuped = false;
            if (results[blockToGive].rand >= 1 && !isCave) rng = 1;
            let variantDivide = player.gears["gear25"] ? 2 : 1;
            let totalVariants = 0;
            //do silly stuff here
            playerInventory[blockToGive]["foundAt"] ??= Date.now();
            if (oreList[blockToGive]["numRarity"] >= 750000) {
                if (Math.random() < 1/100000) {
                    playerInventory["bitcoin"]["normalAmt"]++;
                    inventoryObj["bitcoin"] = 0;
                }
                if (oreList[blockToGive]["oreTier"] === "Flawless") {
                    if (!player.sr1Unlocked) {
                        player.sr1Unlocked = true;
                        displayMessage("sr1Unlocked");
                        stopMining();
                    }
                }
                if (blockToGive === "Omnipotent God of The Mine") player.galacticaUnlocked = true;
                if (currentActiveEvent !== undefined) {
                    if (getCurrentEventOre() === blockToGive && blockToGive !== "🪸") endEvent();
                } 
                playSound(oreList[blockToGive]["oreTier"], blockToGive);
                if (oreList[blockToGive]["oreTier"] === "Hyperdimensional") {
                    verifiedOres.addHyperdimensionalCount(results[blockToGive].est);
                }
            }

            for (let i = 3; i > 0; i--) {
                let estVariantAmt = (results[blockToGive].est)/(multis[i]/variantDivide);
                const variantRandom = {r: aleaRandom(), c: gameInfo.overallCount, s: gameInfo.seed};
                if (variantRandom.r < estVariantAmt%1) estVariantAmt++;
                estVariantAmt = Math.floor(estVariantAmt);
                totalVariants += estVariantAmt;
                if (estVariantAmt > 0) {
                    results[blockToGive].est -= estVariantAmt;
                    if (player.gears["gear22"] && oreList[blockToGive]["numRarity"] >= 750000) {
                        if (estVariantAmt >= 10) estVariantAmt *= 1.1; 
                        else if (Math.random() < 1/10) {estVariantAmt++; wasDuped = true;}
                        estVariantAmt = Math.floor(estVariantAmt);
                    }
                    playerInventory[blockToGive][variantInvNames[i]] += estVariantAmt;
                    if (playerInventory[blockToGive][variantInvNames[i]] > 1e308) playerInventory[blockToGive][variantInvNames[i]] = 1e308;
                    if (messageIncluded(oreList[blockToGive]["oreTier"])) {
                        spawnMessage({block: blockToGive, location: {"X":curX, "Y":curY}, caveInfo: (isCave ? {"adjRarity":Math.round(1/rng), "caveType":caveInfo.type} : undefined), variant: i+1});
                        logFind(blockToGive, curX, curY, namesemojis[i], player.stats.blocksMined, false, estVariantAmt, (isCave ? {cave: true, multi: caveInfo.multi} : {cave: false, multi: 1}), rng/multis[i]/(wasDuped ? 10 : 1)); 
                    }
                    if ((oreList[blockToGive]["hasLog"] || isCave) && rng < 1 && rng/multis[i] < 1/player.settings.minLogRarity) verifiedOres.createBulkLog({
                        block: blockToGive,
                        genAt: new Date().toUTCString(),
                        variant: i+1,
                        variantInfo: variantRandom,
                        luck: oreList[blockToGive]["decimalRarity"]*oreList[blockToGive]["numRarity"],
                        rng: rng/multis[i]/(wasDuped ? 10 : 1),
                        mod: rngModifier,
                        rand: results[blockToGive].rand,
                        avgSpeed: player.avgSpeed,
                        paradoxical: player.powerupVariables.fakeEquipped.item,
                        world: currentWorld,
                        withPickaxe: getItemNameFromParadoxical(player.stats.currentPickaxe),
                        withEvent: getCurrentEventOre(),
                        mined: true,
                        bulkAmt: originAmt,
                        randEdited: (Math.random.toString().replace(/\n|\r| /g, "") !== "functionrandom(){[nativecode]}"),
                        from: new Error(),
                        amt: estVariantAmt,
                        caveInfo: caveInfo,
                        generationInfo: results[blockToGive].c
                    });
                }
            }
            let toGive = results[blockToGive].est;
            if (toGive > 0) {
                wasDuped = false;
                if (oreList[blockToGive]["numRarity"] >= 750000) {
                    if (player.gears["gear7"] && currentWorld < 2) gearAbility1();
                    if (player.gears["gear22"]) {
                        if (toGive >= 10) {toGive *= 1.1; toGive = Math.floor(toGive);}
                        else if (Math.random() < 1/10) {toGive++; wasDuped = true;}
                    }
                } else if (oreList[blockToGive]["oreTier"] === "Layer") {
                    if (player.gears["gear15"]) toGive *= 2;
                    if (player.gears["gear26"]) {
                        if (toGive >= 30) {toGive *= 1+(20/30); toGive = Math.floor(toGive);}
                        else if (Math.random() < 1/30) toGive += 20;
                    }
                } else if (commons.indexOf(oreList[blockToGive]["oreTier"] > -1)) {
                    if (player.gears["gear13"]) {
                        if (toGive > 4) {toGive *= 1.75; toGive = Math.floor(toGive);}
                        else if (Math.random() < 3/4) toGive++;
                    }
                }
                if (messageIncluded(oreList[blockToGive]["oreTier"])) {
                    spawnMessage({block: blockToGive, location: {"X":curX, "Y":curY}, caveInfo: (isCave ? {"adjRarity":Math.round(1/rng), "caveType":caveInfo.type} : undefined), variant: 1});
                    logFind(blockToGive, curX, curY, namesemojis[0], player.stats.blocksMined, false, toGive, (isCave ? {cave: true, multi: caveInfo.multi} : {cave: false, multi: 1}), (rng/(wasDuped ? 10 : 1))); 
                }
                if ((oreList[blockToGive]["hasLog"] || (isCave)) && rng < 1 && rng < 1/player.settings.minLogRarity) verifiedOres.createBulkLog({
                    block: blockToGive,
                    genAt: new Date().toUTCString(),
                    variant: 1,
                    luck: oreList[blockToGive]["decimalRarity"]*oreList[blockToGive]["numRarity"],
                    rng: rng/(wasDuped ? 10 : 1),
                    mod: rngModifier,
                    rand: results[blockToGive].rand,
                    avgSpeed: player.avgSpeed,
                    paradoxical: player.powerupVariables.fakeEquipped.item,
                    world: currentWorld,
                    withPickaxe: getItemNameFromParadoxical(player.stats.currentPickaxe),
                    withEvent: getCurrentEventOre(),
                    mined: true,
                    bulkAmt: originAmt,
                    randEdited: (Math.random.toString().replace(/\n|\r| /g, "") !== "functionrandom(){[nativecode]}"),
                    from: new Error(),
                    amt: toGive,
                    caveInfo:caveInfo,
                    generationInfo: results[blockToGive].c
                });
            }
            playerInventory[blockToGive]["normalAmt"] += toGive;
            if (playerInventory[blockToGive]["normalAmt"] > 1e308) playerInventory[blockToGive]["normalAmt"] = 1e308;
            if (player.gears["gear4"] && currentWorld < 2) {playerInventory[generationInfo.layerMat]["normalAmt"] += toGive; inventoryObj[generationInfo.layerMat] ??= 0;}
            inventoryObj[blockToGive] ??= 0;
        }
    }
}

function addLuna(layer, probs) {
    let fromHere = 0;
    let summedProb = oreList["luna"]["decimalRarity"];
    for (let i = 0; i < probs.length; i++) {
        if (summedProb < probs[i]) {
            layer.splice(i, 0, "luna");
            probs.splice(i, 0, summedProb);
            fromHere = i + 1;
            break;
        }
        summedProb += oreList[layer[i]]["decimalRarity"];
    }
    const add = oreList["luna"]["decimalRarity"];
    for (let i = fromHere; i < probs.length; i++) probs[i] += add;
    return [layer, probs];
}
const checkSpecials = function(block, get) {
    const originalBlock = block;
    let rand = 1000;
    if (block === "🔮") rand = 10000;
    if (block === "godOfTheMine") rand = 3;
    if (block === "♾️") rand = 1000000000;
    if (block === "👁️") rand = 1920000000;
    if (Math.random() < 1/rand || get) {
        switch(block) {
            case "💙" : 
            if (curDirection === "")
                block = "🩵";
            break;
            case "⌛" : 
            block = "⏳";
            break;
            case "🍃" : 
            block = "🍂";
            break;
            case "🦾" : 
            if (curDirection === "")
                block = "🦿";
            break;
            case "👀" : 
            block = "👁‍🗨";
            break;
            case "🔋" : 
            if (curDirection === "")
                block = "🪫";
            break;
            case "⛔" : 
            block = "📛";
            break;
            case "🌻" : 
            if (curDirection === "")
                block = "🌼";
            break;
            case "🌈" : 
            block = "🏳️‍🌈";
            break;
            case "🎉" : 
            block = "🎊";
            break;
            case "🔒" : 
            if (curDirection === "")
                block = "🔓";
            break;
            case "📽️" : 
            block = "🎥";
            break;
            case "🧂" : 
            block = "🌶️";
            break;
            case "🏯" : 
            block = "⛩️";
            break;
            case "🖊️" : 
            block = "🖋️";
            break;
            case "🏔️" : 
            block = "🌋";
            break;
            case "💔" : 
            if (curDirection === "")
                block = "❤️‍🩹";
            break;
            case "🩸" : 
            block = "💧";
            break;
            case "🔮" :
            if (curDirection === "") {
                block = "jellyfish";
            }
            break;
            case "💎" :
            block = "watermelonDiamond";
            break;
            case "💠" :
            if (player.stats.currentPickaxe === "pickaxe4") block = "pixel";
            break;
            case "godOfTheMine" :
                if (player.stats.currentPickaxe === "pickaxe31") block = "Omnipotent God of The Mine";
                break;
            case "♾️":
                block = "True Infinity";
                break;
            case "👁️":
                block = "Flaroreon";
                break;
        }
    }
    if (get) {
        return {r: rand, c: block};
    }
    if (originalBlock !== block) oreList[block]["decimalRarity"] = (oreList[originalBlock]["decimalRarity"] / rand);
    return block;
}
/*
let totalSpeeds = 0;
for (let i = 0; i < 100000; i++) {
    let num1 = Date.now();
    generateBlock({"Y" : curY + 1, "X" : curX});
    let num2 = Date.now();
    totalSpeeds += (num2 - num1);
}
*/
//TELEPORTING
let specialLayerLocations = {

}
let distanceMulti = 0;
let layerDistanceY = 1000;
const specialOrder = ["sillyLayer", "fluteLayer", "unknownLayer", "lastLayer"];
function rebuildSpecialLayerObject() {
    const newArray = [];
    for (let layer in specialLayerLocations) newArray[specialOrder.indexOf(layer)] = layer;
    for (let i = newArray.length - 1; i >= 0; i--) if (newArray[i] === undefined) newArray.splice(i, 1);
    const newLayerObj = {

    };
    for (let i = 0; i < newArray.length; i++) newLayerObj[newArray[i]] = specialLayerLocations[newArray[i]];
    if (newLayerObj["lastLayer"] !== undefined) {
        const lastY = newLayerObj["lastLayer"].y;
        for (let layer in newLayerObj) if (layer !== "lastLayer" && newLayerObj[layer] === lastY) delete newLayerObj["lastLayer"];
    }
    specialLayerLocations = newLayerObj;
}
function switchDistance(num) {
    const lastLayerInfo = [distanceMulti, layerDistanceY];
    distanceMulti += num;
    const layerNums = allLayers.length - 1;
    const specialLayerNums = currentWorld === 1 ? Object.keys(specialLayerLocations).length : 0;
    if (currentWorld === 2 && distanceMulti === 0) distanceMulti += num;
    if (distanceMulti < 0) {
        distanceMulti = layerNums + specialLayerNums;
    }
    if (distanceMulti > layerNums + specialLayerNums) {
        distanceMulti = currentWorld === 2 ? 1 : 0;
        layerDistanceY = 1000 + (2000 * distanceMulti);
    } else if (distanceMulti > layerNums && currentWorld === 1) {
        const layersToIndex = Object.keys(specialLayerLocations);
        const decidingNum = (-1 * layerNums) + (distanceMulti - 1);
        const specialTeleportLayer = specialLayerLocations[layersToIndex[decidingNum]];
        if (layersToIndex[decidingNum] === "lastLayer") layerDistanceY = specialTeleportLayer.y + 5000;
        else layerDistanceY = specialTeleportLayer + 5000;
        if (layerDistanceY === lastLayerInfo[1]) switchDistance(num);
    } else {
        layerDistanceY = 1000 + (2000 * distanceMulti);
    }
    if (isNaN(layerDistanceY)) {layerDistanceY = 1000; distanceMulti = 0;}
    let teleportLayer = getLayer(layerDistanceY).layer;
    for (let i = 0; i < teleportLayer.length; i++) if (oreList[teleportLayer[i]]["oreTier"] === "Layer") {teleportLayer = teleportLayer[i]; break;}
    let tI;
    if (oreList[teleportLayer]["hasImage"]) tI = `<img class="teleportImage" src="${oreList[teleportLayer]["src"]}">`;
    get("meterDisplay").innerHTML = `${tI === undefined ? teleportLayer : tI} ${(currentWorld === 2 ? layerDistanceY - 2000 : layerDistanceY).toLocaleString()}m`;
    get("meterDisplay").setAttribute("title", oreList[teleportLayer]["oreName"]);
}

async function teleport() {
    if (layerDistanceY === 7000 && currentWorld === 1 && currentLayer === "waterLayer") if (Math.random() < 1/500 || debug) {attemptSwitchWorld(1.2); player.watrEntered = true; return;}
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    clearInterval(loopTimer);
    clearInterval(secondaryTimer);
    curDirection = "";
    pickaxeAbility23Num = 0;
    lastX = 0;
    movementsX = 0;
    lastXValues = [];
    toLocation();
    displayArea();
}

function toLocation() {
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    pickaxeAbility23Num = 0;
    let x = curX;
    for (let r = layerDistanceY - 101; r < layerDistanceY + 101; r++) {
        if(mine[r] === undefined)
            mine[r] = [];
    }
    setLayer(layerDistanceY);
    mine[curY][curX] = "⚪";
    curX = x;
    curY = layerDistanceY;
    checkAllAround(curX, curY, 1);
    mine[curY][curX] = "⛏️";
}

function getParams(distanceX, distanceY, x, y) {
    if (x === undefined)
        x = curX;
    if (y === undefined)
        y = curY;
    let displayLeft = 0;
    let displayUp = 0;
    if (x > distanceX)
        displayLeft = distanceX;
    else
        displayLeft = x;
    if (currentWorld < 2) { 
    if (y > distanceY)
        displayUp = distanceY;
    else
        displayUp = y;
    } else {
        if (curY < 2001) {
            if (curY < 1991) {
                if (y > distanceY)
                    displayUp = distanceY;
                else
                    displayUp = y;
            } else {
                if (y > distanceY)
                    displayUp = -1 * (y - 2000);
                else
                    displayUp = y;
            }
            return [displayLeft, displayUp];
        }
        if (curY > 2000) {
            if (y < 2009 && y - 2000 > distanceY - 2000)
                displayUp = y - 2000;
            else
                displayUp = distanceY;
        } else {
            if (y > distanceY)
                displayUp = distanceY;
            else
                displayUp = y;
        }
    }
    return [displayLeft, displayUp];
}
function attemptSwitchWorld(to) {
    if (to === 2 && player.pickaxes["pickaxe13"] && currentWorld !== 2){switchWorld(2); return;}
    if (to === 1.1 && player.sr1Unlocked && currentWorld !== 1.1) {switchWorld(1.1); return;}
    if (to === 1 && currentWorld !== 1) {switchWorld(1); return;}
    if (to === 1.2 && currentWorld !== 1.2) {switchWorld(1.2); return;}
    if (to === 0.9 && (player.galacticaUnlocked || indexHasOre("Omnipotent God of The Mine") > 0)) {switchWorld(0.9); return;}
    if (to === 11252023) {
        goToAnniversary();
    }
}
function switchWorld(to) {
    player.settings.lastWorld = to;
    canMine = false;
        get("mainSticky").style.backgroundImage = "none";
        resetForSwitch();
        if (currentWorld === 1.1) sr1Helper(false);
        currentWorld = to;
        if (currentWorld === 2) {
            prepareWorldTwo();
        } else if (currentWorld < 2) {
            if (currentWorld === 1) prepareWorldOne();
            else if (currentWorld === 1.1) prepareSR1();
            else if (currentWorld === 1.2) prepareWatr();
            else if (currentWorld === 0.9) prepareGalactica();
        }
        switchDistance(0);
        displayArea();
        utilitySwitchActions();
        removeFromLayers({"ore":"🐢","layers":["paperLayer"]})
        removeFromLayers({"ore":"🐰","layers":["paperLayer"]});
        if (currentWorld === 1.2) insertIntoLayers({"ore":"HD 160529","layers":["waterLayer"], "useLuck":true});
        else removeFromLayers({"ore":"HD 160529","layers":["waterLayer"]});
        verifiedOres.checkPickaxe();
        verifiedOres.checkCaves();
        document.getElementById("teleportButton").disabled = false;
        canMine = true;
        if (debug) adminChangeLuck(verifiedOres.getCurrentLuck());
}
function resetForSwitch() {
    if (toggleLounge.toggled) toggleLounge();
    endEvent();
    stopMining();
    mine = [[]];
    player.oreTracker.existingOres = [];
    removeTrackerInformation();
    m87 = 0;
    m88 = 0;
    currentLayerNum = -1;
    lastX = 0;
    movementsX = 0;
    blocksRevealedThisReset = 0;
    lastXValues = [];
    pa1 = [];
    pa2 = [];
    pa3 = [];
    pa4 = [];
    a12 = 0;
    a13 = false;
}
function prepareWorldOne() {
    allLayers = worldOneLayers;
    distanceMulti = 0;
    y = 1000;
    curX = 1000000;
    curY = 0; 
    createMine();
    if (player.stats.currentPickaxe === "pickaxe1") {
        if (Math.random() < 1/10000) {
            mine[curY + 1][curX] = "🩶";
            playSound(oreList["🩶"]["oreTier"]);
            typeWriter("<i>🩶 Has Spawned!</i>", "spawn");
        } else {
            mine[curY + 1][curX] = "🟫";
        }
    }
    layerNum = 0;
}
function prepareSR1() {
    allLayers = subRealmOneLayers;
    distanceMulti = 0;
    y = 1000;
    curX = 1000000;
    curY = 0; 
    createMine();
    layerNum = 0;
    sr1Helper(true);
    player.sr1Entered = true;
    get("worldSelectButton").textContent = `Items From World: SR1`;
}
function prepareGalactica() {
    get("mainSticky").style.backgroundImage = `url("media/starryBackground.jpg")`;
    allLayers = galacticaLayers;
    distanceMulti = 0;
    y = 1000;
    curX = 1000000;
    curY = 0; 
    createMine();
    layerNum = 0;
    player.galacticaEntered = true;
    player.galacticaUnlocked = true;
}
function prepareWatr() {
    allLayers = waterWorldLayers;
    distanceMulti = 0;
    y = 1000;
    curX = 1000000;
    curY = 0; 
    layerNum = 0;
    player.watrEntered = true;
    createMine();
}
function prepareWorldTwo() {
    distanceMulti = 1;
    y = 1000;
    allLayers = worldTwoLayers;
    curX = 1000000;
    curY = 2001; 
    createMine();
    if (player.stats.currentPickaxe === "pickaxe25") {
        if (Math.random() < 1/10000) {
            mine[curY + 1][curX] = "🩷";
            playSound(oreList["🩷"]["oreTier"]);
            typeWriter("<i>🩷 Has Spawned!</i>", "spawn");
        } else {
            mine[curY + 1][curX] = "📺";
        }
    } else {
        mine[curY + 1][curX] = "📺";
    }
    layerNum = 1;
    if (energySiphonerActive) removeSiphoner();
}
function stopMining() {
    let stopped = canMine;
    canMine = false;
    curDirection = "";
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true})
    clearInterval(loopTimer);
    clearInterval(secondaryTimer);
    clearInterval(displayTimer);
    displayTimer = null;
    canMine = stopped;
}
let beforeEntering;
function sr1Helper(state) {
    removeParadoxical();
    const lock = document.getElementsByClassName("lockedRecipe");
    for (let i = 0; i < lock.length; i++) lock[i].classList.remove("lockedRecipe");
    if (state) {
        if (!player.settings.usingNewEmojis) {
            document.body.style.fontFamily = `system-ui, Tahoma, Verdana, sans-serif, Noto Color Emoji`;
            document.getElementById("switchFont").disabled = true;
        }
        if (!player.trophyProgress["subrealmOneCompletion"].trophyOwned) player.wasUsing = player.stats.currentPickaxe;
        player.stats.currentPickaxe = "pickaxe27";
        beforeEntering = currentWorld;
        toggleCraftingWorld.world = 1.1;
        switchWorldCraftables(1.1);
    } else {
        if (!player.settings.usingNewEmojis) {
            document.body.style.fontFamily = "";
            document.getElementById("switchFont").disabled = false;
        }
        if (player.wasUsing !== undefined) player.stats.currentPickaxe = player.wasUsing;
        player.wasUsing = undefined;
        toggleCraftingWorld.world = beforeEntering;
    }
}
function removeParadoxical() {
    if (player.powerupVariables.fakeEquipped.item !== undefined) {
        if (player.gears[player.powerupVariables.fakeEquipped.item] !== undefined) {
            if (player.powerupVariables.fakeEquipped.item === "gear0") document.getElementById("trackerLock").style.display = "inline-flex";
            
            if (player.powerupVariables.fakeEquipped.item === "gear9") {
                if (get("sillyRecipe").classList.contains("lockedRecipe")) get("sillyRecipe").classList.remove("lockedRecipe")
                document.getElementById("sillyRecipe").style.display = "none";
            }
            if (player.powerupVariables.fakeEquipped.item === "gear24") get("allowAutoPowerup").style.display = "none";
            if (player.powerupVariables.fakeEquipped.item === "gear45") hideEventOptions();
            player.gears[player.powerupVariables.fakeEquipped.item] = false;
            player.powerupVariables.fakeEquipped.item = undefined;
        }
        if (player.pickaxes[player.powerupVariables.fakeEquipped.item] !== undefined) {
            player.pickaxes[player.powerupVariables.fakeEquipped.item] = false;
            player.stats.currentPickaxe = player.powerupVariables.fakeEquipped.originalState;
            player.powerupVariables.fakeEquipped.item = undefined;
            player.powerupVariables.fakeEquipped.originalState = undefined;
        }
        player.powerupVariables.fakeEquipped.removeAt = Infinity;
        utilitySwitchActions();
    } else if (player.powerupVariables.fakeTreeLevel.level !== undefined) {
        player.upgrades["pickaxe27"].level = player.powerupVariables.fakeTreeLevel.originalState;
        player.powerupVariables.fakeTreeLevel.level = undefined;
        player.powerupVariables.fakeTreeLevel.originalState = undefined;
        player.powerupVariables.fakeTreeLevel.removeAt = Infinity;
        if (currentRecipeId === "pickaxe27" || pinInformation.pinned === "pickaxe27") {
            bypassLockParadoxical();
        }
        utilitySwitchActions();
    }
    updateSpeed();
    saveNewData({override: undefined, return: false});
}
function goToAnniversary() {
    const anniversaryData = localStorage.getItem("sillyCavernsAnniversaryData");
    if (anniversaryData === null || anniversaryData === undefined) {
        localStorage.setItem("sillyCavernsAnniversaryData", JSON.stringify({sf: false, p8: false, hk: false}));
    }
    clearInterval(dataTimer);
    clearInterval(sinceLastAutosaveTimer);
    clearInterval(limitedTimer);
    clearInterval(inventoryTimer);
    clearInterval(loopTimer);
    clearInterval(secondaryTimer);
    clearInterval(displayTimer);
    if (musicPlayer["songs"][musicPlayer.currentSong] !== undefined) musicPlayer["songs"][musicPlayer.currentSong].src.pause();
    keepRunningAudio.pause();
    document.body.innerHTML = '<iframe src="https://ambercatgirl.github.io/silly-caverns-anniversary-event/" title="The Silly Caverns" style="width:100vw; height:100vh; overflow:hidden;"></iframe>';
}

let transformTable = {};

function checkForTransformations() {
    if (rand == undefined) return
    for (const transformKey in transformableOres) {
        const oreData = transformableOres[transformKey];
        const aleaVals = {rand: aleaRandom(), count: gameInfo.overallCount, seed: gameInfo.seed};
        
        if (aleaVals.rand >= oreData.rarity) continue;

        const requiredOres = oreData.oresRequired;

        let transformPosition = null;
        let otherOrePositions = {}
        let canTransform = true;
        let variant = null;
        const oreCount = {};

        for (const key in transformTable) {
            const cell = transformTable[key];
            if (!cell) continue;

            const [y, x] = key.split(',').map(Number);
            const { ore: oreType } = cell;

            if (requiredOres[oreType]) {
                oreCount[oreType] = (oreCount[oreType] || 0) + 1;

                if (requiredOres[oreType].catalyst && !transformPosition) {
                    transformPosition = { yPos: y, xPos: x };
                    variant = transformTable[key]["variant"]
                } else {
                    otherOrePositions[key] = { yPos: y, xPos: x };
                }
            }
        }

        for (const requiredOreKey in requiredOres) {
            if ((oreCount[requiredOreKey] || 0) < requiredOres[requiredOreKey].amount) {
                canTransform = false;
                break;
            }
        }

        if (canTransform && transformPosition && variant) {
            const { yPos, xPos } = transformPosition;
            mine[yPos][xPos] = { ore: transformKey, variant: variant };
            verifiedOres.createLog(yPos,xPos,{ore: transformKey, variant: variant}, new Error(), undefined, aleaVals);
            verifiedOres.verifyLog(yPos, xPos);
            spawnMessage({block: transformKey, location: {["Y"]: yPos, ["X"]: xPos}, caveInfo: undefined, variant: variant,})
            const key = `${yPos},${xPos}`;
            if (transformTable[key]?.ore !== undefined) {
                delete transformTable[key];
            }    
            for (const item in otherOrePositions) {
                const yPos = otherOrePositions[item].yPos;
                const xPos = otherOrePositions[item].xPos;
                const key = `${yPos},${xPos}`;
                mine[yPos][xPos] = "⚪";
                checkAllAround(xPos, yPos)
                delete transformTable[key];
            }
            //playSound("Transform")
            playSound(oreList[transformKey]["oreTier"])
            displayArea();
        }
    }
}



