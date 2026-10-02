// Catálogo de ejemplo: cada objeto describe un modelo de casco.
export const products = [
  { id: 1, name: 'VORTEX R1', type: 'Integral', code: 'VTX-R1', price: 289900, colors: ['#ff5a00', '#171717', '#e8e5dc'], sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'], color: '#ff5a00', dark: '#271307', tag: 'BEST SELLER', art: 'art-orange', description: 'Perfil aerodinámico, visor amplio y ventilación optimizada para acompañarte tanto en ciudad como en ruta.' },
  { id: 2, name: 'SHADOW X', type: 'Integral', code: 'SHD-X', price: 319900, colors: ['#131313', '#777777'], sizes: ['XS', 'S', 'M', 'L', 'XL'], color: '#353535', dark: '#090909', tag: 'NUEVO', art: 'art-shadow', description: 'Un integral de líneas sobrias y ajuste envolvente, creado para rodar con comodidad todos los días.' },
  { id: 3, name: 'NOMAD 7', type: 'Modular', code: 'NMD-07', price: 349900, colors: ['#dedbd2', '#303030', '#c44821'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], color: '#d0cbc0', dark: '#37342f', tag: 'RUTA', art: 'art-light', description: 'Diseño modular para viajes largos: versatilidad, amplitud y confort en cada parada.' },
  { id: 4, name: 'APEX PRO', type: 'Integral', code: 'APX-P', price: 419900, colors: ['#de311d', '#111111'], sizes: ['S', 'M', 'L', 'XL'], color: '#ce321c', dark: '#171414', tag: 'RACING', art: 'art-red', description: 'Inspirado en la pista, con una silueta compacta y una postura lista para acelerar.' },
  { id: 5, name: 'DISTRICT', type: 'Abierto', code: 'DST-01', price: 199900, colors: ['#171717', '#ddd5c6'], sizes: ['S', 'M', 'L', 'XL'], color: '#75736c', dark: '#191919', tag: 'URBANO', art: 'art-gray', description: 'Casco abierto y liviano para moverte por la ciudad con libertad y estilo.' },
  { id: 6, name: 'TEMPEST', type: 'Integral', code: 'TMP-02', price: 379900, colors: ['#e8e5dc', '#ff5a00'], sizes: ['S', 'M', 'L', 'XL', 'XXL'], color: '#e4dfd4', dark: '#9f3713', tag: 'SERIE LIMITADA', art: 'art-cream', description: 'Una edición de carácter, con interior confortable y una presencia imposible de confundir.' },
  { id: 7, name: 'ROAMER GT', type: 'Modular', code: 'RMR-GT', price: 329900, colors: ['#292c27', '#a9a694'], sizes: ['S', 'M', 'L', 'XL'], color: '#454941', dark: '#171916', tag: 'TOURING', art: 'art-green', description: 'Pensado para sumar kilómetros: modularidad práctica y una forma cómoda para el camino.' },
  { id: 8, name: 'AFTERHOURS', type: 'Abierto', code: 'AFH-08', price: 229900, colors: ['#161616', '#b75226'], sizes: ['XS', 'S', 'M', 'L', 'XL'], color: '#1b1b1b', dark: '#070707', tag: 'EDICIÓN NOCHE', art: 'art-night', description: 'Una silueta abierta de inspiración clásica, actualizada para recorrer la ciudad de noche.' },
]

// Formateamos precios una sola vez para todas las vistas.
export function formatPrice(price) {
  return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price)
}
