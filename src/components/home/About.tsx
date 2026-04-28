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
    <section id="sobre" className="py-24 bg-background overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <span className="text-accent font-bold text-sm tracking-widest uppercase">Quem Somos</span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-light mt-2 leading-tight">
                Líderes em Segurança Cibernética em Angola
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 p-6 bg-surface rounded-3xl border-l-4 border-accent">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-light mb-1">Missão</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Proteger organizações e pessoas no ambiente digital por meio de serviços avançados de cibersegurança, combinando operações de Red Team, soluções tecnológicas inovadoras e treinamentos especializados.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 bg-surface rounded-3xl border-l-4 border-primary">
                <div className="shrink-0 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm">
                  <Eye size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-display font-bold text-light mb-1">Visão</h3>
                  <p className="text-muted text-sm leading-relaxed">
                    Ser uma referência em cibersegurança em Angola e no mercado internacional, reconhecida pela excelência em segurança ofensiva, capacitação de talentos e soluções Cloudflare.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {values.map((value, i) => (
              <div key={value.title} className="p-8 border border-border rounded-3xl hover:border-accent/40 transition-colors">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="text-lg font-display font-bold text-light mb-2">{value.title}</h4>
                <p className="text-muted text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
            
            <div className="md:col-span-2 p-8 bg-primary rounded-3xl text-white">
              <div className="flex items-center gap-4 mb-4">
                <Award size={32} className="text-accent" />
                <h4 className="text-xl font-bold">Comprometidos com a Excelência</h4>
              </div>
              <p className="text-white/80 text-sm leading-relaxed">
                Nossa abordagem combina o rigor dos padrões internacionais com o conhecimento profundo do panorama de ameaças local.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
