import { Link } from 'react-router-dom'

// Vista para URLs que no coinciden con ninguna ruta.
export default function NotFound() {
  return <section className="not-found"><p className="eyebrow"><i/> ERROR 404</p><h1>TE FUISTE<br/>DE RUTA<span>.</span></h1><p>La página que buscás no está por acá.</p><Link className="button button-orange" to="/">VOLVER AL INICIO <span>↗</span></Link></section>
}
