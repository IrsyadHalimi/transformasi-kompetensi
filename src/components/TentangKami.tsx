import React, { useState } from 'react';
import { CORE_VALUES, LEADERS, DOCUMENTED_ACTIVITIES } from '../data';
import { 
  Award, 
  BookOpen, 
  ShieldCheck, 
  Users, 
  MapPin, 
  Calendar, 
  Camera, 
  Quote 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TentangKami() {
  const [activeLeader, setActiveLeader] = useState<number>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');

  // Map icon strings to actual lucide elements
  const iconMap: Record<string, any> = {
    ShieldCheck: ShieldCheck,
    Award: Award,
    TrendingUp: BookOpen,
    Users: Users
  };

  const styles = {
    secBg: 'bg-gradient-to-b from-white via-slate-50 to-white text-slate-800',
    title: 'text-3xl font-sans font-extrabold text-[#1E3A8A]',
    subtitle: 'text-xl font-sans font-extrabold text-slate-900 border-b pb-4',
    tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest flex items-center gap-1.5 justify-center md:justify-start',
    card: 'bg-white border border-slate-100 shadow-sm hover:shadow-md rounded-2xl p-6 transition-all',
    valIcon: 'text-[#1E3A8A] bg-blue-50',
    badgeActive: 'bg-[#1E3A8A] text-white shadow',
    badgeInactive: 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
  };

  // Unik list category from DOCUMENTED_ACTIVITIES
  const categories = ['Semua', 'Skema Pengelasan', 'Skema Sumber Daya Mandu', 'Skema Teknik Informasi', 'Skema Pertambangan'];
  // Normalize string comparisons
  const getCleanLabel = (cat: string) => {
    if (cat === 'Skema Sumber Daya Mandu') return 'Skema SDM';
    return cat;
  };

  const filteredActivities = selectedCategory === 'Semua' 
    ? DOCUMENTED_ACTIVITIES 
    : DOCUMENTED_ACTIVITIES.filter(act => {
        if (selectedCategory === 'Skema Sumber Daya Mandu') {
          return act.category === 'Skema Sumber Daya Manusia';
        }
        return act.category === selectedCategory;
      });

  return (
    <section className={`py-24 ${styles.secBg}`} id="tentang">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>Mengenal Profil Lembaga</p>
          <h2 className={`${styles.title} tracking-tight`}>
            Tentang Kami & Dokumentasi Kegiatan
          </h2>
          <div className="h-1.5 w-24 mx-auto rounded-full mt-4 bg-[#1E3A8A]" />
          <p className="mt-4 text-base text-slate-600">
            Kami adalah penyedia jasa pengembangan SDM dan manajemen sistem yang berfokus pada integrasi standar global ke dalam kompetensi nasional. Kami hadir untuk menciptakan ekosistem kerja profesional bagi individu, korporasi, dan institusi pendidikan berbasis di Banjarmasin untuk Indonesia.
          </p>
        </div>

        {/* Corporate Profile Column Core Layout (Visi Misi) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-6 space-y-6 lg:order-first">
            <h3 className="text-2xl font-sans font-extrabold text-[#1E3A8A]">
              Visi & Misi PT Transformasi Kompetensi Indonesia
            </h3>
            
            <div className="space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#DC2626]">Pernyataan Umum:</span>
              <p className="text-sm font-semibold text-slate-500 italic">
                &ldquo;Membangun ekosistem pengembangan sumber daya manusia berbasis kompetensi yang mampu menjawab kebutuhan industri modern.&rdquo;
              </p>
            </div>

            <p className="text-sm p-5 border-l-4 rounded-r-2xl font-medium leading-relaxed border-[#1E3A8A] bg-blue-50/60 text-[#1E3A8A]">
              <strong className="block mb-1 text-slate-900">Visi Kami:</strong>
              &ldquo;Membangun ekosistem pengembangan individu yang progresif demi mencetak sumber daya manusia berdedikasi dan berdaya saing global.&rdquo;
            </p>

            <h3 className="text-xl font-sans font-bold pt-4 text-[#1E1E3C]">
              Misi Strategis (Poin Kompetensi):
            </h3>
            <ul className="space-y-4">
              {[
                { num: '01', bold: 'Standardisasi Sistem (SKKNI):', text: 'Mengembangkan sistem manajemen pembelajaran yang adaptif dan terstandarisasi berbasis SKKNI guna memastikan proses pengembangan kompetensi berjalan terstruktur dan sesuai kebutuhan industri.' },
                { num: '02', bold: 'Optimalisasi Kompetensi:', text: 'Memberikan pendampingan dan bimbingan yang terarah untuk meningkatkan kompetensi teknis individu agar mampu berkembang secara profesional dan relevan dengan perkembangan teknologi.' },
                { num: '03', bold: 'Penguatan Integritas:', text: 'Mendorong terbentuknya budaya kerja yang menjunjung tinggi integritas, profesionalisme, serta sikap saling mendukung dalam lingkungan kerja yang produktif.' },
                { num: '04', bold: 'Ekosistem Kolaboratif:', text: 'Membangun ekosistem kolaborasi antara individu, institusi, dan industri untuk mendorong inovasi, pertukaran pengetahuan, serta budaya pembelajaran berkelanjutan.' },
                { num: '05', bold: 'Standar Pasar Global:', text: 'Memastikan setiap SDM yang dibina memiliki kompetensi yang sesuai dengan standar global sehingga mampu bersaing di pasar kerja internasional.' }
              ].map((misi, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <span className="text-xs font-bold px-2 py-1 rounded shrink-0 leading-none bg-blue-50 text-[#1E3A8A] font-sans border border-blue-100">
                    {misi.num}
                  </span>
                  <div className="text-xs sm:text-sm">
                    <span className="font-bold text-slate-900 mr-1.5 block sm:inline">{misi.bold}</span>
                    <span className="text-slate-600">{misi.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Visi Misi Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden aspect-[4/3] sm:aspect-auto sm:h-[480px] shadow-2xl rounded-3xl group border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=700&auto=format&fit=crop"
                alt="Corporate Team Meeting PT TKI"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent flex flex-col justify-end p-8 text-white">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#DC2626]">VALUE-DRIVEN EXCELLENCE</span>
                <h4 className="text-lg sm:text-xl font-bold mt-1 font-sans">
                  Kemitraan Menuju Standardisasi Global
                </h4>
                <p className="text-xs text-slate-300 mt-2 line-clamp-3">
                  Kami menyusun bimbingan kurikulum kustom berbasis SKKNI yang adaptif terhadap dinamika revolusi industri kedaerahan Kalimantan Selatan serta nasional secara keseluruhan.
                </p>
              </div>
            </div>
            
            {/* Overlay Slogan Badge */}
            <div className="absolute -bottom-6 right-2 sm:right-6 p-5 shadow-xl border rounded-2xl max-w-xs transition-all bg-white border-blue-50 text-[#1E3A8A]">
              <span className="text-[9px] font-bold block mb-1 uppercase tracking-wider text-[#DC2626]">
                Semboyan Kami
              </span>
              <p className="font-bold text-xs leading-relaxed text-slate-800">
                &ldquo;Mencetak SDM Unggul dan Berdaya Saing Global di Seluruh Sektor Fundamental Industri.&rdquo;
              </p>
            </div>
          </div>

         </div>

        {/* INTERACTIVE COMPONENT: Dokumentasi Kegiatan Section */}
        <div className="p-8 sm:p-10 rounded-3xl border mb-24 transition-all bg-white border-slate-100 shadow-xl" id="dokumentasi-kegiatan">
          
          <div className="text-center max-w-2xl mx-auto mb-10 border-b pb-4 border-slate-100">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-600 border border-red-100 text-[10px] font-sans font-bold uppercase mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Dokumentasi Portofolio Lapangan</span>
            </div>
            <h3 className="text-2xl font-sans font-extrabold text-[#0F172A]">
              Bimbingan & Pengujian Lapangan Terkini
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Galeri rekapitulasi pelaksanaan verifikasi, Tempat Uji Kompetensi (TUK), dan in-house corporate training kami se-Indonesia.
            </p>
          </div>

          {/* Interactive Category Tabs Filtering list */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 sm:px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer ${
                    isActive ? styles.badgeActive : styles.badgeInactive
                  }`}
                  id={`cat-tab-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                >
                  {getCleanLabel(cat)}
                </button>
              );
            })}
          </div>

          {/* Animated Documentation Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="documentation-cards-grid">
            <AnimatePresence mode="popLayout">
              {filteredActivities.map((act) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={act.id}
                  className="rounded-2xl overflow-hidden border flex flex-col sm:flex-row h-full transition-shadow duration-300 bg-slate-50/50 hover:bg-white hover:shadow-lg border-slate-100"
                  id={`activity-item-${act.id}`}
                >
                  {/* Activity Image on Left/Top */}
                  <div className="sm:w-2/5 aspect-[4/3] sm:aspect-auto relative shrink-0">
                    <img
                      src={act.image}
                      alt={act.title}
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 text-[9px] font-black uppercase px-2 py-0.5 rounded-md bg-[#DC2626] text-white">
                      {act.category.replace('Skema ', '')}
                    </span>
                  </div>

                  {/* Activity Description on Right */}
                  <div className="p-5 flex flex-col justify-between flex-1 leading-normal">
                    <div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 mb-2">
                        <Calendar className="w-3 h-3 text-red-500" />
                        <span>{act.date}</span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-sans line-clamp-2 mb-2 leading-snug">
                        {act.title}
                      </h4>
                      <p className="text-[11px] leading-relaxed line-clamp-3 text-slate-500">
                        {act.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-1 mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-semibold uppercase">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="line-clamp-1">{act.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredActivities.length === 0 && (
              <div className="col-span-2 text-center py-10">
                <p className="text-xs font-mono text-slate-400">Tidak ada bukti kegiatan terpublikasi untuk kategori ini.</p>
              </div>
            )}
          </div>

        </div>

        {/* Nilai-Nilai Inti (Core Values) Grid */}
        <div className="mt-20">
          <h3 className="text-xl font-sans font-black mb-8 text-center uppercase tracking-wider text-[#1E3A8A]">
            4 Pilar Tata Nilai Utama (Core Values)
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_VALUES.map((val, idx) => {
              const IconComp = iconMap[val.icon] || Award;
              return (
                <div key={idx} className={styles.card} id={`core-value-card-${idx}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 hover:rotate-6 ${styles.valIcon}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-xs sm:text-sm font-sans font-extrabold mb-2 text-slate-900">
                    {val.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CEO Greeting Section / Executive Board Message */}
        <div className="mt-24 rounded-3xl border overflow-hidden shadow-xl bg-gradient-to-r from-blue-50/50 via-white to-blue-50/50 text-slate-800 border-slate-100" id="ceo-greeting-block">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center">
            
            {/* CEO Face */}
            <div className="md:col-span-4 h-full min-h-[350px] relative self-stretch">
              <img
                src={LEADERS[activeLeader].image}
                alt={LEADERS[activeLeader].name}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 contrast-125"
              />
              <div className="absolute inset-0 bg-[#1E3A8A]/5 mix-blend-color hover:opacity-0 transition-opacity" />
              
              {/* Mini Selector to toggle CEO / COO */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/95 backdrop-blur-sm rounded-xl p-2 flex justify-between items-center text-white border border-white/10 z-10">
                <span className="text-[9px] uppercase font-bold tracking-widest text-[#E0F2FE]">Pimpinan Direksi</span>
                <div className="flex gap-1.5">
                  {LEADERS.map((l, lIdx) => (
                    <button
                      key={lIdx}
                      onClick={() => setActiveLeader(lIdx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                        activeLeader === lIdx 
                          ? 'bg-[#DC2626] scale-125' 
                          : 'bg-slate-500 hover:bg-slate-300'
                      }`}
                      title={l.name}
                      id={`leader-btn-${lIdx}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* CEO Quote Body */}
            <div className="md:col-span-8 p-8 md:p-12 space-y-6">
              <div className="p-2 rounded-full w-10 h-10 flex items-center justify-center bg-red-50 text-[#DC2626]">
                <Quote className="w-5 h-5 animate-pulse" />
              </div>

              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] block font-bold text-[#DC2626]">
                  KATA SAMBUTAN DIREKSI
                </span>
                
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600 italic font-medium">
                  &ldquo;{LEADERS[activeLeader].quote}&rdquo;
                </p>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="text-base font-sans font-extrabold text-[#1E3A8A]">
                    {LEADERS[activeLeader].name}
                  </h4>
                  <p className="text-[11px] text-[#DC2626] font-semibold tracking-wide uppercase">
                    {LEADERS[activeLeader].role}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
