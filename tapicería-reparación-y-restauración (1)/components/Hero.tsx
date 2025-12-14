import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <div id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.postimg.cc/vDwwXYjj/Captura-de-pantalla-2025-12-13-a-las-23-46-00.png"
          alt="Taller de tapicería"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <div className="sm:max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Dale una segunda vida a tus <span className="text-leather-300">muebles favoritos</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 font-light leading-relaxed">
            Artesanía tradicional, materiales modernos y acabados perfectos.
            Desde restauraciones clásicas hasta diseños a medida para tu hogar o vehículo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onCtaClick}
              className="group flex items-center justify-center bg-leather-600 hover:bg-leather-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              Solicitar Presupuesto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="flex items-center justify-center bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Ver Trabajos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
