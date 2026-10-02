import { Link } from 'react-router-dom'
import HelmetArt from './HelmetArt.jsx'
import { formatPrice } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

// La tarjeta enlaza al detalle y permite agregar rápido a la bolsa.
export default function ProductCard({ product }) {
  const { addItem } = useCart()
  return <article className="product-card">
    <div className={`product-art ${product.art}`}>
      <span className="product-tag">{product.tag}</span>
      <Link to={`/producto/${product.id}`} aria-label={`Ver detalle de ${product.name}`}><HelmetArt color={product.color} dark={product.dark} label={`${product.name}, ${product.type}`}/></Link>
      <button className="quick-add" onClick={() => addItem(product)} aria-label={`Agregar ${product.name} al carrito`}>+</button>
    </div>
    <div className="product-info"><div><p className="product-type">{product.type} / {product.code}</p><h3><Link to={`/producto/${product.id}`}>{product.name}</Link></h3></div><strong>{formatPrice(product.price)}</strong></div>
    <div className="product-detail"><span>COLORES {product.colors.length}</span><div>{product.colors.slice(0, 3).map((color) => <i key={color} style={{ backgroundColor: color }} title={color}/>)}</div><span>TALLES XS—XXL</span></div>
  </article>
}
