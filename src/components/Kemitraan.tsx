import React, { useState } from 'react';
import { ThemeConcept } from '../types';
import { SEGMENTS, PARTNERS, CONCEPTS } from '../data';
import { ShieldCheck, Compass, MapPin, Sparkles, Building, Briefcase, FileCheck, Landmark, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface KemitraanProps {
  currentConcept: ThemeConcept;
}

type RegionalTerritory = 'jawa' | 'sumatera' | 'kalimantan' | 'sulawesi';

export default function Kemitraan({ currentConcept }: KemitraanProps) {
  const [activeRegion, setActiveRegion] = useState<RegionalTerritory>('jawa');
  const conceptDetails = CONCEPTS[currentConcept];

  // Indonesian regional project mock database
  const regionalData = {
    jawa: {
      title: 'Koridor Industri & Pusat BUMN (Jawa-Bali)',
      metrics: { alumni: '12,500 Orang', clients: '85 Korporat', saturation: '92%' },
      projects: ['Sertifikasi K3 Boiler & Kelistrikan Pertamina Cilacap', 'Custom Leadership Cohorts Bank Mandiri Jakarta', 'Pelatihan Operator Manufaktur Astra Group Karawang'],
      story: 'Sebagai pusat bisnis primer, kami mengkonsolidasikan standardisasi kompetensi pegawai pusat BUMN serta uji sertifikasi operator keselamatan kerja industri manufaktur nasional terbesar.'
    },
    sumatera: {
      title: 'Hulu Energi & Sektor Perkebunan (Sumatera)',
      metrics: { alumni: '3,200 Orang', clients: '22 Agribisnis', saturation: '68%' },
      projects: ['Sertifikasi Manajemen Risiko Perkebunan PTPN III Medan', 'Pelatihan Ahli K3 Kimia & Boiler Bukit Asam', 'Asesmen Bakat Pimpinan Daerah Bank Nagari'],
      story: 'Mendukung sektor perkebunan kelapa sawit terpadu dan hulu kilang minyak nasional dengan menyalurkan lisensi standar prosedur nihil-kecelakaan (zero accident) berskala korporat.'
    },
    kalimantan: {
      title: 'Otomasi Pertambangan & Logistik (Kalimantan)',
      metrics: { alumni: '1,800 Orang', clients: '12 Emiten Tambang', saturation: '55%' },
      projects: ['Audit Keselamatan Operator Alat Berat Kaltim Prima Coal', 'Pelatihan Digital Logistics Berau Coal', 'Program Pendampingan Sertifikasi Penyelia Tambang'],
      story: 'Berfokus penuh pada mitigasi risiko keselamatan operasional alat berat (HE), prosedur lisensi K3 pertambangan mineral, dan literasi teknologi otomatisasi pergudangan industri.'
    },
    sulawesi: {
      title: 'Pengolahan Smelter & Maritim (Sulawesi - Papua)',
      metrics: { alumni: '900 Orang', clients: '8 Instansi', saturation: '40%' },
      projects: ['Asesmen Kompetensi Teknis Operator Smelter Morowali', 'Pelatihan Auditor Mutu Pelabuhan Makassar', 'Program Pendampingan Legalitas Sertifikat Tenaga Ahli Pelindo IV'],
      story: 'Mewadahi ekspansi industri pengolahan mineral nikel timur Indonesia dan pelabuhan kargo maritim guna menjamin kesesuaian keahlian tenaga ahli lokal berstandar nasional.'
    }
  };

  const currentRegion = regionalData[activeRegion];

  // Helper to map logotype icons dynamically
  const renderLogoPlaceholder = (type: string) => {
    const iconStyle = {
      chevron: <Landmark className="w-5 h-5 text-amber-500" />,
      triangle: <ShieldCheck className="w-5 h-5 text-blue-500" />,
      star: <Sparkles className="w-5 h-5 text-teal-400" />,
      shield: <Compass className="w-5 h-5 text-red-500" />,
      circle: <Building className="w-5 h-5 text-blue-500" />,
      activity: <Briefcase className="w-5 h-5 text-sky-500" />,
      compass: <Compass className="w-5 h-5 text-teal-400" />,
      grid: <FileCheck className="w-5 h-5 text-indigo-500" />
    }[type] || <ShieldCheck className="w-5 h-5 text-amber-400" />;

    return (
      <div className="w-10 h-10 bg-slate-500/10 rounded-xl flex items-center justify-center">
        {iconStyle}
      </div>
    );
  };

  const styles = {
    corporate: {
      secBg: 'bg-white text-slate-800',
      title: 'text-3xl font-display font-extrabold text-[#1E3A8A]',
      tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest flex items-center justify-center gap-1.5',
      segCard: 'bg-white border border-[#E0F2FE] p-6 rounded-2xl shadow-sm',
      partnerLogo: 'bg-white hover:bg-slate-50 border border-slate-200 p-4 rounded-xl flex flex-col justify-between h-32 transition-all shadow-sm'
    },
    tech: {
      secBg: 'bg-[#F8FAFC] text-slate-800 border-t border-slate-200',
      title: 'text-3xl font-display font-extrabold uppercase text-[#1E3A8A] tracking-widest',
      tagline: 'text-xs text-[#DC2626] font-mono tracking-[0.25em] uppercase flex items-center justify-center gap-1.5',
      segCard: 'bg-white border border-slate-250 p-6 rounded-none',
      partnerLogo: 'bg-white border border-slate-200 p-4 rounded-none h-32 hover:border-[#1E3A8A]/30 transition-all flex flex-col justify-between shadow-sm'
    },
    organic: {
      secBg: 'bg-[#F4FAF7] text-slate-900 border-t border-emerald-100/60',
      title: 'text-3xl font-sans font-extrabold text-[#059669]',
      tagline: 'text-xs text-[#059669] font-sans font-bold uppercase tracking-widest flex items-center justify-center gap-1.5',
      segCard: 'bg-white border border-emerald-100 rounded-2xl rounded-tr-none border-b-4 border-b-[#059669] p-6 shadow-md',
      partnerLogo: 'bg-white border border-slate-150 hover:border-[#059669]/60 p-4 rounded-xl h-32 transition-all flex flex-col justify-between shadow-sm'
    }
  }[currentConcept];

  return (
    <section className={`py-24 ${styles.secBg}`} id="kemitraan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>Kliping Segmentasi Pasar</p>
          <h2 className={styles.title}>Segmentasi Organisasi & Mitra Strategis</h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full mt-4 ${
            currentConcept === 'organic' ? 'bg-[#059669]' : currentConcept === 'tech' ? 'bg-red-600' : 'bg-[#0EA5E9]'
          }`} />
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Kami melayani klasifikasi mitra dari empat sektor fundamental, menjamin akreditasi keterampilan disesuaikan dengan koridor tata kelola regulasi operasional masing-masing klaster industri.
          </p>
        </div>

        {/* 4 Core Industry Segments cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20" id="segments-cards-list">
          {SEGMENTS.map((seg, idx) => (
            <div key={idx} className={styles.segCard} id={`segment-card-${idx}`}>
              <div className="flex justify-between items-start border-b border-slate-100 pb-3 mb-3">
                <h3 className="text-base font-extrabold text-[#1E3A8A]">
                  {seg.title}
                </h3>
                <span className={`text-xs font-bold font-mono px-3 py-1 rounded-full ${
                  currentConcept === 'organic' ? 'bg-emerald-50 text-[#059669]' : 'bg-emerald-50 text-emerald-805'
                }`}>
                  {seg.metric}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                {seg.desc}
              </p>
              <div className="flex gap-2 items-center text-[10px] uppercase font-bold tracking-wider text-slate-400">
                <span>Fokus Utama:</span>
                <span className={`font-extrabold ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#DC2626]'}`}>{seg.focus}</span>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE COMPONENT: Indonesian Regional Impact Map Navigator */}
        <div className={`p-8 rounded-3xl border mb-20 ${
          currentConcept === 'organic' 
            ? 'bg-white border-emerald-100 text-slate-800 shadow-md border-r-4 border-r-[#059669] p-8 rounded-3xl' 
            : currentConcept === 'tech' 
            ? 'bg-indigo-950/15 border-2 border-indigo-950 text-white' 
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-850 shadow-sm'
        }`} id="regional-map-navigator">
          
          <div className="text-center mb-8 border-b border-slate-200 pb-4">
            <span className={`text-xs uppercase tracking-widest font-bold ${
              currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#DC2626]'
            }`}>
              Navigasi Kewilayahan
            </span>
            <h3 className={`text-xl sm:text-2xl font-bold mt-1 ${
              currentConcept === 'organic' ? 'text-[#059669] font-sans' : 'text-[#1E3A8A]'
            }`}>
              Dampak Pelatihan & Sertifikasi se-Indonesia
            </h3>
            <p className="text-xs text-slate-500 mt-1 mb-2">
              Klik pada tombol-tombol region kepulauan utama untuk memeriksa jejak kedaulatan SDM serta silabus aktif di wilayah tersebut.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visual Region Selectors map panel representing Indonesia */}
            <div className={`lg:col-span-4 flex flex-col gap-2 justify-center ${currentConcept === 'organic' ? 'lg:order-last' : 'lg:order-first'}`}>
              {[
                { id: 'jawa', title: 'Jawa & Bali', description: 'Metropolitan & Finansial' },
                { id: 'sumatera', title: 'Sumatran Hub', description: 'Energi, Sawit & K3' },
                { id: 'kalimantan', title: 'Borneo Mining', description: 'He Alat Berat & Otomasi' },
                { id: 'sulawesi', title: 'Sulawesi & Eastern', description: 'Smelter Nikel & Pelabuhan' }
              ].map((reg) => {
                const isActive = activeRegion === reg.id;
                return (
                  <button
                    key={reg.id}
                    onClick={() => setActiveRegion(reg.id as RegionalTerritory)}
                    className={`text-left p-3.5 px-4 rounded-xl border-2 transition-all flex items-center justify-between cursor-pointer ${
                      isActive
                        ? currentConcept === 'organic'
                          ? 'bg-[#059669] text-white border-transparent shadow-md'
                          : currentConcept === 'tech'
                          ? 'bg-[#1E3A8A] text-white border-[#E0F2FE]'
                          : 'bg-[#1E3A8A] text-white border-[#E0F2FE] shadow'
                        : currentConcept === 'tech'
                        ? 'bg-white border border-slate-200 text-slate-700 hover:text-[#1E3A8A]'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                    id={`region-selector-${reg.id}`}
                  >
                    <div>
                      <span className="font-bold text-xs sm:text-sm block">{reg.title}</span>
                      <span className={`text-[10px] opacity-75 block ${isActive ? 'text-white' : 'text-slate-400'}`}>{reg.description}</span>
                    </div>
                    <MapPin className={`w-4 h-4 shrink-0 ${isActive ? 'text-amber-300' : 'text-slate-400'}`} />
                  </button>
                );
              })}
            </div>

            {/* Region Details Display Panel */}
            <div className={`lg:col-span-8 ${currentConcept === 'organic' ? 'lg:order-first' : 'lg:order-last'}`}>
              <div className={`p-6 rounded-2xl border h-full flex flex-col justify-between ${
                currentConcept === 'organic'
                  ? 'bg-white border-emerald-100/70 border-t-4 border-t-[#059669] shadow-md'
                  : 'bg-white border-[#E0F2FE] shadow-sm'
              }`}>
                <div>
                  <h4 className={`text-base sm:text-lg font-black shrink-0 flex items-center gap-2 mb-3 ${
                    currentConcept === 'organic' ? 'text-[#059669] font-sans' : 'text-[#1E3A8A]'
                  }`}>
                    <Building className={`w-5 h-5 shrink-0 ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'}`} />
                    <span>{currentRegion.title}</span>
                  </h4>

                  {/* regional stats metrics row */}
                  <div className="grid grid-cols-3 gap-3 mb-6 bg-slate-500/5 rounded-xl p-3 text-center border border-slate-100">
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">Telah Tersertifikasi</span>
                      <span className={`text-sm sm:text-base font-bold font-mono text-slate-800 ${currentConcept === 'organic' ? 'text-[#059669]' : ''}`}>
                        {currentRegion.metrics.alumni}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 uppercase font-bold block">Instansi Klien</span>
                      <span className={`text-sm sm:text-base font-bold font-mono text-slate-800 ${currentConcept === 'organic' ? 'text-[#059669]' : ''}`}>
                        {currentRegion.metrics.clients}
                      </span>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-405 uppercase font-bold block">Kepadatan Sektor</span>
                      <span className="text-sm sm:text-base font-bold text-[#DC2626] font-mono">
                        {currentRegion.metrics.saturation}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-658 leading-relaxed font-semibold">
                    {currentRegion.story}
                  </p>

                  {/* Active regional project lists */}
                  <div className="mt-5 border-t border-slate-200 pt-4">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-2">Proyek Kemitraan Aktif di Sektor Ini:</span>
                    <div className="flex flex-col gap-1.5">
                      {currentRegion.projects.map((proj, pIdx) => (
                        <div key={pIdx} className="flex gap-2 items-center">
                          <CheckSquare className="w-3.5 h-3.5 text-[#DC2626] shrink-0" />
                          <span className="text-xs font-semibold text-slate-700">{proj}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400 italic mt-6 border-t border-slate-700/10 pt-3">
                  *Telah diverifikasi sesuai basis koordinasi NIB pusat perizinan wilayah Indonesia PT Transformasi Kompetensi Nusantara.
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Strategic Brands / Partner trust logo boards */}
        <div className="mt-20">
          <h3 className={`text-xs uppercase tracking-widest font-black text-center mb-8 ${
            currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'
          }`}>
            Organisasi & Instansi Yang Mempercayakan Kompetensi Pegawainya
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4" id="partners-logos-list">
            {PARTNERS.map((p, idx) => (
              <div key={idx} className={styles.partnerLogo} id={`partner-logo-${idx}`}>
                {renderLogoPlaceholder(p.logoType)}
                <div className="pt-2">
                  <span className={`text-xs block font-bold truncate ${
                    currentConcept === 'organic' ? 'text-slate-900 border-none' : 'text-slate-800'
                  }`}>
                    {p.name}
                  </span>
                  <span className="text-[10px] text-slate-400 leading-none block mt-0.5 font-mono">
                    {p.industry}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
