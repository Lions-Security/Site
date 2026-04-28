import { motion } from 'motion/react';
import { GraduationCap, BookOpen, Users, PlayCircle, ExternalLink } from 'lucide-react';

export default function TrainingAcademy() {
  return (
    <section id="formacoes" className="py-24 bg-navy relative overflow-hidden z-10 border-y border-border">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/10 -skew-x-12 translate-x-20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/zqFHX6lot34?si=J9i-SR0m1QvCmz04"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Stat Badges */}
            <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-3xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
                  <Users size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">+500</div>
                  <div className="text-xs text-muted font-medium uppercase tracking-wider">Alunos Formados</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
              <GraduationCap size={14} />
              Educação e Capacitação
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 italic tracking-tight">
              Capacite sua Equipa com a <span className="text-accent underline">Lion Academy</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Acreditamos que a melhor defesa começa com conhecimento. Nossa plataforma de ensino oferece treinamentos práticos de Red Team, SOC e Defesa de Redes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <BookOpen className="text-accent" size={20} />
                <span className="font-medium">Certificações Práticas</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="text-accent" size={20} />
                <span className="font-medium">Suporte Especializado</span>
              </div>
              <div className="flex items-center gap-3">
                <PlayCircle className="text-accent" size={20} />
                <span className="font-medium">Labs em Tempo Real</span>
              </div>
              <div className="flex items-center gap-3">
                <ExternalLink className="text-accent" size={20} />
                <span className="font-medium">Acesso Vitalício</span>
              </div>
            </div>

            <a
              href="https://lions-sec-website.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-accent/40 transition-all active:scale-95"
            >
              Começar a Aprender Agora
              <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
