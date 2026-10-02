import { Link } from 'react-router-dom'

// Pie compartido, enlaza al inicio sin recargar la aplicación.
export default function Footer() {
  return <footer className="footer"><Link className="wordmark" to="/">ABYSS<span>®</span></Link><span>EQUIPAMIENTO PARA IR MÁS LEJOS.</span><span>BUENOS AIRES, ARGENTINA · © 2025 ABYSS</span><Link to="/" aria-label="Volver al inicio">VOLVER ARRIBA ↑</Link></footer>
}
