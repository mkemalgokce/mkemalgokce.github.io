import Link from "next/link";
import { FaApple } from "react-icons/fa";
import {
  TakiDefteriNav,
  TakiDefteriFooter,
  TAKIDEFTERI_APP_STORE_URL,
  TAKIDEFTERI_EMAIL,
} from "./_components/SiteChrome";

const FEATURES = [
  {
    title: "Etkinlik defteri",
    body: "Düğün, nişan, söz, kına, sünnet — her etkinlik kendi listesiyle ayrı durur.",
  },
  {
    title: "Kişi kartları",
    body: "Kimin ne taktığı, kime ne borçlu olduğunuz tek ekranda toplanır.",
  },
  {
    title: "Güncel değerleme",
    body: "Gram altın ve döviz kurları otomatik güncellenir; toplam karşılığınız her an önünüzde.",
  },
  {
    title: "Davetiye tarama",
    body: "Davetiyeyi kameraya gösterin; tarih, mekan ve isimler kendiliğinden dolsun.",
  },
  {
    title: "CSV yedekleme",
    body: "Tüm defterinizi tek dosyada dışa aktarın, istediğinizde geri yükleyin.",
  },
  {
    title: "iCloud eşitleme",
    body: "Kayıtlarınız kendi iCloud alanınızda, tüm cihazlarınızda güncel kalır.",
  },
];

const SCREENS = [
  { src: "/takidefteri/ozet.png", alt: "Takı Defteri özet ekranı: toplam gram ve yaklaşan etkinlik" },
  { src: "/takidefteri/etkinlikler.png", alt: "Takı Defteri etkinlik listesi: düğün ve nişan kayıtları" },
  { src: "/takidefteri/kisiler.png", alt: "Takı Defteri kişi listesi: kimin ne taktığı ve karşılık durumu" },
];

const FAQ = [
  {
    q: "Takı Defteri ücretsiz mi?",
    a: "Uygulama ücretsiz indirilir. Etkinlik ve kişi kaydı, güncel değerleme ve istatistikler ücretsiz kullanılır. Davetiye tarama, hatırlatıcılar, CSV yedekleme ve iCloud eşitleme Premium abonelikle açılır.",
  },
  {
    q: "Verilerim nerede saklanıyor?",
    a: "Cihazınızda ve dilerseniz kendi iCloud hesabınızda. Hiçbir kayıt bizim sunucumuza gönderilmez; hesap açmanız da gerekmez.",
  },
  {
    q: "Altın değerleri nasıl hesaplanıyor?",
    a: "Çeyrek, yarım, tam ve bilezik gibi takılar gram karşılığına çevrilir, güncel gram altın ve döviz kurlarıyla değerlenir.",
  },
  {
    q: "İnternet olmadan çalışır mı?",
    a: "Evet. Kayıt tutma çevrimdışı çalışır; kurlar internete bağlandığınızda güncellenir.",
  },
];

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Takı Defteri",
      operatingSystem: "iOS",
      applicationCategory: "LifestyleApplication",
      inLanguage: "tr-TR",
      url: "https://mkemalgokce.github.io/takidefteri",
      image: "https://mkemalgokce.github.io/takidefteri-icon.png",
      description:
        "Düğün, nişan ve kına takılarını kişi kişi kaydeden, güncel altın kuruyla değerleyen iOS uygulaması.",
      offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
      author: { "@type": "Person", name: "Mustafa Kemal Gökçe" },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
};

export default function TakiDefteriPage() {
  return (
    <div className="min-h-screen bg-[#fdfaf3] text-stone-900 antialiased">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger -- static structured data for search engines
        dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
      />
      <TakiDefteriNav />

      <main>
        <section className="px-6 pt-32 pb-16 sm:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-600">
              iPhone ve iPad
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              Düğün takıları <span className="text-amber-600">tek defterde</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
              Düğün, nişan, söz ve kına takılarını kişi kişi kaydedin. Çeyrek, bilezik, ziynet ve
              nakit hediyeler güncel altın kuruyla değerlensin; iade zamanı geldiğinde kimin ne
              taktığını saniyeler içinde bulun.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={TAKIDEFTERI_APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-6 py-3 font-semibold text-white transition-colors hover:bg-stone-700"
              >
                <FaApple className="h-5 w-5" aria-hidden />
                App Store’dan indir
              </a>
              <Link
                href="/takidefteri/destek"
                className="rounded-full border border-stone-300 px-6 py-3 font-semibold text-stone-700 transition-colors hover:border-stone-900 hover:text-stone-900"
              >
                Destek
              </Link>
            </div>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
            {SCREENS.map((shot) => (
              // eslint-disable-next-line @next/next/no-img-element -- static export
              <img
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="w-full rounded-3xl shadow-lg ring-1 ring-black/5"
              />
            ))}
          </div>
        </section>

        <section className="border-t border-stone-200 px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl font-semibold tracking-tight">Neler yapabilirsiniz?</h2>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <div key={feature.title}>
                  <h3 className="text-lg font-semibold text-stone-900">{feature.title}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{feature.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-stone-200 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight">Sık sorulanlar</h2>
            <div className="mt-10 space-y-8">
              {FAQ.map((item) => (
                <div key={item.q}>
                  <h3 className="text-lg font-semibold text-stone-900">{item.q}</h3>
                  <p className="mt-2 leading-relaxed text-stone-600">{item.a}</p>
                </div>
              ))}
            </div>
            <p className="mt-12 leading-relaxed text-stone-600">
              Başka bir sorunuz mu var?{" "}
              <a
                href={`mailto:${TAKIDEFTERI_EMAIL}`}
                className="font-medium text-amber-700 underline-offset-2 hover:underline"
              >
                {TAKIDEFTERI_EMAIL}
              </a>{" "}
              adresine yazın.
            </p>
          </div>
        </section>
      </main>

      <TakiDefteriFooter />
    </div>
  );
}
