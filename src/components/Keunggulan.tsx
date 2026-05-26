import React, { useState } from 'react';
import { STRATEGIC_ADVANTAGES } from '../data';
import { Compass, CheckCircle2, Sliders, Calendar, Award } from 'lucide-react';

type EmployeeLevel = 'operator' | 'supervisor' | 'manager' | 'director';
type CompetencyType = 'leadership' | 'safety' | 'finance' | 'digital';

export default function Keunggulan() {
  const [level, setLevel] = useState<EmployeeLevel>('supervisor');
  const [competency, setCompetency] = useState<CompetencyType>('leadership');

  // Training sandbox design calculation
  const getSandboxRecommendation = (lvl: EmployeeLevel, comp: CompetencyType) => {
    // Generate results dynamically based on inputs
    const levelLabels = {
      operator: 'Staf Operasional / Teknisi Lapangan',
      supervisor: 'Supervisor / Koordinator Regu',
      manager: 'Manajer Departemen / Kepala Cabang',
      director: 'Direksi Eksekutif / General Manager'
    };

    const compLabels = {
      leadership: 'Kepemimpinan Strategis (Leadership)',
      safety: 'Keselamatan Kerja (K3 & Operational Safety)',
      finance: 'Kepatuhan & Akuntansi Utama (Finance)',
      digital: 'Literasi AI & Otomasi Digital (AI/Digital)'
    };

    const details: Record<EmployeeLevel, Record<CompetencyType, {
      duration: string;
      ratio: string;
      method: string;
      skills: string[];
    }>> = {
      operator: {
        leadership: { duration: '3 Sesi Utama (24 Jam)', ratio: '30% Teori, 70% Simulasi Kasus', method: 'Praktek Lapangan & Peer Evaluation', skills: ['Komunikasi Tim', 'Disiplin Kerja', 'Kepatuhan Instruksi'] },
        safety: { duration: '5 Sesi Sertifikasi (40 Jam)', ratio: '20% Teori, 80% Simulasi Kritis', method: 'Sertifikasi BNSP / Ujian Praktek K3', skills: ['Identifikasi Risiko Hazard', 'Prosedur Evakuasi', 'Pertolongan Pertama'] },
        finance: { duration: '2 Sesi Mandiri (16 Jam)', ratio: '40% Teori, 60% Pengisian Templat', method: 'Pengumpulan Portofolio Administrasi', skills: ['Pencatatan Buku Kas', 'Klaim Operasional', 'Audit Dasar'] },
        digital: { duration: '4 Sesi Praktek (32 Jam)', ratio: '10% Teori, 90% Praktek Komputer', method: 'Ujian Praktek Alat & Otomasi', skills: ['Penggunaan Aplikasi Office', 'Pengenalan AI Dasar', 'Keamanan Kata Sandi'] }
      },
      supervisor: {
        leadership: { duration: '4 Sesi Utama (32 Jam)', ratio: '40% Teori, 60% Coaching Lab', method: 'Roleplaying Wawancara & Studi Kasus', skills: ['Delegasi Tugas', 'Manajemen Konflik', 'Evaluasi Kinerja Staf'] },
        safety: { duration: '6 Sesi Lisensi (48 Jam)', ratio: '30% Teori, 70% Walkthrough Audit', method: 'Audit K3 Lapangan & Ulang Verifikasi', skills: ['Safety Briefing Mastery', 'Audit Kecelakaan Kerja', 'Kepatuhan UU RI'] },
        finance: { duration: '3 Sesi Utama (24 Jam)', ratio: '50% Teori, 50% Audit Contoh', method: 'Analisis Portofolio Anggaran', skills: ['Penyusunan RAB Regu', 'Analisis Varian Anggaran', 'Kepatuhan Pajak'] },
        digital: { duration: '4 Sesi Utama (32 Jam)', ratio: '30% Teori, 70% Optimasi Alat Kerja', method: 'Asesmen Simulasi Alat Bantu IT', skills: ['Analisis Data Regu', 'Pemanfaatan AI Automasi', 'Data Entry Security'] }
      },
      manager: {
        leadership: { duration: '6 Sesi Eksekutif (48 Jam)', ratio: '30% Diskusi, 70% Real Business Sandbox', method: 'Wawancara Kompetensi Terstruktur (BEI)', skills: ['Strategic Alignment', 'Driving Innovation', 'People Development Coaching'] },
        safety: { duration: '5 Sesi Strategis (40 Jam)', ratio: '50% Teori, 50% Perumusan Kebijakan', method: 'Penyusunan Safety Policy & Presentasi', skills: ['Risk Mitigation Matrix', 'Budaya Zero Accident', 'ISO 45001 Standard'] },
        finance: { duration: '5 Sesi Komprehensif (40 Jam)', ratio: '40% Teori, 60% Studi Kasus Keuangan', method: 'Analisis Keputusan Investasi Riil', skills: ['Financial Statement Analysis', 'Cost Reduction Audit', 'Rencana Anggaran Tahunan'] },
        digital: { duration: '5 Sesi Utama (40 Jam)', ratio: '20% Teori, 80% Perumusan Roadmap Digital', method: 'Asesmen Portofolio Manajemen Proyek', skills: ['Data-Driven Decision Making', 'Enterprise AI Deployment', 'Digital Risk Management'] }
      },
      director: {
        leadership: { duration: '2 Hari Retret Eksekutif (16 Jam)', ratio: '10% Teori, 90% Peer Board Advisory', method: 'Evaluasi Portofolio Global & 360 Degree Peer Review', skills: ['Visionary Slogan Alignment', 'Crisis Public Relations', 'Corporate Board Integrity'] },
        safety: { duration: '1 Hari Komitmen (8 Jam)', ratio: '60% Diskusi Hukum, 40% Kunjungan Audit', method: 'Penandatanganan Komitmen K3 Nasional', skills: ['Hukum Ketenagakerjaan RI', 'Corporate Governance', 'Fiduciary Duties'] },
        finance: { duration: '3 Sesi Executive (24 Jam)', ratio: '30% Teori, 70% Evaluasi Makro', method: 'Analisis Portofolio Investasi Saham BUMN', skills: ['Makro-ekonometrika Korporasi', 'Merger & Akuisisi Risk', 'Treasury Strategic Operations'] },
        digital: { duration: '3 Sesi Ekslusif (24 Jam)', ratio: '20% Teori, 80% Integrasi Manajemen AI', method: 'Simulasi Keamanan Cyber Board Level', skills: ['Disruptive Tech Roadmap', 'Cyber Security Governance', 'AI Ethics & Corporate Law'] }
      }
    };

    return {
      lvlLabel: levelLabels[lvl],
      compLabel: compLabels[comp],
      ...details[lvl][comp]
    };
  };

  const currentRecommendation = getSandboxRecommendation(level, competency);

  const styles = {
    secBg: 'bg-white text-slate-800',
    title: 'text-3xl font-sans font-extrabold text-[#1E3A8A]',
    tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest flex items-center justify-center md:justify-start gap-1.5',
    card: 'bg-white border border-[#E0F2FE] p-6 rounded-xl hover:shadow-md transition-all',
    badge: 'bg-[#E0F2FE] text-[#1E3A8A] font-sans',
    sandboxBg: 'bg-[#F0F7FF]/50 rounded-2xl border border-[#E0F2FE] p-8'
  };

  return (
    <section className={`py-24 ${styles.secBg}`} id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>MENGAPA BERMITRA DENGAN KAMI</p>
          <h2 className={styles.title}>
            Solusi Metodologis & Keunggulan Strategis
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Kami mematahkan paradigma bahwa sertifikasi hanyalah stempel kertas administratif. Bersama metodologi Double-Loop dan platform digital, kami mengunci kaitan langsung antara pelatihan talenta dengan target laba industri.
          </p>
        </div>

        {/* Strategic advantages grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {STRATEGIC_ADVANTAGES.map((adv, idx) => (
            <div key={idx} className={styles.card} id={`adv-card-${idx}`}>
              <div className="flex flex-col sm:flex-row gap-5 items-start">
                 {/* Visual marker inside card */}
                <div className="p-3 rounded-lg shrink-0 bg-teal-500/10 text-teal-600">
                  <Compass className="w-6 h-6 animate-spin-slow" />
                </div>
                
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2 items-center">
                    <h4 className="text-base font-sans font-extrabold text-slate-800">
                      {adv.title}
                    </h4>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full ${styles.badge}`}>
                      {adv.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE COMPONENT: Training Curriculum Design Sandbox */}
        <div className={styles.sandboxBg} id="curriculum-sandbox">
          <div className="max-w-4xl mx-auto">
            
            {/* Header of the Sandbox */}
            <div className="text-center mb-8 border-b border-[#E0F2FE] pb-4">
              <span className="text-xs uppercase tracking-widest font-bold text-blue-900">
                Simulator Interaktif
              </span>
              <h3 className="text-xl sm:text-2xl font-sans font-extrabold mt-1 text-[#1E3A8A]">
                Rancang Kerangka Silabus Pelatihan Organisasi Anda
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Gunakan simulator di bawah ini untuk melihat rancangan skema durasi, materi, dan asesi berdasarkan profil asesi Anda.
              </p>
            </div>

            {/* Selector Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              
              {/* Selector form */}
              <div className="space-y-5 md:order-first">
                
                {/* 1. Employee Level Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    1. Posisi / Tingkat Target Karyawan:
                  </label>
                  <div className="flex flex-col gap-1.5">
                    {([
                      { id: 'operator', title: 'Staf Operasional', subtitle: 'Pekerja lapangan & operasional manual' },
                      { id: 'supervisor', title: 'Supervisor / Team Leader', subtitle: 'Fasilitator koordinasi dan kepatuhan regu' },
                      { id: 'manager', title: 'Manajer Menengah', subtitle: 'Penerjemah visi strategis ke rencana kerja' },
                      { id: 'director', title: 'Direksi Eksekutif / GM', subtitle: 'Pengambil keputusan makro korporat' }
                    ] as const).map((lvl) => (
                      <button
                        key={lvl.id}
                        onClick={() => setLevel(lvl.id)}
                        className={`text-left p-2.5 px-3.5 rounded-lg border transition-all text-xs flex justify-between items-center cursor-pointer ${
                          level === lvl.id
                            ? 'bg-blue-900 text-white border-transparent shadow'
                            : 'bg-white hover:bg-slate-100 border-slate-200/80 text-slate-700'
                        }`}
                        id={`sandbox-level-${lvl.id}`}
                      >
                        <div>
                          <span className="font-bold block">{lvl.title}</span>
                          <span className={`text-[10px] opacity-75 block ${level === lvl.id ? 'text-blue-105' : 'text-slate-500'}`}>{lvl.subtitle}</span>
                        </div>
                        {level === lvl.id && <CheckCircle2 className="w-4 h-4 shrink-0 text-amber-300" />}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Competency Selector */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    2. Bidang Pelatihan Fokus:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {([
                      { id: 'leadership', title: 'Manajerial & Leadership' },
                      { id: 'safety', title: 'Zero-Harm & K3' },
                      { id: 'finance', title: 'Finance / Finansial' },
                      { id: 'digital', title: 'Literasi AI / Digital' }
                    ] as const).map((comp) => (
                      <button
                        key={comp.id}
                        onClick={() => setCompetency(comp.id)}
                        className={`text-center p-3 rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                          competency === comp.id
                            ? 'bg-blue-900 text-white border-transparent shadow'
                            : 'bg-white hover:bg-stone-50 border-slate-200 text-slate-700'
                        }`}
                        id={`sandbox-comp-${comp.id}`}
                      >
                        {comp.title}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Sandbox calculation result display */}
              <div className="p-6 rounded-2xl border transition-all h-full flex flex-col justify-between md:order-last bg-white border-slate-200 shadow-xl">
                
                {/* Result header */}
                <div>
                  <div className="flex gap-2 items-center border-b pb-3 mb-4 border-slate-200">
                    <Sliders className="w-4 h-4 text-blue-900" />
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Hasil Simulasi Cetak Kurikulum</span>
                  </div>

                  {/* Recommendation core descriptors */}
                  <div className="space-y-4">
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Metode Uji Kompetensi yang Disarankan:</span>
                      <p className="text-sm font-bold text-slate-800 mt-0.5">{currentRecommendation.method}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex gap-2 items-start">
                        <Calendar className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Durasi Sesi:</span>
                          <span className="text-xs font-bold text-slate-700">{currentRecommendation.duration}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 items-start">
                        <DoubleLoopIcon className="w-4 h-4 shrink-0 mt-0.5 text-blue-900" />
                        <div>
                          <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Rasio Praktik/Teori:</span>
                          <span className="text-xs font-bold text-slate-700">{currentRecommendation.ratio}</span>
                        </div>
                      </div>
                    </div>

                    {/* Extracted skills items */}
                    <div className="pt-3 border-t border-slate-200">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider mb-2">3 Kompetensi Kunci Yang Terbentuk:</span>
                      <div className="flex flex-col gap-1.5">
                        {currentRecommendation.skills.map((skill, sIdx) => (
                          <div key={sIdx} className="flex gap-2 items-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-900" />
                            <span className="text-xs font-semibold text-slate-600">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated consultation prompt */}
                <div className="mt-8 pt-4 border-t border-slate-200">
                  <div className="text-xs text-slate-400 italic mb-3 leading-relaxed">
                    *Rancangan silabus ini disesuaikan dengan kerangka kurikulum Lembaga Pelatnas & Kementrian Tenaga Kerja RI.
                  </div>

                  <button
                    onClick={() => {
                      const msg = `Halo, saya ingin berkonsultasi mengenai perancangan program "${currentRecommendation.compLabel}" untuk "${currentRecommendation.lvlLabel}" dengan estimasi durasi "${currentRecommendation.duration}".`;
                      const encoded = encodeURIComponent(msg);
                      window.open(`https://wa.me/6282190220027?text=${encoded}`, '_blank');
                    }}
                    className="w-full py-2.5 rounded-xl font-sans font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 text-white cursor-pointer bg-blue-900 hover:bg-blue-950"
                    id="sandbox-whatsapp-cta"
                  >
                    <Award className="w-3.5 h-3.5" />
                    <span>Dapatkan Silabus Resmi PDF</span>
                  </button>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// Decorative micro icon helper
function DoubleLoopIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" {...props}>
      <path d="M 4,12 C 4,6.5 8.5,4 12,4 C 15.5,4 20,6.5 20,12 C 20,17.5 15.5,20 12,20 C 8.5,20 4,17.5 4,12 Z" />
      <circle cx="12" cy="12" r="4" />
    </svg>
  );
}
