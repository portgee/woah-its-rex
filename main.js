const pixelcoordinate = (x, y, width) => {
    const red = y * (width * 4) + x * 4;
    return [red, red + 1, red + 2, red + 3];
  };
  const azeiclopiff = function(x, y){
      const index = pixelcoordinate(x, y,this.canvas.width);
      const data = this.getImageData(0,0,this.canvas.width,this.canvas.height).data;
      return data[index[0]];
  }
  CanvasRenderingContext2D.prototype.getPixelColor = azeiclopiff;
  OffscreenCanvasRenderingContext2D.prototype.getPixelColor = azeiclopiff;
const gameInfo = {
    selectedInventory: 0,
    movementType: "auto",
    display: true,
    seed: Math.round(Math.random() * 1e24) + 1e10,
    count: 0,
    loops: 0,
    loopLength: 5000000,
    overallCount: 0
}
let mine = [];
let curX = 1000000;
let curY = 0;
let currentDisplay = "";
let blocksRevealedThisReset = 0;
let mineCapacity = 250000; // in case this ever needs to be raised
let canMine = false;
let lastDirection = "";
let currentWorld = 1;
let currentLayerNum = 0;
const birthdays = {
    "3/28" : "Draedon",
    "12/16" : "ThatBotCook",
    "12/5" : "FwPortgee",
    "12/23" : "Amber",
    "8/8" : "Korone",
    "4/8" : "REEKY",
}
//IMPORTANT
const date = new Date();
let limitedTimer;
let inventoryTimer;
let trophyTimer;
let minedElement;
let revealedElement;
let locationElementX;
let locationElementY;
let blockElement;
let emojiNames;
let messageElement;
let rand;
let seedSuccess = false;
function init() {
    verifiedOres.gameLoaded();
    for (let propertyName in oreList) {
        playerInventory[propertyName] = {"normalAmt":0,"electrifiedAmt":0, "radioactiveAmt":0, "explosiveAmt":0, "foundAt": undefined}
    }
    minedElement = document.getElementById("blocksMined");
    revealedElement = document.getElementById("resetNumber");
    locationElementX = document.getElementById("locationX");
    locationElementY = document.getElementById("locationY");
    blockElement = document.getElementById("blockDisplay");
    displayRows = document.getElementsByClassName("blockDisplayRow");
    messageElement = document.getElementById("topMessages");
    slider = document.querySelector('.milestoneParent');
    slider.addEventListener('pointermove', move, false);
    slider.addEventListener('pointerdown', startDragging, false);
    slider.addEventListener('pointerup', stopDragging, false);
    slider.addEventListener('pointerleave', stopDragging, false);
    document.getElementById('dataFileUpload').addEventListener('change', getFileContents, false);
    createInventory();
    assignImageNames();
    createAllLayers();
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
    removeFromLayers({"ore":"HD 160529","layers":["waterLayer"]});
    if (Math.random() < 1/1000) insertIntoLayers({"ore":"intercept", "layers":["globeLayer"], "useLuck":true})
    if (Math.random() < 1/1000) insertIntoLayers({"ore":"Miku", "layers":["fluteLayer"], "useLuck":true})
    document.getElementById('dataText').value = "";
    if (Math.random() < 1/1000) document.getElementById("cat").innerText = "CatAxe";
    limitedTimer = setInterval(checkLimitedOres, 1000);
    if (date.getMonth() === 3 && date.getDate() === 1) {
        document.title = "The Sily Caverns";
    }
    for (let propertyName in birthdays) {
        if ((date.getMonth() + 1 === Number(propertyName.substring(0, propertyName.indexOf("/")))) && (date.getDate() === Number(propertyName.substring(propertyName.indexOf("/") + 1)))) {
            document.getElementById("topMessages").innerText = "Happy Birthday " + birthdays[propertyName] + "!!!";
        }
    }
    portalLocations[11252023] = {title: "Silly Caverns Anniversary",desc: "The event world for the silly caverns anniversary.<br>More details unknown, further research required.<br>Available Until: FOREVER NOW NYERDS<br>NOTE: THIS REDIRECTS YOU OFF THE MAIN GAME<br><br>?????? works here?<br><br>?????? works here?<br><br>Unlock Requirement: N/A<br><br>Goals: Mine 100K Blocks, Mine 1 Zenith Ore, Craft Pickaxe 8",req: function() {return true;},to: 11252023,hue: "-90deg",url: "ores/NYERD.webp"}
    fetch("emoji.json")
    .then((response) => response.json())
    .then((json) => setEmojiNames(json))
    .catch(error => {
        failedFetch();
    });
    fetch("abilityNums.json")
    .then((response) => response.json())
    .then((json) => assignPickaxeNums(json))
    .catch(error => {
        failedFetch();
    });
    let canContinue = loadAllData();
    canMine = false;
    if (canContinue) {
        finishInit();
        fetch("https://endurable-fragrant-visitor.glitch.me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: new URLSearchParams({
                "func" : "seed",
            }).toString()
          })
          .then((res) => res.text())
          .then((text => {
                gameInfo.count = 0;
                gameInfo.overallCount = 0;
                gameInfo.loops = 0;
                gameInfo.seed = JSON.parse(text);
                rand = new Math.seedrandom(gameInfo.seed + String(gameInfo.loops));
          }))
          .catch((err) => {
            console.log("Failed To Generate Seed!")
          });
    }
}
function finishInit() {
    rand = new Math.seedrandom(gameInfo.seed + String(gameInfo.loops));
    gameInfo.count = 0;
    gameInfo.loops = 0;
    gameInfo.overallCount = 0;
    switchPortal({deltaY: 100});
    switchPortal({deltaY: -100});
    repeatDataSave();
    cat = verifiedOres.getCurrentLuck();
    switchWorldCraftables();
    displayPowerup(0);
    utilitySwitchActions();
    if (player.settings.lastWorld !== 1) switchWorld(player.settings.lastWorld, true);
    else createMine();
    addIndexLayers.current = String(currentWorld);
    addIndexLayers(String(currentWorld));
    createMilestones();
    inventoryTimer = setInterval(updateInventory, 500);
    canMine = true;
    console.log("meow");
}
function assignImageNames() {
    for (let ore in oreList) {
        if (oreList[ore]["hasImage"]) {
            oreList[ore]["srcElement"].parentElement.setAttribute("title", oreList[ore]["oreName"])
        }
    }
}
function assignPickaxeNums(json) {
    pickaxe24Nums = json.pickaxeNums24;
    pickaxe25Nums = json.pickaxeNums25;
    pickaxe28Nums = json.pickaxeNums28;
    pickaxe29Nums = json.pickaxeNums29;
    pickaxe30Nums = json.pickaxeNums30;
    pickaxe31Nums = json.pickaxeNums31;
    pickaxe1Nums = json.pickaxeNums1;
    pickaxe2Nums = json.pickaxeNums2;
    pickaxe3Nums = json.pickaxeNums3;
    pickaxe4Nums = json.pickaxeNums4;
    pickaxe5Nums = json.pickaxeNums5;
    pickaxe6Nums = json.pickaxeNums6;
    pickaxe9Nums = json.pickaxeNums9;
    pickaxe10Nums = json.pickaxeNums10;
    pickaxe11Nums = json.pickaxeNums11;
    pickaxe12Nums = json.pickaxeNums12;
    treeLevels[0] = json.pickaxeNums27A;
    treeLevels[1] = json.pickaxeNums27B;
    treeLevels.cherryBranch = json.cherryBranch;
    treeLevels.autumnBranch = json.autumnBranch;
    treeLevels.winterBranch = json.winterBranch;
    treeLevels.summerBranch = json.summerBranch;
}
//meow
function failedFetch() {
    for (let ore in oreList) oreList[ore]["oreName"] = "FAILED TO FETCH NAMES";
    for (let ore in oreList) {
        oreList[ore]["srcElement"].parentElement.setAttribute("title", oreList[ore]["oreName"]);
    }
    for (let i = 0; i < recipeElements.length; i++) {
        for (let j = 0; j < recipeElements[i].length; j++) {
            let elements = recipeElements[i][j].children;
            for (let k = 0; k < elements.length; k++) {
                let text = elements[k].innerText;
                if (oreList[text.substring(0, text.indexOf(" "))] != undefined) elements[k].setAttribute("title", oreList[text.substring(0, text.indexOf(" "))]["oreName"]);
            }
        }
    }
}
function setEmojiNames(emojis) {
    for (let i = 0; i < emojis.length; i++) {
        if (oreList[emojis[i]["character"]] != undefined) {
            oreList[emojis[i]["character"]]["oreName"] = emojis[i]["unicodeName"].substring(emojis[i]["unicodeName"].indexOf(" ") + 1);
            oreList[emojis[i]["character"]]["srcElement"].parentElement.setAttribute("title", oreList[emojis[i]["character"]]["oreName"]);
        }
    }
    for (let i = 0; i < recipeElements.length; i++) {
        for (let j = 0; j < recipeElements[i].length; j++) {
            let elements = recipeElements[i][j].children;
            for (let k = 0; k < elements.length; k++) {
                let text = elements[k].innerText;
                if (oreList[text.substring(0, text.indexOf(" "))] != undefined) elements[k].setAttribute("title", oreList[text.substring(0, text.indexOf(" "))]["oreName"]);
            }
        }
    }
    document.getElementById("meterDisplay").setAttribute("title", oreList[getLayer(curY).layerMat]["oreName"]);
}

let chill;
let mystical;
let divine;
let flawless;
let interstellar;
let magnificent;
let sacred;
let ethereal;
let celestial;
let imaginary;
let keepRunningAudio;
let eventSpawn;
let hyperdimensional;
let infinitesimal;
let polychromatical;
let silly;
let transformSound;
let allAudios = {
    "Antique" : undefined,
    "Mystical" : undefined,
    "Divine" : undefined,
    "Flawless" : undefined,
    "Interstellar" : undefined,
    "Metaversal" : undefined,
    "Sacred" : undefined,
    "Ethereal" : undefined,
    "Celestial" : undefined,
    "Imaginary" : undefined,
    "Hyperdimensional" : undefined,
    "Polychromatical" : undefined,
    "Infinitesimal" : undefined,
    "Silly :3": undefined,
    "Transform": undefined
};
let osaka;
function loadContent() {
    keepRunningAudio = new Audio("audios/ambiencebyx2corp.mp3")
    keepRunningAudio.load();
    eventSpawn = new Audio("audios/Glitch.mp3");
    eventSpawn.volume = 0.1;
    chill = new Audio("audios/chill.mp3");
    mystical = new Audio("audios/mystical.mp3");
    divine = new Audio("audios/divine.mp3");
    flawless = new Audio("audios/flawless.mp3");
    interstellar = new Audio("audios/interstellar.mp3");
    sacred = new Audio("audios/sacred.mp3");
    magnificent = new Audio("audios/magnificent.mp3");
    ethereal = new Audio("audios/ethereal sound by elysia.mp3");
    celestial = new Audio("audios/celestial.mp3");
    imaginary = new Audio("audios/imaginary.mp3");
    hyperdimensional = new Audio("audios/hyperdimensional.mp3");
    infinitesimal = new Audio("audios/infinitesimal.mp3");
    polychromatical = new Audio("audios/polychromatical.mp3");
    silly = new Audio("audios/silly.mp3")
    transformSound = new Audio("audios/transform.mp3")
    osaka = new Audio("audios/lol.mp3");
    allAudios["Antique"] = chill;
    allAudios["Mystical"] = mystical;
    allAudios["Divine"] = divine;
    allAudios["Flawless"] = flawless;
    allAudios["Interstellar"] = interstellar;
    allAudios["Metaversal"] = magnificent;
    allAudios["Sacred"] = sacred;
    allAudios["Ethereal"] = ethereal;
    allAudios["Celestial"] = celestial;
    allAudios["Imaginary"] = imaginary;
    allAudios["Hyperdimensional"] = hyperdimensional;
    allAudios["Infinitesimal"] = infinitesimal;
    allAudios["Polychromatical"] = polychromatical;
    allAudios["Silly :3"] = silly;
    allAudios["Transform"] = transformSound;
    for (let property in allAudios) allAudios[property].load();
    musicPlayer.songs["song1"].src = new Audio("audios/ely_audio_1.mp3");
    musicPlayer.songs["song2"].src = new Audio("audios/ely_audio_2.mp3");
    musicPlayer.songs["song3"].src = new Audio("audios/ely_audio_3.mp3");
    musicPlayer.songs["song4"].src = new Audio("audios/mooing_audio_1.mp3");
    for (let property in musicPlayer.songs) {
        musicPlayer.songs[property].src.load();
        musicPlayer.songs[property].src.volume = musicPlayer.songs[property].baseVolume;
    }
    document.getElementById("pressPlay").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
    init();
}

//MOVEMENT
function movePlayer(dir, reps, type) {
    if (player.gears["gear29"] && Math.random() < 1/(player.settings.simulatedRng ? 175 : 250) && type !== "single") reps += 50;
    for (let i = 0; i < reps; i++) {
        if (canMine) {
            if (verifiedOres.isRightPickaxe()) {
                if (dir.y < 0 && !(curY > 0)) {
                    return;
                } else if (dir.x < 0 && !(curX > 0)) {
                    return;
                }
                let block = mine[curY + dir.y][curX + dir.x];
                block = block.ore === undefined ? block : block.ore;
                if (oreList[block]["isBreakable"]) { 
                    mine[curY][curX] = "⚪";
                    curY += dir.y;
                    curX += dir.x;
                    updateAudioVolumes();
                    movementsX += Math.abs(dir.y) + Math.abs(dir.x)
                    if (dir.y !== 0) setLayer(curY);
                    mineBlock(curX, curY, "mining");
                    mine[curY][curX] = "⛏️";
                    lastDirection = dir.key;
                    if (player.gears["gear29"] && !isHoldingShift && type !== "single") {
                        if (dir.y !== 0) {
                            if (curY > 0 && mine[curY + dir.y][curX] === "⚪") {
                                mine[curY][curX] = "⚪";
                                curY += getNextSolidY(dir.y, curY, curX);
                                mine[curY][curX] = "⛏️";
                            }
                        } else if (dir.x !== 0) {
                            if (mine[curY][curX + dir.x] === "⚪") {
                                mine[curY][curX] = "⚪";
                                curX += getNextSolidX(dir.x, curY, curX);
                                mine[curY][curX] = "⛏️";
                            }
                        }
                    }
                } else {
                    if (mine[curY + dir.y][curX + dir.x] === "✖️") {
                        if (Math.random() < 1/10000000) {
                            mine[curY][curX] = "⚪";
                            curY += dir.y;
                            curX += dir.x;
                            if (dir.y !== 0) setLayer(curY)
                            mine[curY][curX] = "⛏️";
                            lastDirection = dir.key;
                            let vInfo = rollVariant();
                            if (player.gears["gear25"] && vInfo.v === 1) vInfo = rollVariant();
                            let variant = vInfo.v;
                            spawnMessage({block: "⛏️", location: {"X" : curX, "Y" : curY}, caveInfo: undefined, variant: variant, amt:1})
                            giveBlock({type: "⛏️", x:curX, y:curY, fromReset: false, variant: variant, amt:1});
                            checkAllAround(curX, curY);
                            playSound("Celestial")
                        }
                    }
                }
            }
        }
    }
    if (blocksRevealedThisReset >= mineCapacity) {
        blocksRevealedThisReset = 0;
        mineReset();
    }
    if (curDirection === "") displayArea();
}

function updateAudioVolumes() {
    for (let key in activeSounds) {
        const [y, x] = key.split(",").map(Number);
        const distance = Math.sqrt((curY - y) ** 2 + (curX - x) ** 2);
        const maxDistance = activeSounds[key]["rolloffDistance"];
        const maxVolume = activeSounds[key]["maxVolume"] || 1; // Default maxVolume to 1 if not defined
        const volume = Math.max(0, maxVolume * (1 - distance / maxDistance)); // Linear roll-off scaled by maxVolume
        activeSounds[key].volume = volume;
    }
}


function getNextSolidY(dir, y, x) {
    const original = dir;
    while (y + dir > 0 && mine[y + dir][x] === "⚪" && Math.abs(dir) < 25) dir += original;
    return dir - original;
}
function getNextSolidX(dir, y, x) {
    const original = dir;
    while (x + dir > 0 && mine[y][x + dir] === "⚪" && Math.abs(dir) < 25) dir += original;
    return dir - original;
}
let keyCooldown = Date.now();
let isHoldingShift = false;
const catstuff = {
    ":" : false,
    layer: undefined
}
document.addEventListener('keydown', (event) => {
    if (!verifiedOres.isLoaded()) return;
    let name = event.key;
    let validInput = false;
    name = name.toLowerCase();
        switch(name) {
            case "w":
                if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
                break;
            case "a":
                if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
                break;
            case "s":
                if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
                break;
            case "d":
                if (!buttonClicked && Date.now() >= keyCooldown) {validInput = true; keyCooldown = Date.now() + 15;}
                break;
            case "arrowup":
                event.preventDefault();
                goDirection('w')
                return;
            case "arrowleft":
                event.preventDefault();
                goDirection('a')
                return;
            case "arrowdown":
                event.preventDefault();
                goDirection('s')
                return;
            case "arrowright":
                event.preventDefault();
                goDirection('d')
                return;
            case "t":
                checkExistingOres();
                break;
            case "1":
                toggleSpecificPowerup(1);
                break;
            case "2":
                toggleSpecificPowerup(2);
                break;
            case "3":
                if (catstuff[":"]) {showCatText(); catstuff[":"] = false;}
                else toggleSpecificPowerup(3);
                break;
            case "4":
                toggleSpecificPowerup(4);
                break;
            case "5":
                toggleSpecificPowerup(5);
                break;
            case "shift":
                isHoldingShift = true;
                break;
            case ":":
                catstuff[":"] = true;
                break;
            default:
                break;
        }
    if (name !== ":") catstuff[":"] = false;
    if (validInput) {
        stopMining();
        curDirection = "";
        let movements = {x:0, y:0, key:name};
        movements.x = (name === "a" ? -1 : (name === "d" ? 1 : 0));
        movements.y = (name === "s" ? 1 : (name === "w" ? -1 : 0));
        milestoneVariables.withSingle = true;
        movePlayer(movements, 1, "single");
        energySiphonerDirection = "";
    }
}, false);
document.addEventListener('keyup', (event) => {
    let name = event.key;
    name = name.toLowerCase();
    switch (name) {
        case "shift" :
            isHoldingShift = false;
            break;
    }
}, false);
let loopTimer = null;
let secondaryTimer = null;
let curDirection = "";
let baseSpeed = 25;
function handleMovement(dir, button) {
    if (gameInfo.movementType === "auto") {
        goDirection(dir);
    } else {
        milestoneVariables.withSingle = true;
        moveOne(dir, button);
    }
}
function goDirection(direction) {
    milestoneVariables.withAuto = true;
    if (curDirection === direction) {
        stopMining();
        curDirection = "";
        updateDisplayTimer(false);
    } else {
        const nums = calcSpeed();
        let reps = nums.reps;
        let miningSpeed = nums.speed;
        stopMining();
        if (a13) {
            reps = 1;
            miningSpeed = 35;
        }
        removeFromLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"]})
        let movements = {x:0, y:0, key:direction};
        movements.x = (direction === "a" ? -1 : (direction === "d" ? 1 : 0));
        movements.y = (direction === "s" ? 1 : (direction === "w" ? -1 : 0));
        miningSpeed ??= 25;
        if (player.settings.accurateSpeed) {
            let inSec = 0;
            let div = 500;
            while (div%nums.speed !== 0) div--;
            inSec += (div/miningSpeed) * reps;
            inSec += nums.extra;
            loopTimer = setInterval(accurateMove, 10, inSec, movements);
        } else {
            loopTimer = setInterval(movePlayer, miningSpeed, movements, reps, "auto");
            if (nums.extra > 0) {
                secondaryTimer = setInterval(movePlayer, (Math.ceil(1000/nums.extra)), movements, 1, "auto");
            }
        }
        curDirection = direction;
        energySiphonerDirection = direction;
        updateDisplayTimer(true);
    }
}
let buttonClicked = false;
function moveOne(dir, button) {
    button.disabled = true;
    buttonClicked = true;
    clearInterval(loopTimer);
    clearInterval(secondaryTimer);
    insertIntoLayers({"ore":"🦾", "layers":["tvLayer", "brickLayer"], "useLuck":true});
    let movements = {x:0, y:0, key:dir, extra:0};
    movements.x = (dir === "a" ? -1 : (dir === "d" ? 1 : 0));
    movements.y = (dir === "s" ? 1 : (dir === "w" ? -1 : 0));
    movePlayer(movements, 1, "single");
    curDirection = "";
    setTimeout(() => {
        button.disabled = false;
        buttonClicked = false;
    }, 50);
    energySiphonerDirection = "";
}
function speedFactorial(num) {
    if (num === 0) return 1;
    return num * speedFactorial(num-1);
}
function accurateMove(amt, dir) {
    let now = Date.now();
    let fa = Math.round(amt/5);
    if (now >= accurateMove.nc) {
        movePlayer(dir, fa, "auto");
        movePlayer(dir, fa, "auto");
        movePlayer(dir, fa, "auto");
        movePlayer(dir, fa, "auto");
        movePlayer(dir, fa, "auto");
        accurateMove.nc = now + 500;
    }
}
accurateMove.nc = Date.now();
let devReps = 100;
const calcSpeed = function() {
    let miningSpeed = baseSpeed;
    let reps = 1;
    if (currentWorld < 2 && player.gears["gear31"])
        miningSpeed = baseSpeed - 5;
    if (currentWorld < 2 && player.gears["gear2"])
        miningSpeed = baseSpeed - 10;
    if (currentWorld < 2 && player.gears["gear6"])
        miningSpeed = baseSpeed - 15;
    if (currentWorld === 2 || (player.gears["gear11"] && player.gears["gear16"] && player.gears["gear19"]))
        miningSpeed = baseSpeed - (player.gears["gear11"] ? 3 : 0) - (player.gears["gear16"] ? 5 : 0) - (player.gears["gear19"] ? 8 : 0);
    if (miningSpeed < player.settings.minSpeed)
        miningSpeed = player.settings.minSpeed;
    if (player.stats.currentPickaxe === "pickaxe12")
        reps++;
    reps += player.gears["gear19"] ? 10 : 0;
    const extraSpeed = 0 + (player.gears["gear32"] ? 25 : 0) + (player.gears["gear33"] ? 75 : 0);
    if (currentWorld === 1.1) {
        if (debug) return {speed: 5, reps: devReps, extra:0}
        const sr1Level = player.upgrades["pickaxe27"].level;
        if (sr1Level < 4) return {speed: 10 - sr1Level, reps: 1, extra:extraSpeed}
        else return {speed: 7, reps: Math.round((-2 + sr1Level)*(player.gears["gear36"] ? 1.75 : 1)), extra:extraSpeed}
    }
    if (randBuff.reps) reps += 25;
    if (player.gears["gear44"]) reps += 50;
    if (player.gears["gear36"]) reps = Math.round(reps*1.75)
    if (debug) return {speed: 5, reps: devReps, extra:0}
    return {speed: miningSpeed, reps: reps, extra: extraSpeed}
}
function updateSpeed() {
    const temp = curDirection;
    stopMining();
    if (temp !== "") goDirection(temp);
}
//DISPLAY
let displayRows;
const invisibleBlock = "<span class='invisible'>⚪</span>";
const percentColors = ["#00ff22", "#67ef28", "#8ddf2c", "#a7ce30", "#bcbc33", "#cea936", "#dc9538", "#e97e3a", "#f5633c", "#ff3d3d"];
function displayArea() {
    if (!toggleLounge.toggled) {
        if (gameInfo.display) {
            let output;
            let constraints = getParams(16, 9);
            let grass = 0;
            if (currentWorld === 2)
                grass = 2000;
            if (currentWorld === 1.2) grass = -1;
            if (currentWorld === 0.9) grass = -1;
            let i = 0;
            for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) mine[r] ??= [];
            let ore;
            for (let c = curX - constraints[0]; c <= curX + 16 + (16-constraints[0]); c++) {
                output = "";
                for (let r = curY - constraints[1]; r <= curY + 9 + (9-constraints[1]); r++) {
                    if (mine[r][c]) {
                        ore = mine[r][c].ore !== undefined ? mine[r][c].ore : mine[r][c];
                        output += ore === "⚪" ? "⠀" : (ore === "⛏️" ? addPickaxeIcon() : checkDisplayVariant(mine[r][c]));  
                    } else {
                        output += r === grass ? "🟩" : "⬛";
                    }
                }  
                displayRows[i].innerHTML = output;
                i++;
            } 
        }
        const percent = Math.floor(blocksRevealedThisReset/mineCapacity * 10000)/100;
        const percentElement = get("resetPercent");
        if (percent >= 90) percentElement.style.color = "red";
        else if (percent >= 60) percentElement.style.color = "orange";
        else percentElement.style.color = "green";
        if (percent >= displayArea.lastPercent + 10) {
            let tp = Math.floor(percent/10) * 10;
            displayArea.lastPercent = tp;
            tp /= 10;
            if (tp > 9) tp = 9;
            removeProgressBar();
            for (let i = 0; i < tp + 1; i++) {
                const toAddBars = get("resetProgressBar");
                const elemBar = document.createElement("span");
                elemBar.style.backgroundColor = percentColors[i];
                elemBar.classList.add("resetBarPart");
                toAddBars.appendChild(elemBar);
            }
        }
        percentElement.textContent = `${percent}%`
        revealedElement.textContent = `${getNumFormat(blocksRevealedThisReset)} Revealed.`;
        let sub = currentWorld === 2 ? 2000 : 0;
        locationElementX.textContent = "X: " + (curX - 1000000).toLocaleString();
        locationElementY.textContent = "Y: " + (-(curY - sub)).toLocaleString();
        if (player.oreTracker.tracking) {
            getAngleBetweenPoints({x : player.oreTracker.locationX, y: player.oreTracker.locationY});
        }
        const blocksMined = player.stats.blocksMined;
        minedElement.textContent = (blocksMined > 1e12 ? formatNumber(blocksMined, 6) : blocksMined.toLocaleString()) + " Blocks Mined";
    }
}
displayArea.lastPercent = -10;
function removeProgressBar() {
    const r = document.getElementsByClassName("resetBarPart");
    for (let i = r.length - 1; i >= 0; i--) r[i].remove();
}
function addPickaxeIcon() {
    return `<span class="mineSpan">${pickaxeStats[player.stats.currentPickaxe].src}</span>`
}
function checkDisplayVariant(location) {
    let oreToAdd;
    let includeSize;
    let specialVariant;
    const ore = location.ore !== undefined ? location.ore : location;
    const tier = oreList[ore]["oreTier"];
    let isRare = (tier !== "Layer" && commons.indexOf(tier) === -1);
    const variant = location.variant !== undefined ? location.variant : 1;
    if (oreList[ore]["hasImage"]) {
        let oreLink = oreList[ore]["src"]
        if (variant == 2 && oreList[ore]["srcElectrified"]) {oreLink = oreList[ore]["srcElectrified"];}
        let isLarge = tier === "Hyperdimensional" || tier === "Infinitesimal" || tier === "Silly :3" || oreList[ore]["numRarity"] >= 1000000000000000;
        let isMassive = (ore === "noradrenaline") || (ore === ":3")
        if (isRare) oreToAdd = `<img class="${isMassive ? "hugeMineImage" : isLarge ? 'largeMineImage' : 'mineOre'}" src="${oreLink}"></img>`;
        else return `<span class="mineSpan"><img class="mineImage" src="${oreLink}"></img></span>`;
        includeSize = "";
        specialVariant = "Img";
    } else {
        if (!isRare) return ore;
        oreToAdd = ore;
        includeSize = "normalRare";
        specialVariant = "";
    }
    if ((variant != 2 || (variant == 2 && !oreList[ore]["srcElectrified"])) &&
    (variant != 3 || (variant == 3 && !oreList[ore]["srcRadioactive"])) &&
    (variant != 4 || (variant == 4 && !oreList[ore]["srcExplosive"])) &&
    variant != 1) {
        if (location.variant === 2) {
            return `<span class="mineSpan electrifiedBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        } else if (variant === 3) {
            return `<span class="mineSpan radioactiveBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        } else if (variant === 4) {
            return `<span class=" mineSpan explosiveBlock${specialVariant} ${includeSize}">${oreToAdd}</span>`
        }
    } else {
        return `<span class="${includeSize} mineSpan">${oreToAdd}</span>`
    }
}

//HTML EDITING

const names = ["Normal", "Electrified", "Radioactive", "Explosive"];
const namesemojis = ["", "⚡️", "☢️", "💥"]
function switchInventory(num) {
    if (num === gameInfo.selectedInventory) return;
    else gameInfo.selectedInventory = num;
    const removeGlow = document.getElementsByClassName("selectedInventory");
    for (let i = 0; i < removeGlow.length; i++) removeGlow[i].classList.remove("selectedInventory");
    const selections = document.getElementsByClassName("inventoryVariantButton");
    selections[num].classList.add("selectedInventory");
    const updateRarities = document.getElementsByClassName("oreDisplay");
    get("inventoryDisplay").scrollTop = 0;
    for (let i = 0; i < updateRarities.length; i++) {
        const e = updateRarities[i];
        const ore = e.id.substring(0, e.id.indexOf("Holder"));
        let rarity = oreList[ore]["numRarity"];
        const cave = oreList[ore]["caveExclusive"];
        if (oreList[ore]["oreTier"] === "Infinitesimal") rarity = Infinity;
        else if (cave) rarity *= getCaveMultiFromOre(ore);
        rarity *= multis[num];
        if (ore === "Goober") rarity = ":3";
        if (ore === "luna2") rarity = "cronch";
        e.children[1].textContent = `1/${getNumFormat(rarity)}${cave ? "*" : ""}`;
        inventoryObj[ore] = 0;
    }
    updateInventory();
}
function getNumFormat(num) {
    if (num >= 1000000000000) return formatNumber(num, 2);
    else return num.toLocaleString();
}
function getShadowClass(color) {
    if (color === "#000" || color === "#000000") return "whiteShadow";
    else if (color === "#fff" || color === "#ffffff") return "blackShadow";
}
function createInventory() {
    let arr = [];
    for (let propertyName in oreInformation.oreTiers) {
        arr.push(oreInformation.getOresByTier(propertyName));
    }
    for (let k = arr.length - 1; k >= 0; k--) {
        for (let i = 0; i < arr[k].length; i++) {
            for (let j = 0; j < arr[k].length - i - 1; j++) {
                let rarity1 = oreList[arr[k][j]]["numRarity"];
                let rarity2 = oreList[arr[k][j + 1]]["numRarity"];
                    if (oreList[arr[k][j]]["caveExclusive"])
                rarity1 *= getCaveMultiFromOre(arr[k][j]);
                if (oreList[arr[k][j + 1]]["caveExclusive"])
                    rarity2 *= getCaveMultiFromOre(arr[k][j + 1]);
                if (rarity1 < rarity2) {
                    const lesser = arr[k][j + 1];
                    arr[k][j + 1] = arr[k][j];
                    arr[k][j] = lesser;
                }
            }
        }
        
    }
    for (let j = arr.length - 1; j >= 0; j--) {
        for (let k = 0; k < arr[j].length; k++) {
            let propertyName = arr[j][k];
            let tempElement = document.createElement('tr');
            tempElement.classList = "oreDisplay";
            tempElement.id = `${propertyName}Holder`;
            tempElement.setAttribute("onclick", "handleInventoryClick(this, 'inv');")
            let colors = oreInformation.getColors(oreList[propertyName]["oreTier"]);
            let backgroundColorSet;
            if (colors["isGradient"] === true) { backgroundColorSet = colors["backgroundColor"]} else { backgroundColorSet =  "linear-gradient(to right, " + colors["backgroundColor"] + " 90%, black)"}
            tempElement.style.backgroundImage = backgroundColorSet
            tempElement.style.color = colors["textColor"];
            tempElement.style.display = "none";
            let oreNameBlock = document.createElement("td");
            if (oreList[propertyName]["hasImage"]) {
                const tier = oreList[propertyName]["oreTier"]
                if ((tier === "Infinitesimal" || tier === "Hyperdimensional" || tier === "Silly :3" || oreList[propertyName]["numRarity"] >= 1000000000000000) && oreList[propertyName]["hasImage"]) {
                    oreNameBlock.innerHTML = `<span class="inventoryImage"><img src="${oreList[propertyName]["src"]}" style="width:2.5vw; height:2.5vw; margin-right:0px; margin-left:0px;"></img></span>`;
                } else {
                    oreNameBlock.innerHTML = `<span class="inventoryImage"><img src="${oreList[propertyName]["src"]}"></img></span>`;
                }
            } else {
                oreNameBlock.innerText = propertyName;
                oreNameBlock.classList = "inventoryElement1";
            }
            let oreRarityBlock = document.createElement("td");
            let rarity = oreList[propertyName]["numRarity"];
            if (oreList[propertyName]["oreTier"] === "Infinitesimal") rarity = Infinity;
            if (propertyName === "Goober") rarity = ":3";
            if (propertyName === "luna2") rarity = "cronch";
            if (oreList[propertyName]["caveExclusive"]) {
                rarity *= getCaveMultiFromOre(propertyName);
                rarity *= multis[gameInfo.selectedInventory];
                oreRarityBlock.innerText = "1/" + (rarity >= 1000000000000 ? formatNumber(rarity, 2) : rarity.toLocaleString()) + "*";
            } else {
                if (!isNaN(rarity)) rarity *= multis[gameInfo.selectedInventory];
                oreRarityBlock.innerText = "1/" + (rarity >= 1000000000000 ? formatNumber(rarity, 2) : rarity.toLocaleString());
            }
            oreRarityBlock.classList = "inventoryElement2";
            let oreAmountBlock = document.createElement("td");
            oreAmountBlock.innerText = "x0";
            oreAmountBlock.classList = "inventoryElement3";
            oreList[propertyName]["srcElement"] = oreAmountBlock;
            if (colors["textColor"] === "#ffffff") 
            {
                oreRarityBlock.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
                oreAmountBlock.style.textShadow = "-0.05em -0.05em 0 #000, 0.05em -0.05em 0 #000, -0.05em 0.05em 0 #000, 0.05em 0.05em 0 #000";
            }
            else
            {
                oreRarityBlock.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
                oreAmountBlock.style.textShadow = "-0.05em -0.05em 0 #fff, 0.05em -0.05em 0 #fff, -0.05em 0.05em 0 #fff, 0.05em 0.05em 0 #fff";
            } 
            let favoriteBlock = document.createElement("td");
            favoriteBlock.classList.add("inventoryElement4");
            favoriteBlock.textContent = "☆";
            favoriteBlock.setAttribute("onclick", "favoriteOre(this.parentElement); event.stopPropagation();");
            tempElement.appendChild(oreNameBlock);
            tempElement.appendChild(oreRarityBlock);
            tempElement.appendChild(oreList[propertyName]["srcElement"]);
            tempElement.appendChild(favoriteBlock);
            document.getElementById("inventory").appendChild(tempElement);
        }
    }
}
function favoriteOre(element) {
    if (element.classList.contains("isFavoritedOre")) {
        const pChildren = element.parentElement.children;
        const currData = favoriteGetOre(element);
        let currRarity = currData.ore["numRarity"];
        if (currData.ore["caveExclusive"]) currRarity *= getCaveMultiFromOre(currData.id);
        for (let i = 0; i < pChildren.length; i++) {
            const thisChild = pChildren[i];
            const thisData = favoriteGetOre(thisChild);
            const passedTier = !oreInformation.tierGrOrEqTo({"tier1": thisData.ore["oreTier"], "tier2": currData.ore["oreTier"]});
            const isFavorited = pChildren[i].classList.contains("isFavoritedOre")
            if ((thisData.ore["oreTier"] === currData.ore["oreTier"]) && (thisData.id !== currData.id) && (!isFavorited) || (passedTier && !isFavorited)) {
                let thisRarity = thisData.ore["numRarity"];
                if (thisData.ore["caveExclusive"]) thisRarity *= getCaveMultiFromOre(thisData.id);
                if ((currRarity >= thisRarity && thisData.id !== currData.id) || passedTier) {
                    player.settings.favoritedElements.splice(player.settings.favoritedElements.indexOf(currData.id), 1);
                    const toDelete = get(`${currData.id}Holder`);
                    const cloned = toDelete.cloneNode(true);
                    toDelete.remove();
                    const parentInventory = get("inventory");
                    parentInventory.appendChild(cloned);
                    parentInventory.children[i-1].before(cloned);
                    cloned.classList.remove("isFavoritedOre");
                    cloned.children[3].textContent = "☆";
                    oreList[currData.id]["srcElement"] = cloned.children[2];
                    break;
                }
            }
        }
    } else {
        const id = element.id.substring(0, element.id.indexOf("Holder"));
        player.settings.favoritedElements.push(id);
        const toDelete = get(`${id}Holder`);
        const cloned = toDelete.cloneNode(true);
        toDelete.remove();
        const parentInventory = get("inventory");
        parentInventory.appendChild(cloned);
        parentInventory.children[0].before(cloned);
        cloned.classList.add("isFavoritedOre");
        cloned.children[3].textContent = "★";
        oreList[id]["srcElement"] = cloned.children[2];
    }
}
function favoriteGetOre(element) {
    let id = element.id;
    id = id.substring(0, id.indexOf("Holder"));
    const ore = oreList[id];
    return {ore: ore, id: id};
}
let variant = 1;
let inventoryObj = {};
let lastTime = Date.now();
let movementsX = 0;
let lastX = 0;
let lastXCheck = Date.now();
let resetAddX = 0;
let displayTimer = null;
let smallDisplay = false;
let ChangeSessionLuck = Date.now();
const thisUniqueId = Math.floor(Math.random() * 100000000000) + Math.floor(Math.random() * 100000000000);
let idSet = false;
function updateInventory(m = true) {
    player.lastOnline = Date.now();


    //Update Inventory Elements
    if (!toggleLounge.toggled) for (let propertyName in inventoryObj) {
        const inv = gameInfo.selectedInventory;
        let amt = playerInventory[propertyName][variantInvNames[inv]];
        if (amt > 1e308) amt = 1e308;
        oreList[propertyName]["srcElement"].textContent = "x" + (amt >= 1000000 ? formatNumber(amt, 2) : amt.toLocaleString());
        if (playerInventory[propertyName][variantInvNames[inv]] > 0) (oreList[propertyName]["srcElement"].parentElement).style.display = "table";
        else (oreList[propertyName]["srcElement"].parentElement).style.display = "none";
    }
    inventoryObj = {};

    //Update Current Recipe
    updateActiveRecipe();

    //Check Things With Cooldowns
    if (player.powerupVariables.currentChosenOre.ore !== undefined && Date.now() >= player.powerupVariables.currentChosenOre.removeAt) {
        player.powerupVariables.currentChosenOre.ore = undefined;
        updateAllLayers();
    }
    if (player.powerupVariables.commonsAffected.state && Date.now() >= player.powerupVariables.commonsAffected.removeAt) {
        player.powerupVariables.commonsAffected.state = false;
        updateAllLayers();
    }
    if (player.powerupVariables.fakeEquipped.item !== undefined && Date.now() >= player.powerupVariables.fakeEquipped.removeAt) {
        removeParadoxical();
    }
    if (player.powerupVariables.fakeTreeLevel.level !== undefined && Date.now() >= player.powerupVariables.fakeTreeLevel.removeAt) {
        removeParadoxical();
    }
    if (player.powerupVariables.caveBoosts.active && Date.now() >= player.powerupVariables.caveBoosts.removeAt) {
        player.powerupVariables.caveBoosts.removeAt = Infinity;
        player.powerupVariables.caveBoosts.active = false;
    }

    //Make Sure TOL Isn't in W1, Make sure TOL is in SR1
    if (player.stats.currentPickaxe === "pickaxe27" && currentWorld !== 1.1) {
        if (currentWorld !== 1) {
            player.stats.currentPickaxe = "pickaxe0"; 
            utilitySwitchActions();
        } else if (!player.trophyProgress["subrealmOneCompletion"].trophyOwned) {
            player.stats.currentPickaxe = "pickaxe0"; 
            utilitySwitchActions();
        }
    } else if (currentWorld === 1.1) {
        if (player.stats.currentPickaxe !== "pickaxe27") {
            if (!player.gears["gear43"] || player.stats.currentPickaxe !== "pickaxe33") {
                player.stats.currentPickaxe = "pickaxe27"; 
                utilitySwitchActions();
            }
        }
    }

    checkForTransformations();

    //Check Powerup Contitions and Update Cooldowns
    checkAllConditions();
    updatePowerupCooldowns();
    if (m && player.gears["gear24"]) autoPowerups();

    player.stats.timePlayed += Date.now() - lastTime;
    lastTime = Date.now();
    if (Date.now() >= ability1RemoveTime && energySiphonerActive) removeSiphoner();


    const bodyCheck = document.body.getBoundingClientRect();
    if (bodyCheck.height < 550) {
        document.getElementById("mainSticky").style.position = "relative";
        document.getElementById("bottomButtonHolder").style.position = "relative";
        document.getElementById("bottomButtonHolder").style.top = "0";
    } 
    else {
        document.getElementById("mainSticky").style.position = "sticky";
        document.getElementById("bottomButtonHolder").style.position = "sticky";
        document.getElementById("bottomButtonHolder").style.top = "34.5vw";
    }

    if (currentActiveEvent !== undefined) {
        if (Date.now() >= currentActiveEvent.removeAt) endEvent();
    } else {
        activateEvent(rollEvent());
    }

    let speed = calcAverageSpeed();
    if (speed !== undefined) player.avgSpeed = speed;
    const avgBlocks = getAvgBlockSpeed();
    updateOfflineProgress();

    //No Dimensional when cat!!
    if (ca && pickaxeStats[player.stats.currentPickaxe].isDimensional) {player.stats.currentPickaxe = "pickaxe0"; utilitySwitchActions()}

    //SCHIZOPHRENIA
    const aud = player.settings.audioSettings["Hyperdimensional"];
    const oH  = aud.canPlay;
    if (!oH) aud.canPlay = true;
    if (Math.random() < 1/100000000) playSound("Hyperdimensional");
    if (!oH) aud.canPlay = false;

    //Check Polychromatical Progress
    checkPolys();

    //Check Event Manager
    updateEventActions();

    //Gear Thing
    if (player.gears["gear38"]) {
        randBuff.count--;
        if (randBuff.count <= 0) {
            randBuff.luck = false;
            randBuff.proc = false;
            randBuff.reps = false;
            const give = Math.round(Math.random() * 2);
            if (give === 0) randBuff.luck = true;
            else if (give === 1) randBuff.proc = true;
            else if (give === 2) randBuff.reps = true;
            utilitySwitchActions();
            randBuff.count = 240;
        }
    } else {
        randBuff.count = 240;
        randBuff.luck = false;
        randBuff.proc = false;
        randBuff.reps = false;
    }

    //Update Lounge
    updateLoungeStats();
    if (showLoungeScreen.current === "loungeOverallStatistics" && get("tierStatsHolder").style.display === "none") updateTimes();


    //Check Milestones (this should be optimized)
    if (m) checkCurrentMilestones(false);

    //Stop Multi Instancing
    if (idSet) {
        const setId = JSON.parse(localStorage.getItem("meowAntiCheat"));
        if (setId !== thisUniqueId) {
            location.reload();
        }
    }
    localStorage.setItem("meowAntiCheat", thisUniqueId);
    idSet = true;

    //Update Forge
    if (currentOreRecipe !== undefined && showLoungeScreen.current === "loungeForgeAndVariants") updateCurrentForgeCraft();

    //Tunneler
    if (player.stats.currentPickaxe === "pickaxe20" && curY === 9999 && curDirection === "" && Math.random() < 1/25) {
        mine[curY][curX] = "⚪"; 
        curY += 2; 
        mine[curY] ??= [];
        mine[curY][curX] = "⛏️"; 
        checkAllAround(curX, curY); 
        displayArea();
    }

    //Increase luck based on session time with the poly
    if (Date.now() > ChangeSessionLuck) {
        verifiedOres.checkSessionTimeForLuck();
        ChangeSessionLuck = Date.now() + 60000;
    }

    //Silly ore!
    if (Math.random() < 1/10000000) {
        spawnCatEye();
    }
}
function spawnCatEye() {
    let v = rollVariant();
    if (player.gears["gear25"]) v = rollVariant();
    const variant = v.v;
    playerInventory["cateye"][variantInvNames[variant-1]]++;
    typeWriter(oreList["cateye"]["spawnMessage"], 2);
    inventoryObj["cateye"] = 0;
    playSound("Infinitesimal")
}
const blockAmts = [];
let lastBlockAmt = 0;
function getAvgBlockSpeed() {
    blockAmts.push(player.stats.blocksMined - lastBlockAmt);
    if (blockAmts.length > 120) blockAmts.splice(0, 1);
    let totalBlockAmts = 0;
    for (let i = 0; i < blockAmts.length; i++) totalBlockAmts += blockAmts[i];
    totalBlockAmts *= (120 / blockAmts.length);
    lastBlockAmt = player.stats.blocksMined;
    return totalBlockAmts;
}
function updateDisplayTimer(state) {
    if (state) {
        clearInterval(displayTimer);
        displayTimer = null;
        displayTimer = setInterval(() => {
        displayArea();
    }, player.settings.automineUpdate);
}
    else {
        clearInterval(displayTimer); 
        displayTimer = null;
        displayArea();
    }
}
let lastXValues = [];
function appear(element){
    element.classList.remove("hidden")
}
function disappear(element){
    element.classList.add("hidden")
}

//SPAWNS AND FINDS
let spawnOre = null;
let currentSpawnTier = "";
const spawnsToSearch = [];
function spawnMessage(obj) {
    let block = obj.block;
    let location = obj.location;
    let caveInfo = obj.caveInfo;
    let variant = namesemojis[obj.variant - 1];
    let variantMulti = multis[obj.variant - 1];
    spawnMessage.count++;
    spawnMessage.lastOre = block;
    const toEdit = get("latestTemplate").cloneNode(true);
    toEdit.classList.add("notMinedLatestOre")
    spawnsToSearch.push({loc: obj.location, ore: block, element: toEdit})
    toEdit.id = "";
    toEdit.style.display = "table";
    const editing = toEdit.children[0].children;
    const loc = mine[location["Y"]][location["X"]];
    if (loc.ore === block || loc === block) player.oreTracker.existingOres.push({block: block, posX : location["X"], posY : location["Y"]});
    let oreRarity = oreList[block]["numRarity"];
    if (oreList[block]["oreTier"] === "Infinitesimal") oreRarity = Infinity;
    toEdit.setAttribute("title", oreList[block]["oreName"]);
    let blockOutput;
    let curTier = oreList[block]["oreTier"];
    if (oreList[block]["hasImage"]) {
        if (curTier === "Hyperdimensional" || curTier === "Infinitesimal" || curTier === "Silly :3" || oreList[block]["numRarity"] >= 1000000000000000) {
            blockOutput = `<span class="latestImage"><img src="${oreList[block]["src"]}" style="width:2.5vw; height:2.5vw;"></img></span>`;
            toEdit.style.height = "2.5vw";
        } else {
            blockOutput = `<span class="latestImage"><img src="${oreList[block]["src"]}"></img></span>`;
        }
    } else {
        blockOutput = block;
    }
    editing[0].innerHTML = `${variant} ${blockOutput}`;
    let rng;
    if (caveInfo !== undefined) {
        rng = caveInfo["adjRarity"];
    } else rng = oreRarity;
    editing[1].textContent = `1/${formatNumber(rng * variantMulti)} BASE`;
    const toAppendTo = get("latestOres");
    if (toAppendTo.children.length > 1) {
        toAppendTo.insertBefore(toEdit, toAppendTo.children[1]);
    } else {
        toAppendTo.appendChild(toEdit);
    }
    if (toAppendTo.children.length > player.settings.latestLength) toAppendTo.removeChild(toAppendTo.lastChild);
    const colors = oreInformation.getColors(oreList[block]["oreTier"]);
    toEdit.classList.add(getShadowClass(colors["textColor"]));
    let toEditStyleColor;
    if (colors["isGradient"] === true) { toEditStyleColor = colors["backgroundColor"]} else { toEditStyleColor =  `linear-gradient(to right, #000000, ${colors["backgroundColor"]} 15%, 85%, #000000)`}
    toEdit.style.background = toEditStyleColor;
    toEdit.style.color = colors["textColor"];
    let createSpawnMessage = false;
    if (oreInformation.tierGrOrEqTo({"tier1": curTier, "tier2":currentSpawnTier}) || spawnOre === null || currentSpawnTier === "") createSpawnMessage = true;
    if (createSpawnMessage) {
        if (obj.variant === 4) document.getElementById("topMessages").classList = "explosiveSpawnMessage";
        else if (obj.variant === 3) document.getElementById("topMessages").classList = "radioactiveSpawnMessage";
        else if (obj.variant === 2) document.getElementById("topMessages").classList = "electrifiedSpawnMessage";
        else if (obj.variant === 1) document.getElementById("topMessages").classList = "normalSpawnMessage";
        currentSpawnTier = curTier;
        let spawnText;
        if (currentWorld === 1.1) {
            spawnText = `<i><span title="${oreList[block]["oreName"]}">` + oreInformation.getTierMessage(curTier) + "</span></i><br>";
            typeWriter(spawnText, 2);
        } else {
            spawnText = `<i><span title="${oreList[block]["oreName"]}">` + oreList[block]["spawnMessage"] + "</span></i>";
            typeWriter(spawnText, 2)
        }
        get("topMessages").style.color = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    }
}
spawnMessage.count = 0;
spawnMessage.lastOre = undefined;
let typeCalls = {
    curPriority: 0,
    num: 0,
};
function removeIndicators() {
    get("messageType").textContent = "Current Message: N/A";
}
function addIndicator(type) {
    if (type === "ore") get("messageType").textContent = "Current Message: Ore Spawn";
    else if (type === "event") get("messageType").textContent = "Current Message: Event Message";
    else if (type === "other") get("messageType").textContent = "Current Message: ?????";
}
function typeWriter(string, priority) {
    let char;
    let hex;
    let emoji
    let output = "";
    let ignoreUntil = 0;
    const loc = get("topMessages")
    loc.style.height = "3vw";
    loc.style.fontSize = "1.25vw";
    loc.style.lineHeight = "1vw";
    const originalSize = loc.offsetHeight;
    const fonts = ["1.25vw", "1.1vw", "0.95vw","0.8vw","0.65vw","0.5vw", "0.35vw"];
    let cfi = 0;
    if (priority >= typeCalls.curPriority) {
        typeCalls.curPriority = priority;
        typeCalls.num++;
    } else {
        return;
    }
    if (priority === 0) removeIndicators();
    else if (priority === 1) addIndicator("event");
    else if (priority === 2) addIndicator("ore");
    else if (priority === 3) addIndicator("other");
    if (priority !== 1) queueTypeRemoval();
    const thisTypeNum = typeCalls.num;
    const elements = [];
    const emojiRegex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;
    for (let i = 0; i < string.length; i++) {
        char = string.substring(i, i + 1);
        hex = char.codePointAt(0).toString(16);
        emoji = String.fromCodePoint("0x"+hex);
        if (emoji === "<") {
            let htmlOutput = "";
            for (let j = i; j < string.length; j++) {
                let htmlChar = string.substring(j, j + 1);
                htmlOutput += htmlChar;
                if (htmlChar === ">") break;
            }
            ignoreUntil = i + htmlOutput.length;
            elements.push({t: htmlOutput, h: true})
        } else {
            if (!(ignoreUntil > i)) {
                elements.push({t: emoji, h: false, e: emojiRegex.test(emoji)})
            }
        }
    }
    let i = 0;
    while (i < elements.length - 1) {
        const text = `${elements[i].t}${elements[i + 1].t}`
        if (emojiRegex.test(text)) {
            elements[i].t = `${elements[i].t}${elements[i + 1].t}`;
            elements.splice(i + 1, 1);
        }
        i++;
    }
    let multi;
    for (let i = 0; i < elements.length; i++) {
        multi = i;
        if (elements[i].h) multi = i - 1;
        setTimeout(() => {
            output += elements[i].t
            if (typeCalls.num === thisTypeNum) {
                loc.innerHTML = output;
                loc.style.height = "auto";
                const curSize = loc.offsetHeight;
                loc.style.height = "3vw";
                if (curSize > originalSize && cfi < 7) {
                    cfi++;
                    loc.style.fontSize = fonts[cfi];
                    loc.style.lineHeight = fonts[cfi]
                }
            }
            else return;
        }, 10 * multi);
    }
}
let typeTimer = null;
function queueTypeRemoval() {
    clearTimeout(typeTimer);
    typeTimer = setTimeout(() => {
        document.getElementById("topMessages").classList = ""; 
        get("topMessages").style.color = "#ffffff";
        document.getElementById("topMessages").innerHTML = "All Messages Appear Here!";
        removeIndicators();
        typeCalls.curPriority = 0;
        if (currentActiveEvent !== undefined) {
            const text = events[currentActiveEvent.name].message;
            typeWriter(text, 1);
        }
        typeTimer = null;
    }, 20000);
}
let loggedFinds = [];
function logFind(type, x, y, variant, atMined, fromReset, amt, fromCave, bulkRarity) {
    let foundElement;
    let wasFound;
    for (let i = spawnsToSearch.length - 1; i >= 0; i--) {
        const currentIndex = spawnsToSearch[i];
        if (currentIndex.ore === type && currentIndex.loc.X === x && currentIndex.loc.Y === y) {
            foundElement = spawnsToSearch[i].element;
            spawnsToSearch.splice(i, 1);
            wasFound = true;
            break;
        }
    }
    if (wasFound) {
        foundElement.classList.add("minedLatestOre");
        foundElement.classList.remove("notMinedLatestOre");
        let elemChildren = foundElement.children[0].children;
        elemChildren[2].textContent = "MINED: TRUE";
        elemChildren[4].textContent = `AT ${formatNumber(atMined)} MINED`;
        let rng;
        const caveLuck = verifiedOres.getCaveLuck();
        if (fromCave.cave) {
                if (fromCave.multi === 1000) rng = Math.floor(1/gsProbabilities[caveList["abysstoneCave"].indexOf(type)]/caveLuck) * fromCave.multi;
                else if (oolProbabilities[type] !== undefined) rng = Math.floor(1/oolProbabilities[type]/caveLuck) * fromCave.multi;
                else rng = Math.floor(oreList[type]["numRarity"] / caveLuck) * fromCave.multi;
        } else {
            rng = Math.floor(1/oreList[type]["decimalRarity"]);
        }
        if (oreList[type]["oreTier"] === "Infinitesimal") {rng = Infinity; if (bulkRarity !== undefined) bulkRarity = Infinity;}
        elemChildren[3].textContent = `1/${bulkRarity === undefined ? formatNumber(rng * multis[namesemojis.indexOf(variant)], 2) : formatNumber(bulkRarity === Infinity ? Infinity : (1/bulkRarity), 2)} RNG`;
        elemChildren[5].textContent = `AMT: ${formatNumber(amt)}`;
    }
}
const suffixes = ["", "k", "M", "B", "T", "qd", "Qn", "sx", "Sp", "O", "N", "de", "Ud", "DD", "tdD", "qdD", "QnD", "sxD", "SpD", "OcD", "NvD", "Vgn", "UVg", "DVg", "TVg", "qtV", "QnV", "SeV", "SPG", "OVG", "NVG", "TGN", "UTG", "DTG", "tsTG", "qtTG", "QnTG", "ssTG", "SpTG", "OcTg", "NoTG", "QdDR", "uQDR", "dQDR", "tQDR", "qdQDR", "QnQDR", "sxQDR", "SpQDR", "OQDDr", "NQDDr", "qQGNT", "uQGNT", "dQGNT", "tQGNT", "qdQGNT", "QnQGNT", "sxQGNT", "SpQGNT", "OQQGNT", "NQQGNT", "SXGNTL", "USXGNTL", "DSXGNTL", "TSXGNTL", "QTSXGNTL", "QNSXGNTL", "SXSXGNTL", "SPSXGNTL", "OSXGNTL", "NVSXGNTL", "SPTGNTL", "USPTGNTL", "DSPTGNTL", "TSPTGNTL", "QTSPTGNTL", "QNSPTGNTL", "SXSPTGNTL", "SPSPTGNTL", "OSPTGNTL", "NVSPTGNTL", "OTGNTL", "UOTGNTL", "DOTGNTL", "TOTGNTL", "QTOTGNTL", "QNOTGNTL", "SXOTGNTL", "SPOTGNTL", "OTOTGNTL", "NVOTGNTL", "NONGNTL", "UNONGNTL", "DNONGNTL", "TNONGNTL", "QTNONGNTL", "QNNONGNTL", "SXNONGNTL", "SPNONGNTL", "OTNONGNTL", "NONONGNTL", "CENT", "UCENT"];
function formatNumber(num, topoint) {
    num = Math.round(num)
    topoint ??= 1;
    if (topoint < 1) topoint = 1;
    topoint = Math.pow(10, topoint);
    if (num < 1000) {
        return num;
    }
    if (num >= Infinity) return Infinity;
    let tenMulti = Math.floor(Math.log10(num) / 3);
    return Math.floor(num / Math.pow(1000, (tenMulti)) * topoint) / topoint + suffixes[tenMulti];
}
function getAngleBetweenPoints(obj) {
    let x = obj.x - curX;
    let y = obj.y - curY;
    let angle = Math.atan2(y, x);
    if(angle < 0) angle += Math.PI * 2;
    angle *= (180 / Math.PI);
    let element = (player.settings.useNyerd ? document.getElementById("nyerd") : document.getElementById("trackerArrow"));
    let rotate = (player.settings.useNyerd ? `rotate(${angle - 90}deg)` : `rotate(${angle}deg)`);
    element.style.transform = rotate;
    return angle;
}
function checkExistingOres() {
    if (!ca) detectCatgirlOres();
    if (mine[curY] !== undefined && mine[curY][curX+5] !== undefined && mine[curY][curX+5].what === 99999) {
        if (Math.random() < 1/(Math.log2(player.stats.blocksMined))) {
            insertIntoLayers({"ore":"catgirl", "layers":["unknownLayer"], "useLuck":true});
            typeWriter("<i>The appearance of THE cat of all time shakes the universe to it's core...</i>", 3);
            playSound("Infinitesimal");
            ca = true;
        } else {
            delete mine[curY][curX+5].what;
            typeWriter("<i>lol get fucked you have to do that all over again</i>", 3);
            playSound("Infinitesimal");
        }
    }
    let closestIndex = -1;
    let closestLocation = Infinity;
    for (let i = 0; i < player.oreTracker.existingOres.length; i++) {
        let num = Math.abs(curX - player.oreTracker.existingOres[i].posX) + Math.abs(curY - player.oreTracker.existingOres[i].posY);
        mine[player.oreTracker.existingOres[i].posY] ??= [];
        let block = mine[player.oreTracker.existingOres[i].posY][player.oreTracker.existingOres[i].posX];
        block = block.ore === undefined ? block : block.ore;
        if (num < closestLocation && (block === player.oreTracker.existingOres[i].block) || (cg && block === "nebula")) {
            closestIndex = i;
            closestLocation = num;
        }
    }
    if (closestIndex > -1) {
        mine[player.oreTracker.existingOres[closestIndex].posY] ??= [];
        let blockAtIndex = mine[player.oreTracker.existingOres[closestIndex].posY][player.oreTracker.existingOres[closestIndex].posX];
        let variantAtIndex = "";
        if (blockAtIndex.variant !== undefined) variantAtIndex = namesemojis[blockAtIndex.variant - 1];
        if (blockAtIndex.ore !== undefined) blockAtIndex = blockAtIndex.ore;
        if (blockAtIndex === player.oreTracker.existingOres[closestIndex].block || (blockAtIndex === "nebula" && cg)) {
            player.oreTracker.tracking = true;
            player.oreTracker.locationX = player.oreTracker.existingOres[closestIndex].posX;
            player.oreTracker.locationY = player.oreTracker.existingOres[closestIndex].posY;
            let blockOutput;
            const ore = cg ? "nebula" : player.oreTracker.existingOres[closestIndex].block;
            if (oreList[ore]["hasImage"]) {
                blockOutput = `<span class="trackerImage"><img src="${oreList[ore]["src"]}"></img></span>`
            } else {
                blockOutput = ore;
            }
            document.getElementById("trackerOre").innerHTML = `Ore: ${variantAtIndex}${cg ? "?????" : blockOutput}`
            document.getElementById("trackerX").innerText = `X: ${(player.oreTracker.locationX - 1000000).toLocaleString()}`
            document.getElementById("trackerY").innerText = `Y: ${(-1 * (player.oreTracker.locationY - (currentWorld < 2 ? 0 : 2000))).toLocaleString()}`
            getAngleBetweenPoints({x:player.oreTracker.locationX, y:player.oreTracker.locationY});
        }
    }
}
let ca = false;
let cg = false;
function detectCatgirlOres() {
    let c = 0;
    for (let r = curY-8; r < curY + 9; r++) if (r > 0) {mine[r] ??= [];} else {return;}
    c += (mine[curY][curX+1] !== undefined && mine[curY][curX+1].ore === "godOfTheMine") ? 1 : 0
    c += (mine[curY+5][curX+7] !== undefined && mine[curY+5][curX+7].ore === "Goober") ? 1 : 0
    c += (mine[curY-6][curX+2] !== undefined && mine[curY-6][curX+2].ore === "✈️") ? 1 : 0
    c += (mine[curY-8][curX+6] !== undefined && mine[curY-8][curX+6].ore === "Omnipotent God of The Mine") ? 1 : 0
    c += (mine[curY+3][curX-2] !== undefined && mine[curY+3][curX-2].ore === "👁‍🗨") ? 1 : 0
    c += (mine[curY][curX-6] !== undefined && mine[curY][curX-6].ore === "🏳️‍⚧️") ? 1 : 0
    c += (mine[curY-6][curX-4] !== undefined && mine[curY-6][curX-4].ore === "✡️") ? 1 : 0
    c += (mine[curY+8][curX-5] !== undefined && mine[curY+8][curX-5].ore === "HD 160529") ? 1 : 0
    if (c === 8) {
        cg = true;
        mine[curY+1000000] ??= [];
        mine[curY+1000000][curX+1000000] = {ore:"nebula", variant:1, what: 99999};
        player.oreTracker.existingOres = [{block: "?????", posX: curX+1000000, posY: curY+1000000}];
    }
    displayArea();
}
function removeExistingOre(location) {
    for (let i = 0; i < player.oreTracker.existingOres.length; i++) {
        let num1 = player.oreTracker.existingOres[i].posX;
        let num2 = player.oreTracker.existingOres[i].posY;
        if (location.x === num1 && location.y === num2) {
            player.oreTracker.existingOres.splice(i, 1);
            if (location.x === player.oreTracker.locationX && location.y === player.oreTracker.locationY) {
                removeTrackerInformation();
            }
            break;
        }
    }
}
function removeTrackerInformation() {
    player.oreTracker.tracking = false;
    document.getElementById("trackerOre").innerText = `${player.settings.useNyerd ? "Ore: NYAH" : "Ore: N/A"}`;
    document.getElementById("trackerX").innerText = `${player.settings.useNyerd ? "X: NYAH" : "X: N/A"}`;
    document.getElementById("trackerY").innerText = `${player.settings.useNyerd ? "Y: NYAH" : "Y: N/A"}`;
    get("oreTrackerButton").textContent = `${player.settings.useNyerd ? "Track NYERDS!" : "Track Ores!"}`
    player.oreTracker.locationX = 0;
    player.oreTracker.locationY = 0;
}

function goToOre(block, variantType) {
    //SET INVENTORY
    let variantNum = namesemojis.indexOf(variantType) + 1;
    document.getElementById("inventory" + variant).style.display = "none";
    variant = variantNum;
    document.getElementById("inventory" + variant).style.display = "block";
    document.getElementById("switchInventory").innerHTML = names[variant - 1] + " Inventory"
    let inventoryElements = document.getElementById("inventory" + variantNum).children;
    let total = 0;
    for (let i = 0; i < inventoryElements.length; i++) {
        const text = inventoryElements[i].children[2].id
        let ore = text.substring(0, text.indexOf("amt"));
        let element = inventoryElements[i];
        if (element.style.display === "table") {
            if (ore === block) {
                document.getElementById("inventoryDisplay").scrollTop = total;
                return;
            }
            total += inventoryElements[i].getBoundingClientRect()["height"];
        }
    }
}
let currentActiveEvent;
specialOreValues = {

}
const events = {
    "event1" : {
        rate: 1/5000,
        duration: 1500000,
        boost: 1.5,
        ore: "🌀",
        message: `<i><span style="background-image:linear-gradient(to right, #0007ff, #008eff, #14f0f2, #49c7cd, #70a9b3);" class="eventGradient">The tides in the 🌊 drop out into the ocean, lowering a path into the depth...</span></i>`,
        world: 1,
        specialText: "Makes commons twice as rare, puts 🧀 into water layer, makes 🧀 rarer (1/927,000,000 base rarity)",
        //makes commons twice as rare, puts cheese into water layer, makes cheese rarer
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"🧀", "layers":["waterLayer"], "useLuck":true});
                oreInformation.commonMultiplier = 2;
                specialOreValues["🧀"] = {
                    newBaseRarity: 927000000,
                    layerToChange: "waterLayer"
                }
            }
            else {
                removeFromLayers({"ore":"🧀", "layers":["waterLayer"]});
                oreInformation.commonMultiplier = 1;
                delete specialOreValues["🧀"];
            }
        },
    },
    "event2" : {
        rate: 1/2500,
        duration: 3000000,
        boost: 2,
        ore: "⚙️",
        message: `<i>Mechanical whirring draws your attention deeper into the mines...</i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) return;
            else return;
        }
    },
    "event3" : {
        rate: 1/4000,
        duration: 1800000,
        boost: 1.375,
        ore: "🌈",
        message: `<i>Every pigment of color swirls up from below, surrounding you in an eternal rainbow...</i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) return;
            else return;
        }
    },
    "event4" : {
        rate: 1/12500,
        duration: 1800000,
        boost: 1.25,
        ore: "🛎️",
        message: `<i>You hear a bell start dinging in the 🚪 layer...</i>`,
        world: 2,
        specialText: "Makes 🔕 rarer (1/300,000,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🔕"] = {
                    newBaseRarity: 300000000,
                    layerToChange: "borderLayer"
                }
            }
            else {
                delete specialOreValues["🔕"];
            }
        }
    },
    "event5" : {
        rate: 1/3000,
        duration: 1800000,
        boost: 2,
        ore: "🔋",
        message: `<i>An electrical container in the rock layer energizes the air around you...</i>`,
        world: 1,
        specialText: "Adds +10% ability proc rate",
        specialEffect: function(state) {
            if (state) {
                batteryEvent = true;
            }
            else {
                batteryEvent = false;
            }
        }
    },
    "event6" : {
        rate: 1/10000,
        duration: 900000,
        boost: 1.15,
        ore: "⌛",
        message: `<i><span style="background-image:linear-gradient(to right, #c2842d, #edae26, #d45419, #8a1b0c);" class="eventGradient">The passage of time seems to speed up as it's source is unearthed...</span></i>`,
        world: 1,
        specialText: "Decreases base mining speed by 1",
        specialEffect: function(state) {
            if (state) {
                baseSpeed--;
                updateSpeed();
            }
            else {
                baseSpeed++;
                updateSpeed();
            }
        }
    },
    "event7" : {
        rate: 1/15000,
        duration: 1200000,
        boost: 1.3,
        ore: "🎓",
        message: `<i><span style="background-image:linear-gradient(to right, #ede6e6, #383434, #7a7878, #ede6e6);" class="eventGradient">All the knowledge of this realm courses through you as a new intelligence forms...</span></i>`,
        world: 2,
        specialText: "Makes ✏️,  🧠,  📖, 📐, 📚, and 🖊️ 2x more common",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["✏️"] = {newBaseRarity: 8200000/2,layerToChange: "chessLayer"}
                specialOreValues["🧠"] = {newBaseRarity: 15500000/2,layerToChange: "chessLayer"}
                specialOreValues["📖"] = {newBaseRarity: 16000000/2,layerToChange: "chessLayer"}
                specialOreValues["📐"] = {newBaseRarity: 34000000/2,layerToChange: "chessLayer"}
                specialOreValues["📚"] = {newBaseRarity: 48100000/2,layerToChange: "chessLayer"}
                specialOreValues["🖊️"] = {newBaseRarity: 165000000/2,layerToChange: "chessLayer"}
            }
            else {
                delete specialOreValues["✏️"];
                delete specialOreValues["🧠"];
                delete specialOreValues["📖"];
                delete specialOreValues["📐"];
                delete specialOreValues["📚"];
                delete specialOreValues["🖊️"];
            }
        }
    },
    "event8" : {
        rate: 1/3500,
        duration: 3000000,
        boost: 1.75,
        ore: "🥗",
        message: `<i><span style="background-image:linear-gradient(to right, #6a9c44, #78db2c, #27d111, #083802, #2f7327);" class="eventGradient">Leafy greens cloud your vision...</span></i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else {
                return;
            }
        }
    },
    "event9" : {
        rate: 1/5000,
        duration: 2700000,
        boost: 1.25,
        ore: "📽️",
        message: `<i>A highlight reel of your journey in the mines is faintly visible in the corner of your eyes...</i>`,
        world: 2,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else {
                return;
            }
        }
    },
    "event10" : {
        rate: 1/1000000,
        duration: 9000000,
        boost: 1,
        ore: "✈️",
        message: `<i><span class="rainbowBackground">Lyle! Lyle, wake up! You gotta wake up, please!...</span></i>`,
        world: 1,
        specialText: "Makes ✈️ obtainable",
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"✈️", "layers":["sillyLayer"], "useLuck":true});
                specialOreValues["✈️"] = {
                    newBaseRarity: 911911911911,
                    layerToChange: "sillyLayer"
                }
            }
            else {
                removeFromLayers({"ore":"✈️", "layers":["sillyLayer"]});
                delete specialOreValues["✈️"];
            }
        }
    },
    "event11" : {
        rate: 1/4000,
        duration: 2700000,
        boost: 1.25,
        ore: "💫",
        message: `<i>The skies begin to glow as a cosmic body enchants the mine...</i>`,
        world: 1,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) return;
            else return;
        }
    },
    "event12" : {
        rate: 1/15000,
        duration: 180000,
        boost: 5,
        ore: "⌨️",
        message: `<i>Intense typing can be heard not too deep underground...</i>`,
        world: 2,
        specialText: "Makes 🖱️ rarer (1/10,010,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🖱️"] = {
                    newBaseRarity: 10010000,
                    layerToChange: "globeLayer"
                }
            }
            else delete specialOreValues["🖱️"];
        }
    },
    "event13" : {
        rate: 1/22000,
        duration: 1200000,
        boost: 1.13,
        ore: "⚡",
        message: `<i>A thundercloud begins brewing above the mines...</i>`,
        world: 2,
        specialText: "Makes 🪶 rarer (1/4,120,000,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🪶"] = {
                    newBaseRarity: 4120000000,
                    layerToChange: "cloudLayer"
                }
            }
            else delete specialOreValues["🪶"];
        }
    },
    "event14" : {
        rate: 1/12500,
        duration: 900000,
        boost: 1.4,
        ore: "💣",
        message: `<i>BOMBS AWAY!!!...</i>`,
        world: 2,
        specialText: "Makes 🏹 rarer (1/5,000,000,000 base rarity)",
        specialEffect: function(state) {
            if (state) {
                specialOreValues["🏹"] = {
                    newBaseRarity: 5000000000,
                    layerToChange: "tvLayer"
                }
            }
            else delete specialOreValues["🏹"];
        }
    },
    "event15" : {
        rate: 1/30000,
        duration: 600000,
        boost: 1.5,
        ore: "🇯🇵",
        message: `<i>Onichan, sempaiiiiii, come visit me ^w^...</i>`,
        world: 1.1,
        specialText: "Puts 🍆 into 🇧🇳 layer, makes 🍆 rarer (1/696,969,696 base rarity)",
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"🍆", "layers":["bnLayer"], "useLuck":true});
                specialOreValues["🍆"] = {
                    newBaseRarity: 696969696,
                    layerToChange: "bnLayer"
                }
            }
            else {
                removeFromLayers({"ore":"🍆", "layers":["bnLayer"]});
                delete specialOreValues["🍆"];
            }
        }
    },
    "event16" : {
        rate: 1/50000,
        duration: 2700000,
        boost: 1.17,
        ore: "🇵🇫",
        message: `<i>Is this from where the french national team comes from?...</i>`,
        world: 1.1,
        specialText: "Reduces game brightness to 50%",
        specialEffect: function(state) {
            if (state) {
                document.body.style.filter = "brightness(0.5)";
            }
            else document.body.style.filter = "";
        }
    },
    "event16" : {
        rate: 1/1250,
        duration: 1800000,
        boost: 1,
        ore: "🪸",
        message: `<i><span style="background-image:linear-gradient(to right, #037ADE, #03E5B7);" class="eventGradient">watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr,watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr, watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br>watr<br></span></i>`,
        world: 1.2,
        specialText: "watr",
        specialEffect: function(state) {
            if (state) {
                insertIntoLayers({"ore":"🪸", "layers":["waterLayer"], "useLuck":true});
            }
            else removeFromLayers({"ore":"🪸", "layers":["waterLayer"]});
        }
    },
    "event17" : {
        rate: 1/5000,
        duration: 3600000,
        boost: 2.75,
        ore: "HD 160529",
        message: `<i>A mysterious object pulses brightly in the depths below you...</i>`,
        world: 1.2,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else return;
        }
    },
    "event18" : {
        rate: 1/19000,
        duration: 2700000,
        boost: 2,
        ore: "unstableCore",
        message: `<i>Vibrant, geometric shapes materialize in the mine, unleashing a massive burst of energy warping the space around you...</i>`,
        world: 0.9,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else return;
        }
    },
    "event19" : {
        rate: 1/75000,
        duration: 1350000,
        boost: 2.5,
        ore: "noradrenaline",
        message: `<i><span style="color:#5d0d31">An otherworldly mineral can be faintly heard from the Nebula layer...</span></i>`,
        world: 0.9,
        specialText: "N/A",
        specialEffect: function(state) {
            if (state) {
                return;
            }
            else return;
        }
    },
}
function activateEvent(name) {
    if (name === undefined) return;
    currentActiveEvent = {name: name, removeAt: Date.now() + events[name].duration, extraBoost: 0}
    events[name].specialEffect(true);
    const text = events[name].message;
    typeWriter(text, 1);
    updateAllLayers();
}
function endEvent() {
    if (currentActiveEvent === undefined) return;
    events[currentActiveEvent.name].specialEffect(false);
    events[currentActiveEvent.name].boost -= currentActiveEvent.extraBoost;
    currentActiveEvent = undefined;
    if (typeCalls.curPriority === 1) messageElement.textContent = "All Messages Appear Here!";
    if (typeCalls.curPriority === 1) removeIndicators();
    typeCalls.curPriority = 0;
    updateAllLayers();
}
function getCurrentEventOre() {
    if (currentActiveEvent === undefined) return;
    return events[currentActiveEvent.name].ore;
}
function rollEvent() {
    const arr = Object.keys(events);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (events[arr[j]].rate > events[arr[j + 1]].rate) {
                let lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    for (let i = arr.length - 1; i >= 0; i--) if (currentWorld !== events[arr[i]].world) arr.splice(i, 1);
    const chosenValue = Math.random();
    for (let i = 0; i < arr.length; i++) {
        if (chosenValue < events[arr[i]].rate) return arr[i]
    }
    return undefined;
}
function formatEventText() {
    const element = document.getElementsByClassName("faqPage")[8];
    let output = `<span class="faqTitle">Events:</span><br>`;
    for (let event in events) {
        const newEventName = `Event ${event.substring(5)}:`
        output += `<span class="faqSection">${newEventName}</span>`;
        output += `<span class="faqText">${events[event].message}</span>`;
        output += `<span class="faqText">Rate: 1/${Math.round(1/events[event].rate)} every 250ms</span>`;
        output += `<span class="faqText">Duration: ${msToTime(events[event].duration)}</span>`;
        output += `<span class="faqText">Main Effect(s): ${events[event].boost}x boost on ${events[event].ore}</span>`;
        output += `<span class="faqText">Side Effect(s): ${events[event].specialText}</span>`;
        output += `<span class="faqText">World(s): ${events[event].world}</span>`;
        output += `<br>`;
    }
    element.innerHTML = output;
}
function eventActions(input) {
    if (Date.now() < player.eventManager.cooldown && !debug) return;
    let wasUsed = false;
    if (input === "c") {
        endEvent();
        const toChoose = collectWorldEvents(currentWorld);
        if (toChoose.indexOf("event10") > -1) toChoose.splice(toChoose.indexOf("event10"), 1)
        const selector = Math.round(Math.random() * (toChoose.length - 1));
        const chosen = toChoose[selector];
        if (chosen === undefined) return;
        activateEvent(chosen);
        player.eventManager.cooldown = Date.now() + 900000;
        wasUsed = true;
    } else if (input === "t") {
        if (currentActiveEvent !== undefined) {
            const current = currentActiveEvent;
            const endTime = current.removeAt;
            const durationLeft = endTime - Date.now();
            currentActiveEvent.removeAt += (durationLeft * 0.25);
            player.eventManager.cooldown = Date.now() + 900000;
            wasUsed = true;
        }
    } else if (input === "b") {
        if (currentActiveEvent !== undefined) {
            const baseBoost = events[currentActiveEvent.name].boost - currentActiveEvent.extraBoost;
            const thisBoost = Math.round(baseBoost * 0.15 * 100) / 100;
            events[currentActiveEvent.name].boost += thisBoost;
            currentActiveEvent.extraBoost += thisBoost;
            updateAllLayers();
            player.eventManager.cooldown = Date.now() + 900000;
            wasUsed = true;
        }
    }
}
function showEventOptions() {
    const elems = document.getElementsByClassName("eventActionButton");
    for (let i = 0; i < elems.length; i++) elems[i].disabled = false;
}
function hideEventOptions() {
    const elems = document.getElementsByClassName("eventActionButton");
    for (let i = 0; i < elems.length; i++) elems[i].disabled = true;
}
function updateEventActions() {
    const cooldown = player.eventManager.cooldown - Date.now();
    get("actionCooldown").textContent = `Can use in ${msToTime(cooldown)}`;
    if (!player.gears["gear45"]) {get("actionCooldown").textContent = "Craft Event Manager To Use Buttons!"; hideEventOptions();}
    else showEventOptions();
    if (currentActiveEvent !== undefined) {
        get("eventStats").textContent = `${Math.round(events[currentActiveEvent.name].boost*100)/100}x Boost, ${msToTime(currentActiveEvent.removeAt - Date.now())} Duration`
    } else {
        get("eventStats").textContent = "No Active Event!";
    }
}
function collectWorldEvents(world) {
    const inWorld = [];
    for (e in events) {
        if (events[e].world === world) {
            inWorld.push(e)
        }
    }
    return inWorld;
}
function get(id) {
    return document.getElementById(`${id}`)
}
function editMode() {
    window.onclick = getElementAt;
    clearInterval(limitedTimer);
    clearInterval(inventoryTimer);
    limitedTimer = null;
    inventoryTimer = null;
}
const ignoreClasses = [""];
const ignoreIds = [""];
let currentlyEditingElement = "";
let edits = 0;
let editsMade = {};
function getElementAt(event) {
    const toEdit = document.elementFromPoint(event.pageX, event.pageY);
    let includesIgnoreClass = false;
    for (let i = 0; i < toEdit.classList; i++) if (ignoreClasses.includes(toEdit.classList[i])) {includesIgnoreClass = true; break;}
    if (toEdit.children.length === 0 && !toEdit.classList.contains("indexBlackout")) {
        if (toEdit.id.includes("editedManually")) {
            const searchingIn = toEdit.parentElement.children;
            let idToFind = toEdit.id;
            for (let i = 0; i < searchingIn.length; i++) {
                if (searchingIn[i].id === idToFind) {
                    currentlyEditingElement = searchingIn[i];
                    createCustomColorInput();
                    break;
                }
            }
        } else {
            currentlyEditingElement = toEdit;
            createCustomColorInput();
            edits++;
        }
    }
}
function setTextColor(color) {
    if (currentlyEditingElement !== undefined) {
        const textContent = currentlyEditingElement.innerText;
        let thisId = currentlyEditingElement.id;
        if (thisId.indexOf("editedManually") > -1) {
        } else {
            thisId = `editedManually${edits}`;
        }
        if (editsMade[thisId] === undefined) editsMade[thisId] = {color: color, element: currentlyEditingElement}
        else editsMade[thisId].color = color;
        currentlyEditingElement.innerHTML = `<span id='${thisId}' style='color:${color}'>${textContent}</span>`;
        
    }
}
function createCustomColorInput() {
    const text = window.prompt("Enter Color");
    setTextColor(text);
}
function toggleSideMenu(id) {
    const menu = get(id);
    const isOpenAlready = menu.classList.contains("displayedSideMenu");
    const close = document.getElementsByClassName("displayedSideMenu");
    const animations = {
        "oreTrackerHolder" : "Tracker",
        "offlineHolder" : "Offline",
        "eventActionHolder" : "EventActions",
        "powerupHolder" : "Powerup"
    }
    const thisAnimation = animations[id];
    if (thisAnimation === undefined) return;
    for (let i = 0; i < close.length; i++) {
        const elem = close[i];
        elem.classList.remove("displayedSideMenu");
        const elemAnimation = animations[elem.id];
        elem.style.animation = `retract${elemAnimation} 0.5s linear 1`;
        elem.onanimationend = () => {
            elem.style.display = "none";
            const height = elem.style.height;
            elem.style.top = `${height}px`;
            elem.style.animation = "";
            elem.onanimationend = undefined;
        };
    }
    if (!isOpenAlready) {
        menu.classList.add("displayedSideMenu");
        menu.style.display = (id === "powerupHolder" ? "flex" : "block")
        menu.style.animation = `extend${thisAnimation} 0.5s linear 1`;
        updateOfflineProgress();
        menu.onanimationend = () => {
            menu.style.right = "0vw";
            menu.style.animation = "";
            menu.onanimationend = undefined;
        };
    }
}
function updateOfflineProgress() {
    if (get("offlineHolder").classList.contains("displayedSideMenu")) {
        let output = "";
        const layer = getLayer(curY).layer;
        let m = 1;
        for (let i = layer.length-1; i >= 0; i--) if (oreList[layer[i]]["oreTier"] !== "Celestial") {
            output += `${oreList[layer[i]]["hasImage"] ? (`<img class="offlineProgressImage" src="${oreList[layer[i]]["src"]}">`) : layer[i]}${(i<layer.length-1 && m%15 === 0) ? (m++, "<br>") : (m++," ")}`;
        }
        get("offlineLayer").innerHTML = output;
        if (player.offlineProgress > 28800000) player.offlineProgress = 28800000;
        get("offlineStats").textContent = `${msToTime(player.offlineProgress)}/08:00:00`;
        const percent = player.offlineProgress > 0 ? 100/(28800000/(player.offlineProgress)) : 0;
        get("offlineInteriorGradient").style.width = `${percent}%`;
        get("offlineInteriorGradient").style.background = "repeating-linear-gradient(45deg, #7f007f, #fff, #7f007f 3vw)";
        const nums = calcSpeed();
        const speed = ((1000/nums.speed)*nums.reps)+nums.extra;
        let pickaxeMined;
        if (player.stats.currentPickaxe === "pickaxe27") pickaxeMined = pickaxeStats["pickaxe27"][player.upgrades["pickaxe27"].level].mined;
        else pickaxeMined = pickaxeStats[player.stats.currentPickaxe].mined
        let amtMulti = 0.1;
        if (player.gears["gear46"]) amtMulti += 0.2;
        if (player.gears["gear47"]) amtMulti += 0.45;
        let willGen = player.offlineProgress > 0 ? Math.floor((speed * (player.offlineProgress/1000))*(pickaxeMined/pickaxeStats[player.stats.currentPickaxe].rate)*amtMulti) : 0;
        if (player.powerupVariables.fakeEquipped.item !== undefined || player.powerupVariables.fakeTreeLevel.level !== undefined) {get("offlineActivate").textContent = "Cant Gen: Paradoxical Active!"; willGen = 0;}
        else if (!verifiedOres.isRightPickaxe()) {get("offlineActivate").textContent = "Cant Gen: Wrong Pickaxe!"; willGen = 0;}
        else get("offlineActivate").textContent = `Gen ${willGen > 1000000000 ? formatNumber(willGen, 2) : willGen.toLocaleString()} Blocks.`;
        return willGen;
    }
}
function generateOfflineProgress() {
    const offlineAmt = updateOfflineProgress();
    if (offlineAmt > 0) {
        let oldState = true;
        if (!player.settings.simulatedRng) {
            oldState = false;
            player.settings.simulatedRng = true;
            updateAllLayers();
        }
        bulkGenerate(curY, offlineAmt, undefined, true); 
        player.offlineProgress = 0; 
        updateOfflineProgress();
        if (!oldState) {
            player.settings.simulatedRng = false;
            updateAllLayers();
        }
    }
}
function preventCrash(event) {
    if (event.key === "Enter") event.preventDefault();
}
const polyLocations = {
    "orbOfLife" : "dirtLayer",
    "orbOfIntelligence" : "chessLayer",
    "orbOfSound" : "fluteLayer",
    "orbOfTheUnknown" : "borderLayer",
    "orbOfCreation" : "nebulaLayer",
    "orbOfFlight" : "cloudLayer",
    "orbOfFire" : "cactusLayer"
}
const polyIds = {
    "orbOfLife" : "gear40",
    "orbOfIntelligence" : "gear41",
    "orbOfSound" : "gear42",
    "orbOfTheUnknown" : "gear43",
    "orbOfCreation" : "gear44",
    "orbOfFlight" : "pickaxe36",
    "orbOfFire" : "gear48",
}
function checkPolys() {
    const polys = Object.keys(polyLocations);
    for (let i = 0; i < polys.length; i++) {
        const poly = polys[i];
        if (player.p[poly]) {
            insertIntoLayers({"ore":`${poly}`, "layers":[polyLocations[`${poly}`]], "useLuck":true});
            if (currentWorld === 0.9) showItem(polyIds[`${poly}`]);
        }
        else {
            if (!player.p["orbOfLife"] && indexHasOre("noradrenaline") > 0) {
                player.p["orbOfLife"] = true;
                insertIntoLayers({"ore":"orbOfLife", "layers":["dirtLayer"], "useLuck":true});
            }
            if (i > 0) {
                if (indexHasOre(polys[i - 1]) > 0) {
                    insertIntoLayers({"ore":`${polys[i - 1]}`, "layers":[polyLocations[`${polys[i - 1]}`]], "useLuck":true});
                    player.p[poly] = true;
                    switchWorldCraftables();
                }
            }
        }
    }
}
//TY @marbelynrye FOR MAKING THESE IMAGE DATA GATHERERS UR SO COOL FOR THAT
//IT WORKS SO WELL!!!!
let pickaxe24Nums = [];
let pickaxe25Nums = [];
let testNums = [];
/*
const az = new Image();
az.src = "media/b.png"
        az.onload = () => {
            const c = new OffscreenCanvas(az.width,az.height)
            const cc = c.getContext("2d")
            cc.drawImage(az,0,0)
            const data = cc.getImageData(0,0,c.width,c.height).data
            console.log(data)
            for (let i = 0; i < data.length; i+=4) {
                data[i + 3]===0?null:testNums.push({"x":(i / 4) % c.width,"y":Math.floor((i / 4) / c.width)})
            }
}
*/
