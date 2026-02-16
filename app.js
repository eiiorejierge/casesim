const STORAGE_KEY = "vaultspin-elite-save-v2";

const odds = [
  { tier: "blue", label: "Mil-Spec", chance: 79.92, color: "var(--blue)" },
  { tier: "purple", label: "Restricted", chance: 15.98, color: "var(--purple)" },
  { tier: "pink", label: "Classified", chance: 3.2, color: "var(--pink)" },
  { tier: "red", label: "Covert", chance: 0.64, color: "var(--red)" },
  { tier: "gold", label: "Special", chance: 0.26, color: "var(--rare-gold)" },
];

const rawCases = [
  {
    id: "metro-luxe",
    name: "Metro Luxe",
    description: "Street prestige or sidewalk trash.",
    price: 35,
    items: {
      blue: [
        { name: "Bent Umbrella", value: 1 },
        { name: "Plastic Mall Shades", value: 2 },
        { name: "Faded Cap", value: 3 },
        { name: "Used Gym Bottle", value: 2 },
      ],
      purple: [
        { name: "Coach Gotham Brief", value: 80 },
        { name: "TAG Heuer Formula 1", value: 120 },
        { name: "MCM Belt Bag", value: 95 },
      ],
      pink: [
        { name: "Cartier Santos", value: 480 },
        { name: "Prada Re-Nylon Jacket", value: 420 },
      ],
      red: [
        { name: "Rolex Datejust", value: 1800 },
        { name: "Dior Oblique Trunk", value: 2200 },
      ],
      gold: [{ name: "McLaren 720S Track Day", value: 14000 }],
    },
  },
  {
    id: "royal-archive",
    name: "Royal Archive",
    description: "Old wealth odds and oversized jackpots.",
    price: 90,
    items: {
      blue: [
        { name: "Cracked Teacup", value: 2 },
        { name: "Loose Buttons", value: 1 },
        { name: "Mismatched Socks", value: 2 },
      ],
      purple: [
        { name: "Rimowa Cabin Plus", value: 240 },
        { name: "Gucci Ace Sneakers", value: 210 },
        { name: "Montblanc Pen", value: 260 },
      ],
      pink: [
        { name: "Bulgari Serpenti Wallet", value: 820 },
        { name: "Loro Piana Cashmere Coat", value: 960 },
      ],
      red: [
        { name: "Patek Philippe Calatrava", value: 5300 },
        { name: "Hermes Kelly", value: 6100 },
      ],
      gold: [{ name: "Aston Martin Vantage Weekend", value: 18000 }],
    },
  },
  {
    id: "apex-billion",
    name: "Apex Billion",
    description: "Very expensive pulls, mostly pain.",
    price: 180,
    items: {
      blue: [
        { name: "Bent Keychain", value: 3 },
        { name: "Single Earbud", value: 4 },
        { name: "Frayed Charging Cable", value: 3 },
      ],
      purple: [
        { name: "Omega Speedmaster", value: 340 },
        { name: "Fendi Baguette", value: 410 },
        { name: "Saint Laurent Duffle", value: 390 },
      ],
      pink: [
        { name: "Van Cleef Bracelet", value: 1400 },
        { name: "Loewe Puzzle Bag", value: 1180 },
      ],
      red: [
        { name: "Audemars Piguet Royal Oak", value: 9200 },
        { name: "Richard Mille RM 35", value: 14000 },
      ],
      gold: [{ name: "Private Jet Experience", value: 42000 }],
    },
  },
  {
    id: "noir-syndicate",
    name: "Noir Syndicate",
    description: "Sleek risks and ultra-rare luxury bombs.",
    price: 260,
    items: {
      blue: [
        { name: "Rusty Coin Purse", value: 5 },
        { name: "Scuffed Flip Flops", value: 3 },
        { name: "Random Receipt Stack", value: 2 },
      ],
      purple: [
        { name: "Burberry Trench", value: 520 },
        { name: "Bose Ultra Headphones", value: 310 },
        { name: "Tom Ford Sunglasses", value: 420 },
      ],
      pink: [
        { name: "Chanel Flap Medium", value: 2400 },
        { name: "Jaeger-LeCoultre Reverso", value: 2800 },
      ],
      red: [
        { name: "Lamborghini Urus Lease Voucher", value: 22000 },
        { name: "Hublot Big Bang", value: 15000 },
      ],
      gold: [{ name: "Mediterranean Yacht Week", value: 65000 }],
    },
  },
  {
    id: "rookie-roll",
    name: "Rookie Roll",
    description: "Cheap case with tiny upside.",
    price: 55,
    items: {
      blue: [
        { name: "Paper Clip Stack", value: 1 },
        { name: "Scuffed Lanyard", value: 2 },
        { name: "Budget Pen", value: 1 },
      ],
      purple: [
        { name: "Ray-Ban Clubmaster", value: 78 },
        { name: "Timex Q Reissue", value: 92 },
      ],
      pink: [{ name: "Tumi Card Holder", value: 180 }],
      red: [{ name: "Gucci Marmont Belt", value: 760 }],
      gold: [{ name: "Porsche Driving School Day", value: 9500 }],
    },
  },
  {
    id: "city-sprint",
    name: "City Sprint",
    description: "Sub-100 quick shots with style.",
    price: 95,
    items: {
      blue: [
        { name: "Plastic Card Sleeve", value: 2 },
        { name: "Faded Shoelaces", value: 1 },
        { name: "Old Transit Pass", value: 1 },
      ],
      purple: [
        { name: "Herschel Duffel", value: 130 },
        { name: "Casio Edifice", value: 115 },
      ],
      pink: [{ name: "Longchamp Le Pliage", value: 260 }],
      red: [{ name: "TAG Heuer Aquaracer", value: 2100 }],
      gold: [{ name: "Lotus Emira Weekend", value: 12000 }],
    },
  },
  {
    id: "velvet-tier",
    name: "Velvet Tier",
    description: "Entry luxury with better mid-tier drops.",
    price: 120,
    items: {
      blue: [
        { name: "Worn Pocket Mirror", value: 3 },
        { name: "Old Luggage Tag", value: 2 },
        { name: "Loose Ear Tip Set", value: 3 },
      ],
      purple: [
        { name: "Ralph Lauren Weekender", value: 165 },
        { name: "Seiko Presage", value: 190 },
      ],
      pink: [{ name: "Marc Jacobs Tote", value: 360 }],
      red: [{ name: "Breitling Chronomat", value: 3400 }],
      gold: [{ name: "Bentley Continental Rental", value: 17000 }],
    },
  },
  {
    id: "obsidian-rack",
    name: "Obsidian Rack",
    description: "Medium buy-in, volatile results.",
    price: 250,
    items: {
      blue: [
        { name: "Cracked ID Badge", value: 4 },
        { name: "Worn Wallet Insert", value: 3 },
        { name: "Bent Tie Clip", value: 5 },
      ],
      purple: [
        { name: "Montblanc Wallet", value: 320 },
        { name: "Mido Ocean Star", value: 380 },
      ],
      pink: [{ name: "Burberry Backpack", value: 780 }],
      red: [{ name: "Cartier Ballon Bleu", value: 5200 }],
      gold: [{ name: "Lexus LC Track Package", value: 24000 }],
    },
  },
  {
    id: "aurum-drift",
    name: "Aurum Drift",
    description: "More expensive with strong pink potential.",
    price: 380,
    items: {
      blue: [
        { name: "Scratched Lighter", value: 6 },
        { name: "Knotted Earphones", value: 4 },
        { name: "Old Wallet Chain", value: 5 },
      ],
      purple: [
        { name: "Rimowa Personal Crossbody", value: 460 },
        { name: "Shinola Runwell", value: 430 },
      ],
      pink: [{ name: "Celine Triomphe Bag", value: 1700 }],
      red: [{ name: "IWC Pilot Chronograph", value: 7600 }],
      gold: [{ name: "Supercar Canyon Tour", value: 28000 }],
    },
  },
  {
    id: "diamond-dock",
    name: "Diamond Dock",
    description: "Premium buys and bigger highs.",
    price: 650,
    items: {
      blue: [
        { name: "Damaged Passport Sleeve", value: 8 },
        { name: "Frayed Camera Strap", value: 7 },
        { name: "Loose Key Fob", value: 6 },
      ],
      purple: [
        { name: "Bvlgari Sunglasses", value: 720 },
        { name: "Oris Aquis Date", value: 760 },
      ],
      pink: [{ name: "Givenchy Antigona", value: 2500 }],
      red: [{ name: "Zenith Chronomaster Sport", value: 9800 }],
      gold: [{ name: "Monaco Yacht Charter Day", value: 34000 }],
    },
  },
  {
    id: "estate-summit",
    name: "Estate Summit",
    description: "Upper-tier odds with expensive jackpots.",
    price: 900,
    items: {
      blue: [
        { name: "Split Phone Stand", value: 9 },
        { name: "Scratched Metal Flask", value: 10 },
        { name: "Bent Travel Adapter", value: 8 },
      ],
      purple: [
        { name: "Louis Vuitton Pocket Organizer", value: 980 },
        { name: "Tudor Black Bay 58", value: 1100 },
      ],
      pink: [{ name: "Bottega Veneta Cassette", value: 3200 }],
      red: [{ name: "Rolex Explorer II", value: 12000 }],
      gold: [{ name: "Italian Villa Week", value: 47000 }],
    },
  },
  {
    id: "imperial-drive",
    name: "Imperial Drive",
    description: "High roller case with sharp variance.",
    price: 1400,
    items: {
      blue: [
        { name: "Broken Smart Tag", value: 12 },
        { name: "Scratched Coin Tray", value: 11 },
        { name: "Damaged Card Wallet", value: 13 },
      ],
      purple: [
        { name: "Panerai Luminor", value: 1600 },
        { name: "Gucci Horsebit 1955", value: 1750 },
      ],
      pink: [{ name: "Chopard Happy Sport", value: 4600 }],
      red: [{ name: "Porsche 911 Weekend Voucher", value: 18000 }],
      gold: [{ name: "Private Alpine Resort Week", value: 68000 }],
    },
  },
  {
    id: "founders-vault",
    name: "Founders Vault",
    description: "Elite risk profile, huge upside.",
    price: 2500,
    items: {
      blue: [
        { name: "Cracked Cigar Case", value: 15 },
        { name: "Rusty Valet Key", value: 14 },
        { name: "Scuffed Shoe Tree", value: 16 },
      ],
      purple: [
        { name: "Jaeger-LeCoultre Polaris", value: 2800 },
        { name: "Dior Book Tote Large", value: 3200 },
      ],
      pink: [{ name: "Vacheron Constantin Fiftysix", value: 8400 }],
      red: [{ name: "Lamborghini Evo Track Pack", value: 29000 }],
      gold: [{ name: "Around-the-World Jet Itinerary", value: 88000 }],
    },
  },
  {
    id: "omni-crown",
    name: "Omni Crown",
    description: "Top-end prestige case.",
    price: 5000,
    items: {
      blue: [
        { name: "Worn Titanium Keyring", value: 18 },
        { name: "Bent Luggage Plate", value: 20 },
        { name: "Aged Valet Ticket", value: 17 },
      ],
      purple: [
        { name: "A. Lange Sohne Strap Set", value: 5200 },
        { name: "Goyard Saint Louis PM", value: 5600 },
      ],
      pink: [{ name: "Richard Mille Service Voucher", value: 12000 }],
      red: [{ name: "Bugatti Chiron Passenger Experience", value: 45000 }],
      gold: [{ name: "Private Island Seven Nights", value: 120000 }],
    },
  },
];

const tierPalette = {
  blue: ["#5f8de6", "#9bc0ff"],
  purple: ["#785ee8", "#bfabff"],
  pink: ["#b857a3", "#f5a2df"],
  red: ["#b84848", "#ff9e9e"],
  gold: ["#b48731", "#ffe6a0"],
};

function money(value) {
  return `$${value.toFixed(2)}`;
}

function tierClass(tier) {
  return `tier-${tier}`;
}

function initials(name) {
  const words = String(name).split(" ").filter(Boolean);
  const chars = words.slice(0, 2).map((word) => word[0] || "").join("");
  return (chars || name.slice(0, 2) || "IT").toUpperCase();
}

function makeItemImage(name, tier, source) {
  const palette = tierPalette[tier] || tierPalette.blue;
  const code = initials(name);
  const brand = initials(source || "VS");
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 140 140'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='${palette[0]}'/>
        <stop offset='100%' stop-color='${palette[1]}'/>
      </linearGradient>
    </defs>
    <rect width='140' height='140' rx='18' fill='url(#g)'/>
    <rect x='10' y='10' width='120' height='120' rx='14' fill='rgba(8,10,16,0.24)' stroke='rgba(255,255,255,0.35)'/>
    <text x='70' y='79' text-anchor='middle' fill='white' font-family='Arial, sans-serif' font-size='44' font-weight='700'>${code}</text>
    <text x='70' y='112' text-anchor='middle' fill='rgba(255,255,255,0.86)' font-family='Arial, sans-serif' font-size='15' font-weight='700'>${brand}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const cases = rawCases.map((itemCase) => ({
  ...itemCase,
  items: Object.fromEntries(
    Object.entries(itemCase.items).map(([tier, items]) => [
      tier,
      items.map((item) => ({
        ...item,
        tier,
        image: makeItemImage(item.name, tier, itemCase.name),
      })),
    ])
  ),
}));

const els = {
  balance: document.getElementById("balance"),
  invValue: document.getElementById("invValue"),
  netWorth: document.getElementById("netWorth"),
  depositInput: document.getElementById("depositInput"),
  depositBtn: document.getElementById("depositBtn"),
  resetBtn: document.getElementById("resetBtn"),
  chips: document.getElementById("chips"),
  autoCount: document.getElementById("autoCount"),
  autoBtn: document.getElementById("autoBtn"),
  stopAutoBtn: document.getElementById("stopAutoBtn"),
  autoStatus: document.getElementById("autoStatus"),
  caseGrid: document.getElementById("caseGrid"),
  activeCaseLabel: document.getElementById("activeCaseLabel"),
  resultText: document.getElementById("resultText"),
  resultItem: document.getElementById("resultItem"),
  resultImage: document.getElementById("resultImage"),
  statsLine: document.getElementById("statsLine"),
  rarityBars: document.getElementById("rarityBars"),
  caseInventoryList: document.getElementById("caseInventoryList"),
  inventoryList: document.getElementById("inventoryList"),
  historyList: document.getElementById("historyList"),
  sellBlueBtn: document.getElementById("sellBlueBtn"),
  sellAllBtn: document.getElementById("sellAllBtn"),
  previewDialog: document.getElementById("previewDialog"),
  previewTitle: document.getElementById("previewTitle"),
  previewContent: document.getElementById("previewContent"),
  closePreview: document.getElementById("closePreview"),
  openingOverlay: document.getElementById("openingOverlay"),
  overlayCaseName: document.getElementById("overlayCaseName"),
  skipSpinBtn: document.getElementById("skipSpinBtn"),
  overlayReelTrack: document.getElementById("overlayReelTrack"),
  overlayResultText: document.getElementById("overlayResultText"),
  overlayResultItem: document.getElementById("overlayResultItem"),
  overlayResultImage: document.getElementById("overlayResultImage"),
  viewTabs: document.getElementById("viewTabs"),
  viewPanels: document.querySelectorAll("[data-view-target]"),
  caseTemplate: document.getElementById("caseTemplate"),
  caseInventoryTemplate: document.getElementById("caseInventoryTemplate"),
  inventoryTemplate: document.getElementById("inventoryTemplate"),
  historyTemplate: document.getElementById("historyTemplate"),
};

function defaultStats() {
  return {
    opened: 0,
    spent: 0,
    sold: 0,
    rarityHits: { blue: 0, purple: 0, pink: 0, red: 0, gold: 0 },
    bestDropValue: 0,
    bestDropName: "-",
  };
}

function freshState() {
  return {
    balance: 0,
    selectedCaseId: cases[0].id,
    currentView: "market",
    ownedCases: {},
    inventory: [],
    history: [],
    stats: defaultStats(),
    opening: false,
    autoQueue: 0,
    autoStopped: false,
    spinSkipper: null,
  };
}

const state = freshState();
const quickChips = [100, 250, 500, 1000, 5000];

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getCaseById(id) {
  return cases.find((itemCase) => itemCase.id === id) || cases[0];
}

function ownedCaseCount(caseId) {
  return Math.max(0, Math.floor(Number(state.ownedCases[caseId]) || 0));
}

function hydrateEntry(entry) {
  const fallbackTier = entry.tier || "blue";
  const fallbackCase = entry.caseName || entry.source || "VaultSpin";
  return {
    ...entry,
    tier: fallbackTier,
    caseName: fallbackCase,
    source: fallbackCase,
    image: entry.image || makeItemImage(entry.name || "Unknown", fallbackTier, fallbackCase),
  };
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      balance: state.balance,
      selectedCaseId: state.selectedCaseId,
      currentView: state.currentView,
      ownedCases: state.ownedCases,
      inventory: state.inventory,
      history: state.history,
      stats: state.stats,
    })
  );
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    const data = JSON.parse(raw);
    if (typeof data !== "object" || !data) return;

    state.balance = Number(data.balance) || 0;
    state.selectedCaseId = getCaseById(data.selectedCaseId).id;
    state.currentView = ["market", "inventory", "history"].includes(data.currentView) ? data.currentView : "market";
    state.ownedCases = {};
    if (data.ownedCases && typeof data.ownedCases === "object") {
      Object.keys(data.ownedCases).forEach((caseId) => {
        const itemCase = getCaseById(caseId);
        const count = Math.max(0, Math.floor(Number(data.ownedCases[caseId]) || 0));
        if (itemCase && count > 0) state.ownedCases[itemCase.id] = count;
      });
    }
    state.inventory = Array.isArray(data.inventory) ? data.inventory.map(hydrateEntry) : [];
    state.history = Array.isArray(data.history) ? data.history.map(hydrateEntry) : [];
    state.stats = {
      ...defaultStats(),
      ...(data.stats || {}),
      rarityHits: {
        ...defaultStats().rarityHits,
        ...((data.stats && data.stats.rarityHits) || {}),
      },
    };
  } catch (_error) {
    localStorage.removeItem(STORAGE_KEY);
  }
}

function inventoryTotal() {
  return state.inventory.reduce((sum, item) => sum + item.value, 0);
}

function refreshWallet() {
  const inv = inventoryTotal();
  els.balance.textContent = money(state.balance);
  els.invValue.textContent = money(inv);
  els.netWorth.textContent = money(state.balance + inv);
}

function renderView() {
  els.viewPanels.forEach((panel) => {
    const target = panel.getAttribute("data-view-target");
    panel.classList.toggle("hidden-view", target !== state.currentView);
  });

  const tabButtons = els.viewTabs.querySelectorAll(".tab-btn");
  tabButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.view === state.currentView);
  });
}

function renderChips() {
  els.chips.innerHTML = "";
  quickChips.forEach((amount) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "chip";
    chip.textContent = `+${money(amount)}`;
    chip.addEventListener("click", () => {
      state.balance += amount;
      refreshWallet();
      saveState();
      setResult(`Deposited ${money(amount)} fake cash.`, "Funded", "gold", makeItemImage("Funded", "gold", "VaultSpin"));
    });
    els.chips.appendChild(chip);
  });
}

function weightedTierRoll() {
  const roll = Math.random() * 100;
  let running = 0;

  for (const entry of odds) {
    running += entry.chance;
    if (roll <= running) return entry.tier;
  }

  return "blue";
}

function randomItemFromTier(itemCase, tier) {
  const pool = itemCase.items[tier] || itemCase.items.blue;
  return pool[Math.floor(Math.random() * pool.length)];
}

function rollItem(itemCase) {
  const tier = weightedTierRoll();
  return randomItemFromTier(itemCase, tier);
}

function makeReelSpin(itemCase, winner) {
  const slots = [];
  const targetIndex = 34;
  const totalSlots = 64;

  for (let i = 0; i < totalSlots; i += 1) {
    if (i === targetIndex) {
      slots.push(winner);
      continue;
    }
    slots.push(rollItem(itemCase));
  }

  return { slots, targetIndex };
}

function makeReelHTML(slots, reelTrackEl) {
  reelTrackEl.innerHTML = "";

  slots.forEach((slot) => {
    const card = document.createElement("article");
    card.className = `reel-slot ${tierClass(slot.tier)}`;

    const image = document.createElement("img");
    image.src = slot.image;
    image.alt = slot.name;

    const label = document.createElement("p");
    label.className = "reel-label";
    label.textContent = slot.name;

    card.append(image, label);
    reelTrackEl.appendChild(card);
  });
}

function runSpinAnimation(targetIndex) {
  return new Promise((resolve) => {
    const reelWindow = els.overlayReelTrack.parentElement;
    const firstSlot = els.overlayReelTrack.firstElementChild;
    const slotWidth = firstSlot ? firstSlot.getBoundingClientRect().width : 170;
    const stopAt = targetIndex * slotWidth - (reelWindow.clientWidth / 2 - slotWidth / 2);
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;
      els.overlayReelTrack.removeEventListener("transitionend", onEnd);
      state.spinSkipper = null;
      resolve();
    };

    const onEnd = () => finish();

    state.spinSkipper = () => {
      els.overlayReelTrack.style.transition = "none";
      els.overlayReelTrack.style.transform = `translateX(-${stopAt}px)`;
      finish();
    };

    els.overlayReelTrack.addEventListener("transitionend", onEnd);
    els.overlayReelTrack.style.transition = "none";
    els.overlayReelTrack.style.transform = "translateX(0px)";

    requestAnimationFrame(() => {
      els.overlayReelTrack.style.transition = "transform 2.45s cubic-bezier(0.1, 0.72, 0.12, 1)";
      els.overlayReelTrack.style.transform = `translateX(-${stopAt}px)`;
    });

    window.setTimeout(finish, 2600);
  });
}

function showOverlay(caseName) {
  els.overlayCaseName.textContent = `Opening ${caseName}`;
  els.overlayResultText.textContent = "Rolling...";
  els.overlayResultItem.textContent = "---";
  els.overlayResultItem.className = "";
  els.overlayResultImage.src = makeItemImage("Rolling", "blue", caseName);
  els.openingOverlay.classList.remove("hidden");
  document.body.classList.add("overlay-open");
}

function hideOverlay() {
  els.openingOverlay.classList.add("hidden");
  document.body.classList.remove("overlay-open");
}

function renderCases() {
  els.caseGrid.innerHTML = "";

  cases.forEach((itemCase, index) => {
    const card = els.caseTemplate.content.firstElementChild.cloneNode(true);
    card.style.animationDelay = `${index * 90}ms`;
    card.querySelector(".case-name").textContent = itemCase.name;
    card.querySelector(".case-desc").textContent = itemCase.description;
    card.querySelector(".case-price").textContent = `Cost ${money(itemCase.price)}`;

    if (itemCase.id === state.selectedCaseId) card.classList.add("selected");

    const buyBtn = card.querySelector(".btn-open");
    buyBtn.textContent = "Buy";
    buyBtn.addEventListener("click", () => {
      state.selectedCaseId = itemCase.id;
      renderCases();
      renderActiveCase();
      buyCase(itemCase.id);
    });

    card.querySelector(".preview-btn").addEventListener("click", () => {
      state.selectedCaseId = itemCase.id;
      renderCases();
      renderActiveCase();
      openPreview(itemCase);
    });

    card.addEventListener("click", (event) => {
      if (event.target.closest("button")) return;
      state.selectedCaseId = itemCase.id;
      renderCases();
      renderActiveCase();
    });

    els.caseGrid.appendChild(card);
  });
}

function renderActiveCase() {
  const itemCase = getCaseById(state.selectedCaseId);
  els.activeCaseLabel.textContent = `${itemCase.name} selected | Price: ${money(itemCase.price)} | Owned: ${ownedCaseCount(itemCase.id)}`;
}

function renderCaseInventory() {
  els.caseInventoryList.innerHTML = "";
  const owned = cases
    .map((itemCase) => ({ itemCase, count: ownedCaseCount(itemCase.id) }))
    .filter((entry) => entry.count > 0);

  if (owned.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No unopened cases. Buy cases in Case Room first.";
    els.caseInventoryList.appendChild(empty);
    return;
  }

  owned.forEach(({ itemCase, count }) => {
    const row = els.caseInventoryTemplate.content.firstElementChild.cloneNode(true);
    row.querySelector(".case-inv-name").textContent = itemCase.name;
    row.querySelector(".case-inv-meta").textContent = `Owned: ${count} | Buy Price: ${money(itemCase.price)}`;
    row.querySelector(".open-owned-btn").addEventListener("click", () => {
      state.selectedCaseId = itemCase.id;
      renderCases();
      renderActiveCase();
      openCase(itemCase.id);
    });
    els.caseInventoryList.appendChild(row);
  });
}

function renderInventory() {
  els.inventoryList.innerHTML = "";

  if (state.inventory.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No items yet.";
    els.inventoryList.appendChild(empty);
    return;
  }

  state.inventory.forEach((item, index) => {
    const row = els.inventoryTemplate.content.firstElementChild.cloneNode(true);
    const thumb = row.querySelector(".inventory-thumb");
    const name = row.querySelector(".inventory-name");
    const meta = row.querySelector(".inventory-meta");
    const sellBtn = row.querySelector(".sell-btn");

    thumb.src = item.image;
    thumb.alt = item.name;
    name.className = `inventory-name ${tierClass(item.tier)}`;
    name.textContent = item.name;
    meta.textContent = `${item.tier.toUpperCase()} | ${item.source} | ${money(item.value)}`;
    sellBtn.addEventListener("click", () => sellItem(index));

    els.inventoryList.appendChild(row);
  });
}

function renderHistory() {
  els.historyList.innerHTML = "";

  if (state.history.length === 0) {
    const empty = document.createElement("p");
    empty.className = "muted";
    empty.textContent = "No openings yet.";
    els.historyList.appendChild(empty);
    return;
  }

  state.history.slice(0, 30).forEach((entry) => {
    const row = els.historyTemplate.content.firstElementChild.cloneNode(true);
    const thumb = row.querySelector(".history-thumb");
    const title = row.querySelector(".history-title");
    const meta = row.querySelector(".history-meta");

    thumb.src = entry.image;
    thumb.alt = entry.name;
    title.className = `history-title ${tierClass(entry.tier)}`;
    title.textContent = entry.name;
    meta.textContent = `${entry.caseName} | ${money(entry.value)} | ${entry.time}`;

    els.historyList.appendChild(row);
  });
}

function renderStats() {
  els.statsLine.textContent = `Opened: ${state.stats.opened} | Spent: ${money(state.stats.spent)} | Sold: ${money(state.stats.sold)} | Best: ${state.stats.bestDropName} (${money(state.stats.bestDropValue)})`;

  const total = Math.max(1, state.stats.opened);
  els.rarityBars.innerHTML = "";

  odds.forEach((entry) => {
    const hits = state.stats.rarityHits[entry.tier] || 0;
    const pct = (hits / total) * 100;

    const row = document.createElement("div");
    row.className = "bar-row";

    const label = document.createElement("p");
    label.className = tierClass(entry.tier);
    label.textContent = entry.label;

    const track = document.createElement("div");
    track.className = "bar-track";

    const fill = document.createElement("div");
    fill.className = "bar-fill";
    fill.style.width = `${pct}%`;
    fill.style.background = entry.color;

    const value = document.createElement("p");
    value.textContent = `${hits}`;

    track.appendChild(fill);
    row.append(label, track, value);
    els.rarityBars.appendChild(row);
  });
}

function setResult(message, itemName, tier, image) {
  els.resultText.textContent = message;
  els.resultItem.className = tier ? tierClass(tier) : "";
  els.resultItem.textContent = itemName;
  if (image) {
    els.resultImage.src = image;
    els.resultImage.alt = itemName;
  }
}

function updateAll() {
  refreshWallet();
  renderCases();
  renderActiveCase();
  renderCaseInventory();
  renderInventory();
  renderHistory();
  renderStats();
  renderView();
}

function sellItem(index) {
  const item = state.inventory[index];
  if (!item) return;

  state.balance += item.value;
  state.stats.sold += item.value;
  state.inventory.splice(index, 1);

  refreshWallet();
  renderInventory();
  renderStats();
  saveState();
  setResult(`Sold for ${money(item.value)}.`, item.name, item.tier, item.image);
}

function sellByTier(tier) {
  const kept = [];
  let sold = 0;

  state.inventory.forEach((item) => {
    if (tier && item.tier !== tier) {
      kept.push(item);
      return;
    }
    sold += item.value;
  });

  state.inventory = kept;
  state.balance += sold;
  state.stats.sold += sold;

  refreshWallet();
  renderInventory();
  renderStats();
  saveState();

  const label = tier ? `Sold ${tier.toUpperCase()} items` : "Sold Everything";
  setResult(`Sold items for ${money(sold)}.`, label, tier || "gold", makeItemImage(label, tier || "gold", "VaultSpin"));
}

function openPreview(itemCase) {
  els.previewTitle.textContent = `${itemCase.name} Preview`;
  els.previewContent.innerHTML = "";

  odds.forEach((entry) => {
    const group = document.createElement("article");
    group.className = "preview-group";

    const heading = document.createElement("h4");
    heading.className = tierClass(entry.tier);
    heading.textContent = `${entry.label} (${entry.chance}%)`;
    group.appendChild(heading);

    itemCase.items[entry.tier].forEach((item) => {
      const row = document.createElement("article");
      row.className = "preview-item";

      const img = document.createElement("img");
      img.src = item.image;
      img.alt = item.name;

      const text = document.createElement("p");
      text.className = "muted";
      text.textContent = `${item.name} - ${money(item.value)}`;

      row.append(img, text);
      group.appendChild(row);
    });

    els.previewContent.appendChild(group);
  });

  els.previewDialog.showModal();
}

function buyCase(caseId = state.selectedCaseId, qty = 1) {
  const itemCase = getCaseById(caseId);
  const quantity = Math.max(1, Math.floor(Number(qty) || 1));
  const totalCost = itemCase.price * quantity;

  if (state.balance < totalCost) {
    setResult("Not enough fake funds to buy this case.", "Purchase Failed", "red", makeItemImage("Denied", "red", "VaultSpin"));
    return false;
  }

  state.balance -= totalCost;
  state.stats.spent += totalCost;
  state.ownedCases[itemCase.id] = ownedCaseCount(itemCase.id) + quantity;
  refreshWallet();
  renderCaseInventory();
  renderActiveCase();
  saveState();

  setResult(
    `Bought ${quantity}x ${itemCase.name} for ${money(totalCost)}.`,
    `${itemCase.name} added to inventory`,
    "gold",
    makeItemImage(itemCase.name, "gold", "Bought")
  );
  return true;
}

async function openCase(caseId = state.selectedCaseId) {
  if (state.opening) return false;

  const itemCase = getCaseById(caseId);
  if (ownedCaseCount(itemCase.id) <= 0) {
    setResult("You do not own this case yet. Buy it first.", "No Case Owned", "red", makeItemImage("No Case", "red", itemCase.name));
    return false;
  }

  state.opening = true;
  state.ownedCases[itemCase.id] = ownedCaseCount(itemCase.id) - 1;
  renderCaseInventory();
  renderActiveCase();
  saveState();

  const winner = rollItem(itemCase);
  const spin = makeReelSpin(itemCase, winner);

  makeReelHTML(spin.slots, els.overlayReelTrack);
  showOverlay(itemCase.name);

  await runSpinAnimation(spin.targetIndex);

  const entry = {
    ...winner,
    source: itemCase.name,
    caseName: itemCase.name,
    time: new Date().toLocaleTimeString(),
  };

  state.inventory.unshift(entry);
  state.history.unshift(entry);
  state.stats.opened += 1;
  state.stats.rarityHits[entry.tier] += 1;

  if (entry.value > state.stats.bestDropValue) {
    state.stats.bestDropValue = entry.value;
    state.stats.bestDropName = entry.name;
  }

  updateAll();
  saveState();

  const profitable = entry.value >= itemCase.price;
  const message = profitable ? "Profit hit" : "Loss roll";
  setResult(`${message} | ${itemCase.name}`, `${entry.name} (${money(entry.value)})`, entry.tier, entry.image);

  els.overlayResultText.textContent = `${message} | ${itemCase.name}`;
  els.overlayResultItem.className = tierClass(entry.tier);
  els.overlayResultItem.textContent = `${entry.name} (${money(entry.value)})`;
  els.overlayResultImage.src = entry.image;
  els.overlayResultImage.alt = entry.name;

  await new Promise((resolve) => window.setTimeout(resolve, state.autoQueue > 0 ? 300 : 850));

  hideOverlay();
  state.opening = false;
  return true;
}

async function runAutoOpen() {
  if (state.autoQueue > 0 || state.opening) return;

  const selected = getCaseById(state.selectedCaseId);
  if (ownedCaseCount(selected.id) <= 0) {
    els.autoStatus.textContent = "No owned cases for selected case. Buy first.";
    return;
  }

  const desired = clamp(Number(els.autoCount.value) || 1, 1, 25);
  state.autoQueue = desired;
  state.autoStopped = false;

  while (state.autoQueue > 0 && !state.autoStopped) {
    if (ownedCaseCount(selected.id) <= 0) break;
    els.autoStatus.textContent = `Queue running: ${state.autoQueue} remaining`;
    const opened = await openCase(selected.id);
    if (!opened) break;
    state.autoQueue -= 1;
    await new Promise((resolve) => window.setTimeout(resolve, 130));
  }

  if (state.autoStopped) {
    els.autoStatus.textContent = "Queue stopped.";
  } else if (state.autoQueue === 0) {
    els.autoStatus.textContent = "Queue complete.";
  } else {
    els.autoStatus.textContent = "Queue ended early (insufficient balance).";
  }

  state.autoQueue = 0;
  state.autoStopped = false;
}

function resetEverything() {
  const ok = window.confirm("Reset everything? This clears balance, owned cases, opened items, history, and all stats.");
  if (!ok) return;

  const selectedCaseId = state.selectedCaseId;
  Object.assign(state, freshState());
  state.selectedCaseId = selectedCaseId;

  localStorage.removeItem(STORAGE_KEY);

  updateAll();
  saveState();
  setResult("All progress reset.", "Fresh Start", "gold", makeItemImage("Fresh Start", "gold", "VaultSpin"));
  els.autoStatus.textContent = "No queue active.";
}

function wireEvents() {
  els.viewTabs.addEventListener("click", (event) => {
    const button = event.target.closest(".tab-btn");
    if (!button) return;
    state.currentView = button.dataset.view;
    renderView();
    saveState();
  });

  els.depositBtn.addEventListener("click", () => {
    const amount = Number(els.depositInput.value);
    if (!Number.isFinite(amount) || amount <= 0) {
      setResult("Enter a valid amount.", "Deposit Failed", "red", makeItemImage("Invalid", "red", "VaultSpin"));
      return;
    }

    state.balance += amount;
    els.depositInput.value = "";
    refreshWallet();
    saveState();
    setResult(`Deposited ${money(amount)} fake cash.`, "Balance Updated", "gold", makeItemImage("Funded", "gold", "VaultSpin"));
  });

  els.depositInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") els.depositBtn.click();
  });

  els.autoBtn.addEventListener("click", () => runAutoOpen());

  els.stopAutoBtn.addEventListener("click", () => {
    state.autoStopped = true;
  });

  els.skipSpinBtn.addEventListener("click", () => {
    if (typeof state.spinSkipper === "function") state.spinSkipper();
  });

  els.sellBlueBtn.addEventListener("click", () => sellByTier("blue"));
  els.sellAllBtn.addEventListener("click", () => sellByTier(null));

  els.resetBtn.addEventListener("click", () => resetEverything());

  els.closePreview.addEventListener("click", () => els.previewDialog.close());
}

loadState();
wireEvents();
renderChips();
updateAll();
setResult("System ready.", "Buy a case, then open it in Inventory", "blue", makeItemImage("Ready", "blue", "VaultSpin"));
