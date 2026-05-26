import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'tentang', label: 'Tentang Kami' },
    { id: 'keunggulan', label: 'Solusi & Keunggulan Strategis' },
    { id: 'layanan', label: 'Layanan Kami' },
    { id: 'legalitas', label: 'Legalitas & KBLI' },
    { id: 'milestones', label: 'Milestones' },
    { id: 'kemitraan', label: 'Segmentasi & Kemitraan' }
  ];

  // Corporate styles
  const navStyles = {
    bar: scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent border-b border-white/10',
    text: scrolled ? 'text-slate-600 hover:text-blue-900 font-sans' : 'text-slate-600 hover:text-blue-900 font-sans',
    activeText: scrolled ? 'text-blue-900 font-bold border-b-2 border-blue-900 font-sans' : 'text-blue-900 font-bold border-b-2 border-blue-400 font-sans',
    btn: 'bg-blue-900 text-white hover:bg-blue-800 font-sans',
    logoLight: !scrolled
  };

  const handleItemClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 py-1 left-0 right-0 z-40 transition-all duration-300 ${navStyles.bar}`} id="main-navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Brand Logo inside Navbar */}
          <div className="cursor-pointer md:mr-30" onClick={() => handleItemClick('home')}>
            <img src="/images/logo-transformasi.webp" alt="Logo Transformasi" className="h-20" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 sm:space-x-4">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isActive ? navStyles.activeText : navStyles.text
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}

            {/* Hubungi Kami Action Button */}
            <button
              onClick={() => handleItemClick('layanan')}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 ml-2 cursor-pointer ${navStyles.btn} md:ml-10`}
              id="nav-consultation-btn"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Konsultasi</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors text-slate-700 hover:bg-slate-100"
              id="mobile-menu-toggle"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Options */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-100">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {menuItems.map((item) => {
               const isActive = activeSection === item.id;
               return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    isActive 
                      ? 'bg-blue-50 text-blue-900'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                  id={`nav-mobile-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <button
              onClick={() => handleItemClick('layanan')}
              className={`w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-lg font-sans font-bold text-xs uppercase tracking-wider transition-all ${navStyles.btn}`}
              id="nav-mobile-btn"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Hubungi Konsultan</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
