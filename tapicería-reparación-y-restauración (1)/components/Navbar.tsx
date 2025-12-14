import React, { useState } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { BUSINESS_NAME } from '../constants';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Servicios', id: 'services' },
    { name: 'Portafolio', id: 'portfolio' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Contacto', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('hero')}>
            <div className="bg-leather-700 p-2 rounded-full mr-2">
                <Scissors className="h-6 w-6 text-white" />
            </div>
            <span className="font-serif text-2xl font-bold text-gray-800 tracking-tight">{BUSINESS_NAME}</span>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="text-gray-600 hover:text-leather-600 px-3 py-2 rounded-md text-sm font-medium transition-colors uppercase tracking-wider"
              >
                {link.name}
              </button>
            ))}
            <button
                onClick={() => handleNavClick('contact')}
                className="bg-leather-600 text-white px-5 py-2 rounded-full font-medium hover:bg-leather-700 transition-colors shadow-lg"
            >
                Pedir Presupuesto
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.id)}
                className="block w-full text-left px-3 py-4 rounded-md text-base font-medium text-gray-700 hover:text-leather-600 hover:bg-leather-50"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
