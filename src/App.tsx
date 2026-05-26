import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TentangKami from './components/TentangKami';
import Keunggulan from './components/Keunggulan';
import Layanan from './components/Layanan';
import Legalitas from './components/Legalitas';
import Milestones from './components/Milestones';
import Kemitraan from './components/Kemitraan';
import Contact from './components/Contact';
import { ThemeConcept } from './types';

export default function App() {
  const currentConcept = 'corporate' as const;
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle smooth scroll navigation
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar offset height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Scroll spy effect to highlight menu items as user scrolls
  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'tentang', 'keunggulan', 'layanan', 'legalitas', 'milestones', 'kemitraan'];
      const scrollPosition = window.scrollY + 120; // Include offsets

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Map theme variables to HTML element attributes based on selected concept
  const conceptStyles = 'bg-slate-50 text-slate-900 font-sans selection:bg-red-250 selection:text-[#0B0F19]';

  return (
    <div className={`min-h-screen transition-all duration-500 overflow-x-hidden ${conceptStyles}`} id="master-app-root">
      
      {/* 1. Header Navigation Menu */}
      <Navbar
        currentConcept={currentConcept}
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* 2. Main Sections Nodes */}
      <main className="relative flex flex-col w-full">
        {/* Home */}
        <Hero onNavigate={handleNavigate} />
        
        {/* Tentang Kami */}
        <TentangKami currentConcept={currentConcept} />
        
        {/* Solusi & Keunggulan Strategis */}
        <Keunggulan currentConcept={currentConcept} />
        
        {/* Layanan Kami */}
        <Layanan currentConcept={currentConcept} />
        
        {/* Legalitas & KBLI */}
        <Legalitas currentConcept={currentConcept} />
        
        {/* Milestones */}
        <Milestones currentConcept={currentConcept} />
        
        {/* Segmentasi & Kemitraan */}
        <Kemitraan currentConcept={currentConcept} />
      </main>

      {/* 3. Footer & Contact Form */}
      <Contact currentConcept={currentConcept} />

    </div>
  );
}
