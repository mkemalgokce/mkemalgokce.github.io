import type { Metadata } from "next";
import { LegalShell, List, Note, Section, Strong } from "../_components/Legal";
import { TD_EMAIL } from "../_components/SiteChrome";

const DESC =
  "Takı Defteri gizlilik politikası: defterin cihazında kalır. Hesap yok, sunucu yok, izleme yok, analitik yok.";

export const metadata: Metadata = {
  title: "Gizlilik Politikası — Takı Defteri",
  description: DESC,
  alternates: { canonical: "https://mkemalgokce.github.io/takidefteri/gizlilik" },
  openGraph: {
    url: "https://mkemalgokce.github.io/takidefteri/gizlilik",
    title: "Gizlilik Politikası — Takı Defteri",
    description: DESC,
    images: [{ url: "/takidefteri/icon.png", width: 512, height: 512, alt: "Takı Defteri" }],
  },
};

export default function GizlilikPage() {
  return (
    <LegalShell
      active="gizlilik"
      kicker="Yasal"
      title="Gizlilik Politikası"
      updated="Ağustos 2026"
      intro={
        <>
          <Strong>Kısa hâli:</Strong> Takı Defteri&rsquo;nin sunucusu yok. Hesap açmıyorsun, giriş
          yapmıyorsun. Defterine yazdığın her şey iPhone&rsquo;unda kalır. Uygulama tek bir adrese
          bağlanır — o da güncel altın ve döviz kurunu okumak için ve o isteğe senin verilerinden
          hiçbir şey eklenmez.
        </>
      }
    >
      <Section title="1. Hangi verileri topluyoruz?">
        <p>
          <Strong>Hiçbirini.</Strong> Takı Defteri kişisel veri toplamaz, sunucusuna göndermez,
          üçüncü taraflarla paylaşmaz. Geliştiricinin defterine erişimi yoktur ve teknik olarak da
          mümkün değildir.
        </p>
        <p>Uygulamayı kullanırken oluşturduğun kayıtlar yalnızca cihazında saklanır:</p>
        <List
          items={[
            <>
              <Strong>Kişiler:</Strong> ad soyad ve isteğe bağlı not.
            </>,
            <>
              <Strong>Etkinlikler:</Strong> tür (düğün, nişan, kına, sünnet, söz), tarih, kutlananlar
              ve isteğe bağlı mekân bilgisi (salon adı, şehir, ilçe, adres, koordinat).
            </>,
            <>
              <Strong>Takılar:</Strong> yön (alınan/verilen), kim taktı, hangi etkinlikte, içerik
              (nakit tutarı ve para birimi; sikke türü ve adedi; gram/bilezik ağırlığı ve ayarı; özel
              takı adı), adet, tarih ve isteğe bağlı not.
            </>,
            <>
              <Strong>Kur anlık görüntüsü:</Strong> her takı kaydedildiği anki gram altın, USD ve EUR
              kuru ile bu kurun tarihi — böylece geçmiş değerler sonradan değişmez.
            </>,
            <>
              <Strong>Tercihler:</Strong> Face ID kilidi, varsayılan bilezik ayarı, ikincil para
              birimi, bildirim tercihleri ve hatırlatma saati, iCloud eşitleme tercihi, tanıtımın
              görülüp görülmediği, önbelleğe alınmış son kur ve premium durumu.
            </>,
          ]}
        />
      </Section>

      <Section title="2. Uygulamanın istediği izinler">
        <p>Her izin isteğe bağlıdır ve yalnızca ilgili özelliği kullandığında sorulur.</p>
        <List
          items={[
            <>
              <Strong>Kamera</Strong> — davetiyeyi taramak için. Çekilen fotoğraf yalnızca bellekte
              işlenir; diske yazılmaz, deftere kaydedilmez, hiçbir yere gönderilmez.
            </>,
            <>
              <Strong>Fotoğraflar</Strong> — davetiyeyi galeriden seçmek istersen. Sistemin fotoğraf
              seçicisi kullanılır; uygulama galerine erişmez, yalnızca senin seçtiğin görseli alır.
            </>,
            <>
              <Strong>Takvim</Strong> — etkinliği iOS Takvim&rsquo;e yazmak ve takvimindeki
              etkinlikleri deftere aktarmak için. İçe aktarırken yalnızca başlık, başlangıç tarihi ve
              konum alanı okunur.
            </>,
            <>
              <Strong>Bildirimler</Strong> — etkinlik hatırlatıcıları için. İzin, ilk kez
              zamanlanacak bir hatırlatıcı olduğunda istenir.
            </>,
            <>
              <Strong>Face ID / Touch ID</Strong> — defteri kilitlemek istersen.
            </>,
          ]}
        />
        <Note>
          Konum izni, rehber izni ve reklam takibi (ATT) <Strong>istenmez</Strong>. Uygulama konumunu
          hiçbir zaman okumaz; mekân koordinatı yalnızca içe aktardığın CSV dosyasında varsa
          doldurulur.
        </Note>
      </Section>

      <Section title="3. Davetiye tarama tamamen cihazında çalışır">
        <p>
          Davetiye fotoğrafını taradığında metin tanıma (OCR), uygulamanın içinde gelen CoreML
          modelleriyle yapılır — model indirilmez, fotoğraf yüklenmez. Cihazın destekliyorsa metnin
          yorumlanması Apple&rsquo;ın <Strong>cihaz üstü</Strong> yapay zekâ modeliyle sürer; sunucuya
          bir çağrı yapılmaz. Model kullanılamıyorsa uygulama kendi yerel kural tabanlı çözümleyicisine
          döner.
        </p>
        <p>
          Çıkarılan tarih, mekân ve isimler sadece etkinlik formunu önceden doldurur. Onaylamadan
          hiçbir şey deftere işlenmez.
        </p>
      </Section>

      <Section title="4. İnternete çıkan tek istek">
        <p>
          Uygulamanın kendi adına yaptığı <Strong>tek</Strong> ağ isteği güncel kur bilgisidir:
        </p>
        <List
          items={[
            <>
              <Strong>Adres:</Strong>{" "}
              <code className="rounded-md bg-[rgb(var(--td-surface-2))] px-1.5 py-0.5 font-mono text-[13px] text-[rgb(var(--td-ink))]">
                finans.truncgil.com
              </code>{" "}
              üzerinden günlük kur dosyası okunur.
            </>,
            <>
              <Strong>Gönderilen:</Strong> hiçbir şey. İstekte kimlik, cihaz numarası, çerez, başlık
              ya da defterinden herhangi bir bilgi yoktur.
            </>,
            <>
              <Strong>Alınan:</Strong> gram altın, USD ve EUR satış kuru ile kurun güncellenme
              tarihi. Bu değerler cihazında önbelleğe alınır; bir saat boyunca taze sayılır, 15 günden
              eski kur hesaplamada kullanılmaz.
            </>,
          ]}
        />
        <p>
          Bunun dışındaki tüm bağlantılar Apple tarafından yürütülür: satın alma için App Store
          (StoreKit) ve iCloud eşitlemeyi açtıysan senin kendi iCloud hesabın. Uygulamanın arka ucu
          yoktur.
        </p>
      </Section>

      <Section title="5. iCloud eşitleme">
        <p>
          iCloud eşitleme <Strong>varsayılan olarak kapalıdır</Strong>. Premium abonelerin
          Ayarlar&rsquo;dan açması gerekir; açıldıktan sonra uygulama yeniden başlatıldığında devreye
          girer.
        </p>
        <p>
          Açtığında defterin, Apple Kimliğine ait{" "}
          <Strong>özel (private) iCloud veritabanına</Strong> yazılır ve cihazların arasında
          eşitlenir. Bu alan Apple&rsquo;ın gizlilik koşullarına tabidir; geliştiricinin bu veriye
          erişimi yoktur. Uygulamada paylaşım ya da ortak defter özelliği bulunmaz — verin başka
          kimseyle paylaşılmaz.
        </p>
        <p>
          iCloud eşitleme kapalıyken veriler yalnızca cihazının yerel veritabanında tutulur ve cihazdan
          hiç çıkmaz.
        </p>
      </Section>

      <Section title="6. Bildirimler">
        <p>
          Tüm hatırlatıcılar <Strong>yerel bildirimdir</Strong>; uzaktan gönderim (push) yoktur,
          cihaz jetonu üretilmez ve iletilmez. Uygulama etkinlikten bir gün önce ve etkinlik günü
          seçtiğin saatte hatırlatır.
        </p>
        <p>
          Bildirim metni etkinliğin başlığını içerir; başlık kutlananların adından türetildiği için
          isimler kilit ekranında görünebilir. Bu bilgi cihazından çıkmaz. Hatırlatıcıları
          Ayarlar&rsquo;dan tamamen kapatabilirsin.
        </p>
      </Section>

      <Section title="7. Face ID kilidi">
        <p>
          Kilidi açtığında iOS&rsquo;un LocalAuthentication çerçevesi kullanılır ve uygulamaya
          yalnızca &ldquo;doğrulandı / doğrulanmadı&rdquo; sonucu döner. Yüz ya da parmak izi verisi
          Secure Enclave&rsquo;de kalır; uygulama bu veriye erişemez.
        </p>
        <p>
          Kilit bir arayüz korumasıdır: uygulama arka plana alındığında yeniden kilitlenir, ancak
          veritabanını ayrıca şifrelemez. Cihaz şifrelemesi iOS&rsquo;un standart korumasıyla sağlanır
          — bu yüzden cihazına bir parola tanımlaman önerilir.
        </p>
      </Section>

      <Section title="8. Dışa ve içe aktarma">
        <p>
          Defterini CSV olarak dışa aktarabilir, aynı dosyadan geri yükleyebilirsin. Dosya cihazının
          geçici klasöründe oluşturulur ve iOS paylaşım sayfasıyla <Strong>senin seçtiğin</Strong>{" "}
          yere gider.
        </p>
        <Note>
          Dışa aktarılan CSV kayıp veri bırakmayacak şekilde tasarlandığı için defterindeki tüm
          isimleri, notları, adresleri ve tutarları içerir ve <Strong>şifresizdir</Strong>. Dosyayı
          nereye gönderdiğine dikkat et.
        </Note>
      </Section>

      <Section title="9. Üçüncü taraf servisler">
        <p>
          Uygulamada <Strong>analitik, reklam, çökme raporlama veya izleme aracı yoktur</Strong>.
          Firebase, Facebook SDK, Sentry, Crashlytics, RevenueCat benzeri hiçbir üçüncü taraf paket
          uygulamanın içinde bulunmaz.
        </p>
        <p>
          Uygulamanın Apple&rsquo;a bildirdiği gizlilik bildiriminde (Privacy Manifest) izleme{" "}
          <Strong>kapalı</Strong> olarak beyan edilir ve izleme alan adı listesi boştur.
        </p>
      </Section>

      <Section title="10. Verilerini silmek">
        <List
          items={[
            <>
              Tek tek: her takıyı, etkinliği ve kişiyi kendi ekranından silebilirsin. Bir etkinliği
              sildiğinde ona bağlı takılar ve varsa takvimdeki kaydı da silinir.
            </>,
            <>
              Toptan: <Strong>Ayarlar &rsaquo; Tüm Verileri Sil</Strong> defterdeki tüm takıları,
              etkinlikleri ve kişileri kaldırır. Yalnızca defterin sahibi olan &ldquo;Ben&rdquo; kaydı
              korunur. Tercihlerin (bildirim saati, para birimi, kilit gibi) bu işlemden etkilenmez.
            </>,
            <>
              Tamamen: uygulamayı cihazından kaldırdığında yerel veritabanı ve tüm tercihler silinir.
            </>,
            <>
              iCloud&rsquo;a eşitlenmiş kopya senin hesabındadır; onu{" "}
              <Strong>Ayarlar &rsaquo; Apple Hesabı &rsaquo; iCloud &rsaquo; Depolamayı Yönet</Strong>{" "}
              üzerinden kaldırabilirsin.
            </>,
          ]}
        />
      </Section>

      <Section title="11. Çocuklar">
        <p>
          Uygulama hiç kimseden — yaşına bakılmaksızın — veri toplamaz. Girilen tüm bilgiler
          kullanıcının kendi cihazında kalır.
        </p>
      </Section>

      <Section title="12. Bu politikadaki değişiklikler">
        <p>
          Politika zaman zaman güncellenebilir. Değişiklikler bu sayfada yayımlanır ve yukarıdaki
          &ldquo;son güncelleme&rdquo; tarihi yenilenir.
        </p>
      </Section>

      <Section title="13. İletişim">
        <p>
          Gizlilikle ilgili sorun ya da sorunun varsa{" "}
          <a
            href={`mailto:${TD_EMAIL}?subject=${encodeURIComponent("Takı Defteri — gizlilik")}`}
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
