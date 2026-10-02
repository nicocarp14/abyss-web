import { Link, NavLink, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

// Navegación compartida; NavLink marca la vista actualmente activa.
export default function Header({ onCartOpen }) {
  const { count } = useCart()
  const { pathname } = useLocation()
  return <header className="header">
    <Link className="wordmark" to="/" aria-label="ABYSS, inicio">ABYSS<span>®</span></Link>
    <nav aria-label="Navegación principal">
      <NavLink to="/catalogo" className={({ isActive }) => isActive || pathname.startsWith('/producto/') ? 'active' : undefined}>Cascos</NavLink><NavLink to="/nosotros">Manifiesto</NavLink><NavLink to="/contacto">Contacto</NavLink>
    </nav>
    <button className="cart-trigger" onClick={onCartOpen} aria-label={`Abrir carrito, ${count} productos`}>BOLSA <span>{String(count).padStart(2, '0')}</span><b>↗</b></button>
  </header>
}
