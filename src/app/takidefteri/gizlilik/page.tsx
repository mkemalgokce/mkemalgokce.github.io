import type { Metadata } from "next";
import {
  TakiDefteriNav,
  TakiDefteriFooter,
  Section,
  List,
  TAKIDEFTERI_EMAIL,
} from "../_components/SiteChrome";

const DESC =
  "Takı Defteri verilerinizi nasıl işler? Hesap yok, sunucu yok, reklam yok: kayıtlarınız cihazınızda ve kendi iCloud alanınızda kalır.";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Takı Defteri",
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri/gizlilik" },
  openGraph: {
    url: "https://mkemalgokce.github.io/takidefteri/gizlilik",
    title: "Gizlilik Politikası — Takı Defteri",
    description: DESC,
  },
};

export default function GizlilikPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased">
      <TakiDefteriNav active="gizlilik" />

      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Yasal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Gizlilik Politikası
          </h1>
          <p className="mt-4 text-stone-400">Son güncelleme: 5 Ağustos 2026</p>

          <div className="mt-12 space-y-10 leading-relaxed text-stone-600">
            <Section title="Özet">
              <p>
                Takı Defteri gizlilik önceliğiyle tasarlandı. Kaydettiğiniz takılar, kişiler ve
                etkinlikler size aittir. Bu politika, uygulamayı kullanırken verilerinizin nasıl
                işlendiğini açıklar.
              </p>
            </Section>

            <Section title="Veri toplama">
              <p className="mb-4">
                <strong className="text-stone-900">Takı Defteri kişisel veri toplamaz.</strong>{" "}
                Uygulama tamamen cihazınızda çalışır. Hesap açmanız gerekmez; kimlik, e-posta veya
                telefon bilgisi istenmez.
              </p>
              <p>
                Kullanım davranışınızı izleyen analiz araçları, reklam ağları veya üçüncü taraf
                takip kodları uygulamada bulunmaz.
              </p>
            </Section>

            <Section title="Verilerin saklanması">
              <p className="mb-4">
                Bütün kayıtlarınız iOS’un güvenli yerel depolamasında tutulur:
              </p>
              <List
                items={[
                  "Etkinlik bilgileri (tür, tarih, mekan)",
                  "Kişi kayıtları ve yakınlık notları",
                  "Takı ve hediye kayıtları, tutar ve gram bilgileri",
                  "Uygulama tercihleri ve ayarlar",
                ]}
              />
            </Section>

            <Section title="iCloud eşitleme">
              <p>
                iCloud eşitlemeyi açarsanız verileriniz kendi kişisel iCloud hesabınız üzerinden
                cihazlarınız arasında eşitlenir. Bu veriler Apple tarafından şifrelenerek saklanır
                ve Apple’ın gizlilik ilkelerine tabidir. Takı Defteri geliştiricisinin bu verilere
                erişimi yoktur.
              </p>
            </Section>

            <Section title="Kamera ve davetiye tarama">
              <p>
                Davetiye tarama özelliğini kullanırsanız kamera erişimi istenir. Fotoğraf cihazınızda
                işlenir; görüntü hiçbir sunucuya yüklenmez ve saklanmaz.
              </p>
            </Section>

            <Section title="Kur bilgileri">
              <p>
                Altın ve döviz kurlarını güncellemek için genel bir kur servisine bağlanılır. Bu
                istekte size ait hiçbir bilgi gönderilmez; yalnızca güncel kur listesi indirilir.
              </p>
            </Section>

            <Section title="Abonelikler">
              <p>
                Premium abonelik satın alımları App Store üzerinden Apple tarafından işlenir. Ödeme
                bilgileriniz Apple’da kalır; geliştiriciye kart veya fatura bilgisi iletilmez.
              </p>
            </Section>

            <Section title="Verilerinizi dışa aktarma ve silme">
              <p>
                Defterinizi istediğiniz zaman CSV olarak dışa aktarabilirsiniz. Uygulamayı
                silmeniz cihazdaki verileri kaldırır; iCloud kopyası için Ayarlar bölümündeki tüm
                verileri sil seçeneğini kullanabilirsiniz.
              </p>
            </Section>

            <Section title="Çocukların gizliliği">
              <p>
                Uygulama çocuklara yönelik değildir ve çocuklardan bilerek veri toplamaz.
              </p>
            </Section>

            <Section title="Politikadaki değişiklikler">
              <p>
                Bu politika zaman zaman güncellenebilir. Değişiklikler bu sayfada, üstteki güncelleme
                tarihiyle birlikte yayımlanır.
              </p>
            </Section>

            <Section title="İletişim">
              <p>
                Gizlilik politikasıyla ilgili sorularınız için{" "}
                <a
                  href={`mailto:${TAKIDEFTERI_EMAIL}`}
                  className="font-medium text-amber-700 underline-offset-2 hover:underline"
                >
                  {TAKIDEFTERI_EMAIL}
                </a>{" "}
                adresine yazabilirsiniz.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <TakiDefteriFooter />
    </div>
  );
}
