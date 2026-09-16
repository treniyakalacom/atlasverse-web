// app/privacy/page.tsx
export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-6">Gizlilik Politikası</h1>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Bu politika, <strong className="text-white">AtlasVerse Digitalia Group Ltd</strong>
            {' '}(Şirket No: [ŞİRKET TESCİL NUMARASI], Kayıtlı Ofis: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom)
            tarafından işletilen atlasverse.co.uk ve bağlı platformlar için geçerlidir.
          </p>
          <h2 className="text-white font-bold mt-6">Topladığımız Veriler</h2>
          <p>[Doldurulacak: hangi kişisel verilerin toplandığı — ad, e-posta, ödeme bilgisi vb.]</p>
          <h2 className="text-white font-bold mt-6">Verilerin Kullanımı</h2>
          <p>[Doldurulacak: veri işleme amaçları, yasal dayanak — UK GDPR]</p>
          <h2 className="text-white font-bold mt-6">Veri Saklama ve Güvenlik</h2>
          <p>[Doldurulacak: saklama süresi, güvenlik önlemleri]</p>
          <h2 className="text-white font-bold mt-6">İletişim</h2>
          <p>Sorularınız için: [İŞ E-POSTASI]</p>
          <p className="text-xs text-slate-500 mt-6">Son güncelleme: [TARİH]</p>
        </div>
        <a href="/" className="inline-block mt-8 text-xs text-blue-400 hover:underline">← Ana sayfaya dön</a>
      </div>
    </div>
  );
}
