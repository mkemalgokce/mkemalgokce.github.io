import type { Metadata } from "next";
import Link from "next/link";
import {
  TakiDefteriNav,
  TakiDefteriFooter,
  Section,
  TAKIDEFTERI_EMAIL,
} from "../_components/SiteChrome";

const DESC =
  "Takı Defteri kullanım koşulları: lisans, abonelik şartları, sorumluluk sınırları ve iletişim.";

export const metadata: Metadata = {
  title: "Kullanım Koşulları — Takı Defteri",
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri/kosullar" },
  openGraph: {
    url: "https://mkemalgokce.github.io/takidefteri/kosullar",
    title: "Kullanım Koşulları — Takı Defteri",
    description: DESC,
  },
};

export default function KosullarPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased">
      <TakiDefteriNav active="kosullar" />

      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Yasal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Kullanım Koşulları
          </h1>
          <p className="mt-4 text-stone-400">Son güncelleme: 5 Ağustos 2026</p>

          <div className="mt-12 space-y-10 leading-relaxed text-stone-600">
            <Section title="Kabul">
              <p>
                Takı Defteri’ni indirerek veya kullanarak bu koşulları kabul etmiş olursunuz.
                Koşulları kabul etmiyorsanız uygulamayı kullanmayınız.
              </p>
            </Section>

            <Section title="Lisans">
              <p>
                Uygulamayı kişisel, ticari olmayan amaçlarla kullanmanız için devredilemez bir lisans
                verilir. Uygulamayı kaynak koduna dönüştürmek, çoğaltmak veya yeniden dağıtmak
                yasaktır.
              </p>
            </Section>

            <Section title="Abonelikler">
              <p className="mb-4">
                Premium özellikler aylık veya yıllık otomatik yenilenen abonelikle sunulur. Ücret,
                satın alma onayında Apple Kimliğinizden tahsil edilir.
              </p>
              <p>
                Abonelik, dönem bitiminden en az 24 saat önce iptal edilmedikçe otomatik yenilenir.
                Yönetim ve iptal işlemleri cihazınızın App Store hesap ayarlarından yapılır. Ücret
                iadeleri Apple’ın iade politikasına tabidir.
              </p>
            </Section>

            <Section title="Verilerinizin sorumluluğu">
              <p>
                Kayıtlarınız cihazınızda ve kendi iCloud alanınızda tutulur. Cihaz kaybı, silinmesi
                veya iCloud ayarlarınızdan kaynaklanan veri kayıplarından geliştirici sorumlu
                değildir; düzenli olarak CSV yedeği almanız önerilir.
              </p>
            </Section>

            <Section title="Kur bilgileri">
              <p>
                Uygulamada gösterilen altın ve döviz değerleri bilgilendirme amaçlıdır, yatırım
                tavsiyesi değildir. Kur verileri üçüncü taraf bir servisten alınır; doğruluğu ve
                kesintisizliği garanti edilmez.
              </p>
            </Section>

            <Section title="Sorumluluğun sınırlanması">
              <p>
                Uygulama olduğu gibi sunulur. Yürürlükteki hukukun izin verdiği ölçüde, uygulamanın
                kullanımından doğan dolaylı zararlardan geliştirici sorumlu tutulamaz.
              </p>
            </Section>

            <Section title="Değişiklikler">
              <p>
                Bu koşullar güncellenebilir. Güncel sürüm bu sayfada, üstteki tarihle birlikte
                yayımlanır. Ayrıca{" "}
                <Link
                  href="/takidefteri/gizlilik"
                  className="font-medium text-amber-700 underline-offset-2 hover:underline"
                >
                  gizlilik politikası
                </Link>{" "}
                bu koşulların ayrılmaz parçasıdır.
              </p>
            </Section>

            <Section title="İletişim">
              <p>
                Sorularınız için{" "}
                <a
                  href={`mailto:${TAKIDEFTERI_EMAIL}`}
                  className="font-medium text-amber-700 underline-offset-2 hover:underline"
                >
                  {TAKIDEFTERI_EMAIL}
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>

      <TakiDefteriFooter />
    </div>
  );
}
