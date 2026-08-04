import type { Metadata } from "next";
import Link from "next/link";
import {
  TakiDefteriNav,
  TakiDefteriFooter,
  Section,
  List,
  TAKIDEFTERI_EMAIL,
} from "../_components/SiteChrome";

const DESC =
  "Takı Defteri destek sayfası: sık sorulan sorular, abonelik yönetimi, yedekleme ve iletişim.";

export const metadata: Metadata = {
  title: "Destek — Takı Defteri",
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri/destek" },
  openGraph: {
    url: "https://mkemalgokce.github.io/takidefteri/destek",
    title: "Destek — Takı Defteri",
    description: DESC,
  },
};

export default function DestekPage() {
  return (
    <div className="min-h-screen bg-white text-stone-900 antialiased">
      <TakiDefteriNav active="destek" />

      <main className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">Yardım</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Destek</h1>
          <p className="mt-4 text-stone-500">
            Sorunuz burada yoksa{" "}
            <a
              href={`mailto:${TAKIDEFTERI_EMAIL}`}
              className="font-medium text-amber-700 underline-offset-2 hover:underline"
            >
              {TAKIDEFTERI_EMAIL}
            </a>{" "}
            adresine yazın; genellikle bir iş günü içinde dönüş yapılır.
          </p>

          <div className="mt-12 space-y-10 leading-relaxed text-stone-600">
            <Section title="Nasıl başlarım?">
              <p className="mb-4">
                Uygulamayı açtığınızda kısa bir kurulum sizi karşılar. Ardından sırasıyla:
              </p>
              <List
                items={[
                  "Etkinlikler sekmesinden düğün, nişan veya kına etkinliğinizi oluşturun",
                  "Kişiler sekmesinden misafirlerinizi ekleyin",
                  "Takı ekle ile gelen hediyeyi kişiye ve etkinliğe bağlayın",
                  "Özet sekmesinde toplam gram ve güncel karşılığı görün",
                ]}
              />
            </Section>

            <Section title="Takı değerleri nasıl hesaplanıyor?">
              <p>
                Çeyrek, yarım, tam altın ve bilezik gibi takılar gram karşılığına çevrilir; güncel
                gram altın ve döviz kurlarıyla değerlenir. Kurlar internete bağlandığınızda
                güncellenir, kayıt tutmak için bağlantı gerekmez.
              </p>
            </Section>

            <Section title="Aboneliğimi nasıl yönetirim?">
              <p>
                Premium abonelik App Store üzerinden yönetilir. iPhone’unuzda Ayarlar → adınız →
                Abonelikler yolundan planınızı değiştirebilir veya iptal edebilirsiniz. İptal
                ettiğinizde dönem sonuna kadar Premium özellikler açık kalır.
              </p>
            </Section>

            <Section title="Satın alımlarımı geri yükleme">
              <p>
                Yeni bir cihaza geçtiyseniz uygulamadaki Ayarlar bölümünden Satın alımları geri
                yükle seçeneğini kullanın. Apple Kimliğiniz aynı olduğu sürece aboneliğiniz tanınır.
              </p>
            </Section>

            <Section title="Verilerimi yedekleyebilir miyim?">
              <p>
                Evet. Ayarlar bölümünden defterinizi CSV olarak dışa aktarabilir, aynı dosyayı daha
                sonra geri yükleyebilirsiniz. iCloud eşitleme açıksa kayıtlarınız cihazlarınız
                arasında güncel kalır.
              </p>
            </Section>

            <Section title="Verilerim güvende mi?">
              <p>
                Kayıtlarınız cihazınızda ve kendi iCloud alanınızda saklanır; hiçbir sunucumuza
                gönderilmez. Ayrıntılar için{" "}
                <Link
                  href="/takidefteri/gizlilik"
                  className="font-medium text-amber-700 underline-offset-2 hover:underline"
                >
                  gizlilik politikasına
                </Link>{" "}
                bakabilirsiniz.
              </p>
            </Section>

            <Section title="Hata bildirimi">
              <p>
                Bir sorunla karşılaştıysanız e-postanıza cihaz modelini, iOS sürümünü ve sorunun
                nasıl oluştuğunu eklerseniz çözüm çok daha hızlı olur.
              </p>
            </Section>
          </div>
        </div>
      </main>

      <TakiDefteriFooter />
    </div>
  );
}
