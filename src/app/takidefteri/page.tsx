"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { FiArrowRight, FiBell, FiCalendar, FiCloud, FiLock, FiUsers } from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import { OzetScreen } from "./_components/PhoneMockup";
import { TdIconSprite } from "./_components/Icons";
import { Bubble, Confetti, FloatSticker } from "./_components/Decor";
import { TdFooter, TdNav, TdStoreButton } from "./_components/SiteChrome";

/* eslint-disable @next/next/no-img-element -- static export, small illustration assets */

/* ── motion helpers ─────────────────────────────────────────── */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Reveal({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Section marker: a tilted gold tag, like the app's Kicker chip. */
function Tag({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "pink" }) {
  return (
    <span
      className={`td-sticker inline-block -rotate-2 rounded-full px-4 py-1.5 text-[13px] font-extrabold uppercase tracking-[0.1em] text-[rgb(var(--td-on-accent))] ${
        tone === "gold" ? "bg-[rgb(var(--td-gold))]" : "bg-[rgb(var(--td-pink))]"
      }`}
    >
      {children}
    </span>
  );
}

function Title({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={`td-display mt-5 text-balance text-[32px] font-extrabold leading-[1.1] sm:text-[44px] ${className}`}
    >
      {children}
    </h2>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Takı Defteri",
  applicationCategory: "FinanceApplication",
  operatingSystem: "iOS 17.0+",
  inLanguage: "tr",
  description:
    "Düğün, kına, nişan ve sünnette takılan altın ve nakit hediyeleri kaydeden iOS defteri. Kim ne taktı, sen kime ne takacaksın — hepsi tek defterde, gram altına çevrilmiş.",
  url: "https://mkemalgokce.github.io/takidefteri",
  author: { "@type": "Person", name: "Mustafa Kemal GÖKÇE" },
};

export default function TakiDefteriPage() {
  return (
    <div className="td-theme td-dotgrid min-h-screen bg-[rgb(var(--td-bg))] text-[rgb(var(--td-ink))] antialiased selection:bg-[rgb(var(--td-gold))]/35">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TdIconSprite />
      <TdNav active="home" />
      <main id="main" className="overflow-x-hidden">
        <Kapak />
        <TanidikGeldiMi />
        <DefterAcildi />
        <Terazi />
        <SikkeSeridi />
        <Pano />
        <Kapanis />
      </main>
      <TdFooter />
    </div>
  );
}

/* ── 0 · Kapak ──────────────────────────────────────────────── */

function Kapak() {
  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-[104px] sm:px-6 sm:pt-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-[620px] max-w-5xl bg-[radial-gradient(65%_60%_at_50%_0%,rgb(var(--td-gold)/0.3),transparent_72%)]"
      />
      <Confetti className="-z-10 max-w-6xl" />

      <div className="mx-auto grid max-w-6xl items-center gap-x-10 gap-y-16 lg:grid-cols-[1fr_auto]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative text-center lg:text-left"
        >
          {/* mascot + speech bubble, pinned above the headline */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 flex items-end justify-center gap-3 lg:justify-start"
          >
            <img
              src="/takidefteri/mascot-dusunen.png"
              alt=""
              aria-hidden
              width={440}
              height={440}
              className="h-auto w-[74px] shrink-0"
            />
            <Bubble className="mb-3 max-w-[300px] -rotate-1 text-left">
              <p className="text-[15px] font-bold leading-snug">
                “Çeyreği unutan, düğünde terler.”
              </p>
            </Bubble>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="td-display text-balance text-[38px] font-extrabold leading-[1.03] sm:text-[68px]"
          >
            Halaya sen çık,
            <br />
            hesabı{" "}
            <span className="relative inline-block">
              <span className="relative z-10">defter tutsun.</span>
              <span
                aria-hidden
                className="absolute inset-x-[-6px] bottom-[8px] -z-0 h-[34%] -rotate-1 rounded-[6px] bg-[rgb(var(--td-gold))]/50"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-lg text-pretty text-[19px] leading-relaxed text-[rgb(var(--td-ink-2))] lg:mx-0"
          >
            Düğün, kına, nişan, sünnet… Kim sana ne taktı, sen kime ne takacaksın — hepsi tek
            defterde. Çeyrekten ataya her şey gram altına çevrilir.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
          >
            <TdStoreButton size="lg" className="w-full sm:w-auto" />
            <span className="text-sm font-bold text-[rgb(var(--td-ink-3))]">
              iPhone · iOS 17+ · hesap gerekmez
            </span>
          </motion.div>
        </motion.div>

        {/* the phone, taped to the page with coins scattered around it */}
        <motion.div
          initial={{ opacity: 0, y: 44, rotate: -6 }}
          animate={{ opacity: 1, y: 0, rotate: -3 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mx-auto"
        >
          <FloatSticker
            src="/takidefteri/coin-ceyrek.png"
            className="-left-14 -top-2 z-10 hidden w-[72px] sm:-left-16 sm:block"
            rotate={-12}
          />
          <FloatSticker
            src="/takidefteri/coin-bilezik.png"
            className="-right-12 top-[42%] z-10 hidden w-[78px] sm:-right-14 sm:block"
            rotate={10}
            delay={0.8}
          />
          <FloatSticker
            src="/takidefteri/cash-tl.png"
            className="-left-12 bottom-6 z-10 hidden w-[76px] sm:-left-14 sm:block"
            rotate={8}
            delay={1.6}
          />
          <OzetScreen scale={0.9} />
        </motion.div>
      </div>
    </section>
  );
}

/* ── 1 · Tanıdık geldi mi? ──────────────────────────────────── */

const PANELS = [
  {
    line: "“Bunlar bize ne takmıştı ya?”",
    note: "Düğünden altı ay sonra, karşılık verirken. Ne defter kalır, ne fotoğraf bulunur.",
    art: "/takidefteri/mascot-dusunen.png",
    rot: -1.5,
  },
  {
    line: "“İki çeyrek mi ağır, bir bilezik mi?”",
    note: "Sikke, gram, bilezik, nakit… Hepsi ayrı dilde konuşur, kıyaslamak imkânsızdır.",
    art: "/takidefteri/coin-bilezik.png",
    rot: 1.5,
  },
  {
    line: "“O gün 9 bin liraydı, şimdi?”",
    note: "Altın durmaz. Aklında tuttuğun rakam, sen düşünene kadar çoktan eskimiştir.",
    art: "/takidefteri/coin-tam.png",
    rot: -1,
  },
];

function TanidikGeldiMi() {
  return (
    <section className="relative border-y-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-surface-2))] px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Tag tone="pink">Tanıdık geldi mi?</Tag>
          <Title>Düğün biter, hesap kalır</Title>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-70px" }}
          className="mt-14 space-y-6"
        >
          {PANELS.map((p, i) => (
            <motion.div
              key={p.line}
              variants={fadeUp}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`flex items-center gap-4 sm:gap-7 ${
                i % 2 ? "sm:flex-row-reverse sm:pl-16" : "sm:pr-16"
              }`}
            >
              <img
                src={p.art}
                alt=""
                aria-hidden
                width={440}
                height={440}
                className="h-auto w-[64px] shrink-0 sm:w-[86px]"
              />
              <div
                className="td-sticker flex-1 rounded-[22px] bg-[rgb(var(--td-surface))] p-5 sm:p-6"
                style={{ transform: `rotate(${p.rot}deg)` }}
              >
                <p className="td-display text-lg font-extrabold leading-snug sm:text-2xl">
                  {p.line}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))]">
                  {p.note}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── 2 · Defter açıldı (nasıl kullanılır) ───────────────────── */

const STEPS = [
  {
    n: "1",
    title: "Davetiyeyi okut",
    body: "Fotoğrafı çek, gerisini defter halletsin: etkinlik türü, gelin ve damat, tarih, salon ve şehir kendiliğinden dolar. Tarama cihazından çıkmaz.",
    art: "/takidefteri/event-dugun.png",
    chip: "Gelin, damat, tarih — hepsi cebe",
  },
  {
    n: "2",
    title: "Takıyı yaz",
    body: "Kim taktı, ne taktı: çeyrek, yarım, tam, ata, gram, bilezik, nakit ya da adını sen koyduğun özel takı. Salonda art arda giriş için “Kaydet ve Yeni Ekle”.",
    art: "/takidefteri/coin-ceyrek.png",
    chip: "18 takı 5 dakika",
  },
  {
    n: "3",
    title: "Karşılığını bil",
    body: "Sıradaki düğün yaklaşınca defter dürter: kime ne borçlusun, kaç gram ediyor, bugünkü kurla ne yapar. Mahcup gitmezsin.",
    art: "/takidefteri/terazi.png",
    chip: "Kim ne taktıysa fısıldar",
  },
];

function DefterAcildi() {
  return (
    <section className="px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Tag>Nasıl kullanılır?</Tag>
          <Title>Defteri aç, üç adımda dolsun</Title>
        </Reveal>

        <div className="relative mt-16 space-y-14">
          {/* the dashed spine that links the three steps */}
          <div
            aria-hidden
            className="absolute left-[27px] top-4 hidden h-[calc(100%-2rem)] w-0 border-l-2 border-dashed border-[rgb(var(--td-line-strong))] sm:block"
          />

          {STEPS.map((s, i) => (
            <Reveal key={s.n}>
              <div
                className={`relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8 ${
                  i % 2 ? "sm:flex-row" : ""
                }`}
              >
                <span className="td-sticker td-display z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[rgb(var(--td-gold))] text-xl font-extrabold text-[rgb(var(--td-on-accent))]">
                  {s.n}
                </span>

                <div className="td-sticker flex-1 rounded-[26px] bg-[rgb(var(--td-surface))] p-6 sm:p-7">
                  <div className="flex items-start gap-5">
                    <div className="min-w-0 flex-1">
                      <h3 className="td-display text-2xl font-extrabold">{s.title}</h3>
                      <p className="mt-2.5 text-[16px] leading-relaxed text-[rgb(var(--td-ink-2))]">
                        {s.body}
                      </p>
                      <span className="td-sticker mt-4 inline-block -rotate-1 rounded-full bg-[rgb(var(--td-gold-soft))] px-3 py-1.5 text-[13px] font-extrabold text-[rgb(var(--td-gold-deep))]">
                        {s.chip}
                      </span>
                    </div>
                    <img
                      src={s.art}
                      alt=""
                      aria-hidden
                      width={220}
                      height={220}
                      className="hidden h-auto w-[86px] shrink-0 sm:block"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3 · Terazi (karşılık takibi) ───────────────────────────── */

function Terazi() {
  const reduce = useReducedMotion();
  return (
    <section className="relative border-y-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-surface-2))] px-5 py-24 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Reveal className="text-center">
          <Tag tone="pink">Karşılık takibi</Tag>
          <Title>Terazi dengede mi, sıra sende mi?</Title>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[rgb(var(--td-ink-2))]">
            Her kişi için sana taktığının toplamı ile senin ona taktığının toplamı yan yana durur.
            Borçluysan defter söyler, ödeştiysen rahat bırakır.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="grid items-center gap-5 sm:grid-cols-[1fr_auto_1fr]">
            <div className="td-sticker rotate-[-1.5deg] rounded-[24px] bg-[rgb(var(--td-surface))] p-6 text-center">
              <p className="text-[13px] font-bold uppercase tracking-wide text-[rgb(var(--td-ink-2))]">
                Sana taktılar
              </p>
              <p className="td-display mt-2 text-4xl font-extrabold tabular-nums text-[rgb(var(--td-gold-deep))]">
                48,32 gr
              </p>
              <p className="mt-1 text-sm font-semibold tabular-nums text-[rgb(var(--td-ink-2))]">
                ₺271.558
              </p>
            </div>

            <motion.img
              src="/takidefteri/terazi.png"
              alt=""
              aria-hidden
              width={420}
              height={420}
              className="mx-auto h-auto w-[110px]"
              animate={reduce ? undefined : { rotate: [-4, 4, -4] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="td-sticker rotate-[1.5deg] rounded-[24px] bg-[rgb(var(--td-surface))] p-6 text-center">
              <p className="text-[13px] font-bold uppercase tracking-wide text-[rgb(var(--td-ink-2))]">
                Sen taktın
              </p>
              <p className="td-display mt-2 text-4xl font-extrabold tabular-nums text-[rgb(var(--td-ink))]">
                11,7 gr
              </p>
              <p className="mt-1 text-sm font-semibold tabular-nums text-[rgb(var(--td-ink-2))]">
                ₺65.754
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="td-sticker -rotate-2 rounded-full bg-[rgb(var(--td-pink))] px-4 py-2 text-sm font-extrabold text-[rgb(var(--td-on-accent))]">
              36,62 gr açık var
            </span>
            <span className="td-sticker rotate-1 rounded-full bg-[rgb(var(--td-mint))] px-4 py-2 text-sm font-extrabold text-[rgb(var(--td-on-accent))]">
              Ödendi
            </span>
            <span className="text-sm font-semibold text-[rgb(var(--td-ink-2))]">
              Sıradaki düğünlerde denge kurulur — defter takipte.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 4 · Sikke şeridi ───────────────────────────────────────── */

const COINS = [
  { art: "/takidefteri/coin-ceyrek.png", name: "Çeyrek", gr: "1,65 gr" },
  { art: "/takidefteri/coin-yarim.png", name: "Yarım", gr: "3,27 gr" },
  { art: "/takidefteri/coin-tam.png", name: "Tam", gr: "6,55 gr" },
  { art: "/takidefteri/coin-ata.png", name: "Ata", gr: "7,03 gr" },
  { art: "/takidefteri/coin-gram.png", name: "Gram", gr: "14–24 ayar" },
  { art: "/takidefteri/coin-bilezik.png", name: "Bilezik", gr: "serbest gr" },
  { art: "/takidefteri/cash-tl.png", name: "Nakit", gr: "₺ · $ · €" },
  { art: "/takidefteri/ziynet.png", name: "Özel", gr: "adını sen koy" },
];

function SikkeSeridi() {
  return (
    <section className="overflow-hidden px-0 py-24">
      <div className="px-5 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Tag>Tek birim</Tag>
          <Title>Çeyrekten ataya, hepsi gram altın</Title>
          <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[rgb(var(--td-ink-2))]">
            Ne takılırsa takılsın aynı terazide buluşur. Değer, takının kaydedildiği günün kuruyla
            saklanır — <span className="font-bold text-[rgb(var(--td-ink))]">kur oynar, defter
            oynamaz.</span>
          </p>
        </Reveal>
      </div>

      <div
        className="relative mt-14 flex w-full overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]"
        aria-hidden
      >
        <div className="animate-marquee flex shrink-0 gap-5 pr-5 motion-reduce:animate-none">
          {[...COINS, ...COINS].map((c, i) => (
            <div
              key={`${c.name}-${i}`}
              className="td-sticker flex w-[148px] shrink-0 flex-col items-center gap-2 rounded-[22px] bg-[rgb(var(--td-surface))] p-5 text-center"
              style={{ transform: `rotate(${i % 2 ? 1.5 : -1.5}deg)` }}
            >
              <img src={c.art} alt="" width={220} height={220} className="h-16 w-16" />
              <span className="td-display text-[15px] font-extrabold">{c.name}</span>
              <span className="text-[13px] font-semibold tabular-nums text-[rgb(var(--td-ink-2))]">
                {c.gr}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* the same list, readable by screen readers and with motion off */}
      <p className="sr-only">
        Desteklenen takı türleri: çeyrek 1,65 gram, yarım 3,27 gram, tam 6,55 gram, ata 7,03 gram,
        gram altın 14–24 ayar, bilezik, nakit (TL, dolar, euro) ve özel takı.
      </p>
    </section>
  );
}

/* ── 5 · Özellik panosu ─────────────────────────────────────── */

const BOARD = [
  {
    icon: HiSparkles,
    tint: "bg-[rgb(var(--td-gold))]",
    title: "Akıllı davetiye tarama",
    body: "Davetiye fotoğrafından tür, isimler, tarih ve salon çıkar. Okuma da yorumlama da cihazının içinde olur, fotoğraf hiçbir yere gitmez.",
    rot: -1.5,
    span: "sm:col-span-2",
    premium: true,
  },
  {
    icon: FiUsers,
    tint: "bg-[rgb(var(--td-pink))]",
    title: "Kişi ve karşılık",
    body: "Kim taktı, kim takacak — defter unutmaz.",
    rot: 1.5,
    span: "",
  },
  {
    icon: FiBell,
    tint: "bg-[rgb(var(--td-red))]",
    title: "Hatırlatıcılar",
    body: "Etkinlikten bir gün önce dürter: çeyrek hazır mı?",
    rot: -1,
    span: "",
    premium: true,
  },
  {
    icon: FiCalendar,
    tint: "bg-[rgb(var(--td-tile-blue))]",
    title: "Takvim ve istatistik",
    body: "Düğün kendini iOS Takvim’e yazar. Tür dağılımı, ayar dökümü ve yıllara göre toplamlar grafiklerde açar.",
    rot: 1,
    span: "sm:col-span-2",
  },
  {
    icon: FiCloud,
    tint: "bg-[rgb(var(--td-mint))]",
    title: "iCloud ve CSV",
    body: "Cihazların arasında eşitlensin, istediğinde dışarı çıksın.",
    rot: -1.5,
    span: "",
    premium: true,
  },
  {
    icon: FiLock,
    tint: "bg-[rgb(var(--td-tile-slate))]",
    title: "Defterin sende kalır",
    body: "Hesap yok, sunucu yok, izleme yok. Face ID ile kilitle, kimse açamasın.",
    rot: 1.5,
    span: "sm:col-span-2",
  },
];

function Pano() {
  return (
    <section
      id="ozellikler"
      className="scroll-mt-24 border-y-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-surface-2))] px-5 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <Tag tone="pink">Özellikler</Tag>
          <Title>Aklında tutma, defterine yaz</Title>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid gap-5 sm:grid-cols-3"
        >
          {BOARD.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, rotate: 0 }}
                style={{ rotate: `${f.rot}deg` }}
                className={f.span}
              >
                <div className="td-sticker h-full rounded-[24px] bg-[rgb(var(--td-surface))] p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-[16px] border-2 border-[rgb(var(--td-outline))] text-xl text-[rgb(var(--td-on-accent))] ${f.tint}`}
                    >
                      <Icon aria-hidden />
                    </span>
                    {f.premium && (
                      <span className="td-sticker -rotate-2 rounded-full bg-[rgb(var(--td-gold-soft))] px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-[rgb(var(--td-gold-deep))]">
                        Premium
                      </span>
                    )}
                  </div>
                  <h3 className="td-display mt-5 text-xl font-extrabold">{f.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))]">
                    {f.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal className="mt-10">
          <div className="td-sticker mx-auto flex max-w-3xl flex-col items-center gap-5 rounded-[24px] bg-[rgb(var(--td-gold-soft))] p-6 text-center sm:flex-row sm:text-left">
            <img
              src="/takidefteri/premium.png"
              alt=""
              aria-hidden
              width={420}
              height={420}
              className="h-auto w-[86px] shrink-0"
            />
            <p className="text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))]">
              <span className="td-display block text-lg font-extrabold text-[rgb(var(--td-ink))]">
                Defterin tam güçle çalışsın
              </span>
              Akıllı tarama, hatırlatıcılar, CSV ve iCloud Premium abonelikle açılır. Geri kalan her
              şey — sınırsız kişi, etkinlik, takı, istatistik ve karşılık takibi — ücretsiz.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── 6 · Kapanış ────────────────────────────────────────────── */

function Kapanis() {
  return (
    <section className="px-5 py-24 sm:px-6">
      <Reveal className="mx-auto max-w-5xl">
        <div className="td-sticker-lg relative overflow-hidden rounded-[34px] bg-[rgb(var(--td-gold))] px-6 py-16 text-center sm:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.16]"
            style={{
              backgroundImage: "radial-gradient(rgb(var(--td-outline)) 1.5px, transparent 1.5px)",
              backgroundSize: "22px 22px",
            }}
          />
          <img
            src="/takidefteri/hero-defter.png"
            alt=""
            aria-hidden
            width={900}
            height={675}
            className="relative mx-auto h-auto w-[210px] sm:w-[280px]"
          />
          <h2 className="td-display relative mt-6 text-balance text-[34px] font-extrabold leading-tight text-[rgb(var(--td-on-accent))] sm:text-5xl">
            Bu sezon hiçbir düğünü kaçırma
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-lg font-bold text-[rgb(var(--td-on-accent))]/80">
            Takı Defteri&rsquo;ni indir, ilk takıyı davetiye elindeyken kaydet.
          </p>
          <div className="relative mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <TdStoreButton
              size="lg"
              className="!bg-[rgb(var(--td-surface))] !text-[rgb(var(--td-ink))]"
            />
            <Link
              href="/takidefteri/destek"
              className="group inline-flex items-center gap-1.5 text-base font-extrabold text-[rgb(var(--td-on-accent))]/80 transition-colors hover:text-[rgb(var(--td-on-accent))]"
            >
              Destek &amp; SSS
              <FiArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
