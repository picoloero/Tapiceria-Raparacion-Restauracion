import { Service, PortfolioItem, Testimonial } from './types';

export const BUSINESS_NAME = "Tapicería Reparación y Restauración";
export const OWNER_NAME = "Carlos M.";
export const PHONE_NUMBER = "+34 650 220 010";
export const EMAIL_ADDRESS = "picolettogarcia@gmail.com";

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Restauración de Muebles Antiguos',
    description: 'Recuperamos el esplendor original de tus piezas clásicas utilizando técnicas tradicionales y materiales de alta calidad.',
    icon: 'armchair'
  },
  {
    id: '2',
    title: 'Tapicería Moderna y a Medida',
    description: 'Diseño y retapizado de sofás, sillones y sillas modernas con telas actuales, antimanchas y duraderas.',
    icon: 'sofa'
  },
  {
    id: '3',
    title: 'Tapicería de Automoción',
    description: 'Renovación de asientos de coche, techos y paneles de puertas. Especialistas en coches clásicos.',
    icon: 'car'
  },
  {
    id: '4',
    title: 'Cojines y Cortinas',
    description: 'Confección de cojines a medida, espumas de alta densidad y cortinas para armonizar tu espacio.',
    icon: 'scissors'
  }
];

// INSTRUCCIONES PARA CAMBIAR FOTOS:
// 1. Sube tu foto a un sitio como postimages.org o imgur.com
// 2. Copia el "Enlace Directo" (debe terminar en .jpg o .png)
// 3. Pega el enlace dentro de las comillas en 'imageUrl'
export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    title: 'Sillón Estampado Ikat',
    category: 'Tapicería',
    // PEGA TU ENLACE ABAJO ENTRE LAS COMILLAS
    imageUrl: 'https://i.postimg.cc/Z0BVM6k3/Captura-de-pantalla-2025-12-13-a-las-21-34-02.png',
    description: 'Retapizado completo de sillón con tela de patrón Ikat gris y blanco, modernizando una pieza clásica.'
  },
  {
    id: '2',
    title: 'Sillón Geométrico',
    category: 'Tapicería',
    // PEGA TU ENLACE ABAJO ENTRE LAS COMILLAS
    imageUrl: 'https://i.postimg.cc/23s2R3mM/Captura-de-pantalla-2025-12-13-a-las-21-59-31.png',
    description: 'Sillón orejero actualizado con tejido geométrico en rombos, aportando elegancia y modernidad.'
  },
  {
    id: '3',
    title: 'Banco Corrido Capitoné',
    category: 'Comercial',
    // PEGA TU ENLACE ABAJO ENTRE LAS COMILLAS
    imageUrl: 'https://i.postimg.cc/hhkpWhgH/Captura-de-pantalla-2025-12-13-a-las-21-53-08.png',
    description: 'Fabricación y tapizado de sillon orejero corrido con respaldo alto y diseño acanalado para local comercial.'
  },
  {
    id: '4',
    title: 'Restauración Asiento Maquinaria',
    category: 'Automoción',
    // PEGA TU ENLACE ABAJO ENTRE LAS COMILLAS
    imageUrl: 'https://i.postimg.cc/PNg2sNTs/Captura-de-pantalla-2025-12-13-a-las-22-07-40.png',
    description: 'Increíble transformación: de asiento de carretilla elevadora destrozado a un acabado profesional y duradero.'
  },
  {
    id: '5',
    title: 'Silla Luis XV Renovada',
    category: 'Restauración',
    // PEGA TU ENLACE ABAJO ENTRE LAS COMILLAS
    imageUrl: 'https://i.postimg.cc/QHcSXsxy/Captura-de-pantalla-2025-12-13-a-las-21-48-24.png',
    description: 'Proceso de restauración desde el chasis de madera hasta el tapizado final en blanco puro.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Ana García',
    role: 'Cliente Particular',
    text: 'Carlos hizo un trabajo increíble con el sofá de mi abuela. Parece nuevo pero conserva su encanto. ¡Recomendado 100%!',
    rating: 5
  },
  {
    id: '2',
    name: 'Restaurante El Olivo',
    role: 'Cliente Comercial',
    text: 'Tapizamos todas las sillas de nuestro local. Rapidez, limpieza y un acabado muy profesional.',
    rating: 5
  },
  {
    id: '3',
    name: 'Miguel Ángel',
    role: 'Coleccionista',
    text: 'Es difícil encontrar artesanos que entiendan cómo tratar un coche clásico. El resultado fue espectacular.',
    rating: 5
  }
];