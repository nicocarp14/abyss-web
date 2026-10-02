import { Outlet } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Cart from './Cart.jsx'

// Marco común que mantiene header, footer y carrito en todas las páginas.
export default function Layout() {
  const { isOpen, openCart, closeCart } = useCart()
  return <><Header onCartOpen={openCart}/><main><Outlet/></main><Footer/><Cart open={isOpen} onClose={closeCart}/></>
}
