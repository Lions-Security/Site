import { motion } from 'motion/react';
import { Shield, ChevronRight, Lock, Terminal, ShieldCheck, Cloud } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-border">
      {/* Background Decor */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="tech-label text-accent mb-6 flex items-center gap-4"
            >
              <div className="w-12 h-0.5 bg-accent" />
              Excelência em cibersegurança em Angola
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-display font-black leading-[0.9] text-light mb-8"
            >
              RESILIÊNCIA<br/>
              <span className="text-outline">OFENSIVA.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-md text-lg text-light/80 mb-10 leading-relaxed font-medium"
            >
              Protegemos organizações e pessoas no ambiente digital com serviços avançados de cibersegurança e operações de <span className="font-black underline decoration-accent decoration-2 underline-offset-4">Red Team</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#servicos"
                className="px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors active:scale-95"
              >
                Nossos Serviços
              </a>
              <div className="flex items-center gap-4">
                <div className="px-4 py-3 bg-surface border border-border tech-label text-[#1A1F6E]">Cloudflare Partner</div>
                <div className="px-4 py-3 bg-surface border border-border tech-label text-[#1A1F6E]">SOC 24/7</div>
              </div>
            </motion.div>
          </div>

          {/* Feature Grid with alternating styles */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-8 bg-surface border border-border border-sharp group">
              <div className="flex items-center gap-1 mb-6">
                 <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center font-black text-white text-[10px]">PT</div>
                 <div className="h-0.5 w-8 bg-primary" />
              </div>
              <h3 className="text-sm font-bold uppercase mb-2 leading-none">Pentesting</h3>
              <p className="text-[11px] text-muted leading-relaxed">Avaliação estratégica de ativos críticos.</p>
            </div>
            <div className="p-8 bg-surface border border-border border-sharp shadow-2xl shadow-accent/5 group">
              <div className="flex items-center gap-1 mb-6">
                 <div className="w-8 h-8 border-2 border-accent rounded-sm flex items-center justify-center font-black text-accent text-[10px]">RT</div>
                 <div className="h-0.5 w-12 bg-accent" />
              </div>
              <h3 className="text-sm font-bold uppercase mb-2 leading-none">Red Team</h3>
              <p className="text-[11px] text-muted leading-relaxed">Simulação adversária de elite.</p>
            </div>
            <div className="p-8 bg-navy border border-border border-sharp group">
              <div className="flex flex-col gap-1 mb-6">
                 <div className="w-12 h-1 bg-slate-300" />
                 <div className="text-[10px] font-black text-accent tracking-tighter">SOC_OPERATIONS</div>
              </div>
              <h3 className="text-sm font-bold uppercase mb-2 leading-none">Defender</h3>
              <p className="text-[11px] text-muted leading-relaxed">Proteção contínua e monitoramento ativado.</p>
            </div>
            <div className="p-8 bg-surface border border-border border-sharp group">
              <div className="flex items-center gap-2 mb-6">
                  <Cloud size={20} className="text-orange-500" />
                  <div className="text-[8px] font-mono text-muted">CloudFlare Enterprise</div>
              </div>
              <h3 className="text-sm font-bold uppercase mb-2 leading-none">Cloudflare</h3>
              <p className="text-[11px] text-muted leading-relaxed">Conetividade segura em todos os níveis.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
