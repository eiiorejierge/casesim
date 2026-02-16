const STORAGE_KEY = "vaultspin-elite-save-v1";

const odds = [
  { tier: "blue", label: "Mil-Spec", chance: 79.92, color: "var(--blue)" },
  { tier: "purple", label: "Restricted", chance: 15.98, color: "var(--purple)" },
  { tier: "pink", label: "Classified", chance: 3.2, color: "var(--pink)" },
  { tier: "red", label: "Covert", chance: 0.64, color: "var(--red)" },
  { tier: "gold", label: "Special", chance: 0.26, color: "var(--rare-gold)" },
];

const cases = [
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
];

const els = {
  balance: document.getElementById("balance"),
  invValue: document.getElementById("invValue"),
  netWorth: document.getElementById("netWorth"),
  depositInput: document.getElementById("depositInput"),
  depositBtn: document.getElementById("depositBtn"),
  chips: document.getElementById("chips"),
  autoCount: document.getElementById("autoCount"),
  autoBtn: document.getElementById("autoBtn"),
  stopAutoBtn: document.getElementById("stopAutoBtn"),
  autoStatus: document.getElementById("autoStatus"),
  caseGrid: document.getElementById("caseGrid"),
  activeCaseLabel: document.getElementById("activeCaseLabel"),
  reelTrack: document.getElementById("reelTrack"),
  resultText: document.getElementById("resultText"),
  resultItem: document.getElementById("resultItem"),
  statsLine: document.getElementById("statsLine"),
  rarityBars: document.getElementById("rarityBars"),
  inventoryList: document.getElementById("inventoryList"),
  historyList: document.getElementById("historyList"),
  sellBlueBtn: document.getElementById("sellBlueBtn"),
  sellAllBtn: document.getElementById("sellAllBtn"),
  previewDialog: document.getElementById("previewDialog"),
  previewTitle: document.getElementById("previewTitle"),
  previewContent: document.getElementById("previewContent"),
  closePreview: document.getElementById("closePreview"),
  caseTemplate: document.getElementById("caseTemplate"),
  inventoryTemplate: document.getElementById("inventoryTemplate"),
  historyTemplate: document.getElementById("historyTemplate"),
};

const state = {
  balance: 0,
  selectedCaseId: cases[0].id,
  inventory: [],
  history: [],
  stats: {
    opened: 0,
    spent: 0,
    sold: 0,
    rarityHits: { blue: 0, purple: 0, pink: 0, red: 0, gold: 0 },
    bestDropValue: 0,
    bestDropName: "-",
  },
  opening: false,
  autoQueue: 0,
  autoStopped: false,
};

const quickChips = [100, 250, 500, 1000, 5000];

function money(value) {
  return `$${value.toFixed(2)}`;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getCaseById(id) {
  return cases.find((itemCase) => itemCase.id === id) || cases[0];
}

function tierClass(tier) {
  return `tier-${tier}`;
}

function inventoryTotal() {
  return state.inventory.reduce((sum, item) => sum + item.value, 0);
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (typeof data !== "object" || !data) return;
    Object.assign(state, data);
    state.opening = false;
    state.autoQueue = 0;
    state.autoStopped = false;
  } catch (_error) {
    localStorage.removeItem(STORAGE_KEY);
  }
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
  return { ...randomItemFromTier(itemCase, tier), tier };
}

function makeReelSpin(itemCase, winner) {
  const slots = [];
  const targetIndex = 34;
  const totalSlots = 60;

  for (let i = 0; i < totalSlots; i += 1) {
    if (i === targetIndex) {
      slots.push(winner);
      continue;
    }
    slots.push(rollItem(itemCase));
  }

  return { slots, targetIndex };
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
      setResult(`Deposited ${money(amount)} fake cash.`, "Funded", "gold");
    });
    els.chips.appendChild(chip);
  });
}

function refreshWallet() {
  const inv = inventoryTotal();
  els.balance.textContent = money(state.balance);
  els.invValue.textContent = money(inv);
  els.netWorth.textContent = money(state.balance + inv);
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

    const openBtn = card.querySelector(".btn-open");
    openBtn.addEventListener("click", () => {
      state.selectedCaseId = itemCase.id;
      renderCases();
      renderActiveCase();
      openCase();
    });

    const previewBtn = card.querySelector(".preview-btn");
    previewBtn.addEventListener("click", () => {
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
  els.activeCaseLabel.textContent = `${itemCase.name} selected | Price: ${money(itemCase.price)}`;
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
    const name = row.querySelector(".inventory-name");
    const meta = row.querySelector(".inventory-meta");
    const sellBtn = row.querySelector(".sell-btn");

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

  state.history.slice(0, 20).forEach((entry) => {
    const row = els.historyTemplate.content.firstElementChild.cloneNode(true);
    const title = row.querySelector(".history-title");
    const meta = row.querySelector(".history-meta");
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
    track.appendChild(fill);

    const value = document.createElement("p");
    value.textContent = `${hits}`;

    row.append(label, track, value);
    els.rarityBars.appendChild(row);
  });
}

function setResult(message, itemName, tier) {
  els.resultText.textContent = message;
  els.resultItem.className = tier ? tierClass(tier) : "";
  els.resultItem.textContent = itemName;
}

function updateAll() {
  refreshWallet();
  renderInventory();
  renderHistory();
  renderStats();
  renderCases();
  renderActiveCase();
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
  setResult(`Sold for ${money(item.value)}.`, item.name, item.tier);
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

  setResult(`Sold items for ${money(sold)}.`, tier ? `Sold ${tier.toUpperCase()} items` : "Sold Everything", tier || "gold");
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
      const line = document.createElement("p");
      line.className = "muted";
      line.textContent = `${item.name} - ${money(item.value)}`;
      group.appendChild(line);
    });

    els.previewContent.appendChild(group);
  });

  els.previewDialog.showModal();
}

function makeReelHTML(slots) {
  els.reelTrack.innerHTML = "";
  slots.forEach((slot) => {
    const div = document.createElement("div");
    div.className = `reel-slot ${tierClass(slot.tier)}`;
    div.textContent = slot.name;
    els.reelTrack.appendChild(div);
  });
}

function runSpinAnimation(targetIndex) {
  return new Promise((resolve) => {
    const slotWidth = 140;
    const viewportCenterOffset = 210;
    const stopAt = targetIndex * slotWidth - viewportCenterOffset;
    els.reelTrack.style.transition = "none";
    els.reelTrack.style.transform = "translateX(0px)";

    requestAnimationFrame(() => {
      els.reelTrack.style.transition = "transform 2.3s cubic-bezier(0.12, 0.73, 0.12, 1)";
      els.reelTrack.style.transform = `translateX(-${stopAt}px)`;

      window.setTimeout(() => resolve(), 2350);
    });
  });
}

async function openCase() {
  if (state.opening) return false;

  const itemCase = getCaseById(state.selectedCaseId);
  if (state.balance < itemCase.price) {
    setResult("Not enough fake funds.", "Insufficient Balance", "red");
    return false;
  }

  state.opening = true;
  state.balance -= itemCase.price;
  state.stats.spent += itemCase.price;
  refreshWallet();

  const winner = rollItem(itemCase);
  const spin = makeReelSpin(itemCase, winner);

  makeReelHTML(spin.slots);
  setResult(`Opening ${itemCase.name}...`, "Spinning", null);

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
  state.stats.rarityHits[winner.tier] += 1;

  if (winner.value > state.stats.bestDropValue) {
    state.stats.bestDropValue = winner.value;
    state.stats.bestDropName = winner.name;
  }

  updateAll();
  saveState();

  const profitable = winner.value >= itemCase.price;
  const message = profitable ? "Profit hit" : "Loss roll";
  setResult(`${message} | ${itemCase.name}`, `${winner.name} (${money(winner.value)})`, winner.tier);

  state.opening = false;
  return true;
}

async function runAutoOpen() {
  if (state.autoQueue > 0 || state.opening) return;

  const desired = clamp(Number(els.autoCount.value) || 1, 1, 25);
  state.autoQueue = desired;
  state.autoStopped = false;

  while (state.autoQueue > 0 && !state.autoStopped) {
    els.autoStatus.textContent = `Queue running: ${state.autoQueue} remaining`;
    const opened = await openCase();
    if (!opened) break;
    state.autoQueue -= 1;
    await new Promise((resolve) => window.setTimeout(resolve, 220));
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

function wireEvents() {
  els.depositBtn.addEventListener("click", () => {
    const amount = Number(els.depositInput.value);
    if (!Number.isFinite(amount) || amount <= 0) {
      setResult("Enter a valid amount.", "Deposit Failed", "red");
      return;
    }
    state.balance += amount;
    els.depositInput.value = "";
    refreshWallet();
    saveState();
    setResult(`Deposited ${money(amount)} fake cash.`, "Balance Updated", "gold");
  });

  els.depositInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") els.depositBtn.click();
  });

  els.autoBtn.addEventListener("click", () => {
    runAutoOpen();
  });

  els.stopAutoBtn.addEventListener("click", () => {
    state.autoStopped = true;
  });

  els.sellBlueBtn.addEventListener("click", () => sellByTier("blue"));
  els.sellAllBtn.addEventListener("click", () => sellByTier(null));

  els.closePreview.addEventListener("click", () => els.previewDialog.close());
}

loadState();
wireEvents();
renderChips();
updateAll();
setResult("System ready.", "Select a case and open", "blue");
