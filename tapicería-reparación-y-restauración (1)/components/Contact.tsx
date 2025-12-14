import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setFormStatus('sent');
            // Reset after 3 seconds
            setTimeout(() => setFormStatus('idle'), 3000);
        }, 1500);
    };

  return (
    <section id="contact" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
                <h2 className="text-3xl font-serif font-bold mb-6">Hablemos de tu proyecto</h2>
                <p className="text-gray-400 mb-8 text-lg">
                    ¿Tienes dudas? ¿Quieres un presupuesto? Envíame una foto de tu mueble o ven a visitarnos al taller.
                    Te asesoraré sin compromiso.
                </p>

                <div className="space-y-6">
                    <div className="flex items-start">
                        <Phone className="h-6 w-6 text-leather-500 mt-1 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg">Teléfono / WhatsApp</h3>
                            <p className="text-gray-300 hover:text-white transition-colors">{PHONE_NUMBER}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <Mail className="h-6 w-6 text-leather-500 mt-1 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg">Email</h3>
                            <p className="text-gray-300 hover:text-white transition-colors">{EMAIL_ADDRESS}</p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <MapPin className="h-6 w-6 text-leather-500 mt-1 mr-4" />
                        <div>
                            <h3 className="font-bold text-lg">Taller</h3>
                            <p className="text-gray-300">
                                C/ Pablo Neruda 16<br />
                                30320 Fuente Álamo, Murcia
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-gray-800 rounded-xl border border-gray-700">
                    <h4 className="font-bold text-leather-400 mb-2">Horario de Atención</h4>
                    <p className="text-gray-300">Lunes a Viernes: 09:00 - 14:00 y 16:00 - 20:30</p>
                    <p className="text-gray-300">Sábados: Medio día</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-xl">
                <h3 className="text-2xl font-bold mb-6">Envíame un mensaje</h3>
                {formStatus === 'sent' ? (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative text-center">
                        <strong className="font-bold">¡Mensaje Enviado!</strong>
                        <span className="block sm:inline"> Me pondré en contacto contigo pronto.</span>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                            <input
                                type="text"
                                id="name"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-leather-500 focus:border-transparent outline-none transition-all"
                                placeholder="Tu nombre"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email o Teléfono</label>
                            <input
                                type="text"
                                id="email"
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-leather-500 focus:border-transparent outline-none transition-all"
                                placeholder="contacto@ejemplo.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">¿Qué necesitas tapizar?</label>
                            <textarea
                                id="message"
                                rows={4}
                                required
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-leather-500 focus:border-transparent outline-none transition-all"
                                placeholder="Ej: Tengo un sillón orejero antiguo que necesita tela nueva..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={formStatus === 'sending'}
                            className="w-full flex items-center justify-center bg-leather-600 hover:bg-leather-700 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {formStatus === 'sending' ? 'Enviando...' : (
                                <>
                                    Enviar Mensaje <Send className="ml-2 h-5 w-5" />
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;