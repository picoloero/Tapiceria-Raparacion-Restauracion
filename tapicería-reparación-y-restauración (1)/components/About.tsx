import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-leather-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* About Info */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
            <div className="lg:w-1/2">
                <img 
                    src="https://i.postimg.cc/NGkFFL9w/Captura-de-pantalla-2025-12-14-a-las-0-02-19.png" 
                    alt="Artesano trabajando" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
            </div>
            <div className="lg:w-1/2">
                <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl mb-6">Más que un oficio, una pasión</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Soy un tapicero autónomo con más de 30 años de experiencia devolviendo la vida a muebles que parecían perdidos.
                    Creo firmemente en la sostenibilidad: restaurar es mejor que tirar.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    Mi taller no es una fábrica; cada pieza recibe atención individualizada, seleccionando las mejores telas y espumas para asegurar que tu mueble dure otros 20 años más.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center border-t border-leather-200 pt-8">
                    <div>
                        <span className="block text-3xl font-bold text-leather-700">+30</span>
                        <span className="text-sm text-gray-600">Años Exp.</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-leather-700">+500</span>
                        <span className="text-sm text-gray-600">Proyectos</span>
                    </div>
                    <div>
                        <span className="block text-3xl font-bold text-leather-700">100%</span>
                        <span className="text-sm text-gray-600">Garantía</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
            <h3 className="text-2xl font-serif font-bold text-center text-gray-900 mb-12">Lo que dicen nuestros clientes</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {TESTIMONIALS.map((t) => (
                    <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex text-yellow-400 mb-4">
                            {[...Array(t.rating)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <p className="text-gray-600 italic mb-6">"{t.text}"</p>
                        <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-leather-200 flex items-center justify-center text-leather-800 font-bold">
                                {t.name.charAt(0)}
                            </div>
                            <div className="ml-3">
                                <p className="text-sm font-bold text-gray-900">{t.name}</p>
                                <p className="text-xs text-gray-500">{t.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;
