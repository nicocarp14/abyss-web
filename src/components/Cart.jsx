import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'
import HelmetArt from './HelmetArt.jsx'

// Panel global: permanece montado mientras el usuario cambia de ruta.
export default function Cart({ open, onClose }) {
  const { items, changeQuantity, removeItem } = useCart()
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return <>
    <button className={`cart-scrim ${open ? 'visible' : ''}`} onClick={onClose} aria-label="Cerrar carrito" tabIndex={open ? 0 : -1}/>
    <aside className={`cart-panel ${open ? 'open' : ''}`} aria-label="Carrito de compras" aria-hidden={!open}>
      <div className="cart-head"><div><p className="eyebrow"><i/> TU EQUIPO</p><h2>LA BOLSA<span>.</span></h2></div><button className="close-cart" onClick={onClose} aria-label="Cerrar carrito">×</button></div>
      {items.length === 0 ? <div className="empty-cart"><span>∅</span><p>TU BOLSA ESTÁ VACÍA.</p><button onClick={onClose}>EXPLORAR CASCOS ↘</button></div> : <>
        <div className="cart-items">{items.map((item) => <div className="cart-item" key={item.id}><div className="cart-thumb"><HelmetArt color={item.color} dark={item.dark}/></div><div className="cart-item-copy"><p>{item.type} / {item.name}</p><strong>{formatPrice(item.price)}</strong><div className="quantity"><button onClick={() => changeQuantity(item.id, -1)} aria-label={`Restar ${item.name}`}>−</button><span>{item.quantity}</span><button onClick={() => changeQuantity(item.id, 1)} aria-label={`Sumar ${item.name}`}>+</button><button className="remove-item" onClick={() => removeItem(item.id)}>ELIMINAR</button></div></div></div>)}</div>
        <div className="cart-summary"><div><span>ENVÍO</span><strong>GRATIS</strong></div><div className="total-line"><span>TOTAL</span><strong>{formatPrice(total)}</strong></div><button className="button button-orange checkout" onClick={() => alert('¡Gracias! El checkout estará disponible muy pronto.')}>CONTINUAR COMPRA <span>↗</span></button><p>COMPRA SEGURA · CAMBIOS GRATIS</p></div>
      </>}
    </aside>
  </>
}
