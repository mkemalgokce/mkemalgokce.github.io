import type { Metadata } from "next";
import Link from "next/link";
import { TdFooter, TdNav, TD_EMAIL } from "../_components/SiteChrome";
import { SupportForm } from "./_components/SupportForm";

const DESC =
  "Takı Defteri destek: sık sorulan sorular ve iletişim. Altın kuru, iCloud eşitleme, davetiye tarama ve abonelik.";

export const metadata: Metadata = {
  title: "Destek — Takı Defteri",
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri/destek" },
  openGraph: {
    url: "https://mkemalgokce.github.io/takidefteri/destek",
    title: "Destek — Takı Defteri",
    description: DESC,
    images: [{ url: "/takidefteri/icon.png", width: 512, height: 512, alt: "Takı Defteri" }],
  },
};

const FAQ: { q: string; a: React.ReactNode }[] = [
  {
    q: "Hesap açmam gerekiyor mu?",
    a: (
      <>
        Hayır. Kayıt yok, giriş yok. Defterin cihazında durur; internet olmadan da çalışır. İnternete
        yalnızca güncel altın ve döviz kuru için çıkılır.
      </>
    ),
  },
  {
    q: "Neden çeyrek 1,65 gram yazıyor?",
    a: (
      <>
        Uygulama her şeyi 24 ayar saf altın karşılığına çevirir; böylece çeyrek, bilezik, gram ve
        nakit tek terazide toplanır. Yarım 3,27 gr, tam 6,55 gr, ata 7,03 gr.
      </>
    ),
  },
  {
    q: "Kur değişince eski kayıtlarım da değişir mi?",
    a: (
      <>
        Hayır. Her takı kaydedildiği günün kuruyla saklanır. Takı detayında “o gün” ile “bugün”
        değerlerini yan yana görürsün.
      </>
    ),
  },
  {
    q: "Davetiye fotoğrafım bir yere gidiyor mu?",
    a: (
      <>
        Hayır. Metin tanıma da yorumlama da cihazının içinde çalışır; fotoğraf diske bile yazılmaz.
        Cihazında Apple Intelligence yoksa uygulama OCR&rsquo;a düşer ve alanları kontrol etmeni
        ister.
      </>
    ),
  },
  {
    q: "Hangi özellikler Premium?",
    a: (
      <>
        Dördü: akıllı davetiye tarama, etkinlik hatırlatıcıları, CSV yedekleme ve iCloud eşitleme.
        Geri kalan her şey ücretsiz. Abonelik iPhone Ayarlar &rsaquo; adın &rsaquo; Abonelikler
        bölümünden yönetilir.
      </>
    ),
  },
  {
    q: "iCloud eşitlemeyi açtım ama görünmüyor.",
    a: (
      <>
        İki cihazda da aynı Apple hesabı ve eşitleme anahtarı açık olmalı. Veri deposu açılışta
        kurulduğu için <strong className="font-bold text-[rgb(var(--td-ink))]">anahtarı
        açtıktan sonra uygulamayı kapatıp yeniden aç</strong>. İlk eşitleme birkaç dakika sürebilir.
      </>
    ),
  },
  {
    q: "Yeni telefona geçiyorum, defterim taşınır mı?",
    a: (
      <>
        iCloud eşitleme açıksa aynı hesapla giriş yapman yeterli. Değilse Ayarlar &rsaquo; Dışa Aktar
        ile CSV al, yeni cihazda İçe Aktar ile geri yükle.
      </>
    ),
  },
  {
    q: "Hatırlatma bildirimi gelmiyor.",
    a: (
      <>
        Bildirimler Premium özelliğidir. Uygulama içinde Ayarlar &rsaquo; Bildirimler açık olmalı ve
        iOS Ayarlar &rsaquo; Takı Defteri &rsaquo; Bildirimler izni verilmiş olmalı.
      </>
    ),
  },
];

export default function DestekPage() {
  return (
    <div className="td-theme td-dotgrid min-h-screen bg-[rgb(var(--td-bg))] text-[rgb(var(--td-ink))] antialiased">
      <TdNav active="destek" />

      <main id="main" className="px-5 pb-24 pt-[104px] sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, illustration */}
            <img
              src="/takidefteri/mascot-dusunen.png"
              alt=""
              aria-hidden
              width={440}
              height={440}
              className="mx-auto h-auto w-[130px]"
            />
            <h1 className="td-display mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
              Takıldığın yerde defter yardım eder
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-[rgb(var(--td-ink-2))]">
              Sık sorulanlar aşağıda. Cevabını bulamazsan alttaki formdan yaz.
            </p>
          </div>

          <div className="mt-14 space-y-3">
            {FAQ.map((f) => (
              <details
                key={f.q}
                className="td-sticker group overflow-hidden rounded-[18px] bg-[rgb(var(--td-surface))]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[16px] font-bold text-[rgb(var(--td-ink))] [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full border-2 border-[rgb(var(--td-outline))] bg-[rgb(var(--td-surface-2))] text-[rgb(var(--td-gold-deep))] transition-transform group-open:rotate-45"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden>
                      <path
                        d="M6 1v10M1 6h10"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="border-t-2 border-dashed border-[rgb(var(--td-line-strong))] px-5 py-4 text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))]">
                  {f.a}
                </div>
              </details>
            ))}
          </div>

          <section className="mt-16">
            <h2 className="td-display text-2xl font-extrabold">Yaz, birlikte bakalım</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-[rgb(var(--td-ink-2))]">
              Sorun bildirirken cihaz ve sürüm bilgisini eklersen çok daha hızlı bulunur.
            </p>
            <div className="mt-6">
              <SupportForm />
            </div>
          </section>

          <p className="mt-12 text-center text-[15px] text-[rgb(var(--td-ink-2))]">
            <Link
              href="/takidefteri/gizlilik"
              className="font-bold text-[rgb(var(--td-gold-deep))] underline decoration-2 underline-offset-2"
            >
              Gizlilik Politikası
            </Link>
            {" · "}
            <Link
              href="/takidefteri/kosullar"
              className="font-bold text-[rgb(var(--td-gold-deep))] underline decoration-2 underline-offset-2"
            >
              Kullanım Koşulları
            </Link>
            {" · "}
            <a
              href={`mailto:${TD_EMAIL}`}
              className="font-bold text-[rgb(var(--td-gold-deep))] underline decoration-2 underline-offset-2"
            >
              {TD_EMAIL}
            </a>
          </p>
        </div>
      </main>

      <TdFooter />
    </div>
  );
}
