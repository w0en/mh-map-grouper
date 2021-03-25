// ==UserScript==
// @name         MouseHunt - Map Mouse Grouper
// @author       in59te, w0en
// @namespace    UPDATE
// @version      1.0
// @description  Groups mice according to pre-specified groups and highlights them for easy identification
// @match        http://www.mousehuntgame.com/*
// @match        https://www.mousehuntgame.com/*
// ==/UserScript==

const COMPATIBLE_CHESTS = [
    "Sky Pirate Treasure Chest",
    "Valour Rift Treasure Chest"
]



const launchpadMice = [
    "Skydiver",
    "Skygreaser",
    "Launchpad Labourer",
    "Cloud Miner"
  ];
const wardenMice = [
    "Warden of Rain",
    "Warden of Wind",
    "Warden of Frost",
    "Warden of Fog"
];
const physicalMice = [
    "Ground Gavaleer",
    "Sky Swordsman",
    "Herc",
    "Sky Squire",
    "Paragon of Strength"
];
const shadowMice = [
    "Paragon of Shadow",
    "Astrological Astronomer",
    "Overcaster",
    "Stratocaster",
    "Shadow Sage"
];
const tacticalMice = [
    "Paragon of Tactics",
    "Worried Wayfinder",
    "Gyrologer",
    "Seasoned Islandographer",
    "Captain Cloudkicker"
];
const arcaneMice = [
    "Paragon of Arcane",
    "Sky Glass Sorcerer",
    "Sky Glass Glazier",
    "Sky Dancer",
    "Sky Highborne"
];
const forgottenMice = [
    "Paragon of Forgotten",
    "Spry Sky Explorer",
    "Spry Sky Seer",
    "Cumulost",
    "Spheric Diviner"
];
const hydroMice = [
    "Paragon of Water",
    "Nimbomancer",
    "Sky Surfer",
    "Cute Cloud Conjurer",
    "Mist Maker"
];
const draconicMice = [
    "Paragon of Dragons",
    "Tiny Dragonfly",
    "Lancer Guard",
    "Dragonbreather",
    "Regal Spearman"
];
const lawMice = [
    "Paragon of the Lawless",
    "Devious Gentleman",
    "Stack of Thieves",
    "Lawbender",
    "Agent M"
];
const pirateMice = [
    "Suave Pirate",
    "Cutthroat Pirate",
    "Cutthroat Cannoneer",
    "Scarlet Revenger",
    "Mairitime Pirate"
];


function colorize() {
  let launchpadColor = "#c97c49"; // brown
  let launchpadCount = 0;
  let wardenColor = "ffffff"; // white
  let wardenCount = 0;
  let physicalColor = "#5ae031"; // green
  let physicalCount = 0;
  let shadowColor = "#8f75e2"; // purple
  let shadowCount = 0;
  let tacticalColor = "#fff935"; // yellow
  let tacticalCount = 0;
  let arcaneColor = "#0be496"; // light green
  let arcaneCount = 0;
  let forgottenColor = "#338838"; // darker green
  let forgottenCount = 0;
  let hydroColor = "#5d9fce"; // blue
  let hydroCount = 0;
  let draconicColor = "#f06a60"; // red
  let draconicCount = 0;
  let lawColor = "#f9a645"; // orange
  let lawCount = 0;
  let pirateColor = "#ECA4A6"; // pink
  let pirateCount = 0;
  const greyColor = "#949494";

  const isChecked =
    localStorage.getItem("highlightPref") === "uncaught-only" ? true : false;
  const isCheckedStr = isChecked ? "checked" : "";

  if (
    document.querySelectorAll(".treasureMapView-goals-group-goal").length === 0
  ) {
    return;
  }

  document.querySelectorAll(".treasureMapView-goals-group-goal").forEach(el => {
    el.querySelector("span").style = "color: black; font-size: 11px;";

    const mouseName = el.querySelector(".treasureMapView-goals-group-goal-name")
      .textContent;

    if (launchpadMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = launchpadColor;
      if (el.className.indexOf(" complete ") < 0) {
        launchpadCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (wardenMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = wardenColor;
      if (el.className.indexOf(" complete ") < 0) {
        wardenCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (physicalMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = physicalColor;
      if (el.className.indexOf(" complete ") < 0) {
        physicalCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (shadowMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = shadowColor;
      if (el.className.indexOf(" complete ") < 0) {
        shadowCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (tacticalMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = tacticalColor;
      if (el.className.indexOf(" complete ") < 0) {
        tacticalCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (arcaneMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = arcaneColor;
      if (el.className.indexOf(" complete ") < 0) {
        arcaneCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (forgottenMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = forgottenColor;
      if (el.className.indexOf(" complete ") < 0) {
        forgottenCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (hydroMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = hydroColor;
      if (el.className.indexOf(" complete ") < 0) {
        hydroCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (draconicMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = draconicColor;
      if (el.className.indexOf(" complete ") < 0) {
        draconicCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (lawMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = lawColor;
      if (el.className.indexOf(" complete ") < 0) {
        lawCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    } else if (pirateMice.indexOf(mouseName) > -1) {
      el.style.backgroundColor = pirateColor;
      if (el.className.indexOf(" complete ") < 0) {
        pirateCount++;
      } else {
        if (isChecked) el.style.backgroundColor = "white";
      }
    }
  });

  launchpadColor = launchpadCount > 0 ? launchpadColor : greyColor;
  wardenColor = wardenCount > 0 ? wardenColor : greyColor;
  physicalColor = physicalCount > 0 ? physicalColor : greyColor;
  shadowColor = shadowCount > 0 ? shadowColor : greyColor;
  tacticalColor = tacticalCount > 0 ? tacticalColor : greyColor;
  arcaneColor = arcaneCount > 0 ? arcaneColor : greyColor;
  forgottenColor = forgottenCount > 0 ? forgottenColor : greyColor;
  hydroColor = hydroCount > 0 ? hydroColor : greyColor;
  draconicColor = draconicCount > 0 ? draconicColor : greyColor;
  lawColor = lawCount > 0 ? lawColor : greyColor;
  pirateColor = pirateCount > 0 ? pirateColor : greyColor;

  // Remove existing GWH Map related elements before proceeding
  document.querySelectorAll(".tsitu-gwh-map").forEach(el => el.remove());

  const masterDiv = document.createElement("div");
  masterDiv.className = "tsitu-gwh-map";
  masterDiv.style =
    "display: inline-flex; margin-bottom: 10px; width: 100%; text-align: center; line-height: 1.5; overflow: hidden";
  const spanStyle =
    "; width: auto; padding: 5px; font-weight: bold; font-size: 12.75px; text-shadow: 0px 0px 11px white";

  const launchpadSpan = document.createElement("span");
  launchpadSpan.style = "background-color: " + launchpadColor + spanStyle;
  launchpadSpan.innerHTML = "LP<br>" + launchpadCount;

  const wardenSpan = document.createElement("span");
  wardenSpan.style = "background-color: " + wardenColor + spanStyle;
  wardenSpan.innerHTML = "Ward<br>" + wardenCount;

  const physicalSpan = document.createElement("span");
  physicalSpan.style = "background-color: " + physicalColor + spanStyle;
  physicalSpan.innerHTML = "Phys<br>" + physicalCount;

  const shadowSpan = document.createElement("span");
  shadowSpan.style = "background-color: " + shadowColor + spanStyle;
  shadowSpan.innerHTML = "Shadow<br>" + shadowCount;

  const tacticalSpan = document.createElement("span");
  tacticalSpan.style = "background-color: " + tacticalColor + spanStyle;
  tacticalSpan.innerHTML = "Tact<br>" + tacticalCount;

  const arcaneSpan = document.createElement("span");
  arcaneSpan.style = "background-color: " + arcaneColor + spanStyle;
  arcaneSpan.innerHTML = "Arc<br>" + arcaneCount;

  const forgottenSpan = document.createElement("span");
  forgottenSpan.style = "background-color: " + forgottenColor + spanStyle;
  forgottenSpan.innerHTML = "Forg<br>" + forgottenCount;

  const hydroSpan = document.createElement("span");
  hydroSpan.style = "background-color: " + hydroColor + spanStyle;
  hydroSpan.innerHTML = "Hydro<br>" + hydroCount;

  const draconicSpan = document.createElement("span");
  draconicSpan.style = "background-color: " + draconicColor + spanStyle;
  draconicSpan.innerHTML = "Draco<br>" + draconicCount;

  const lawSpan = document.createElement("span");
  lawSpan.style = "background-color: " + lawColor + spanStyle;
  lawSpan.innerHTML = "Law<br>" + lawCount;

  const pirateSpan = document.createElement("span");
  pirateSpan.style = "background-color: " + pirateColor + spanStyle;
  pirateSpan.innerHTML = "Pirate<br>" + pirateCount;

  // Highlight uncaught only feature
  const highlightLabel = document.createElement("label");
  highlightLabel.htmlFor = "tsitu-highlight-box";
  highlightLabel.innerText = "Highlight uncaught mice only";

  const highlightBox = document.createElement("input");
  highlightBox.type = "checkbox";
  highlightBox.name = "tsitu-highlight-box";
  highlightBox.style.verticalAlign = "middle";
  highlightBox.checked = isChecked;
  highlightBox.addEventListener("click", function () {
    if (highlightBox.checked) {
      localStorage.setItem("highlightPref", "uncaught-only");
    } else {
      localStorage.setItem("highlightPref", "all");
    }
    colorize();
  });

  const highlightDiv = document.createElement("div");
  highlightDiv.className = "tsitu-gwh-map";
  highlightDiv.style = "float: right; position: relative; z-index: 1";
  highlightDiv.appendChild(highlightBox);
  highlightDiv.appendChild(highlightLabel);

  // Assemble masterDiv
  masterDiv.appendChild(launchpadSpan);
  masterDiv.appendChild(wardenSpan);
  masterDiv.appendChild(physicalSpan);
  masterDiv.appendChild(shadowSpan);
  masterDiv.appendChild(tacticalSpan);
  masterDiv.appendChild(arcaneSpan);
  masterDiv.appendChild(forgottenSpan);
  masterDiv.appendChild(hydroSpan);
  masterDiv.appendChild(draconicSpan);
  masterDiv.appendChild(lawSpan);
  masterDiv.appendChild(pirateSpan);

  // Inject into DOM
  const insertEl = document.querySelector(
    ".treasureMapView-leftBlock .treasureMapView-block-content"
  );
  if (
    insertEl &&
    document.querySelector(
      ".treasureMapRootView-header-navigation-item.tasks.active" // On "Active Maps"
    )
  ) {
    insertEl.insertAdjacentElement("afterbegin", highlightDiv);
    insertEl.insertAdjacentElement("afterbegin", masterDiv);
  }

  // "Goals" button
  document.querySelector("[data-type='show_goals']").onclick = function () {
    colorize();
  };
}

// Listen to XHRs, opening a map always at least triggers board.php
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
  this.addEventListener("load", function () {
    const chestEl = document.querySelector(
      ".treasureMapView-mapMenu-rewardName"
    );

    // chestEl short for chest element (the html element of the chest)
    if (chestEl) {
      const chestName = chestEl.textContent;
      if (COMPATIBLE_CHESTS.includes(chestName)) {
        colorize();
      }
    }
  });
  originalOpen.apply(this, arguments);
};