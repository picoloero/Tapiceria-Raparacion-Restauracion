import React from 'react';
import { Armchair, Sofa, Car, Scissors, Hammer, Ruler } from 'lucide-react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'armchair': return <Armchair className="h-10 w-10 text-leather-600" />;
      case 'sofa': return <Sofa className="h-10 w-10 text-leather-600" />;
      case 'car': return <Car className="h-10 w-10 text-leather-600" />;
      case 'scissors': return <Scissors className="h-10 w-10 text-leather-600" />;
      default: return <Hammer className="h-10 w-10 text-leather-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-4">Nuestros Servicios</h2>
          <div className="h-1 w-20 bg-leather-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Combinamos técnicas artesanales con las últimas tendencias en decoración para ofrecerte soluciones únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 border-b-4 border-transparent hover:border-leather-600 group"
            >
              <div className="bg-leather-50 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-leather-800 rounded-2xl p-8 md:p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row items-center justify-between">
            <div className="relative z-10 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-bold text-white mb-2">¿Tienes una idea en mente?</h3>
                <p className="text-leather-100">Fabricamos cabeceros, otomanas y piezas exclusivas a medida.</p>
            </div>
            <div className="relative z-10 flex items-center space-x-2 text-white">
                <Ruler className="h-6 w-6 text-leather-300" />
                <span className="font-semibold text-lg">Trabajos 100% Personalizados</span>
            </div>
            {/* Decorative pattern */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-leather-700 rounded-full opacity-50 blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Services;
