import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="pt-32 pb-24 relative overflow-hidden flex items-center bg-gradient-to-b from-[#F0F7FF] via-slate-50 to-white text-slate-900 border-b border-blue-100" id="home">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Ambient Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#E0F2FE]/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E0F2FE]/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F9FF] text-[#1E3A8A] border border-[#E0F2FE] text-xs font-sans font-bold mb-8">
          <Award className="w-4 h-4 text-[#DC2626] animate-pulse" />
          <span>Lembaga Akreditasi Resmi BNSP & Kementerian</span>
        </div>

        {/* Heading */}
        <div className="space-y-6 max-w-4xl mx-auto">
          <p className="text-[#DC2626] font-sans font-semibold tracking-widest uppercase text-xs sm:text-sm flex items-center justify-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#DC2626] inline-block"></span>
            PT Transformasi Kompetensi Indonesia — Value-Driven Excellence
          </p>
          
          <h1 className="text-4xl sm:text-5xl lg:text-3xl xl:text-6xl font-sans font-extrabold text-[#0F172A] tracking-tight leading-[1.12]">
            Mencetak SDM Unggul <span className="bg-gradient-to-r from-[#1E3A8A] to-[#0284C7] bg-clip-text text-transparent">Berdaya Saing Global</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Mitra strategis pengembangan Sumber Daya Manusia dan manajemen sistem berbasis standar global dengan nilai utama *Value-Driven Excellence*. Berpusat di Banjarmasin untuk Indonesia yang lebih kompeten.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-10">
          <button
            onClick={() => onNavigate('layanan')}
            className="bg-[#1E3A8A] text-white hover:bg-[#1E40AF] shadow-[0_4px_14px_rgba(30,58,138,0.2)] font-sans font-bold transition-all px-8 py-4 rounded-xl flex items-center justify-center gap-2 cursor-pointer text-xs tracking-wider"
            id="hero-cta-primary"
          >
            <span>LIHAT LAYANAN KAMI</span>
            <ArrowRight className="w-4 h-4 text-white/90" />
          </button>
          
          <button
            onClick={() => onNavigate('layanan')}
            className="border-2 border-[#E0F2FE] bg-[#F0F9FF] text-[#1E3A8A] hover:bg-[#E0F2FE]/80 font-bold px-8 py-4 rounded-xl transition-all cursor-pointer text-xs tracking-wider"
            id="hero-cta-secondary"
          >
            <span>KONSULTASI SEKARANG</span>
          </button>
        </div>

        {/* Symmetrical Metrics Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-16 mt-16 border-t border-slate-200/80 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-extrabold text-[#1E3A8A]">18.4K+</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Alumni Sertifikat</p>
          </div>
          <div className="text-center border-y sm:border-y-0 sm:border-x border-slate-200/80 py-4 sm:py-0">
            <p className="text-3xl font-extrabold text-[#1E3A8A]">120+</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Klien Korporat</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-extrabold text-[#DC2626]">98.7%</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mt-1">Kepuasan Program</p>
          </div>
        </div>
      </div>
    </section>
  );
}
