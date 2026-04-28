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
    <section id="stack" className="py-20 bg-surface border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <p className="tech-label text-accent mb-4">Stack de Ferramentas & Soluções</p>
          <h2 className="text-2xl font-display font-bold text-light">Tecnologias que operamos diariamente</h2>
        </div>
      </div>
      
      {/* Infinite Marquee Slider */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-16 items-center py-4"
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {[...tools, ...tools, ...tools].map((tool, i) => (
            <div key={`${tool.name}-${i}`} className="flex items-center gap-4 group opacity-40 hover:opacity-100 transition-opacity">
              <img src={tool.logo} alt={tool.name} className="h-10 w-auto object-contain" />
              <span className="text-4xl font-display font-black text-light tracking-tighter italic select-none">
                {tool.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
