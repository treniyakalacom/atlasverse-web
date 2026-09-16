// app/terms/page.tsx
export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-6">Kullanım Şartları</h1>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            Bu şartlar, <strong className="text-white">AtlasVerse Digitalia Group Ltd</strong>
            {' '}(Şirket No: [ŞİRKET TESCİL NUMARASI], Kayıtlı Ofis: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom)
            tarafından işletilen atlasverse.co.uk ve bağlı platformların kullanımını düzenler.
          </p>
          <h2 className="text-white font-bold mt-6">Hizmet Tanımı</h2>
          <p>[Doldurulacak: sunulan hizmetlerin kapsamı]</p>
          <h2 className="text-white font-bold mt-6">Kullanıcı Yükümlülükleri</h2>
          <p>[Doldurulacak]</p>
          <h2 className="text-white font-bold mt-6">Sorumluluk Sınırlaması</h2>
          <p>[Doldurulacak]</p>
          <h2 className="text-white font-bold mt-6">Uygulanacak Hukuk</h2>
          <p>Bu şartlar İngiltere ve Galler hukukuna tabidir.</p>
          <p className="text-xs text-slate-500 mt-6">Son güncelleme: [TARİH]</p>
        </div>
        <a href="/" className="inline-block mt-8 text-xs text-blue-400 hover:underline">← Ana sayfaya dön</a>
      </div>
    </div>
  );
}
