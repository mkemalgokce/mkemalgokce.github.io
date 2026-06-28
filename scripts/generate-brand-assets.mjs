#!/usr/bin/env node
/**
 * Brand asset generator — single source of truth for icons + the OG share card.
 *
 * Produces (from clean vector masters, no embedded raster bloat):
 *   public/favicon.svg            squircle "MK" monogram (vector, theme-agnostic)
 *   public/favicon.ico            16/32/48 multi-res
 *   public/icon-192.png           PWA icon (any)
 *   public/icon-512.png           PWA icon (any)
 *   public/icon-maskable-512.png  PWA maskable (safe-zone padded)
 *   src/app/apple-icon.png        180px apple-touch (full-bleed; iOS rounds it)
 *   public/og.png                 1200x630 social share card (name + avatar)
 *
 * Requirements: `rsvg-convert` and `magick` (ImageMagick) on PATH, plus the
 * SF Pro fonts installed (rsvg renders text via fontconfig/pango).
 *   brew install librsvg imagemagick
 *
 * Run: npm run assets
 */
import { writeFileSync, readFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const PUB = join(ROOT, "public");
const APP = join(ROOT, "src", "app");
const TMP = mkdtempSync(join(tmpdir(), "brand-"));

const ACCENT_FROM = "#0A84FF"; // iOS system blue
const ACCENT_TO = "#0257CC";
const FONT_DISPLAY = "SF Pro Display, -apple-system, Helvetica Neue, Arial, sans-serif";
const FONT_TEXT = "SF Pro Text, -apple-system, Arial, sans-serif";

/* Apple-style squircle (superellipse) path inscribed in a size×size box. */
function squircle(size, n = 5, steps = 240) {
  const a = size / 2;
  const c = size / 2;
  const pt = (t) => {
    const ct = Math.cos(t), st = Math.sin(t);
    const x = c + a * Math.sign(ct) * Math.abs(ct) ** (2 / n);
    const y = c + a * Math.sign(st) * Math.abs(st) ** (2 / n);
    return `${x.toFixed(2)} ${y.toFixed(2)}`;
  };
  let d = `M${pt(0)}`;
  for (let i = 1; i < steps; i++) d += `L${pt((i / steps) * 2 * Math.PI)}`;
  return d + "Z";
}

function brandDefs(size, p) {
  return `<defs>
    <linearGradient id="${p}g" x1="0" y1="0" x2="${size}" y2="${size}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="${ACCENT_FROM}"/><stop offset="1" stop-color="${ACCENT_TO}"/>
    </linearGradient>
    <radialGradient id="${p}h" cx="0.5" cy="0" r="0.9">
      <stop offset="0" stop-color="#fff" stop-opacity="0.30"/>
      <stop offset="0.55" stop-color="#fff" stop-opacity="0.05"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>`;
}

function monogram(size, scale) {
  const fs = size * 0.5 * scale;
  const x = size / 2;
  const y = size / 2 + fs * 0.345;
  return `<text x="${x}" y="${y.toFixed(1)}" text-anchor="middle" font-family="${FONT_DISPLAY}"
    font-weight="800" font-size="${fs.toFixed(1)}" letter-spacing="${(-fs * 0.03).toFixed(1)}" fill="#fff">MK</text>`;
}

const iconSquircle = (s) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">${brandDefs(s, "s")}
    <path d="${squircle(s)}" fill="url(#sg)"/><path d="${squircle(s)}" fill="url(#sh)"/>${monogram(s, 0.92)}</svg>`;

const iconSquare = (s, scale) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 ${s} ${s}">${brandDefs(s, "f")}
    <rect width="${s}" height="${s}" fill="url(#fg)"/><rect width="${s}" height="${s}" fill="url(#fh)"/>${monogram(s, scale)}</svg>`;

function ogCard() {
  const W = 1200, H = 630;
  const avatar = readFileSync(join(PUB, "avatar.jpg")).toString("base64");
  const aR = 150, aCx = 980, aCy = 330;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#08080c"/><stop offset="1" stop-color="#0f0f17"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.84" cy="0.12" r="0.65">
      <stop offset="0" stop-color="${ACCENT_FROM}" stop-opacity="0.42"/>
      <stop offset="0.5" stop-color="${ACCENT_FROM}" stop-opacity="0.10"/>
      <stop offset="1" stop-color="${ACCENT_FROM}" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="ac"><circle cx="${aCx}" cy="${aCy}" r="${aR}"/></clipPath>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="${ACCENT_FROM}"/>
  <circle cx="${aCx}" cy="${aCy}" r="${aR + 14}" fill="none" stroke="${ACCENT_FROM}" stroke-opacity="0.35" stroke-width="2"/>
  <circle cx="${aCx}" cy="${aCy}" r="${aR + 5}" fill="none" stroke="${ACCENT_FROM}" stroke-width="3"/>
  <image x="${aCx - aR}" y="${aCy - aR}" width="${aR * 2}" height="${aR * 2}" clip-path="url(#ac)"
    href="data:image/jpeg;base64,${avatar}" preserveAspectRatio="xMidYMid slice"/>
  <text x="80" y="250" font-family="${FONT_TEXT}" font-weight="600" font-size="26" letter-spacing="6" fill="${ACCENT_FROM}">iOS DEVELOPER</text>
  <text x="76" y="340" font-family="${FONT_DISPLAY}" font-weight="800" font-size="74" letter-spacing="-2" fill="#f5f5f7">Mustafa Kemal</text>
  <text x="76" y="426" font-family="${FONT_DISPLAY}" font-weight="800" font-size="74" letter-spacing="-2" fill="#f5f5f7">GÖKÇE</text>
  <text x="80" y="492" font-family="${FONT_TEXT}" font-weight="500" font-size="28" fill="#a5a5b0">Swift · SwiftUI · UIKit</text>
  <text x="80" y="556" font-family="${FONT_TEXT}" font-weight="600" font-size="24" letter-spacing="0.5" fill="#69b8ff">mkemalgokce.github.io</text>
</svg>`;
}

function svg(name, content) {
  const p = join(TMP, name);
  writeFileSync(p, content);
  return p;
}
function png(srcSvg, w, h, out) {
  execFileSync("rsvg-convert", ["-w", String(w), "-h", String(h), srcSvg, "-o", out]);
  execFileSync("magick", [out, "-strip", out]);
}

try {
  const sq = svg("squircle.svg", iconSquircle(1024));
  const mask = svg("maskable.svg", iconSquare(1024, 0.62));
  const apple = svg("apple.svg", iconSquare(1024, 0.8));
  const fav = svg("favicon.svg", iconSquircle(128));
  const og = svg("og.svg", ogCard());

  // vector favicon
  writeFileSync(join(PUB, "favicon.svg"), iconSquircle(128));
  // raster icons
  png(sq, 192, 192, join(PUB, "icon-192.png"));
  png(sq, 512, 512, join(PUB, "icon-512.png"));
  png(mask, 512, 512, join(PUB, "icon-maskable-512.png"));
  png(apple, 180, 180, join(APP, "apple-icon.png"));
  png(og, 1200, 630, join(PUB, "og.png"));
  // favicon.ico (16/32/48)
  const i16 = join(TMP, "i16.png"), i32 = join(TMP, "i32.png"), i48 = join(TMP, "i48.png");
  execFileSync("rsvg-convert", ["-w", "16", "-h", "16", fav, "-o", i16]);
  execFileSync("rsvg-convert", ["-w", "32", "-h", "32", fav, "-o", i32]);
  execFileSync("rsvg-convert", ["-w", "48", "-h", "48", fav, "-o", i48]);
  execFileSync("magick", [i16, i32, i48, join(PUB, "favicon.ico")]);

  console.log("✓ Brand assets regenerated.");
} finally {
  rmSync(TMP, { recursive: true, force: true });
}
