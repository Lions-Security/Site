import { motion } from 'motion/react';
import { Target, Eye, Award, CheckCircle2 } from 'lucide-react';

const values = [
  { title: 'Excelência Técnica', desc: 'Buscamos o mais alto nível de conhecimento e execução.' },
  { title: 'Ética e Confiança', desc: 'Atuamos com responsabilidade, transparência e respeito.' },
  { title: 'Inovação Contínua', desc: 'Adotamos novas tecnologias para enfrentar ameaças em evolução.' },
  { title: 'Educação', desc: 'Acreditamos que a melhor defesa começa com o conhecimento.' },
];

export default function About() {
  return (
    <section id="sobre" className="py-32 overflow-hidden relative z-10 border-t border-border">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <p className="tech-label mb-6">Security Manifesto / Purpose</p>
              <h2 className="text-4xl md:text-7xl font-black text-light mb-8 leading-[0.9]">
                INTELIGÊNCIA <br/>
                ANTECEDENDO <br/>
                <span className="text-outline">O CAOS.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed max-w-xl font-medium">
                A Lion Security é a sentinela digital de Angola. Transcendemos a segurança tradicional através de uma cultura de <span className="text-light">Inteligência Ofensiva</span>, protegendo o futuro das maiores infraestruturas nacionais.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 pt-10 border-t border-white/5">
              <div className="group glass-card p-8 border-l-4 border-accent">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-accent">
                    <Target size={20} />
                  </div>
                  <h3 className="text-light font-bold text-xl uppercase tracking-tighter">Missão_Operacional</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed group-hover:text-light/90 transition-colors">
                  Proteger organizações e pessoas por meio de serviços avançados de cibersegurança, combinando operações de Red Team, soluções inovadoras e capacitação de elite.
                </p>
              </div>

              <div className="group glass-card p-8 border-l-4 border-white/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 border border-white/10 flex items-center justify-center text-light">
                    <Eye size={20} />
                  </div>
                  <h3 className="text-light font-bold text-xl uppercase tracking-tighter">Visão_Estratégica</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed group-hover:text-light/90 transition-colors">
                  Ser a referência absoluta em soberania digital em Angola e no mercado internacional, reconhecida pela excelência técnica e domínio tecnológico.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-6">
               {values.map((v, i) => (
                 <div key={i} className="space-y-3 group">
                   <div className="flex items-center gap-2">
                     <CheckCircle2 size={12} className="text-accent opacity-50 group-hover:opacity-100" />
                     <h4 className="text-[10px] font-bold text-light uppercase tracking-widest">{v.title}</h4>
                   </div>
                   <p className="text-[10px] text-muted leading-tight opacity-60 group-hover:opacity-100 transition-opacity">
                     {v.desc}
                   </p>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-white/10 shadow-2xl relative group">
              <img 
                src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Lion Security Command Center" 
                className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
            </div>
            
            {/* Background Geometric Accent */}
            <div className="absolute -z-10 -bottom-10 -right-10 w-full h-full border-r-2 border-b-2 border-accent/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
