import React, { useState } from 'react';
import { ThemeConcept } from '../types';
import { CONCEPTS } from '../data';
import { Mail, Phone, MapPin, CheckCircle, MessageSquare, Landmark, Send, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactProps {
  currentConcept: ThemeConcept;
}

export default function Contact({ currentConcept }: ContactProps) {
  const [formName, setFormName] = useState<string>('');
  const [formEmail, setFormEmail] = useState<string>('');
  const [formCompany, setFormCompany] = useState<string>('');
  const [formMsg, setFormMsg] = useState<string>('');
  const [isSent, setIsSent] = useState<boolean>(false);

  const conceptDetails = CONCEPTS[currentConcept];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formMsg) return;

    // Trigger success status
    setIsSent(true);

    // Auto reset form after 4 seconds
    setTimeout(() => {
      setIsSent(false);
      setFormName('');
      setFormEmail('');
      setFormCompany('');
      setFormMsg('');
    }, 4000);
  };

  const styles = {
    corporate: {
      secBg: 'bg-white text-slate-800',
      card: 'bg-[#F0F7FF]/35 border border-[#E0F2FE] p-8 rounded-2xl shadow-sm',
      title: 'text-3xl font-sans font-extrabold text-[#1E3A8A]',
      tagline: 'text-xs text-[#DC2626] uppercase font-sans font-bold tracking-widest',
      input: 'bg-white border border-slate-200 text-slate-850 rounded-xl focus:ring-[#1E3A8A] focus:border-[#1E3A8A] focus:bg-white',
      btn: 'bg-[#1E3A8A] text-white font-semibold hover:bg-blue-900 shadow-sm'
    },
    tech: {
      secBg: 'bg-[#0F172A] text-white border-t border-zinc-800',
      card: 'bg-zinc-900 border border-zinc-800 p-8 rounded-none relative overflow-hidden',
      title: 'text-3xl font-sans font-semibold uppercase tracking-wider text-teal-400',
      tagline: 'text-xs text-[#DC2626] font-mono tracking-[0.25em] uppercase',
      input: 'bg-zinc-950 border border-zinc-800 text-white rounded-none focus:border-teal-500 font-mono text-xs',
      btn: 'bg-teal-500 hover:bg-teal-600 text-[#0F172A] font-mono border border-transparent uppercase font-bold'
    },
    organic: {
      secBg: 'bg-[#F4FAF7] text-slate-900 border-t border-emerald-100/60',
      card: 'bg-white border border-emerald-100 rounded-2xl rounded-tr-none border-b-4 border-b-[#059669] p-8 shadow-md',
      title: 'text-3xl font-sans font-extrabold text-[#059669]',
      tagline: 'text-xs text-[#059669] font-sans font-bold uppercase tracking-widest',
      input: 'bg-white border border-emerald-100 text-[#1E293B] rounded-xl focus:ring-[#059669] focus:border-[#059669] font-sans text-xs sm:text-sm',
      btn: 'bg-[#059669] text-white hover:bg-[#047857] shadow-md border border-transparent'
    }
  }[currentConcept];

  return (
    <footer className={`py-24 ${styles.secBg}`} id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content bar */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <p className={styles.tagline}>KONSULTASI KEMITRAAN GRATIS</p>
          <h2 className={`${styles.title} tracking-tight`}>Hubungi Penasihat Kurikulum Kami</h2>
          <div className={`h-1.5 w-24 mx-auto rounded-full mt-4 ${
            currentConcept === 'organic' ? 'bg-[#059669]' : currentConcept === 'tech' ? 'bg-teal-400' : 'bg-[#1E3A8A]'
          }`} />
          <p className={`mt-4 text-xs sm:text-sm ${currentConcept === 'tech' ? 'text-zinc-400 font-mono text-xs' : 'text-slate-500'}`}>
            Siap mengakselerasi produktivitas talenta Anda? Diskusikan silabus kustom, jadwal kuota sertifikasi BNSP per-angkatan, serta skema pendampingan kerja dari pusat operasional kami di Banjarmasin sekarang juga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Headquarters and corporate details cards */}
          <div className={`lg:col-span-5 space-y-6 ${currentConcept === 'organic' ? 'lg:order-last' : 'lg:order-first'}`}>
            
            <div className="space-y-4">
              <h3 className={`text-xl font-sans font-black ${currentConcept === 'organic' ? 'text-[#059669]' : 'text-[#1E3A8A]'}`}>
                PT Transformasi Kompetensi Indonesia
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Membangun kapabilitas tangguh, mengawal standar nasional, melahirkan nilai bisnis berjangka panjang berbasis di Banjarmasin untuk Indonesia.
              </p>
            </div>

            {/* Visual Contact channels lines */}
            <div className="space-y-4 pt-4 border-t border-slate-200">
              
              <div className="flex gap-3 items-start">
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  currentConcept === 'organic' ? 'bg-emerald-50 text-[#059669]' : 'bg-blue-50 text-[#1E3A8A]'
                }`}>
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Kantor Pusat & Operasional:</span>
                  <span className="text-xs font-semibold block leading-relaxed mt-0.5 text-slate-700">
                    Jalan Salatiga Batu Benawa No 15 RT 042 Kelurahan Teluk Dalam, Kecamatan Banjarmasin Tengah, Kota Banjarmasin, Kalimantan Selatan
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  currentConcept === 'organic' ? 'bg-emerald-50 text-[#059669]' : 'bg-blue-50 text-[#1E3A8A]'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Hotline WhatsApp:</span>
                  <span className="text-xs font-bold block mt-0.5 font-mono text-slate-750">
                    0821 9022 0027 (Admin) <span className="text-slate-300">|</span> 0822 5481 4752 (Marketing)
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className={`p-2.5 rounded-lg shrink-0 ${
                  currentConcept === 'organic' ? 'bg-emerald-50 text-[#059669]' : 'bg-blue-50 text-[#1E3A8A]'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email Korespondensi Resmi:</span>
                  <span className="text-xs font-bold block mt-0.5 text-slate-700 font-sans">
                    pttransformasikompetensi@gmail.com
                  </span>
                </div>
              </div>

            </div>

            {/* Indonesia Map Mock Visual graphics */}
            <div className={`aspect-video rounded-xl overflow-hidden border relative group shadow-sm bg-slate-500/5 ${
              currentConcept === 'tech' ? 'border-zinc-800' : 'border-slate-200'
            }`}>
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-opacity" />
              <img
                src="https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?q=80&w=400&auto=format&fit=crop"
                alt="Banjarmasin Kalimantan Selatan skyline map locator office"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              <div className={`absolute top-4 left-4 p-2.5 rounded-lg border text-white z-10 text-[10px] ${
                currentConcept === 'organic' ? 'bg-[#059669]/95 border-emerald-100/50' : 'bg-[#1E3A8A]/95 border-[#E0F2FE]/50'
              }`}>
                <strong className="block">Banjarmasin, Kalimantan Selatan</strong>
                <span>Pusat Layanan Asesmen & TUK Terintegrasi</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact message form */}
          <div className={`lg:col-span-7 ${currentConcept === 'organic' ? 'lg:order-first' : 'lg:order-last'}`}>
            <div className={styles.card} id="message-form-container">
              
              <AnimatePresence mode="wait">
                {!isSent ? (
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Nama Peserta/Representatif
                        </label>
                        <input
                          type="text"
                          required
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          placeholder="M. Syad Halim"
                          className={`w-full p-3 font-semibold text-xs sm:text-sm outline-none focus:ring-1 ${styles.input}`}
                          id="form-name-input"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                          Email Resmi Kantor
                        </label>
                        <input
                          type="email"
                          required
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          placeholder="syadhalim059@gmail.com"
                          className={`w-full p-3 font-semibold text-xs sm:text-sm outline-none focus:ring-1 ${styles.input}`}
                          id="form-email-input"
                        />
                      </div>

                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Nama Institusi / Nama BUMN
                      </label>
                      <input
                        type="text"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        placeholder="PT Transformasi Kompetensi Indonesia"
                        className={`w-full p-3 font-semibold text-xs sm:text-sm outline-none focus:ring-1 ${styles.input}`}
                        id="form-company-input"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                        Keperluan Diskusi Silabus
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formMsg}
                        onChange={(e) => setFormMsg(e.target.value)}
                        placeholder="Menanyakan program kuota sertifikasi BNSP pengelasan/IT untuk angkatan Juli sebanyak 40 staf..."
                        className={`w-full p-3 font-semibold text-xs sm:text-sm outline-none focus:ring-1 ${styles.input}`}
                        id="form-message-input"
                      />
                    </div>

                    <button
                      type="submit"
                      className={`w-full p-3.5 rounded-xl font-sans font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${styles.btn}`}
                      id="form-submit-btn"
                    >
                      <Send className="w-4 h-4" />
                      <span>Ajukan Analisis Silabus Gratis</span>
                    </button>

                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 text-center space-y-4"
                    id="success-message"
                  >
                    <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto text-emerald-500 border border-emerald-500/20">
                      <CheckCircle className="w-8 h-8 animate-bounce" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-emerald-500">
                        Inkuiri Konsultasi Berhasil Dikirim!
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
                        Terima kasih, <strong>{formName}</strong>. Rekan pimpinan kurikulum kami akan merespon rancangan draf Anda ke email <strong>{formEmail}</strong> dalam waktu maksimal 2 jam kerja.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
          
        </div>

        {/* Outer Brand Signature + License agreement section */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center text-center gap-4 text-xs text-slate-400">
          <div>
            <p className="font-semibold text-slate-500">
              © 2026 PT Transformasi Kompetensi Indonesia. Hak Cipta Dilindungi Undang-Undang.
            </p>
            <p className="text-[10px] mt-0.5">
              Tembusan Lisensi BNSP No. LSP-1980-ID & Kementerian Tenaga Kerja Republik Indonesia.
            </p>
          </div>

          <div className="flex gap-4 items-center font-semibold">
            <span className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Syarat & Ketentuan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Kebijakan Privasi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
