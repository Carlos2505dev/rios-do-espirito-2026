import React, { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { CustomCursor } from './components/CustomCursor';
import FloatingCTA from './components/FloatingCTA';


// Lazy loading for components below the fold
const Tickets = lazy(() => import('./components/Tickets'));
const About = lazy(() => import('./components/About'));
const Experience = lazy(() => import('./components/Experience'));
const WhatWeLived = lazy(() => import('./components/WhatWeLived'));
const Programacao = lazy(() => import('./components/Programacao'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));
const Footer = lazy(() => import('./components/Footer'));
const CallToAction = lazy(() => import('./components/CallToAction'));

const App = () => {
  return (
    <div id="root">

      <CustomCursor />

      <Navbar />
      <main>
        <Hero />

        {/* Line Up Video */}
        <section className="bg-rvl-creme-bg py-20 md:py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <button
              className="relative w-full aspect-video rounded-lg overflow-hidden group"
              aria-label="Reproduzir vídeo Line Up"
            >
              <img src="/assets/capa_rios2026.webp" alt="Line Up" loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" fill="white" className="w-10 h-10 ml-1">
                    <path d="M8 5v14l11-7z"></path>
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </section>

        <Suspense fallback={<div className="h-32 flex items-center justify-center"><div className="animate-pulse w-8 h-8 rounded-full bg-rvl-laranja/50"></div></div>}>
          <Tickets />
          <About />
          <WhatWeLived />
          <Experience />
          <Programacao />
          <Testimonials />
          <FAQ />
          <CallToAction />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <FloatingCTA />
    </div>
  );
};

export default App;


