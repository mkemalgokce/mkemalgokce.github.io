/**
 * Living aurora wallpaper — the "environment" the Liquid Glass refracts.
 * Fixed behind all content, decorative, pointer-transparent. The slow drift
 * animation is disabled automatically under prefers-reduced-motion (globals.css).
 */
export default function Aurora() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-bg" />

      {/* color blobs */}
      <div className="absolute -left-[10%] -top-[15%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgb(0_113_227/0.5),transparent_65%)] blur-3xl animate-aurora dark:bg-[radial-gradient(circle,rgb(10_132_255/0.4),transparent_65%)]" />
      <div className="absolute right-[-8%] top-[2%] h-[50vh] w-[50vh] rounded-full bg-[radial-gradient(circle,rgb(139_92_246/0.42),transparent_65%)] blur-3xl animate-aurora [animation-delay:-8s] dark:bg-[radial-gradient(circle,rgb(139_92_246/0.34),transparent_65%)]" />
      <div className="absolute bottom-[-12%] left-[20%] h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgb(236_72_153/0.32),transparent_65%)] blur-3xl animate-aurora [animation-delay:-16s] dark:bg-[radial-gradient(circle,rgb(236_72_153/0.26),transparent_65%)]" />
      <div className="absolute bottom-[0%] right-[8%] h-[42vh] w-[42vh] rounded-full bg-[radial-gradient(circle,rgb(45_212_191/0.3),transparent_65%)] blur-3xl animate-aurora [animation-delay:-12s] dark:bg-[radial-gradient(circle,rgb(45_212_191/0.24),transparent_65%)]" />

      {/* fine grid + legibility veil */}
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-bg/40 dark:bg-bg/55" />
    </div>
  );
}
