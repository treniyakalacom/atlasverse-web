// app/about/page.tsx
export default function About() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-black text-white mb-6">Hakkımızda</h1>
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>
            <strong className="text-white">AtlasVerse Digitalia Group Ltd</strong>, Birleşik Krallık'ta
            tescilli bir şemsiye şirket olarak, e-ticaret, SaaS, medya ve fintech alanlarında
            faaliyet gösteren bir dijital platform ekosistemini yönetmektedir.
          </p>
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 font-mono text-xs space-y-1">
            <div>Şirket Adı: AtlasVerse Digitalia Group Ltd</div>
            <div>Şirket No: [ŞİRKET TESCİL NUMARASI]</div>
            <div>SIC Kodu: 64209 — Activities of holding companies</div>
            <div>Kayıtlı Ofis: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</div>
            <div>İletişim: [İŞ E-POSTASI]</div>
          </div>
          <p>
            Ekosistem altında faaliyet gösteren/geliştirilme aşamasındaki platformlar için
            ana sayfadaki proje kartlarına bakabilirsiniz.
          </p>
        </div>
        <a href="/" className="inline-block mt-8 text-xs text-blue-400 hover:underline">← Ana sayfaya dön</a>
      </div>
    </div>
  );
}
