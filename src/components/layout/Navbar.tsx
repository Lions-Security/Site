import { Shield, ExternalLink, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Serviços', href: '#servicos' },
    { name: 'Formações', href: '#formacoes' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Parceiros', href: '#parceiros' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center nav-logo">
            <img src="./src/public/logo.png" className="w-20" />
            <span className="font-display font-black flex items-center gap-2">
              LionSec
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold text-muted hover:text-primary uppercase tracking-widest transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <a
              href="https://lions-sec-website.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-accent text-white text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-primary transition-colors active:scale-95"
            >
              Aceder Academia
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-primary hover:bg-surface rounded-lg transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-border overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-text hover:bg-surface rounded-xl transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://academia.lionsecurity.ao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-3 py-4 bg-accent text-white rounded-xl text-base font-semibold"
              >
                Academia
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
