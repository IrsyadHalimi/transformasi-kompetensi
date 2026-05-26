import React, { useState } from 'react';
import { ThemeConcept } from '../types';
import { LEGALITAS_DATA, LEGAL_DOCS, CONCEPTS } from '../data';
import { ShieldAlert, FileText, Search, Landmark, CheckSquare, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface LegalitasProps {
  currentConcept: ThemeConcept;
}

export default function Legalitas({ currentConcept }: LegalitasProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const conceptDetails = CONCEPTS[currentConcept];

  // Filter KBLI based on search query
  const filteredKBLI = LEGALITAS_DATA.filter((kbli) =>
    kbli.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kbli.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    kbli.scope.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const styles = {
    corporate: {
      secBg: 'bg-white text-slate-800',
      title: 'text-3xl font-display font-extrabold text-[#1E3A8A]',
      tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest flex items-center justify-center md:justify-start gap-1.5',
      legalCard: 'bg-[#F0F7FF]/30 border border-[#E0F2FE] p-5 rounded-2xl shadow-sm',
      kbliCard: 'bg-white border border-[#E0F2FE] p-5 rounded-xl shadow-sm'
    },
    tech: {
      secBg: 'bg-[#F8FAFC] text-slate-800 border-t border-slate-200',
      title: 'text-3xl font-display font-extrabold uppercase text-[#1E3A8A] tracking-widest',
      tagline: 'text-xs text-[#DC2626] font-mono tracking-[0.25em] uppercase flex items-center justify-center md:justify-start gap-1.5',
      legalCard: 'bg-white border border-slate-200 p-5 rounded-none',
      kbliCard: 'bg-white border border-slate-200 p-5 rounded-none hover:border-[#1E3A8A]/30 transition-all'
    },
    organic: {
      secBg: 'bg-[#F4FAF7] text-slate-900 border-t border-emerald-100/60',
      title: 'text-3xl font-sans font-extrabold text-[#059669]',
      tagline: 'text-xs text-[#059669] font-sans font-bold uppercase tracking-widest flex items-center justify-center md:justify-start gap-1.5',
      legalCard: 'bg-white border border-emerald-100 rounded-2xl rounded-tr-none border-b-4 border-b-[#059669] p-5 shadow-md',
      kbliCard: 'bg-white border border-emerald-100 rounded-2xl p-5 hover:shadow-sm transition-all'
    }
  }[currentConcept];

  return (
    <section className={`py-24 ${styles.secBg}`} id="legalitas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>Kepatuhan Regulasi & Perizinan</p>
          <h2 className={styles.title}>Legalitas Hukum & Kode KBLI Resmi</h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full mt-4 ${
            currentConcept === 'organic' ? 'bg-[#059669]' : currentConcept === 'tech' ? 'bg-red-600' : 'bg-[#0EA5E9]'
          }`} />
          <p className={`mt-4 text-sm sm:text-base ${currentConcept === 'tech' ? 'text-slate-600 font-mono' : 'text-slate-600'}`}>
            Kredibilitas adalah aset berharga. Seluruh kegiatan pengujian dan pelatihan operasional kami terdaftar secara hukum di Kementerian Hukum & HAM dan berbadan hukum perseroan terbatas terakreditasi resmi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Administrative Credentials list */}
          <div className={`lg:col-span-5 space-y-6 ${currentConcept === 'organic' ? 'lg:order-last' : 'lg:order-first'}`}>
            <div className={styles.legalCard} id="legal-credentials-card">
              
              <div className={`flex gap-2 items-center mb-6 border-b pb-3 ${currentConcept === 'organic' ? 'border-emerald-100' : 'border-blue-100'}`}>
                <Landmark className={`w-5 h-5 ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'}`} />
                <h3 className={`text-base font-sans font-extrabold ${currentConcept === 'organic' ? 'text-slate-900' : 'text-[#1E3A8A]'}`}>
                  Data Administrasi Badan Hukum
                </h3>
              </div>

              <div className="space-y-4">
                {LEGAL_DOCS.map((doc, idx) => (
                  <div key={idx} className="border-b border-slate-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">
                      {doc.label}:
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 block mt-0.5 leading-relaxed">
                      {doc.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Secure certification badge footer */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex gap-3 items-center">
                <div className="p-2.5 bg-blue-50 text-blue-600 rounded-lg">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="font-bold block text-slate-800">
                    E-Faktur & PKP Terdaftar Resmi
                  </span>
                  <span className="text-slate-400 text-[10px]">
                    Memenuhi kualifikasi vendor utama BUMN untuk akuntansi standar keuangan.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Searchable KBLI Finder tool */}
          <div className={`lg:col-span-7 space-y-6 ${currentConcept === 'organic' ? 'lg:order-first' : 'lg:order-last'}`}>
            
            {/* Search filter input bar */}
            <div className={`p-5 rounded-2xl border ${
              currentConcept === 'organic'
                ? 'bg-white border-emerald-100 shadow-md border-r-4 border-r-[#059669]'
                : currentConcept === 'tech'
                ? 'bg-[#F8FAFC] border-slate-350'
                : 'bg-white border-[#E0F2FE] shadow-sm'
            }`} id="kbli-search-box">
              
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-4">
                <div>
                  <h3 className={`text-base font-sans font-extrabold text-[#1E3A8A] ${currentConcept === 'organic' ? 'text-slate-900' : ''}`}>
                    Koleksi Klasifikasi KBLI Terdaftar
                  </h3>
                  <p className="text-[11px] text-slate-400">
                    Masukkan kode/nama izin konsultansi untuk auditor legalitas korporasi Anda
                  </p>
                </div>

                {/* Interactive total count indicator */}
                <div className={`px-3 py-1 rounded text-xs font-mono font-bold ${
                  currentConcept === 'organic' ? 'bg-emerald-50 text-[#059669]' : 'bg-[#E0F2FE] text-[#1E3A8A]'
                }`}>
                  {filteredKBLI.length} Kode Aktif
                </div>
              </div>

              {/* Input container */}
              <div className="relative">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Cari KBLI (contoh: 70201, konsultasi, pelatihan)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border font-medium focus:outline-none focus:ring-1 ${
                    currentConcept === 'tech'
                      ? 'bg-white border-slate-250 text-slate-800 focus:ring-[#1E3A8A]'
                      : currentConcept === 'organic'
                      ? 'bg-white border-emerald-200 text-slate-800 focus:ring-[#059669] focus:border-[#059669] font-sans'
                      : 'bg-slate-50 border-slate-200 text-slate-800 focus:ring-[#1E3A8A] focus:bg-white'
                  }`}
                  id="kbli-search-input"
                />
              </div>

            </div>

            {/* Render matched list or empty state */}
            <div className="space-y-4 max-h-[450px] overflow-y-auto pr-2 grid grid-cols-1 gap-2 border border-slate-100 rounded-2xl p-2 bg-slate-50/5">
              {filteredKBLI.length > 0 ? (
                filteredKBLI.map((kbli) => (
                  <div key={kbli.code} className={styles.kbliCard} id={`kbli-result-card-${kbli.code}`}>
                    <div className="flex gap-3.5 items-start">
                      <div className={`px-2.5 py-1 text-xs font-bold rounded-lg ${
                        currentConcept === 'organic' 
                          ? 'bg-emerald-50 text-[#059669] font-sans' 
                          : currentConcept === 'tech' 
                          ? 'bg-red-950 text-red-500 font-mono' 
                          : 'bg-blue-100 text-blue-900 font-mono'
                      }`}>
                        KBLI {kbli.code}
                      </div>
                      <div className="space-y-1.5 flex-1">
                        <h4 className={`text-sm font-sans font-extrabold ${
                          currentConcept === 'organic' ? 'text-slate-900 border-none':'text-[#1E3A8A]'
                        }`}>
                          {kbli.title}
                        </h4>
                        <p className="text-[11px] text-slate-500 leading-relaxed italic">
                          {kbli.description}
                        </p>
                        
                        {/* Scope container */}
                        <div className="bg-slate-500/5 rounded-xl p-3 border border-slate-100 mt-2">
                          <span className="text-[9px] text-slate-400 font-bold block uppercase tracking-wider mb-1">
                            Cakupan Kuasa Izin Operasional:
                          </span>
                          <p className="text-xs text-slate-600 font-medium">
                            {kbli.scope}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-center bg-white border border-slate-200 rounded-xl">
                  <ShieldAlert className="w-8 h-8 text-[#DC2626] mb-2 animate-bounce" />
                  <span className="text-xs font-bold block text-slate-800">Tidak Ada KBLI Yang Cocok</span>
                  <p className="text-[10px] text-slate-400 mt-1 max-w-sm">
                    Kami terdaftar penuh di empat pilar KBLI pokok konsultasi & pelatihan kerja (85499, 70201, 85495, 78421).
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
