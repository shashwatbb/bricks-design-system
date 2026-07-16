// ─────────────────────────────────────────────────────────────
// Bricks — Left Nav builder for Figma  (fixed)
// HOW TO RUN: install the "Scripter" plugin (Figma community),
// paste this whole file in, press Run.
// ─────────────────────────────────────────────────────────────
(async () => {
  // ── robust font loading (works even without Inter) ──
  const all = await figma.listAvailableFontsAsync();
  const fams = new Set(all.map((f) => f.fontName.family));
  const FAM =
    ["Google Sans Flex", "Inter", "Roboto", "Helvetica Neue", "Arial"].find((f) => fams.has(f)) ||
    all[0].fontName.family;
  const styles = all.filter((f) => f.fontName.family === FAM).map((f) => f.fontName.style);
  const pick = (...wants) => wants.find((s) => styles.includes(s)) || styles[0];
  const WT = {
    Regular: pick("Regular", "Medium", "Book"),
    Medium: pick("Medium", "Regular"),
    Semi: pick("Semi Bold", "SemiBold", "Bold", "Medium"),
    Bold: pick("Bold", "Semi Bold", "Medium"),
  };
  await Promise.all([...new Set(Object.values(WT))].map((s) => figma.loadFontAsync({ family: FAM, style: s })));

  // ── palette ──
  const hex = (h) => {
    const n = h.replace("#", "");
    return { r: parseInt(n.slice(0, 2), 16) / 255, g: parseInt(n.slice(2, 4), 16) / 255, b: parseInt(n.slice(4, 6), 16) / 255 };
  };
  const C = {
    surface: hex("#FBFAF7"), primary: hex("#211D19"), secondary: hex("#78716B"),
    border: hex("#E7E1D8"), ctaBg: hex("#17130F"), white: hex("#FFFFFF"),
    brand: hex("#4A16D9"), avatarBg: hex("#F0EBE4"),
  };
  const fill = (c) => [{ type: "SOLID", color: c }];

  // ── helpers ──
  // add child then (safely, after it has a parent) set stretch / grow
  const add = (parent, child, { stretch = false, grow = 0 } = {}) => {
    parent.appendChild(child);
    if (stretch) child.layoutAlign = "STRETCH";
    if (grow) child.layoutGrow = grow;
    return child;
  };
  const text = (chars, { size = 14, style = WT.Medium, color = C.primary } = {}) => {
    const t = figma.createText();
    t.fontName = { family: FAM, style };
    t.fontSize = size;
    t.characters = chars;
    t.fills = fill(color);
    t.textAutoResize = "WIDTH";
    return t;
  };
  const icon = (inner, color = "rgb(120,113,108)", filled = false) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="${filled ? color : "none"}" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
    const n = figma.createNodeFromSvg(svg);
    n.resize(20, 20);
    n.name = "icon";
    return n;
  };
  const autolayout = (dir, gap, { pad = 0, between = false } = {}) => {
    const f = figma.createFrame();
    f.layoutMode = dir;
    f.itemSpacing = gap;
    f.primaryAxisSizingMode = "AUTO";
    f.counterAxisSizingMode = "AUTO";
    f.counterAxisAlignItems = "CENTER";
    if (between) f.primaryAxisAlignItems = "SPACE_BETWEEN";
    if (pad) { f.paddingTop = f.paddingBottom = f.paddingLeft = f.paddingRight = pad; }
    f.fills = [];
    f.clipsContent = false;
    return f;
  };
  const divider = (parent) => {
    const r = figma.createFrame();
    r.resize(232, 1);
    r.fills = fill(C.border);
    r.name = "divider";
    add(parent, r, { stretch: true });
  };

  const P = {
    layout: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/><path d="M3 9h18"/>',
    palette: '<circle cx="13.5" cy="6.5" r=".6" fill="rgb(120,113,108)" stroke="none"/><circle cx="17.5" cy="10.5" r=".6" fill="rgb(120,113,108)" stroke="none"/><circle cx="8.5" cy="7.5" r=".6" fill="rgb(120,113,108)" stroke="none"/><circle cx="6.5" cy="12.5" r=".6" fill="rgb(120,113,108)" stroke="none"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    box: '<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',
    chevron: '<path d="m6 9 6 6 6-6"/>',
    download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>',
    moon: '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
    panel: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 3v18"/>',
    caretUp: '<path d="m6 15 6-6 6 6"/>',
  };

  const navItem = (parent, pathKey, label, { active = false, chevron = false } = {}) => {
    const item = autolayout("HORIZONTAL", 12, { between: chevron });
    item.name = "nav-item";
    item.paddingTop = item.paddingBottom = 10;
    item.paddingLeft = item.paddingRight = 12;
    item.cornerRadius = 8;
    const left = autolayout("HORIZONTAL", 12);
    left.appendChild(icon(P[pathKey], active ? "rgb(33,29,25)" : "rgb(120,113,108)"));
    left.appendChild(text(label, { style: active ? WT.Semi : WT.Medium, color: active ? C.primary : C.secondary }));
    item.appendChild(left);
    if (chevron) item.appendChild(icon(P.chevron, "rgb(120,113,108)"));
    add(parent, item, { stretch: true });
    return item;
  };

  const subMenu = (parent, labels) => {
    const m = autolayout("VERTICAL", 2);
    m.name = "sub-menu";
    m.paddingLeft = 12;
    m.strokes = fill(C.border);
    m.strokeTopWeight = 0; m.strokeRightWeight = 0; m.strokeBottomWeight = 0; m.strokeLeftWeight = 1;
    add(parent, m, { stretch: true });
    labels.forEach((l) => {
      const w = autolayout("HORIZONTAL", 0);
      w.name = "sub-nav-item";
      w.paddingTop = w.paddingBottom = 8;
      w.paddingLeft = w.paddingRight = 12;
      w.cornerRadius = 6;
      w.appendChild(text(l, { size: 13, style: WT.Regular, color: C.secondary }));
      add(m, w, { stretch: true });
    });
  };

  // ── SIDEBAR ──
  const bar = figma.createFrame();
  bar.name = "Left Nav";
  bar.layoutMode = "VERTICAL";
  bar.resize(280, 660);
  bar.primaryAxisSizingMode = "FIXED";
  bar.counterAxisSizingMode = "FIXED";
  bar.itemSpacing = 8;
  bar.paddingTop = bar.paddingBottom = bar.paddingLeft = bar.paddingRight = 24;
  bar.cornerRadius = 24;
  bar.fills = fill(C.surface);
  bar.strokes = fill(C.border);
  bar.strokeWeight = 1;
  bar.effects = [{ type: "DROP_SHADOW", color: { r: 0, g: 0, b: 0, a: 0.05 }, offset: { x: 0, y: 4 }, radius: 24, spread: -1, visible: true, blendMode: "NORMAL" }];

  // logo row
  const logo = autolayout("HORIZONTAL", 14, { between: true });
  logo.name = "logo-container";
  logo.paddingBottom = 24;
  const brandGroup = autolayout("HORIZONTAL", 14);
  const mark = autolayout("HORIZONTAL", 0);
  mark.resize(36, 36);
  mark.cornerRadius = 10;
  mark.fills = fill(C.brand);
  mark.primaryAxisAlignItems = "CENTER";
  mark.appendChild(icon(P.caretUp, "rgb(255,255,255)"));
  brandGroup.appendChild(mark);
  brandGroup.appendChild(text("Bricks", { size: 24, style: WT.Bold, color: C.primary }));
  logo.appendChild(brandGroup);
  logo.appendChild(icon(P.panel, "rgb(120,113,108)"));
  add(bar, logo, { stretch: true });

  // nav menu (grows to push footer down)
  const menu = autolayout("VERTICAL", 4);
  menu.name = "nav-menu";
  add(bar, menu, { stretch: true, grow: 1 });
  navItem(menu, "layout", "Introduction", { active: true });
  const foundations = autolayout("VERTICAL", 4);
  add(menu, foundations, { stretch: true });
  navItem(foundations, "palette", "Foundations", { chevron: true });
  subMenu(foundations, ["Colors", "Typography", "Spacing", "Radius"]);
  navItem(menu, "box", "Components", { chevron: true });

  // CTA
  divider(bar);
  const cta = autolayout("HORIZONTAL", 8);
  cta.name = "cta-button";
  cta.primaryAxisAlignItems = "CENTER";
  cta.paddingTop = cta.paddingBottom = 12;
  cta.paddingLeft = cta.paddingRight = 16;
  cta.cornerRadius = 8;
  cta.fills = fill(C.ctaBg);
  cta.appendChild(icon(P.download, "rgb(255,255,255)"));
  cta.appendChild(text("Design System (v1.2.0)", { size: 13, style: WT.Semi, color: C.white }));
  add(bar, cta, { stretch: true });

  // footer
  divider(bar);
  const footer = autolayout("HORIZONTAL", 12, { between: true });
  footer.name = "footer";
  footer.paddingTop = 4;
  const person = autolayout("HORIZONTAL", 12);
  const avatar = autolayout("HORIZONTAL", 0);
  avatar.resize(40, 40);
  avatar.cornerRadius = 20;
  avatar.fills = fill(C.avatarBg);
  avatar.strokes = fill(C.border);
  avatar.strokeWeight = 1;
  avatar.primaryAxisAlignItems = "CENTER";
  avatar.appendChild(text("SB", { size: 13, style: WT.Bold, color: C.primary }));
  person.appendChild(avatar);
  const info = autolayout("VERTICAL", 0);
  info.counterAxisAlignItems = "MIN";
  info.appendChild(text("Shashwat B.", { size: 14, style: WT.Semi, color: C.primary }));
  info.appendChild(text("Admin", { size: 12, style: WT.Regular, color: C.secondary }));
  person.appendChild(info);
  footer.appendChild(person);
  footer.appendChild(icon(P.moon, "rgb(120,113,108)")); // dark-mode toggle
  add(bar, footer, { stretch: true });

  // place, select, zoom
  bar.x = figma.viewport.center.x - 140;
  bar.y = figma.viewport.center.y - 330;
  figma.currentPage.appendChild(bar);
  figma.currentPage.selection = [bar];
  figma.viewport.scrollAndZoomIntoView([bar]);
  figma.notify("Left nav built ✓  (font: " + FAM + ")");
})();
