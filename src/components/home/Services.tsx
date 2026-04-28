import { motion } from 'motion/react';
import { 
  Target, 
  Eye, 
  Server, 
  Cloud, 
  ShieldAlert, 
  Users, 
  ArrowRight,
  Database,
  Search
} from 'lucide-react';

const services = [
  {
    title: 'Pentesting & Red Team',
    desc: 'Simulação de ataques reais para identificar e mitigar vulnerabilidades antes que os invasores o façam.',
    icon: Target,
    color: 'bg-red-500/10 text-red-600',
  },
  {
    title: 'SOC & Blue Team',
    desc: 'Centro de Operações de Segurança dedicado ao monitoramento contínuo e defesa proativa.',
    icon: Eye,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Infraestrutura Crítica',
    desc: 'Consultoria e implementação de infraestruturas tecnológicas resilientes e seguras.',
    icon: Server,
    color: 'bg-slate-500/10 text-slate-600',
  },
  {
    title: 'Cloudflare Managed',
    desc: 'Implementação de soluções Cloudflare para proteção de borda e aceleração de performance.',
    icon: Cloud,
    color: 'bg-orange-500/10 text-orange-600',
  },
  {
    title: 'Resposta a Incidentes',
    desc: 'Equipa rápida para conter ameaças e recuperar sistemas após uma violação de segurança.',
    icon: ShieldAlert,
    color: 'bg-indigo-500/10 text-indigo-600',
  },
  {
    title: 'Consultoria Estratégica',
    desc: 'Alinhamento da segurança digital com os objetivos de negócio da sua organização.',
    icon: Users,
    color: 'bg-emerald-500/10 text-emerald-600',
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-light mb-4">Especialização Multi-Camadas</h2>
          <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Oferecemos um portfólio completo de serviços de segurança ofensiva e defensiva adaptados ao mercado angolano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-10 bg-navy border border-border hover:bg-surface transition-all relative overflow-hidden"
            >
              <div className={`w-12 h-0.5 mb-8 ${index % 2 === 0 ? 'bg-primary' : 'bg-accent'}`} />
              <div className={`w-10 h-10 ${service.color} flex items-center justify-center mb-6 border border-current`}>
                <service.icon size={20} />
              </div>
              <h3 className="text-lg font-display font-bold text-light mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-muted text-xs leading-relaxed mb-8 h-16">
                {service.desc}
              </p>
              <button className="tech-label text-accent flex items-center gap-2 group-hover:gap-4 transition-all">
                Explorar <Target size={12} />
              </button>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 opacity-0 group-hover:opacity-10 transition-opacity">
                 <div className="absolute top-0 right-0 border-t-2 border-r-2 border-primary w-full h-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
