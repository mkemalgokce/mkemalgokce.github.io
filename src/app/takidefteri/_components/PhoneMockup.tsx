"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TdIcon } from "./Icons";

/**
 * Device shots rebuilt from the app's own design prototype
 * (iOS/projects/taki-defteri-design/matrak.html) — same markup and the same
 * stylesheet, ported into `screens.css`. Copy and figures come from the
 * shipping app, so these are the real screens, not an approximation.
 * They read the site's `--td-*` tokens, so they follow light/dark with the page.
 */

export function Phone({
  children,
  scale = 1,
  scaleSm = 0.66,
  className = "",
  label,
}: {
  children: React.ReactNode;
  scale?: number;
  /** Applied below 640px so the shot never makes the page scroll sideways. */
  scaleSm?: number;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={`td-screens td-phone-scaler ${className}`}
      style={
        { "--td-phone-scale": scale, "--td-phone-scale-sm": scaleSm } as React.CSSProperties
      }
    >
      <div className="phone" role="img" aria-label={label}>
        <div className="screen">
          <div className="island" />
          <div className="status">
            <span>9:41</span>
            <svg className="st" viewBox="0 0 76 14" aria-hidden>
              <use href="#i-status" />
            </svg>
          </div>
          {children}
          <div className="home-ind" />
        </div>
      </div>
    </div>
  );
}

/* ── Özet ───────────────────────────────────────────────────── */

export function OzetScreen({
  scale = 1,
  scaleSm,
  className = "",
}: {
  scale?: number;
  scaleSm?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <Phone scale={scale} scaleSm={scaleSm} className={className} label="Takı Defteri Özet ekranı">
      <div className="nav">
        <div className="nav-row">
          <span />
          <span className="nav-btn">
            <TdIcon name="i-bell" className="ic ic-s" />
          </span>
        </div>
        <div className="nav-lg">Hoş geldin!</div>
        <div className="nav-sub">Defter hazır — 3 etkinlik yaklaşıyor.</div>
      </div>

      <div className="content">
        <div className="stat-grid">
          <div className="stat-tile">
            <div className="lbl">Alınan toplam</div>
            <div className="val">48,32 gr</div>
            <div className="lbl" style={{ marginTop: 2 }}>
              ₺271.558
            </div>
          </div>
          <div className="stat-tile">
            <div className="lbl">Takılan toplam</div>
            <div className="val">11,7 gr</div>
            <div className="lbl" style={{ marginTop: 2 }}>
              ₺65.754
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="kicker">Sıradaki düğün alarmı</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="card-title">Elif &amp; Mert</div>
              <div className="small muted" style={{ marginTop: 3 }}>
                Düğün · 12 Temmuz 2026 · 20:30 · İstanbul
              </div>
            </div>
            <motion.img
              className="img-asset md"
              src="/takidefteri/coin-ceyrek.png"
              alt=""
              animate={reduce ? undefined : { rotate: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
            <span className="chip gold">
              <TdIcon name="i-cal" />
              18 gün kaldı
            </span>
            <span className="chip pink">12,4 gr</span>
          </div>
        </div>

        <div className="sec-h">
          Karşılık bekleyenler <span className="more">Tümü</span>
        </div>
        <div className="list">
          <div className="cell">
            <span className="avatar a1">FT</span>
            <div className="cell-body">
              <div className="cell-title">Fatma Teyze</div>
              <div className="cell-sub">Komşu</div>
            </div>
            <span className="badge neg">Karşılıksız</span>
          </div>
          <div className="cell">
            <span className="avatar a3">AY</span>
            <div className="cell-body">
              <div className="cell-title">Ayşe Yılmaz</div>
              <div className="cell-sub">Kuzen</div>
            </div>
            <span className="badge neg">Karşılıksız</span>
          </div>
        </div>
      </div>

      <div className="tabbar">
        <span className="tab on">
          <TdIcon name="i-home" />
          Özet
        </span>
        <span className="tab">
          <TdIcon name="i-cal" />
          Etkinlikler
        </span>
        <span className="tab">
          <TdIcon name="i-people" />
          Kişiler
        </span>
        <span className="tab">
          <TdIcon name="i-gear" />
          Ayarlar
        </span>
      </div>
    </Phone>
  );
}
