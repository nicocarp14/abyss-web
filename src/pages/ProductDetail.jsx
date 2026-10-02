import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import HelmetArt from '../components/HelmetArt.jsx'
import { useCart } from '../context/CartContext.jsx'
import { formatPrice, products } from '../data/products.js'

// Obtiene el casco desde la URL y muestra sus opciones.
export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((item) => item.id === Number(id))
  const [color, setColor] = useState(0)
  const [size, setSize] = useState('M')
  const { addItem } = useCart()
  if (!product) return <section className="not-found"><p className="eyebrow"><i/> MODELO NO ENCONTRADO</p><h1>ESTE CAMINO<br/>NO EXISTE.</h1><Link className="button button-orange" to="/catalogo">VOLVER AL CATÁLOGO <span>↗</span></Link></section>
  return <section className="product-detail-page section-wrap">
    <Link className="back-link" to="/catalogo">← VOLVER AL CATÁLOGO</Link>
    <div className="detail-layout"><div className={`detail-art product-art ${product.art}`}><span className="product-tag">{product.tag}</span><HelmetArt color={product.colors[color]} dark={product.dark} label={`Ilustración del casco ${product.name}`}/></div>
      <div className="detail-copy"><p className="eyebrow"><i/> {product.type.toUpperCase()} / {product.code}</p><h1>{product.name}<span>.</span></h1><strong className="detail-price">{formatPrice(product.price)}</strong><p className="detail-description">{product.description}</p>
        <fieldset className="option-group"><legend>COLOR · {product.colors.length} OPCIONES</legend><div className="detail-colors">{product.colors.map((item, index) => <button key={item} aria-label={`Elegir color ${index + 1}`} aria-pressed={color === index} onClick={() => setColor(index)} style={{ backgroundColor: item }}/>)}</div></fieldset>
        <fieldset className="option-group"><legend>TALLE · <span>{size}</span></legend><div className="detail-sizes">{product.sizes.map((item) => <button key={item} className={size === item ? 'selected' : ''} aria-pressed={size === item} onClick={() => setSize(item)}>{item}</button>)}</div></fieldset>
        <button className="button button-orange add-detail" onClick={() => addItem({ ...product, color: product.colors[color], selectedSize: size })}>AGREGAR A LA BOLSA <span>↗</span></button><p className="detail-note">ENVÍO GRATIS · CAMBIOS GRATIS · GARANTÍA ABYSS</p>
      </div></div>
  </section>
}
