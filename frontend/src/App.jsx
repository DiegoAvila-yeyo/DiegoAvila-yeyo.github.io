import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/layout/HeroSection';
import { PhilosophySection } from './components/layout/PhilosophySection';
import { Footer } from './components/layout/Footer';

// Lazy Loading de componentes pesados
const MoodSelector = lazy(() => import('./components/MoodSelector').then(module => ({ default: module.MoodSelector })));
const SignatureGallery = lazy(() => import('./components/SignatureGallery').then(module => ({ default: module.SignatureGallery })));
const ReservationForm = lazy(() => import('./components/ReservationForm').then(module => ({ default: module.ReservationForm })));
const Testimonials = lazy(() => import('./components/Testimonials')); // Asumiendo default export

// Componente de carga minimalista
const LoadingFallback = () => (
  <div className="h-96 w-full flex items-center justify-center bg-[var(--color-cafe-dark)]">
    <div className="w-12 h-12 border-2 border-[var(--color-gold-accent)] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Lógica de Barra de Progreso
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-cafe-dark)] text-[var(--color-cafe-light)] font-sans antialiased selection:bg-[var(--color-gold-accent)] selection:text-[var(--color-cafe-dark)]">
      
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-[var(--color-gold-accent)] z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <Navbar />

      <main>
        <HeroSection />
        
        <PhilosophySection />

        <Suspense fallback={<LoadingFallback />}>
          <section id="experiencia" className="relative py-20 bg-gradient-to-b from-[var(--color-cafe-dark)] to-[#150f0a]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[var(--color-gold-accent)]/30 to-transparent"></div>
            <MoodSelector />
          </section>

          <section id="menú">
            <SignatureGallery />
          </section>

          <Testimonials />

          <ReservationForm />
        </Suspense>

      </main>

      <Footer />
    </div>
  );
}

export default App;