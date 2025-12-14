import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import GeminiAssistant from './components/GeminiAssistant';
import { BUSINESS_NAME } from './constants';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      <Navbar onNavigate={scrollToSection} />
      
      <main className="flex-grow">
        <Hero onCtaClick={() => scrollToSection('contact')} />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
                <span className="text-2xl font-serif font-bold text-white">{BUSINESS_NAME}</span>
                <p className="text-sm mt-2">Recuperando la belleza de lo clásico.</p>
            </div>
            <div className="text-sm text-center md:text-right">
                <p>&copy; {new Date().getFullYear()} {BUSINESS_NAME}. Todos los derechos reservados.</p>
                <p className="mt-1">Diseñado para artesanos.</p>
            </div>
        </div>
      </footer>

      <GeminiAssistant />
    </div>
  );
};

export default App;
