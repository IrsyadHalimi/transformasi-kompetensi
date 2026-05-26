import React from 'react';
import { TIMELINE_MILESTONES } from '../data';
import { Calendar, Activity } from 'lucide-react';
import { motion } from 'motion/react';

export default function Milestones() {
  const styles = {
    secBg: 'bg-white text-slate-800',
    title: 'text-3xl font-sans font-extrabold text-[#1E3A8A]',
    tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest flex items-center justify-center gap-1.5',
    dotBg: 'bg-[#1E3A8A] border-4 border-white shadow',
    cardBg: 'bg-[#F0F7FF]/30 border border-[#E0F2FE] p-6 rounded-2xl shadow-sm'
  };

  return (
    <section className={`py-24 ${styles.secBg}`} id="milestones">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>RENCANA STRATEGIS PERUSAHAAN</p>
          <h2 className={`${styles.title} tracking-tight`}>Milestones & Target Capaian</h2>
          <div className="h-1.5 w-24 mx-auto rounded-full mt-4 bg-[#1E3A8A]" />
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Rencana kerja jangka panjang PT Transformasi Kompetensi Indonesia untuk membangun ekosistem kompetensi nasional yang komprehensif, kredibel, dan berdaya saing dari pusat di Banjarmasin.
          </p>
        </div>

        {/* Responsive Vertical Timeline container */}
        <div className="relative border-l-2 border-slate-100 max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12 py-4">
          
          {TIMELINE_MILESTONES.map((ms, msIdx) => (
            <motion.div
              layout
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: msIdx * 0.1 }}
              key={ms.year}
              className="relative"
              id={`milestone-node-block-${ms.year}`}
            >
              {/* Timeline Year Dot Indicator */}
              <div className={`absolute -left-[43px] sm:-left-[61px] top-1.5 w-7 h-7 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10 ${styles.dotBg}`}>
                <Calendar className="w-3.5 h-3.5 sm:w-[18px] sm:h-[18px] text-white" />
              </div>

              <div className={styles.cardBg}>
                
                {/* Title block with year text */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] block text-[#DC2626]">
                      Rencana Progresif {msIdx + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-extrabold text-[#1E3A8A]">
                      {ms.title}
                    </h3>
                  </div>

                  <div className="text-sm sm:text-lg font-black bg-[#F0F7FF] px-4 py-1 rounded-xl font-mono self-start sm:self-auto text-[#1E3A8A] border border-[#CBD5E1]/30">
                    {ms.year}
                  </div>
                </div>

                {/* Body description */}
                <p className="text-xs sm:text-sm leading-relaxed mt-4 text-slate-600">
                  {ms.description}
                </p>

                {/* Optional expansion stats metric metrics inside card */}
                {ms.metrics && (
                  <div className="mt-4 p-3 bg-slate-400/5 rounded-xl border border-slate-700/5 flex justify-between items-center max-w-sm">
                    <div className="flex gap-2 items-center">
                      <Activity className="w-4 h-4 animate-pulse shrink-0 text-blue-500" />
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        {ms.metrics.label}:
                      </span>
                    </div>
                    <span className="text-xs font-black font-mono text-slate-800">
                      {ms.metrics.value}
                    </span>
                  </div>
                )}

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
