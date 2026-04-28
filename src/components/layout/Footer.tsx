import { Shield, Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ChevronRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy/90 text-white pt-20 pb-10 border-t border-border relative z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-display font-black tracking-tighter uppercase">
                Lion Security
                <span className="ml-1 w-1.5 h-1.5 rounded-full bg-accent" />
              </span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed uppercase tracking-wider font-medium">
              Referência em cibersegurança em Angola, reconhecida pela excelência em segurança ofensiva e capacitação de talentos.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent transition-colors"><Linkedin size={16} /></a>
              <a href="#" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent transition-colors"><Facebook size={16} /></a>
              <a href="https://www.instagram.com/_lionsec_/" className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-accent transition-colors"><Instagram size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="tech-label text-white mb-8">Navegação</h4>
            <ul className="space-y-4 text-white/50 text-[11px] font-bold uppercase tracking-widest">
              <li><a href="#servicos" className="hover:text-accent flex items-center gap-2">Serviços</a></li>
              <li><a href="#formacoes" className="hover:text-accent flex items-center gap-2">Formações</a></li>
              <li><a href="#sobre" className="hover:text-accent flex items-center gap-2">Sobre Nós</a></li>
              <li><a href="https://lions-sec-website.onrender.com/" className="hover:text-accent flex items-center gap-2">Academia</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col lg:items-end lg:text-right">
            <h4 className="tech-label text-white mb-8">Luanda, Angola</h4>
            <ul className="space-y-4 text-white/50 text-[11px] font-mono tracking-widest">
              <li className="flex items-center lg:justify-end gap-3 uppercase">
                <span>+244 9XX XXX XXX</span>
                <Phone size={14} className="text-accent" />
              </li>
              <li className="flex items-center lg:justify-end gap-3">
                <span>contact@lionsecurity.co.ao</span>
                <Mail size={14} className="text-accent" />
              </li>
            </ul>
            <div className="mt-8 flex items-center lg:justify-end gap-4 opacity-50">
               <div className="w-4 h-4 bg-accent" />
               <div className="w-4 h-4 border border-white" />
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 tech-label">
          <p>© {new Date().getFullYear()} Lion Security. All Secured.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
