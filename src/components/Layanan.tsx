import React, { useState } from 'react';
import { ThemeConcept } from '../types';
import { SERVICES, CONCEPTS } from '../data';
import { FileCheck, Cpu, Briefcase, Compass, CheckCircle, Calculator, ChevronRight, MessageSquareCode } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface LayananProps {
  currentConcept: ThemeConcept;
}

export default function Layanan({ currentConcept }: LayananProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('pengelasan');
  const [participantCount, setParticipantCount] = useState<number>(20);
  const [needsCertification, setNeedsCertification] = useState<boolean>(true);
  const [customizationType, setCustomizationType] = useState<'standard' | 'tailored'>('tailored');

  const conceptDetails = CONCEPTS[currentConcept];

  // Map icon strings to actual Lucide component elements
  const iconMap: Record<string, any> = {
    FileCheck: FileCheck,
    Cpu: Cpu,
    Briefcase: Briefcase,
    Compass: Compass
  };

  const activeService = SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];

  // Training dynamic quote advisory calculation
  const calculateEstimate = () => {
    let basePerParticipant = 2500000; // Rp 2.500.000 standard base
    if (selectedServiceId === 'sdm') basePerParticipant = 3500000;
    if (selectedServiceId === 'pertambangan') basePerParticipant = 4000000;

    let certCost = needsCertification ? 1500000 : 0; // Rp 1.500.000 if BNSP
    let customMultiplier = customizationType === 'tailored' ? 1.25 : 1.0;

    const totalEstimate = (basePerParticipant + certCost) * participantCount * customMultiplier;
    
    // Group discount rate
    let discount = 0;
    if (participantCount >= 30) discount = 0.15; // 15% discount
    else if (participantCount >= 15) discount = 0.10; // 10% discount

    const discountedTotal = totalEstimate * (1 - discount);

    return {
      total: Math.round(discountedTotal),
      savings: Math.round(totalEstimate * discount),
      perPerson: Math.round(discountedTotal / participantCount),
      discountRate: Math.round(discount * 100)
    };
  };

  const results = calculateEstimate();

  const styles = {
    corporate: {
      secBg: 'bg-white text-slate-800',
      title: 'text-3xl font-display font-extrabold text-[#1E3A8A]',
      tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest flex items-center justify-center gap-1.5',
      gridCard: 'bg-[#F0F7FF]/35 border border-[#E0F2FE] p-6 rounded-2xl shadow-sm hover:shadow-md transition-all',
      valIcon: 'text-[#1E3A8A] bg-[#E0F2FE]'
    },
    tech: {
      secBg: 'bg-[#F8FAFC] text-slate-800 border-t border-slate-200',
      title: 'text-3xl font-display font-extrabold uppercase text-[#1E3A8A] tracking-widest',
      tagline: 'text-xs text-[#DC2626] font-mono tracking-[0.25em] uppercase flex items-center justify-center gap-1.5',
      gridCard: 'bg-white border border-slate-200 hover:border-[#1E3A8A]/30 p-6 rounded-none transition-all',
      valIcon: 'text-[#1E3A8A] bg-[#E0F2FE]'
    },
    organic: {
      secBg: 'bg-[#F4FAF7] text-slate-900 border-t border-emerald-100/60',
      title: 'text-3xl font-sans font-extrabold text-[#059669]',
      tagline: 'text-xs text-[#059669] font-sans font-bold uppercase tracking-widest flex items-center justify-center gap-1.5',
      gridCard: 'bg-white border border-emerald-100 rounded-2xl rounded-tr-none border-b-4 border-b-[#059669] p-6 hover:shadow-md transition-all',
      valIcon: 'text-[#059669] bg-emerald-50'
    }
  }[currentConcept];

  return (
    <section className={`py-24 ${styles.secBg}`} id="layanan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>Spesialisasi Program Kompetensi</p>
          <h2 className={styles.title}>Layanan Pelatihan & Konsultasi SDM</h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full mt-4 ${
            currentConcept === 'organic' ? 'bg-[#059669]' : currentConcept === 'tech' ? 'bg-red-600' : 'bg-[#0EA5E9]'
          }`} />
          <p className={`mt-4 text-sm sm:text-base ${currentConcept === 'tech' ? 'text-zinc-400 font-mono' : 'text-slate-600'}`}>
            Kami melayani segala lini tingkat pelatihan korporat, mulai dari pemetaan uji sertifikasi nasional berskala masif hingga fasilitasi pembentukan kamus kompetensi kepemimpinan dewan direksi terstruktur.
          </p>
        </div>

        {/* 4 Core Services Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20" id="services-grid-list">
          {SERVICES.map((srv, idx) => {
            const IconComponent = iconMap[srv.icon] || FileCheck;
            const isSelected = selectedServiceId === srv.id;
            return (
              <div
                key={srv.id}
                onClick={() => setSelectedServiceId(srv.id)}
                className={`cursor-pointer transition-all ${styles.gridCard} ${
                  isSelected
                    ? currentConcept === 'organic'
                      ? 'border-2 border-[#059669] bg-emerald-50/50'
                      : currentConcept === 'tech'
                      ? 'border-2 border-red-500 bg-indigo-950/20'
                      : 'border-2 border-teal-400 bg-teal-500/5 shadow-md'
                    : 'opacity-70 hover:opacity-100'
                }`}
                id={`service-badge-card-${srv.id}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${styles.valIcon}`}>
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className={`text-sm font-display font-bold ${
                    currentConcept === 'organic' ? 'text-slate-900 border-none font-bold' : 'text-slate-800 dark:text-white'
                  }`}>
                    {srv.title}
                  </h4>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                  currentConcept === 'organic' ? 'bg-emerald-50 text-[#059669]' : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                }`}>
                  {srv.badge}
                </span>
                <p className="text-xs text-slate-550 dark:text-slate-400 mt-2 line-clamp-3">
                  {srv.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-amber-500">
                  <span>Pilih & Analisis</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE COMPONENT: Training Custom estimate Advisor */}
        <div className={`p-8 rounded-3xl border ${
          currentConcept === 'organic' 
            ? 'bg-white border-emerald-100 p-8 rounded-3xl text-slate-800 shadow-md border-r-4 border-r-[#059669]' 
            : currentConcept === 'tech' 
            ? 'bg-indigo-950/10 border-2 border-indigo-900 text-white' 
            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-xl'
        }`} id="advisory-calculator-block">

          <div className="text-center mb-8 border-b border-emerald-100/50 pb-4">
            <Calculator className={`w-6 h-6 mx-auto mb-2 ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-teal-400'}`} />
            <h3 className={`text-xl sm:text-2xl font-sans font-extrabold ${currentConcept === 'organic' ? 'text-slate-900' : ''}`}>
              Kalkulator Kemitraan Pelatihan
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Dapatkan perkiraan anggaran, struktur diskon, dan sertifikat yang Anda terima secara instan untuk pengajuan proposal anggaran internal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input elements column */}
            <div className={`lg:col-span-7 space-y-6 ${currentConcept === 'organic' ? 'lg:order-last' : 'lg:order-first'}`}>
              
              {/* Actively selected service indicator */}
              <div className="bg-slate-400/5 rounded-xl p-4 border border-slate-700/10">
                <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">
                  Program Layanan yang Dipilih:
                </span>
                <span className={`text-base font-extrabold block ${currentConcept === 'organic' ? 'text-slate-900 font-sans' : 'text-white dark:text-white'}`}>
                  {activeService.title}
                </span>
                <p className="text-xs text-slate-550 dark:text-slate-400 mt-1">
                  {activeService.description}
                </p>
              </div>

              {/* Slider for participants */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Jumlah Peserta Pelatihan:
                  </label>
                  <span className={`text-sm font-bold ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-teal-400'}`}>
                    {participantCount} Orang
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  value={participantCount}
                  onChange={(e) => setParticipantCount(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-350 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-teal-400"
                  id="range-input-participants"
                />
                <div className="flex justify-between items-center text-[10px] text-slate-350 mt-1 font-mono">
                  <span>Min: 5 Orang</span>
                  <span>Diskon 10% (≥15 Orang)</span>
                  <span>Diskon 15% (≥30 Orang)</span>
                  <span>Maks: 100 Orang</span>
                </div>
              </div>

              {/* Advanced toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* 1. Certification Track Toggle */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Jalur Sertifikasi BNSP:
                  </label>
                  <div className="flex rounded-lg overflow-hidden border border-slate-700/20">
                    <button
                      onClick={() => setNeedsCertification(true)}
                      className={`flex-1 py-2 text-xs font-bold cursor-pointer ${
                        needsCertification
                          ? 'bg-teal-400 text-slate-950'
                          : 'bg-slate-400/10 text-slate-400 hover:bg-slate-400/20'
                      }`}
                      id="toggle-cert-yes"
                    >
                      Sertifikasi BNSP
                    </button>
                    <button
                      onClick={() => setNeedsCertification(false)}
                      className={`flex-1 py-2 text-xs font-bold cursor-pointer ${
                        !needsCertification
                          ? 'bg-teal-400 text-slate-950'
                          : 'bg-slate-400/10 text-slate-400 hover:bg-slate-400/20'
                      }`}
                      id="toggle-cert-no"
                    >
                      Pelatihan Saja
                    </button>
                  </div>
                </div>

                {/* 2. Custom Syllabus Multiplier Toggle */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                    Tingkat Kustomisasi Materi:
                  </label>
                  <div className="flex rounded-lg overflow-hidden border border-slate-700/20">
                    <button
                      onClick={() => setCustomizationType('standard')}
                      className={`flex-1 py-2 text-xs font-bold cursor-pointer ${
                        customizationType === 'standard'
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-400/10 text-slate-400 hover:bg-slate-400/20'
                      }`}
                      id="toggle-custom-std"
                    >
                      Kurikulum Standar
                    </button>
                    <button
                      onClick={() => setCustomizationType('tailored')}
                      className={`flex-1 py-2 text-xs font-bold cursor-pointer ${
                        customizationType === 'tailored'
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-slate-400/10 text-slate-400 hover:bg-slate-400/20'
                      }`}
                      id="toggle-custom-tailor"
                    >
                      Kustom Organisasi
                    </button>
                  </div>
                </div>

              </div>

            </div>

            {/* Simulated Offer Pricing Invoice output */}
             <div className={`lg:col-span-5 ${currentConcept === 'organic' ? 'lg:order-first' : 'lg:order-last'}`}>
              <div className={`p-6 rounded-2xl border transition-all ${
                currentConcept === 'organic'
                  ? 'bg-white border-emerald-100 shadow-md border-t-4 border-t-[#059669] text-slate-800'
                  : currentConcept === 'tech'
                  ? 'bg-[#F8FAFC] border-slate-300 text-slate-900 shadow-sm'
                  : 'bg-[#F0F7FF] border-2 border-[#E0F2FE] text-[#1E3A8A] shadow-md'
              }`}>
                
                <h5 className={`font-sans font-extrabold text-sm border-b pb-3 mb-4 uppercase tracking-wider ${
                  currentConcept === 'organic' ? 'text-[#059669] border-emerald-100/80' : 'text-[#1E3A8A] border-[#E0F2FE]'
                }`}>
                  Hasil Estimasi Rencana Biaya Kerja
                </h5>

                <div className="space-y-4 text-xs font-semibold">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Biaya Dasar Sesi:</span>
                    <span className={currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'}>Rp {((results.perPerson - (needsCertification ? 1500000 : 0)) * participantCount).toLocaleString('id-ID')}</span>
                  </div>

                  {needsCertification && (
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Ujian Sertifikasi BNSP:</span>
                      <span className={currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'}>Rp {(1500000 * participantCount).toLocaleString('id-ID')}</span>
                    </div>
                  )}

                  {customizationType === 'tailored' && (
                    <div className="flex justify-between items-center text-slate-600">
                      <span>Biaya Riset & Penyusunan Silabus:</span>
                      <span className="text-[#DC2626] font-semibold">Tercakup (Free Service)</span>
                    </div>
                  )}

                  {results.discountRate > 0 && (
                    <div className="flex justify-between items-center text-rose-600 bg-red-50 px-2.5 py-1 rounded">
                      <span>Diskon Kolektif BUMN ({results.discountRate}%):</span>
                      <span className="font-extrabold">- Rp {results.savings.toLocaleString('id-ID')}</span>
                    </div>
                  )}

                  <div className={`border-t pt-4 flex flex-col gap-1 ${
                    currentConcept === 'organic' ? 'border-emerald-100/80' : 'border-[#E0F2FE]'
                  }`}>
                    <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Total Estimasi Anggaran:</span>
                    <span className={`text-2xl sm:text-3xl font-black ${
                      currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'
                    }`}>
                      Rp {results.total.toLocaleString('id-ID')}
                    </span>
                    <span className="text-[10px] text-slate-500 italic mt-1 font-sans">
                      *Estimasi Rp {results.perPerson.toLocaleString('id-ID')}/Orang (Termasuk Konsumsi, Materi PDF & Pendampingan)
                    </span>
                  </div>
                </div>

                {/* Submit button dynamically linking to whatsapp with calculated text */}
                <button
                  onClick={() => {
                    const messageText = `Halo, saya berminat mengajukan penawaran program "${activeService.title}" untuk perusahaan kami dengan detail:\n- Jumlah Peserta: ${participantCount} Orang\n- Sertifikasi BNSP: ${needsCertification ? 'Ya' : 'Tidak'}\n- Tipe Silabus: ${customizationType === 'tailored' ? 'Khusus (Kustom Klien)' : 'Silabus Standar'}\n\nMohon dikirimkan Brosur Resmi PDF dan Surat Penawaran Anggaran ke alamat email kami. Terima kasih!`;
                    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(messageText)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className={`w-full mt-6 py-3 px-4 rounded-xl font-sans font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-all text-white cursor-pointer ${
                    currentConcept === 'organic'
                      ? 'bg-[#059669] hover:bg-[#047857] shadow-md border border-transparent'
                      : currentConcept === 'tech'
                      ? 'bg-[#1E3A8A] hover:bg-[#1E40AF]'
                      : 'bg-[#1E3A8A] hover:bg-[#1E40AF] shadow-[0_4px_12px_rgba(30,58,138,0.15)]'
                  }`}
                  id="layanan-whatsapp-proposal"
                >
                  <MessageSquareCode className="w-4 h-4 text-white/90" />
                  <span>Ajukan Proposal Rencana PDF</span>
                </button>

              </div>
            </div>

          </div>

          {/* 5 Core Feature checklist of selected service under simulator */}
          <div className="mt-8 pt-6 border-t border-slate-700/20 max-w-4xl mx-auto">
            <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-3">Materi & Benefit Yang Termasuk Dalam Program Ini:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activeService.features.map((feature, fIdx) => (
                <div key={fIdx} className="flex gap-2 items-center text-xs">
                  <CheckCircle className={`w-4 h-4 shrink-0 ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-teal-400'}`} />
                  <span className="text-slate-755 dark:text-slate-300 font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
