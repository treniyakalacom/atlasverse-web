// app/page.tsx - Atlasverse Master Hub MVP
'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, Award, ShoppingBag, Utensils, Sparkles, 
  Tv, Lock, ArrowUpRight, CheckCircle2, Terminal
} from 'lucide-react';

export default function AtlasverseMasterHub() {
  const [activeTab, setActiveTab] = useState('all');
  const [selected, setSelected] = useState(null);

  // 21 Amiral Projenin Katmanlı Matrisi
  const flagships = [
    // Top Hierarchy
    { id: 1, name: "Atlasverse.co.uk", tag: "UK Parent · Üst Hiyerarşi", cat: "core", desc: "Şemsiye Ekosistem & IP Sahibi (AtlasVerse Digitalia Group Ltd)", domain: "atlasverse.co.uk", hero: true, status: "live", details: "Bu hub'ın kendisi — AtlasVerse Digitalia Group Ltd (UK, SIC 64209), tüm ekosistemin üst hiyerarşi/IP sahibi kurumu." },

    // SaaS & Talent
    { id: 2, name: "TALENTUBE.TV", tag: "Broadcast Hub", cat: "saas", desc: "Talentology.app, TheFilmİstan ve TheFilmİslam için Yayın Merkezi", domain: "talentube.tv", status: "planned", details: "Talentology.app, TheFilmİstan.com ve TheFilmİslam.com için ortak yayın merkezi. Albatros Engine paylaşımlı final jüri motoru olarak tasarlandı; minimum katılım yaşı 16. Fiyatlandırma sabit (PP modeli değil, Gürkan belirliyor). Yayın öncesi UK Ofcom/ODPS hukuki danışmanlığı zorunlu olarak işaretli." },
    { id: 3, name: "talentology.app", tag: "SaaS", cat: "saas", desc: "Global Yetenek Doğrulama Platformu", domain: "talentology.app", status: "planned", details: "Next.js 14 üzerinde kurulu yetenek yarışma platformu; yayını TALENTUBE.TV üzerinden yapılıyor." },
    { id: 4, name: "letsplayless.app", tag: "Child Tech", cat: "saas", desc: "Pediatrik Ekran Süresi Düzenleyici", domain: "letsplayless.app", status: "planned", details: "Çocuklar için ekran süresi yönetim uygulaması." },
    { id: 5, name: "Shakefor / Allasalla.app", tag: "Fintech", cat: "saas", desc: "Oyunlaştırılmış Birikim & Sadakat", domain: "allasalla.app", status: "planned", details: "Oyunlaştırılmış birikim ve sadakat platformu." },

    // Commerce & Deals
    { id: 6, name: "imecetreni.com", tag: "Collective", cat: "commerce", desc: "İmece Usulü Kademeli İndirim Motoru", domain: "imecetreni.com", status: "planned", details: "TreniYakala'nın kardeş platformu; imece usulü grup alımı, kademeli indirim motoru olarak bağımsız kuruldu." },
    { id: 7, name: "treniyakala.com", tag: "Commerce", cat: "commerce", desc: "Zaman Tetiklemeli Fırsat Pazaryeri", domain: "treniyakala.com", status: "planned", details: "Tren metaforuyla zaman tetiklemeli flaş indirim / grup alımı pazaryeri." },
    { id: 8, name: "7RENKMONT", tag: "Fashion", cat: "commerce", desc: "Renk Doğrulamalı Dış Giyim", domain: "7renkmont.com", status: "planned", details: "Renk doğrulamalı lüks dış giyim. 7×7 ton matrisi, 'Verified True Color' kamera tarama simülasyonu. Çince versiyonu üretildi; çok bölümlü admin paneli var." },

    // Fresh & Kitchen
    { id: 9, name: "yemekemek.com / Mototaxi.vip", tag: "Foodtech", cat: "food", desc: "Hijyen Onaylı Ev Yemeği Pazarı", domain: "yemekemek.com", status: "planned", details: "Ev yemeği üreticilerini hijyen onaylı şekilde tüketiciyle buluşturan pazaryeri; Mototaxi.vip ile teslimat entegrasyonu planlanıyor." },
    { id: 10, name: "bahceden / figistan", tag: "AgriTech", cat: "food", desc: "Doğrudan Üreticiden Doğal Ürünler", domain: "bahceden.com", status: "planned", details: "Çiftçiden doğrudan tüketiciye doğal ürün pazaryeri." },
    { id: 11, name: "balgibibal / balbaari", tag: "Organic", cat: "food", desc: "Arıcılık & Doğal Bal Pazaryeri", domain: "balgibibal.com", status: "planned", details: "Arıcılık ve doğal bal pazaryeri; platform MVP'sinde Balpara sadakat konsepti üzerinde çalışılmıştı." },

    // Health & Style
    { id: 12, name: "Queen Bee Esthetic", tag: "HealthTech", cat: "health", desc: "Estetik & Güzellik Platformu", domain: "queenbeeest.com", status: "planned", details: "'World Aesthetic Center' olarak yeniden konumlandırılıyor." },

    // Media & Concepts
    { id: 13, name: "Gümüş Tepsi", tag: "Show Format", cat: "media", desc: "İnteraktif Medya & Sahne Şovu", domain: "gumustepsi.com", status: "planned", details: "İnteraktif medya / sahne şovu formatı." },
    { id: 14, name: "Kaynanator", tag: "Gamification", cat: "media", desc: "Aile Dinamikleri Oyunlaştırması", domain: "kaynanator.com", status: "planned", details: "Aile içi dinamiklerin oyunlaştırılması konsepti." },
    { id: 15, name: "Mottoottom / OttOOtto.com", tag: "Design Asset", cat: "media", desc: "Palindromik Simetrik Marka", domain: "ottootto.com", status: "planned", details: "Palindromik/simetrik marka tasarım varlığı." },
    { id: 16, name: "bellawalley.com", tag: "Concept IP", cat: "media", desc: "Dijital Konsept Varlığı", domain: "bellawalley.com", status: "planned", details: "Dijital konsept IP varlığı." },
    { id: 17, name: "Notedreams.com", tag: "Creative Tech", cat: "media", desc: "Fikir ve Rüya Haritalama", domain: "notedreams.com", status: "planned", details: "Kolektif rüya ağı; AI destekli Jungian yorumlama motoru." },

    // Core & Infrastructure
    { id: 18, name: "Digitalia Group", tag: "Corporate", cat: "core", desc: "Kurumsal Operasyon & Finans", domain: "digitaliagroup.uk", status: "live", details: "Ekosistemin kurumsal operasyon ve finans katmanı; Atlasverse'in altında yer alır." },
    { id: 19, name: "DoryDat", tag: "Data Hub", cat: "core", desc: "Çekirdek Veritabanı & SSO", domain: "dorydat.com", status: "planned", details: "Ekosistem genelinde merkezi trafik takibi ve SSO altyapısı." },
    { id: 20, name: "Dorytimer / Dorydot", tag: "Security", cat: "core", desc: "SHA-256 Zaman Damgalama Proof", domain: "dorytimer.com", status: "live", details: "SHA-256 tabanlı kriptografik zaman damgalama sistemi; doğrulama kaydı işleniyor." },
    { id: 21, name: "Dorydomain", tag: "Asset Vault", cat: "core", desc: "200+ Dijital Varlık Yönetimi", domain: "dorydomain.com", status: "planned", details: "200+ dijital varlığın (domain portföyü) yönetildiği kasa." }
  ];

  const filtered = activeTab === 'all' ? flagships : flagships.filter(f => f.cat === activeTab);
  const heroCard = filtered.find(f => f.hero);
  const restCards = filtered.filter(f => !f.hero);

  const renderCard = (item) => (
    <div 
      key={item.id} 
      onClick={() => setSelected(item)}
      className={`group bg-slate-900/40 backdrop-blur-sm border border-slate-800/80 hover:border-blue-500/50 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 flex flex-col justify-between cursor-pointer ${item.hero ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-950/60 via-slate-900/60 to-slate-900/40 border-blue-500/40' : ''}`}
    >
      <div>
        <div className="flex justify-between items-start mb-3">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
            #{String(item.id).padStart(2, '0')}
          </span>
          <div className="flex items-center gap-1.5">
            {item.status === 'live' ? (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">● Live</span>
            ) : (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">○ Planned</span>
            )}
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
              {item.tag}
            </span>
          </div>
        </div>
        
        <h3 className={`font-bold text-white group-hover:text-blue-400 transition flex items-center gap-1.5 ${item.hero ? 'text-2xl' : 'text-lg'}`}>
          {item.name}
        </h3>
        
        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="mt-5 pt-3 border-t border-slate-800/60 flex justify-between items-center text-[11px] font-mono text-slate-500">
        <span>{item.domain}</span>
        <span className="flex items-center gap-1 text-blue-400 opacity-0 group-hover:opacity-100 transition">
          Detay <ArrowUpRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border-b border-slate-800 px-6 py-2 text-xs font-mono text-slate-300 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>SYSTEM ONLINE: ATLASVERSE.CO.UK</span>
        </div>
        <div className="flex gap-4">
          <span>UK REGISTRATION: SIC 64209</span>
          <span className="text-blue-400 font-semibold">21 CORE FLAGSHIPS SEALED</span>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-slate-800/60 gap-4">
        <div className="flex items-center gap-3">
          <img src="/atlasverse-logo-silver.png" alt="Atlasverse" className="h-12 w-12 object-contain" />
          <div>
            <h1 className="text-3xl font-black tracking-widest text-white uppercase flex items-center gap-3">
              ATLASVERSE <span className="text-xs bg-blue-600/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded font-mono">.CO.UK</span>
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Official Master Portal & Gateway | AtlasVerse Digitalia Group Ltd (United Kingdom)
            </p>
          </div>
        </div>
        
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 px-4 py-2 rounded-xl text-xs font-semibold transition">
            <Lock className="w-3.5 h-3.5 text-blue-400" /> DoryDat SSO
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-semibold transition shadow-lg shadow-blue-500/20">
            <ShieldCheck className="w-3.5 h-3.5" /> Dorytimer Proof
          </button>
        </div>
      </header>

      {/* Hero Emblem */}
      <div className="max-w-7xl mx-auto px-6 pt-10 flex justify-center">
        <img src="/atlasverse-logo-gold.png" alt="Atlasverse" className="w-40 md:w-52 object-contain drop-shadow-[0_0_25px_rgba(234,179,8,0.15)]" />
      </div>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-slate-800 pb-4">
          {[
            { id: 'all', label: 'Tüm 21 Proje' },
            { id: 'core', label: 'Çekirdek & Altyapı (5)' },
            { id: 'saas', label: 'SaaS & Yetenek (4)' },
            { id: 'commerce', label: 'E-Ticaret & İmece (3)' },
            { id: 'food', label: 'Gıda & Pazaryeri (3)' },
            { id: 'health', label: 'Sağlık & Estetik (1)' },
            { id: 'media', label: 'Medya & IP Markalar (5)' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeTab === tab.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dynamic Project Grid — hero (Atlasverse.co.uk hierarchy card) always rendered first, full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {heroCard && renderCard(heroCard)}
          {restCards.map(renderCard)}
        </div>

        {/* Cryptographic Verification Footer Section */}
        <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-600/10 border border-blue-500/20 rounded-xl">
              <Terminal className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Dorytimer Proof Matrix — Doğrulama Sürüyor</h4>
              <p className="text-xs text-slate-400">All 21 flagship assets are SHA-256 timestamped under Atlasverse Ecosystem (UK). Kayıt doğrulama sürecinde.</p>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-slate-950 border border-slate-800 px-4 py-2 rounded-xl">
            SHA-256: 5aa368...c7c6e (doğrulanıyor)
          </div>
        </div>

        {/* Three-Tier Ecosystem Footer Hierarchy */}
        <footer className="mt-10 pt-8 border-t border-slate-800/60 flex flex-col items-center gap-2 text-center">
          <img src="/atlasverse-emblem-footer-gray.png" alt="Atlasverse" className="h-10 w-10 object-contain opacity-70 mb-1" />
          <div className="flex items-center gap-2 text-sm">
            <span className="font-black tracking-widest text-white uppercase">Atlasverse</span>
            <span className="text-slate-600">→</span>
            <span className="font-semibold text-slate-300">DigitaliaGroup</span>
          </div>
          <div className="text-xs text-slate-500">
            Powered by <span className="font-bold text-blue-400">Dorydat Technologies</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">Wise</span>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">iyzico</span>
            <span className="text-[10px] font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800 text-slate-400">Troy</span>
          </div>
          <div className="text-xs text-slate-500 text-center leading-relaxed">
            <div><span className="text-slate-400">AtlasVerse Digitalia Group Ltd</span> · Şirket No: <span className="font-mono">[ŞİRKET TESCİL NUMARASI]</span></div>
            <div>Kayıtlı Ofis: <span className="font-mono">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span></div>
            <div>İletişim: <a href="mailto:[İŞ E-POSTASI]" className="font-mono text-blue-400 hover:underline">[İŞ E-POSTASI]</a></div>
          </div>
          <div className="flex items-center gap-4 mt-2 text-[11px]">
            <a href="/about" className="text-slate-400 hover:text-blue-400 transition">Hakkımızda</a>
            <a href="/privacy" className="text-slate-400 hover:text-blue-400 transition">Gizlilik Politikası</a>
            <a href="/terms" className="text-slate-400 hover:text-blue-400 transition">Kullanım Şartları</a>
          </div>
          <p className="text-[11px] text-slate-600 mt-2">
            © 2026 Atlasverse. Tüm hakları saklıdır.
          </p>
        </footer>
      </main>

      {/* Detail Modal */}
      {selected && (
        <div 
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl p-6 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold">
                  {selected.tag}
                </span>
                <h2 className="text-xl font-bold text-white mt-2">{selected.name}</h2>
                <span className="text-xs font-mono text-slate-500">{selected.domain}</span>
              </div>
              {selected.status === 'live' ? (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold">● Live</span>
              ) : (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-semibold">○ Planned</span>
              )}
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">{selected.details}</p>

            {selected.status !== 'live' && (
              <div className="mt-4 bg-amber-500/5 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-300/90">
                Bu proje için henüz bağlı bir MVP prototipi yok. Kod dosyasını yüklersen bu panel gerçek sayfaya bağlanır.
              </div>
            )}

            <button 
              onClick={() => setSelected(null)}
              className="mt-5 w-full bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold py-2.5 rounded-xl transition"
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
