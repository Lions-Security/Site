import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Users, PlayCircle, ExternalLink, ShieldCheck } from 'lucide-react';

export default function TrainingAcademy() {
  return (
    <section id="formacoes" className="py-32 relative overflow-hidden z-10 border-t border-white/5 bg-navy">
      {/* Background Cyber Accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative lg:w-full order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-blue-500/30 blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative aspect-video bg-background rounded-sm overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  className="w-full h-full grayscale brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
                  src="https://www.youtube.com/embed/zqFHX6lot34?si=J9i-SR0m1QvCmz04"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Status Indicator */}
              <div className="absolute -top-4 -right-4 bg-background border border-white/10 px-4 py-2 rounded-sm backdrop-blur-md z-20 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-[10px] font-mono text-light/70 uppercase tracking-widest">Live_Academy_Stream</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-full order-1 lg:order-2"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-accent bg-accent/5">
                <GraduationCap size={20} />
              </div>
              <span className="tech-label">LionSec Training Academy</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-black text-light leading-[0.85] mb-10 tracking-tighter uppercase">
              CAPACITAÇÃO <br />
              <span className="text-outline">DE ELITE.</span>
            </h2>

            <p className="text-muted text-lg mb-10 font-medium leading-relaxed max-w-xl">
              Acreditamos que a soberania digital começa com o conhecimento. Nossa plataforma oferece treinamentos táticos de Red Team, SOC e Defesa de Redes, forjando a próxima geração de especialistas em Angola.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12 mb-12">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-accent" />
                  <h4 className="text-light font-bold text-sm uppercase tracking-widest">Certificações Práticas</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed opacity-80">Currículo focado em execução real e cenários de combate digital.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-accent" />
                  <h4 className="text-light font-bold text-sm uppercase tracking-widest">Labs Cyber Range</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed opacity-80">Ambientes virtualizados de ataque e defesa para treinamento prático.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-accent" />
                  <h4 className="text-light font-bold text-sm uppercase tracking-widest">Suporte de Elite</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed opacity-80">Mentoria direta com instrutores certificados internacionalmente.</p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-4 bg-accent" />
                  <h4 className="text-light font-bold text-sm uppercase tracking-widest">Acesso Vitalício</h4>
                </div>
                <p className="text-muted text-xs leading-relaxed opacity-80">Mantenha-se atualizado com novas atualizações e novas lições.</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-10 border-t border-white/5">
              <a
                href="https://lions-sec-website.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-4 px-12 py-6 bg-accent text-white font-black text-xs uppercase tracking-[0.2em] overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">Entrar na Academy</span>
                <ExternalLink size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                <div className="absolute inset-x-0 bottom-0 h-full bg-bright transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </a>

              <div className="flex items-center gap-4">
                <ShieldCheck size={24} className="text-light/20" />
                <p className="text-[10px] font-mono text-muted uppercase tracking-[0.2em] leading-tight">
                  Framework Alinhado <br />
                  pelo NIST / MITRE
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
