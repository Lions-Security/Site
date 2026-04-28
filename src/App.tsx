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
