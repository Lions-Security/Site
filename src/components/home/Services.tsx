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
    title: 'Offensive Operations',
    subtitle: 'Pentesting & Red Team',
    desc: 'Simulações adversárias avançadas para identificar vulnerabilidades críticas e testar a resiliência das camadas de defesa organizacional.',
    img: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Defensive Strategy',
    subtitle: 'SOC & Managed Detection',
    desc: 'Monitoramento contínuo 24/7 e resposta proativa a ameaças, garantindo visibilidade total e proteção de ativos digitais críticos.',
    img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200',
  },
  {
    title: 'Cloud Security',
    subtitle: 'Cloudflare Zero Trust',
    desc: 'Implementação de arquiteturas Zero Trust e proteção de borda para garantir acesso seguro e performance global para infraestruturas híbridas.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Critical Systems',
    subtitle: 'Infraestrutura Resiliente',
    desc: 'Engenharia de infraestruturas tecnológicas robustas, desenhadas para resistir a falhas sistêmicas e ataques de alta complexidade.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Incident Response',
    subtitle: 'Contenção & Recuperação',
    desc: 'Mobilização tática imediata para neutralizar agentes de ameaça, mitigar danos e restaurar a normalidade operacional em tempo recorde.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
  },
  {
    title: 'Security Governance',
    subtitle: 'Consultoria Estratégica',
    desc: 'Alinhamento completo da cibersegurança com os objetivos de negócio, estabelecendo frameworks de compliance e governança de elite.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-32 relative">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <p className="tech-label mb-6">Expertise & Solutions</p>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black leading-tight uppercase tracking-tighter">
                Defesa Cibernética<br/>
                <span className="text-outline">Multi-dimensional</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed font-medium max-w-2xl">
                Soluções estratégicas e operacionais para proteger os seus ativos digitais mais valiosos em Angola, com foco na integridade, disponibilidade e confidencialidade.
              </p>
            </div>
          </div>
          <div className="lg:col-span-4 lg:text-right" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group glass-card relative h-[550px] overflow-hidden rounded-sm"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-95 transition-opacity group-hover:opacity-100" />
              
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="mb-8 relative">
                  <div className="w-16 h-[1px] bg-accent mb-8 transform origin-left transition-transform scale-x-50 group-hover:scale-x-100" />
                  <div className="space-y-4">
                    <p className="tech-label text-accent bg-transparent p-0 block leading-none mb-2 opacity-80">{service.subtitle}</p>
                    <h3 className="text-3xl font-black text-light leading-none uppercase tracking-tighter">{service.title}</h3>
                  </div>
                </div>
                
                <p className="text-muted text-sm leading-relaxed mb-12 opacity-60 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 max-w-xs font-medium">
                  {service.desc}
                </p>

                <div className="flex items-center justify-between pt-8 border-t border-white/5">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent group-hover:text-light transition-colors">Protocol_Enabled</span>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                     <ArrowRight size={16} className="text-light transform -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
