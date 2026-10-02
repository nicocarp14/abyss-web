import { Link } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'

// Inicio: banner original, beneficios y una selección corta de modelos.
export default function Home() {
  return <>
    <section className="hero" id="inicio"><img className="hero-banner" src="/images/banner.jpeg" alt="Banner ABYSS: pilotos de motociclismo y casco, con las opciones Naked urbano-deportivo y Enduro adventure-off road"/></section>
    <section className="benefits"><div className="benefit-intro"><p className="eyebrow"><i/> CADA DETALLE CUENTA</p><h2>LA PROTECCIÓN<br/>TAMBIÉN <em>ES ACTITUD.</em></h2></div><div className="benefit-item"><span>01</span><b>SEGURIDAD<br/>CERTIFICADA</b><p>Construcción testeada bajo estándares internacionales.</p></div><div className="benefit-item"><span>02</span><b>INGENIERÍA<br/>DE PRECISIÓN</b><p>Materiales livianos. Ajuste perfecto. Cero distracciones.</p></div><div className="benefit-item"><span>03</span><b>GARANTÍA<br/>ABYSS</b><p>Dos años de respaldo para seguir haciendo kilómetros.</p></div></section>
    <section className="catalog section-wrap"><div className="section-heading"><div><p className="eyebrow"><i/> EQUIPATE PARA LO QUE VIENE</p><h2>DESTACADOS<span>.</span></h2></div><p>Una selección para salir<br/>a buscar nuevos caminos.</p></div><ProductGrid featured/><div className="home-catalog-link"><Link className="button button-orange" to="/catalogo">VER TODO EL CATÁLOGO <span>↘</span></Link></div></section>
  </>
}
