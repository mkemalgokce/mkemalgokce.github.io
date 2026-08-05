/**
 * Icon sprite lifted from the app's design prototype
 * (iOS/projects/taki-defteri-design/matrak.html). Same line-art language as
 * the app's own SF Symbol set — mounted once per page, referenced with <use>.
 */

export type TdIconName =
  | "i-status"
  | "i-home"
  | "i-cal"
  | "i-cal-plus"
  | "i-people"
  | "i-person"
  | "i-chart"
  | "i-gear"
  | "i-plus"
  | "i-minus"
  | "i-chev-r"
  | "i-chev-l"
  | "i-chev-d"
  | "i-camera"
  | "i-scan"
  | "i-bell"
  | "i-search"
  | "i-share"
  | "i-check"
  | "i-x"
  | "i-pin"
  | "i-clock"
  | "i-cloud"
  | "i-faceid"
  | "i-doc"
  | "i-globe"
  | "i-moon"
  | "i-sun"
  | "i-gift"
  | "i-coin"
  | "i-ring"
  | "i-trash"
  | "i-pencil"
  | "i-arrow-ur"
  | "i-arrow-dl"
  | "i-ellipsis"
  | "i-sparkle"
  | "i-info"
  | "i-lock"
  | "a-ceyrek"
  | "a-yarim"
  | "a-tam"
  | "a-ata"
  | "a-bilezik"
  | "a-gift"
  | "a-davetiye"
  | "a-appicon";

export function TdIconSprite() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden focusable="false">
      <defs>
      <symbol id="i-status" viewBox="0 0 76 14">
      <rect x="0" y="10" width="3" height="4" rx="1" fill="currentColor" stroke="none" />
      <rect x="5" y="8" width="3" height="6" rx="1" fill="currentColor" stroke="none" />
      <rect x="10" y="6" width="3" height="8" rx="1" fill="currentColor" stroke="none" />
      <rect x="15" y="4" width="3" height="10" rx="1" fill="currentColor" stroke="none" />
      <path d="M25.8 8.6a7.4 7.4 0 0 1 10.4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M28.4 11a3.8 3.8 0 0 1 5.2 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="31" cy="13" r="1.3" fill="currentColor" stroke="none" />
      <rect x="52.5" y="2.5" width="20" height="9" rx="3" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <rect x="54.5" y="4.5" width="13" height="5" rx="1.5" fill="currentColor" stroke="none" />
      <rect x="74" y="5.5" width="2" height="3" rx="1" fill="currentColor" stroke="none" />
      </symbol>
      <symbol id="i-home" viewBox="0 0 24 24">
      <path d="M4 11.2 12 4.5l8 6.7" />
      <path d="M6.2 10.2V19a1.5 1.5 0 0 0 1.5 1.5h8.6A1.5 1.5 0 0 0 17.8 19v-8.8" />
      <path d="M10 20.5v-5h4v5" />
      </symbol>
      <symbol id="i-cal" viewBox="0 0 24 24">
      <rect x="3.75" y="5" width="16.5" height="15" rx="3" />
      <path d="M8 3.25V7M16 3.25V7M3.75 10h16.5" />
      </symbol>
      <symbol id="i-cal-plus" viewBox="0 0 24 24">
      <rect x="3.75" y="5" width="16.5" height="15" rx="3" />
      <path d="M8 3.25V7M16 3.25V7M3.75 10h16.5" />
      <path d="M12 12.6v4.8M9.6 15h4.8" />
      </symbol>
      <symbol id="i-people" viewBox="0 0 24 24">
      <circle cx="9" cy="8.5" r="3.25" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <circle cx="16.75" cy="9.5" r="2.6" />
      <path d="M15.6 14.7a4.9 4.9 0 0 1 4.9 4.8" />
      </symbol>
      <symbol id="i-person" viewBox="0 0 24 24">
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
      </symbol>
      <symbol id="i-chart" viewBox="0 0 24 24">
      <path d="M5 20v-8M12 20V5.5M19 20V10" />
      </symbol>
      <symbol id="i-gear" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.1" />
      <circle cx="12" cy="12" r="6.9" />
      <path d="M12 2.8v2.6M12 18.6v2.6M21.2 12h-2.6M5.4 12H2.8M18.5 5.5l-1.84 1.84M7.34 16.66 5.5 18.5M18.5 18.5l-1.84-1.84M7.34 7.34 5.5 5.5" />
      </symbol>
      <symbol id="i-plus" viewBox="0 0 24 24"><path d="M12 5.5v13M5.5 12h13" /></symbol>
      <symbol id="i-minus" viewBox="0 0 24 24"><path d="M5.5 12h13" /></symbol>
      <symbol id="i-chev-r" viewBox="0 0 24 24"><path d="M9.5 5.5 16 12l-6.5 6.5" /></symbol>
      <symbol id="i-chev-l" viewBox="0 0 24 24"><path d="M14.5 5.5 8 12l6.5 6.5" /></symbol>
      <symbol id="i-chev-d" viewBox="0 0 24 24"><path d="M6 9.5l6 6 6-6" /></symbol>
      <symbol id="i-camera" viewBox="0 0 24 24">
      <rect x="3.5" y="7.2" width="17" height="12.3" rx="3.2" />
      <path d="M9 7.2l1.3-2.4h3.4L15 7.2" />
      <circle cx="12" cy="13" r="3.4" />
      </symbol>
      <symbol id="i-scan" viewBox="0 0 24 24">
      <path d="M8 4H6.2A2.2 2.2 0 0 0 4 6.2V8M16 4h1.8A2.2 2.2 0 0 1 20 6.2V8M20 16v1.8a2.2 2.2 0 0 1-2.2 2.2H16M8 20H6.2A2.2 2.2 0 0 1 4 17.8V16M7.5 12h9" />
      </symbol>
      <symbol id="i-bell" viewBox="0 0 24 24">
      <path d="M6.3 16.2v-5.4a5.7 5.7 0 0 1 11.4 0v5.4l1.6 2.6H4.7l1.6-2.6z" />
      <path d="M10.4 21.2a1.9 1.9 0 0 0 3.2 0" />
      </symbol>
      <symbol id="i-search" viewBox="0 0 24 24">
      <circle cx="10.8" cy="10.8" r="5.8" />
      <path d="M15.3 15.3 20 20" />
      </symbol>
      <symbol id="i-share" viewBox="0 0 24 24">
      <path d="M12 3.5v11M8.3 6.9 12 3.3l3.7 3.6" />
      <path d="M7.5 10.5h-2v10h13v-10h-2" />
      </symbol>
      <symbol id="i-check" viewBox="0 0 24 24"><path d="M5 12.8l4.6 4.6L19 7" /></symbol>
      <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18" /></symbol>
      <symbol id="i-pin" viewBox="0 0 24 24">
      <path d="M12 21.2s-6.8-5.5-6.8-10.4a6.8 6.8 0 0 1 13.6 0c0 4.9-6.8 10.4-6.8 10.4z" />
      <circle cx="12" cy="10.6" r="2.3" />
      </symbol>
      <symbol id="i-clock" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 7.6V12l3.1 2.1" />
      </symbol>
      <symbol id="i-cloud" viewBox="0 0 24 24">
      <path d="M7.3 18.5h9.9a3.9 3.9 0 0 0 .6-7.76A5.6 5.6 0 0 0 6.9 9.6a4.45 4.45 0 0 0 .4 8.9z" />
      </symbol>
      <symbol id="i-faceid" viewBox="0 0 24 24">
      <path d="M8 4H6.2A2.2 2.2 0 0 0 4 6.2V8M16 4h1.8A2.2 2.2 0 0 1 20 6.2V8M20 16v1.8a2.2 2.2 0 0 1-2.2 2.2H16M8 20H6.2A2.2 2.2 0 0 1 4 17.8V16" />
      <path d="M9 9.5v1.6M15 9.5v1.6M9.3 15.6a3.6 3.6 0 0 0 5.4 0" />
      </symbol>
      <symbol id="i-doc" viewBox="0 0 24 24">
      <path d="M7 3.6h6.6l5 5V19a1.6 1.6 0 0 1-1.6 1.6H7A1.6 1.6 0 0 1 5.4 19V5.2A1.6 1.6 0 0 1 7 3.6z" />
      <path d="M13.4 3.9v4.9h5M8.7 13h6.6M8.7 16.4h4.4" />
      </symbol>
      <symbol id="i-globe" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.4" />
      <ellipse cx="12" cy="12" rx="3.6" ry="8.4" />
      <path d="M3.8 12h16.4" />
      </symbol>
      <symbol id="i-moon" viewBox="0 0 24 24">
      <path d="M20.2 13.8A8.3 8.3 0 1 1 10.2 3.8a6.6 6.6 0 0 0 10 10z" />
      </symbol>
      <symbol id="i-sun" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3.9" />
      <path d="M12 2.8v2.2M12 19v2.2M2.8 12h2.2M19 12h2.2M5.5 5.5l1.6 1.6M16.9 16.9l1.6 1.6M18.5 5.5l-1.6 1.6M7.1 16.9l-1.6 1.6" />
      </symbol>
      <symbol id="i-gift" viewBox="0 0 24 24">
      <rect x="4" y="11" width="16" height="9.4" rx="1.8" />
      <rect x="3" y="7.4" width="18" height="3.6" rx="1.4" />
      <path d="M12 7.4v13" />
      <path d="M12 7.4c-4.6 0-4.8-4.6-2-4.6 2 0 2 3 2 4.6zm0 0c4.6 0 4.8-4.6 2-4.6-2 0-2 3-2 4.6z" />
      </symbol>
      <symbol id="i-coin" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="5" />
      </symbol>
      <symbol id="i-ring" viewBox="0 0 24 24">
      <circle cx="12" cy="14" r="5.8" />
      <path d="M12 3.4 14.3 5.9 12 8.2 9.7 5.9z" />
      </symbol>
      <symbol id="i-trash" viewBox="0 0 24 24">
      <path d="M4.8 7h14.4M9.6 7V5a1.2 1.2 0 0 1 1.2-1.2h2.4A1.2 1.2 0 0 1 14.4 5v2" />
      <path d="M6.7 7l.9 12.3a1.6 1.6 0 0 0 1.6 1.5h5.6a1.6 1.6 0 0 0 1.6-1.5L17.3 7" />
      <path d="M10.3 11v6M13.7 11v6" />
      </symbol>
      <symbol id="i-pencil" viewBox="0 0 24 24">
      <path d="M4.5 19.5l3.7-.8L19.3 7.6a2.1 2.1 0 0 0-3-3L5.3 15.8l-.8 3.7z" />
      <path d="M14.6 6.3l3 3" />
      </symbol>
      <symbol id="i-arrow-ur" viewBox="0 0 24 24"><path d="M7 17 17 7M9.5 7H17v7.5" /></symbol>
      <symbol id="i-arrow-dl" viewBox="0 0 24 24"><path d="M17 7 7 17M14.5 17H7V9.5" /></symbol>
      <symbol id="i-ellipsis" viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none" />
      <circle cx="19" cy="12" r="1.7" fill="currentColor" stroke="none" />
      </symbol>
      <symbol id="i-sparkle" viewBox="0 0 24 24">
      <path d="M11 4.6l1.6 4.3 4.3 1.6-4.3 1.6L11 16.4l-1.6-4.3-4.3-1.6 4.3-1.6z" />
      <path d="M18.4 15.2l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
      </symbol>
      <symbol id="i-info" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8.4" />
      <path d="M12 11v5.2M12 7.6v.2" />
      </symbol>
      <symbol id="i-lock" viewBox="0 0 24 24">
      <rect x="5.8" y="10.6" width="12.4" height="9.4" rx="2.6" />
      <path d="M8.7 10.6V8.2a3.3 3.3 0 0 1 6.6 0v2.4" />
      </symbol>
      <symbol id="a-ceyrek" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="var(--outline)" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.55" />
      <path d="M35 15a12.5 12.5 0 1 0 0 23a10.2 10.2 0 1 1 0-23z" fill="var(--outline)" opacity="0.82" />
      <path d="M42.5 23.2l1.1 2.6 2.8 0.3-2.1 1.9 0.6 2.8-2.4-1.5-2.4 1.5 0.6-2.8-2.1-1.9 2.8-0.3z" fill="var(--outline)" opacity="0.82" />
      <rect x="21" y="42" width="22" height="13" rx="6.5" fill="var(--surface)" stroke="var(--outline)" strokeWidth="2" />
      <text x="32" y="52" textAnchor="middle" fontSize="9.5" fontWeight="800" fontFamily="ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', sans-serif" fill="var(--ink)">Ç</text>
      </symbol>
      <symbol id="a-yarim" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="var(--outline)" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.55" />
      <path d="M35 15a12.5 12.5 0 1 0 0 23a10.2 10.2 0 1 1 0-23z" fill="var(--outline)" opacity="0.82" />
      <path d="M42.5 23.2l1.1 2.6 2.8 0.3-2.1 1.9 0.6 2.8-2.4-1.5-2.4 1.5 0.6-2.8-2.1-1.9 2.8-0.3z" fill="var(--outline)" opacity="0.82" />
      <rect x="21" y="42" width="22" height="13" rx="6.5" fill="var(--surface)" stroke="var(--outline)" strokeWidth="2" />
      <text x="32" y="52" textAnchor="middle" fontSize="9.5" fontWeight="800" fontFamily="ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', sans-serif" fill="var(--ink)">Y</text>
      </symbol>
      <symbol id="a-tam" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="var(--outline)" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.55" />
      <path d="M35 15a12.5 12.5 0 1 0 0 23a10.2 10.2 0 1 1 0-23z" fill="var(--outline)" opacity="0.82" />
      <path d="M42.5 23.2l1.1 2.6 2.8 0.3-2.1 1.9 0.6 2.8-2.4-1.5-2.4 1.5 0.6-2.8-2.1-1.9 2.8-0.3z" fill="var(--outline)" opacity="0.82" />
      <circle cx="32" cy="32" r="19" fill="none" stroke="var(--outline)" strokeWidth="1.2" strokeDasharray="2.5 3.5" opacity="0.45" />
      <rect x="21" y="42" width="22" height="13" rx="6.5" fill="var(--surface)" stroke="var(--outline)" strokeWidth="2" />
      <text x="32" y="52" textAnchor="middle" fontSize="9.5" fontWeight="800" fontFamily="ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', sans-serif" fill="var(--ink)">T</text>
      </symbol>
      <symbol id="a-ata" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="23" fill="none" stroke="var(--outline)" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.55" />
      <path d="M35 15a12.5 12.5 0 1 0 0 23a10.2 10.2 0 1 1 0-23z" fill="var(--outline)" opacity="0.82" />
      <path d="M42.5 23.2l1.1 2.6 2.8 0.3-2.1 1.9 0.6 2.8-2.4-1.5-2.4 1.5 0.6-2.8-2.1-1.9 2.8-0.3z" fill="var(--outline)" opacity="0.82" />
      <circle cx="14.5" cy="32" r="1.5" fill="var(--outline)" opacity="0.6" />
      <circle cx="49.5" cy="32" r="1.5" fill="var(--outline)" opacity="0.6" />
      <rect x="21" y="42" width="22" height="13" rx="6.5" fill="var(--surface)" stroke="var(--outline)" strokeWidth="2" />
      <text x="32" y="52" textAnchor="middle" fontSize="9.5" fontWeight="800" fontFamily="ui-rounded, 'SF Pro Rounded', 'Arial Rounded MT Bold', sans-serif" fill="var(--ink)">ATA</text>
      </symbol>
      <symbol id="a-bilezik" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="24" fill="none" stroke="var(--outline)" strokeWidth="2.5" />
      <circle cx="32" cy="32" r="24" fill="none" stroke="var(--gold)" strokeWidth="9" />
      <circle cx="32" cy="32" r="19" fill="none" stroke="var(--outline)" strokeWidth="2" />
      <path d="M14 22a21.5 21.5 0 0 1 13-9.5" fill="none" stroke="var(--gold-soft)" strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
      <path d="M40 51.5l3.5-4M46 47.5l3.2-3.8M34 53.8l3.4-4.2" stroke="var(--outline)" strokeWidth="1.6" strokeLinecap="round" opacity="0.55" fill="none" />
      </symbol>
      <symbol id="a-gift" viewBox="0 0 64 64">
      <circle cx="15" cy="13" r="5" fill="var(--gold)" stroke="var(--outline)" strokeWidth="1.8" />
      <circle cx="50" cy="10" r="4" fill="var(--gold)" stroke="var(--outline)" strokeWidth="1.8" />
      <circle cx="44" cy="20" r="2.6" fill="var(--pink)" stroke="var(--outline)" strokeWidth="1.6" />
      <rect x="12" y="30" width="40" height="26" rx="4.5" fill="var(--gold-soft)" stroke="var(--outline)" strokeWidth="2.5" />
      <rect x="9" y="23" width="46" height="11" rx="4" fill="var(--pink)" stroke="var(--outline)" strokeWidth="2.5" />
      <rect x="28.5" y="23" width="7" height="33" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2" />
      <path d="M32 22c-7 0-9-8-4.5-8.5C30.5 13 32 18 32 22zm0 0c7 0 9-8 4.5-8.5C33.5 13 32 18 32 22z" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2" />
      </symbol>
      <symbol id="a-davetiye" viewBox="0 0 64 64">
      <rect x="17" y="8" width="30" height="26" rx="2.5" fill="#FDFBF6" stroke="var(--outline)" strokeWidth="2.2" transform="rotate(-3 32 21)" />
      <path d="M23 15h18M23 20h18M23 25h11" stroke="#B9A97F" strokeWidth="1.8" strokeLinecap="round" transform="rotate(-3 32 21)" />
      <rect x="8" y="26" width="48" height="30" rx="4.5" fill="var(--surface-2)" stroke="var(--outline)" strokeWidth="2.5" />
      <path d="M8 29l24 17 24-17" fill="none" stroke="var(--outline)" strokeWidth="2.2" />
      <circle cx="32" cy="48" r="6" fill="var(--pink)" stroke="var(--outline)" strokeWidth="2" />
      <path d="M29.5 48a2.5 2.5 0 0 1 5 0" fill="none" stroke="var(--outline)" strokeWidth="1.5" />
      </symbol>
      <symbol id="a-appicon" viewBox="0 0 64 64">
      <rect x="5" y="5" width="54" height="54" rx="14" fill="var(--gold)" stroke="var(--outline)" strokeWidth="2.5" />
      <path d="M14 44c6.5-3.4 11.5-3.4 18 0c6.5-3.4 11.5-3.4 18 0V27c-6.5-3.4-11.5-3.4-18 0c-6.5-3.4-11.5-3.4-18 0z" fill="var(--surface)" stroke="var(--outline)" strokeWidth="2.2" />
      <path d="M32 27v17" stroke="var(--outline)" strokeWidth="2" />
      <circle cx="32" cy="18" r="7.5" fill="var(--pink)" stroke="var(--outline)" strokeWidth="2.2" />
      <path d="M34.5 14.5a4.6 4.6 0 1 0 0 7.4a3.7 3.7 0 1 1 0-7.4z" fill="var(--outline)" opacity="0.7" />
      </symbol>
      </defs>
    </svg>
  );
}

export function TdIcon({
  name,
  className = "ic",
}: {
  name: TdIconName;
  className?: string;
}) {
  return (
    <svg className={className} aria-hidden focusable="false">
      <use href={`#${name}`} />
    </svg>
  );
}
