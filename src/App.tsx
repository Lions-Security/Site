/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import About from './components/home/About';
import TrainingAcademy from './components/home/TrainingAcademy';
import StackTools from './components/home/StackTools';
import Footer from './components/layout/Footer';
import BackgroundCanvas from './components/layout/BackgroundCanvas';
import CustomCursor from './components/layout/CustomCursor';

export default function App() {
  return (
    <div className="flex bg-background text-light font-sans selection:bg-accent selection:text-white min-h-screen">
      <CustomCursor />
      <BackgroundCanvas />
      
      {/* Ambient Overlay */}
      <div id="page-overlay" aria-hidden="true"></div>

      {/* Sidebar Rail - Artistic Flair Theme */}
      <aside className="hidden lg:flex w-20 border-r border-border min-h-screen sticky top-0 flex-col items-center py-12 justify-between shrink-0 z-20 glass">
        <div className="font-display font-black text-2xl tracking-[0.2em] text-light rotate-[-90deg] whitespace-nowrap mb-15">
          LION SECURITY
        </div>
        <nav className="flex flex-col gap-12">
          <div className="w-1.5 h-1.5 bg-accent shadow-[0_0_10px_rgba(45,53,255,0.8)]" />
          <div className="w-1.5 h-1.5 bg-slate-500" />
          <div className="w-1.5 h-1.5 bg-slate-500" />
        </nav>
        <div className="tech-label rotate-[-90deg] whitespace-nowrap mt-12 opacity-50">
          ANGOLA.2026
        </div>
      </aside>

      <div className="flex-1 min-w-0 relative z-10 transition-opacity duration-1000">
        <Navbar />
        <main className="page-fade">
          <Hero />
          <Services />
          <About />
          <TrainingAcademy />
          <StackTools />
        </main>
        <Footer />
      </div>
    </div>
  );
}
