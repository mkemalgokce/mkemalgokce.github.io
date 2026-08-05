import type { Metadata } from "next";
import { LegalShell, List, Note, Section, Strong } from "../_components/Legal";
import { TD_EMAIL } from "../_components/SiteChrome";

const DESC =
  "Takı Defteri kullanım koşulları: lisans, abonelik ve iptal, veri sorumluluğu, altın kuru bilgisinin niteliği ve sorumluluk sınırları.";

export const metadata: Metadata = {
  title: "Kullanım Koşulları — Takı Defteri",
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri/kosullar" },
  openGraph: {
    url: "https://mkemalgokce.github.io/takidefteri/kosullar",
    title: "Kullanım Koşulları — Takı Defteri",
    description: DESC,
    images: [{ url: "/takidefteri/icon.png", width: 512, height: 512, alt: "Takı Defteri" }],
  },
};

export default function KosullarPage() {
  return (
    <LegalShell
      active="kosullar"
      kicker="Yasal"
      title="Kullanım Koşulları"
      updated="Ağustos 2026"
      intro={
        <>
          Takı Defteri&rsquo;ni indirerek ve kullanarak aşağıdaki koşulları kabul etmiş olursun.
          Uygulama, <Strong>Mustafa Kemal GÖKÇE</Strong> tarafından geliştirilen bağımsız bir iOS
          uygulamasıdır.
        </>
      }
    >
      <Section title="1. Lisans">
        <p>
          Uygulamayı kişisel, ticari olmayan amaçlarla kullanman için sana devredilemez bir lisans
          verilir. Uygulamayı tersine mühendisliğe tabi tutamaz, kaynak koduna dönüştüremez, yeniden
          dağıtamaz veya kiralayamazsın.
        </p>
        <p>
          Uygulamaya girdiğin veriler <Strong>tamamen sana aittir</Strong>. Geliştirici bu veriler
          üzerinde hiçbir hak talep etmez ve zaten bunlara erişimi yoktur.
        </p>
      </Section>

      <Section title="2. Kullanım şartları">
        <p>Uygulamayı kullanırken:</p>
        <List
          items={[
            "Yürürlükteki yasalara uygun davranmayı,",
            "Başkalarına ait kişisel bilgileri (isim, not gibi) deftere işlerken onların makul beklentilerini gözetmeyi,",
            "Uygulamayı yasa dışı veya zararlı bir amaçla kullanmamayı kabul edersin.",
          ]}
        />
        <p>
          Defterine başka kişilerin isimlerini kaydettiğinde bu kayıtların sorumluluğu sana aittir;
          veriler yalnızca senin cihazında tutulur.
        </p>
      </Section>

      <Section title="3. Ücretsiz sürüm ve Premium abonelik">
        <p>
          Uygulamanın çekirdek özellikleri ücretsizdir: sınırsız kişi, etkinlik ve takı kaydı,
          istatistikler, karşılık takibi, takvim entegrasyonu ve Face ID kilidi.
        </p>
        <p>
          <Strong>Premium</Strong>, otomatik yenilenen bir abonelik olarak aylık ve yıllık planlarla
          sunulur ve şu dört özelliği açar: akıllı davetiye tarama, etkinlik hatırlatıcıları, CSV
          dışa/içe aktarma, iCloud eşitleme.
        </p>
        <List
          items={[
            "Ödeme, satın almayı onayladığında App Store hesabına yansıtılır.",
            "Abonelik, mevcut dönemin bitiminden en az 24 saat önce iptal edilmediği sürece kendiliğinden yenilenir.",
            "Yenileme ücreti dönemin bitiminden önceki 24 saat içinde tahsil edilir.",
            "Abonelikleri satın aldıktan sonra iPhone Ayarlar › adın › Abonelikler bölümünden yönetebilir ve iptal edebilirsin.",
            "İptal ettiğinde Premium, ödediğin dönemin sonuna kadar açık kalır.",
          ]}
        />
        <p>
          Fiyatlandırma App Store hesabının ülkesine göre değişir ve güncel fiyat her zaman uygulama
          içindeki Premium ekranında görünür. İade talepleri Apple tarafından, App Store iade
          politikası kapsamında değerlendirilir.
        </p>
      </Section>

      <Section title="4. Altın ve döviz kuru bilgisi">
        <Note>
          Uygulamadaki fiyatlar <Strong>bilgilendirme amaçlıdır</Strong>; yatırım tavsiyesi, alım
          satım fiyatı ya da resmî değerleme değildir.
        </Note>
        <p>
          Kur bilgisi üçüncü taraf bir kaynaktan alınır, gecikmeli olabilir ve doğruluğu garanti
          edilmez. Uygulama, kur alınamadığında son bilinen değeri kullanır ve bunu ekranda belirtir.
          Kurlara dayanarak alacağın her kararın sorumluluğu sana aittir.
        </p>
        <p>
          Sikke gram karşılıkları (çeyrek 1,65 gr, tam 6,55 gr gibi) piyasada yaygın kabul gören
          referans değerlerdir; elindeki sikkenin gerçek ağırlığı ve ayarı farklılık gösterebilir.
        </p>
      </Section>

      <Section title="5. Verilerin ve yedekleme sorumluluğu">
        <p>
          Verilerin cihazında saklanır. Cihazının kaybolması, bozulması, sıfırlanması ya da
          uygulamanın silinmesi durumunda yerel veriler kaybolur.
        </p>
        <p>
          Düzenli olarak <Strong>CSV yedeği almanı</Strong> ya da iCloud eşitlemeyi açmanı öneririm.
          Geliştirici, veri kaybından sorumlu tutulamaz ve kaybolan verileri geri getirme imkânına
          sahip değildir — çünkü verilerin hiçbir kopyası geliştiricide bulunmaz.
        </p>
      </Section>

      <Section title="6. Cihaz üstü yapay zekâ ve tarama sonuçları">
        <p>
          Davetiye tarama, cihaz üstünde çalışan metin tanıma ve dil modelleriyle yapılır. Sonuçlar
          hatalı ya da eksik olabilir; uygulama bu nedenle her alanı kaydetmeden önce sana onaylatır.
          Taramadan gelen bilgilerin doğruluğunu kontrol etmek kullanıcının sorumluluğundadır.
        </p>
      </Section>

      <Section title="7. Üçüncü taraf hizmetler">
        <p>
          Uygulama, Apple tarafından işletilen App Store (satın alma), CloudKit (iCloud eşitleme),
          EventKit (takvim) ve bildirim altyapılarını kullanır. Bu hizmetlerin kullanımı
          Apple&rsquo;ın kendi koşullarına tabidir. Kur bilgisi ise üçüncü taraf bir veri kaynağından
          alınır.
        </p>
      </Section>

      <Section title="8. Sorumluluğun sınırlandırılması">
        <p>
          Uygulama <Strong>&ldquo;olduğu gibi&rdquo;</Strong> sunulur. Yürürlükteki yasaların izin
          verdiği azami ölçüde, kesintisiz veya hatasız çalışacağına dair açık ya da zımni bir garanti
          verilmez.
        </p>
        <p>
          Geliştirici; veri kaybı, kâr kaybı, hatalı hesaplama ya da uygulamanın kullanımından
          doğabilecek dolaylı zararlardan sorumlu tutulamaz.
        </p>
      </Section>

      <Section title="9. Değişiklikler">
        <p>
          Uygulama ve bu koşullar zaman içinde güncellenebilir; özellikler değişebilir veya
          kaldırılabilir. Önemli değişiklikler bu sayfada yayımlanır ve yukarıdaki tarih yenilenir.
          Güncellemeden sonra uygulamayı kullanmaya devam etmen yeni koşulları kabul ettiğin anlamına
          gelir.
        </p>
      </Section>

      <Section title="10. Uygulanacak hukuk">
        <p>
          Bu koşullar Türkiye Cumhuriyeti mevzuatına tabidir. Tüketici mevzuatından doğan haklarınız
          saklıdır.
        </p>
      </Section>

      <Section title="11. İletişim">
        <p>
          Koşullarla ilgili sorun varsa{" "}
          <a
            href={`mailto:${TD_EMAIL}?subject=${encodeURIComponent("Takı Defteri — kullanım koşulları")}`}
            className="font-bold text-[rgb(var(--td-gold-deep))] underline decoration-2 underline-offset-2"
          >
            {TD_EMAIL}
          </a>{" "}
          adresine yazabilirsin.
        </p>
      </Section>
    </LegalShell>
  );
}
