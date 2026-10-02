import { Link } from 'react-router-dom'

// Manifiesto de marca, ahora en una vista dedicada.
export default function About() {
  return <section className="about about-page section-wrap" id="nosotros"><p className="eyebrow"><i/> NO ES SOLO LLEGAR</p><div className="about-content"><h1>EL CAMINO<br/>ES <em>TODO.</em></h1><div><p>Creemos en salir sin mapa, en el viento que despeja todo y en esa curva que te hace volver a casa distinto. Creamos equipo para vivir cada kilómetro con intensidad y volver por más.</p><p>ABYSS nace para quienes no esperan que el camino sea perfecto. Para quienes hacen de cada viaje una historia y saben que lo mejor suele aparecer después de la próxima curva.</p><Link to="/catalogo">EQUIPATE PARA EL CAMINO <span>↗</span></Link></div><span className="about-symbol">A.</span></div><div className="manifesto-signature">ABYSS — EQUIPAMIENTO PARA IR MÁS LEJOS.</div></section>
}
