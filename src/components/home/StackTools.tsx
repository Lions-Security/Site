import { motion } from 'motion/react';

const tools = [
  { name: 'CLOUDFLARE', logo: './src/public/cloudflare.png' },
  { name: 'RED HAT', logo: './src/public/Red_Hat_logo.svg.png' },
  { name: 'CHECK POINT', logo: './src/public/check.png' },
  { name: 'KALI LINUX', logo: './src/public/Kali-dragon-icon.svg.png' },
  { name: 'BURP SUITE', logo: './src/public/burp-suite.jpg' },
];

export default function StackTools() {
  return (
  <section id="stack" className="py-24 bg-surface border-y border-white/5 overflow-hidden relative">
  <div className="section-container mb-20 px-4">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-accent" />
            <p className="tech-label">Stack de Operações & Parceiros</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-light leading-[1.1] uppercase tracking-tighter">
            TECNOLOGIAS DE <br />
            <span className="text-outline">PRIMEIRA LINHA.</span>
          </h2>
        </div>
      </div>
      
      {/* Infinite Marquee Slider */}
      <div className="relative flex overflow-hidden group py-15">
        <motion.div 
          className="flex whitespace-nowrap gap-32 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="flex items-center gap-10 group opacity-40 hover:opacity-100 transition-opacity">
              <img src={tool.logo} alt={tool.name} className="h-16 w-auto object-contain" />
              <span className="text-6xl font-display font-black text-light tracking-tighter italic select-none">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
