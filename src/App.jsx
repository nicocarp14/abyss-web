import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { products } from './products.js'
import './App.css'

// Ilustración vectorial reutilizable: cada modelo cambia sus colores por props.
function HelmetArt({ color = '#ff5a00', dark = '#171717', label = 'Casco ABYSS' }) {
  return <svg className="helmet-art" viewBox="0 0 420 300" role="img" aria-label={label}>
    <defs><linearGradient id="shell" x1="0" y1="0" x2="1" y2="1"><stop stopColor={color}/><stop offset="1" stopColor={dark}/></linearGradient><linearGradient id="visor" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a8edff" stopOpacity=".8"/><stop offset="1" stopColor="#192c35" stopOpacity=".94"/></linearGradient></defs>
    <ellipse cx="215" cy="257" rx="145" ry="17" fill="#000" opacity=".48"/>
    <path d="M91 169C83 88 136 36 219 38c73 2 119 46 128 112l-23 36-61 24-117-4-45-37z" fill="url(#shell)" stroke="#fff" strokeOpacity=".15" strokeWidth="3"/>
    <path d="M127 155c17-47 63-69 112-56 33 9 53 30 65 58l-35 35-105-4-37-33z" fill="url(#visor)" stroke="#d9f3ff" strokeOpacity=".5" strokeWidth="3"/>
    <path d="M93 166l110 31 112-9 31 12-7 23-139 10-90-29z" fill="#111" stroke="#555" strokeWidth="3"/>
    <path d="M145 213l28 11-10 30-24-9zM300 206l22-8-5 27-23 11z" fill={color}/>
    <path d="M175 252l19 3 6 9h-40zM274 246l20-7 13 8-8 10h-24z" fill="#eee" opacity=".7"/>
    <path d="M145 75c28-27 73-38 116-24" fill="none" stroke="#fff" strokeOpacity=".34" strokeWidth="5" strokeLinecap="round"/>
    <text x="212" y="223" fill="#fff" fontFamily="Arial" fontSize="13" fontWeight="900" letterSpacing="4">ABYSS</text>
  </svg>
}

function GearArt({ kind = 'jacket', color = '#242424', label = 'Indumentaria ABYSS' }) {
  const stroke = '#e8e5dc'
  const common = { fill: color, stroke, strokeOpacity: '.26', strokeWidth: '3', strokeLinejoin: 'round' }
  const art = {
    jacket: <><path {...common} d="M152 54l57 22 59-22 50 61-35 30-23-30v132H160V115l-23 30-35-30z"/><path d="M209 76v171M180 55l29 47 29-47M160 140h100" stroke={stroke} strokeOpacity=".38" strokeWidth="3" fill="none"/></>,
    gloves: <><path {...common} d="M139 228l-18-81c-3-14 15-20 20-7l15 38-22-89c-3-13 15-19 19-6l25 72-17-91c-2-14 17-18 20-5l20 89-2-91c0-14 20-14 21 0l9 89 12-71c3-13 22-9 20 5l-10 79c-3 24-17 54-45 62l-57 17z"/><path {...common} d="M278 228l18-81c3-14-15-20-20-7l-15 38 22-89c3-13-15-19-19-6l-25 72 17-91c2-14-17-18-20-5l-20 89 2-91c0-14-20-14-21 0l-9 89-12-71c-3-13-22-9-20 5l10 79c3 24 17 54 45 62l57 17z"/></>,
    pants: <><path {...common} d="M142 46h136l-10 95-28 111h-46l15-108-20-43-15 151h-47l1-111z"/><path d="M210 53l-1 91M145 102h128" stroke={stroke} strokeOpacity=".35" strokeWidth="3" fill="none"/></>,
    shirt: <><path {...common} d="M158 57l51 22 53-22 51 42-26 44-30-20v128H160V123l-29 20-27-44z"/><path d="M184 63c1 22 14 33 25 33s24-11 26-33" stroke={stroke} strokeOpacity=".38" strokeWidth="3" fill="none"/></>,
  }
  return <svg className="gear-art" viewBox="0 0 420 300" role="img" aria-label={label}><ellipse cx="210" cy="263" rx="112" ry="13" fill="#000" opacity=".45"/>{art[kind] || art.jacket}</svg>
}

// La cabecera concentra navegación y el acceso al carrito.
function Header({ cartCount, onCartOpen }) {
  return <header className="header"><Link className="wordmark" to="/" aria-label="ABYSS, inicio">ABYSS<span>®</span></Link><nav aria-label="Navegación principal"><NavLink to="/catalogo">Productos</NavLink><NavLink to="/nosotros">Nosotros</NavLink><NavLink to="/contacto">Contacto</NavLink></nav><button className="cart-trigger" onClick={onCartOpen} aria-label={`Abrir carrito, ${cartCount} productos`}>BOLSA <span>{String(cartCount).padStart(2, '0')}</span><b>↗</b></button></header>
}

// Hero: primer impacto y acceso rápido al catálogo.
function Hero() {
  // El banner incluye sus propios titulares, así que se muestra completo como imagen.
  return <section className="hero" id="inicio"><img className="hero-banner" src="/images/banner.jpeg" alt="Banner ABYSS: pilotos de motociclismo y casco, con las opciones Naked urbano-deportivo y Enduro adventure-off road" /></section>
}

// Tarjeta de catálogo, recibe el casco y la acción para agregarlo.
function ProductCard({ product, onAdd }) {
  const isGear = product.category === 'Indumentaria'
  return <article className="product-card"><div className={`product-art ${product.art}`}><span className="product-tag">{product.tag}</span>{isGear ? <GearArt kind={product.gear} color={product.color} label={`${product.name}, ${product.type}`}/> : <HelmetArt color={product.color} dark={product.dark} label={`${product.name}, ${product.type}`}/>}<button className="quick-add" onClick={() => onAdd(product)} aria-label={`Agregar ${product.name} al carrito`}>+</button></div><div className="product-info"><div><p className="product-type">{product.type} / {product.code}</p><h3>{product.name}</h3></div><strong>{formatPrice(product.price)}</strong></div><div className="product-detail"><span>COLORES {product.colors.length}</span><div>{product.colors.slice(0, 3).map((color) => <i key={color} style={{ backgroundColor: color }} title={color}/>)}</div><span>TALLES {product.sizeRange || 'XS—XXL'}</span></div></article>
}

// Catálogo con filtros y ordenamiento controlados por el estado de React.
function ProductList({ onAdd }) {
  const [category, setCategory] = useState('Todos')
  const [helmetType, setHelmetType] = useState('Todos')
  const [sort, setSort] = useState('featured')
  const visibleProducts = useMemo(() => {
    const inCategory = category === 'Todos' ? [...products] : products.filter((product) => product.category === category)
    const filtered = category === 'Cascos' && helmetType !== 'Todos' ? inCategory.filter((product) => product.type === helmetType) : inCategory
    if (sort === 'low') filtered.sort((a, b) => a.price - b.price)
    if (sort === 'high') filtered.sort((a, b) => b.price - a.price)
    return filtered
  }, [category, helmetType, sort])
  function selectCategory(nextCategory) { setCategory(nextCategory); setHelmetType('Todos') }
  return <section className="catalog section-wrap" id="catalogo"><div className="section-heading"><div><p className="eyebrow"><i/> EQUIPATE PARA LO QUE VIENE</p><h2>LA COLECCIÓN<span>.</span></h2></div><p>Cascos e indumentaria para cada ruta.<br/>Un solo equipo para vivirla.</p></div><div className="catalog-toolbar"><div className="filter-groups"><div className="filter-list" aria-label="Filtrar por categoría">{['Todos', 'Cascos', 'Indumentaria'].map((item) => <button key={item} className={category === item ? 'filter active' : 'filter'} onClick={() => selectCategory(item)}>{item.toUpperCase()}</button>)}</div>{category === 'Cascos' && <div className="filter-list helmet-filters" aria-label="Filtrar cascos por tipo">{['Todos', 'Integral', 'Modular', 'Abierto', 'Enduro'].map((item) => <button key={item} className={helmetType === item ? 'filter active' : 'filter'} onClick={() => setHelmetType(item)}>{item.toUpperCase()}</button>)}</div>}</div><label className="sort-label">ORDENAR <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Ordenar productos por precio"><option value="featured">Destacados</option><option value="low">Precio: menor a mayor</option><option value="high">Precio: mayor a menor</option></select></label></div><div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd}/>)}</div><div className="catalog-foot"><span>{String(visibleProducts.length).padStart(2, '0')} MODELOS DISPONIBLES</span><span>PRECIOS EN ARS · IVA INCLUIDO</span></div></section>
}

// El carrito se muestra como panel lateral y permite cambiar cantidades.
function Cart({ open, items, onClose, onChange, onRemove }) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  return <><button className={`cart-scrim ${open ? 'visible' : ''}`} onClick={onClose} aria-label="Cerrar carrito" tabIndex={open ? 0 : -1}/><aside className={`cart-panel ${open ? 'open' : ''}`} aria-label="Carrito de compras" aria-hidden={!open}><div className="cart-head"><div><p className="eyebrow"><i/> TU EQUIPO</p><h2>LA BOLSA<span>.</span></h2></div><button className="close-cart" onClick={onClose} aria-label="Cerrar carrito">×</button></div>{items.length === 0 ? <div className="empty-cart"><span>∅</span><p>TU BOLSA ESTÁ VACÍA.</p><Link to="/catalogo" onClick={onClose}>EXPLORAR PRODUCTOS ↘</Link></div> : <><div className="cart-items">{items.map((item) => <div className="cart-item" key={item.id}><div className="cart-thumb">{item.category === 'Indumentaria' ? <GearArt kind={item.gear} color={item.color}/> : <HelmetArt color={item.color} dark={item.dark}/>}</div><div className="cart-item-copy"><p>{item.type} / {item.name}</p><strong>{formatPrice(item.price)}</strong><div className="quantity"><button onClick={() => onChange(item.id, -1)} aria-label={`Restar ${item.name}`}>−</button><span>{item.quantity}</span><button onClick={() => onChange(item.id, 1)} aria-label={`Sumar ${item.name}`}>+</button><button className="remove-item" onClick={() => onRemove(item.id)}>ELIMINAR</button></div></div></div>)}</div><div className="cart-summary"><div><span>ENVÍO</span><strong>GRATIS</strong></div><div className="total-line"><span>TOTAL</span><strong>{formatPrice(total)}</strong></div><button className="button button-orange checkout" onClick={() => alert('¡Gracias! El checkout estará disponible muy pronto.')}>CONTINUAR COMPRA <span>↗</span></button><p>COMPRA SEGURA · CAMBIOS GRATIS</p></div></>}</aside></>
}

// Bloques informativos breves de la marca y sus beneficios.
function Benefits() {
  return <section className="benefits"><div className="benefit-intro"><p className="eyebrow"><i/> CADA DETALLE CUENTA</p><h2>LA PROTECCIÓN<br/>TAMBIÉN <em>ES ACTITUD.</em></h2></div><div className="benefit-item"><span>01</span><b>SEGURIDAD<br/>CERTIFICADA</b><p>Construcción testeada bajo estándares internacionales.</p></div><div className="benefit-item"><span>02</span><b>INGENIERÍA<br/>DE PRECISIÓN</b><p>Materiales livianos. Ajuste perfecto. Cero distracciones.</p></div><div className="benefit-item"><span>03</span><b>GARANTÍA<br/>ABYSS</b><p>Dos años de respaldo para seguir haciendo kilómetros.</p></div></section>
}

// Todas las vistas comparten el mismo marco y carrito persistente.
function About() {
  return <section className="about section-wrap"><p className="eyebrow"><i/> NO ES SOLO LLEGAR</p><div className="about-content"><h2>EL CAMINO<br/>ES <em>TODO.</em></h2><div><p>Creemos en salir sin mapa, en el viento que despeja todo y en esa curva que te hace volver a casa distinto. Creamos equipo para vivir cada kilómetro con intensidad y volver por más.</p><Link to="/contacto">CONOCÉ ABYSS <span>↗</span></Link></div><span className="about-symbol">A.</span></div></section>
}

// Formulario accesible con validación nativa y mensaje de confirmación.
function ContactForm() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event) { event.preventDefault(); setSent(true); event.currentTarget.reset() }
  return <section className="contact" id="contacto"><div><p className="eyebrow"><i/> HABLEMOS</p><h2>EL PRÓXIMO<br/>KILÓMETRO <em>ES TUYO.</em></h2><p>¿Dudas sobre talles, modelos o tu próximo viaje? Estamos para ayudarte.</p><a href="mailto:hola@abyss.ar">HOLA@ABYSS.AR ↗</a></div><form onSubmit={handleSubmit}><label>¿CÓMO TE LLAMÁS?<input name="name" placeholder="Tu nombre" required minLength="2"/></label><label>¿A QUÉ MAIL TE ESCRIBIMOS?<input name="email" type="email" placeholder="hola@ejemplo.com" required/></label><label>CONTANOS<input name="message" placeholder="Escribí tu consulta..." required minLength="8"/></label><button className="button button-orange" type="submit">ENVIAR MENSAJE <span>↗</span></button>{sent && <p className="success-message" role="status">¡Listo! Recibimos tu mensaje y pronto te contactamos.</p>}</form></section>
  
}

function Footer() { return <footer className="footer"><Link className="wordmark" to="/">ABYSS<span>®</span></Link><span>EQUIPAMIENTO PARA IR MÁS LEJOS.</span><span>BUENOS AIRES, ARGENTINA · © 2025 ABYSS</span><Link to="/" aria-label="Volver al inicio">VOLVER AL INICIO ↑</Link></footer> }

// Precio con formato local argentino para evitar repetir lógica en la interfaz.
function formatPrice(price) { return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price) }

function Home({ onAdd }) {
  const featured = products.filter((product) => [1, 3, 9, 10].includes(product.id))
  return <><Hero/><section className="home-catalog section-wrap"><div><p className="eyebrow"><i/> CASCOS E INDUMENTARIA RIDER</p><h1>EQUIPATE PARA<br/>IR <em>MÁS LEJOS.</em></h1></div><Link className="button button-orange" to="/catalogo">EXPLORAR CATÁLOGO <span>↗</span></Link></section><section className="featured section-wrap"><div className="section-heading"><div><p className="eyebrow"><i/> SELECCIÓN ABYSS</p><h2>DESTACADOS<span>.</span></h2></div><p>Tu equipo empieza acá.<br/>Elegí cómo salir a la ruta.</p></div><div className="product-grid featured-grid">{featured.map((product) => <ProductCard key={product.id} product={product} onAdd={onAdd}/>)}</div><Link className="featured-link" to="/catalogo">VER TODO EL EQUIPO <span>↗</span></Link></section><Benefits/></>
}

function NotFound() {
  return <section className="not-found"><p className="eyebrow"><i/> RUTA NO ENCONTRADA</p><h1>404<span>.</span></h1><p>Esta página no está en el mapa.</p><Link className="button button-orange" to="/">VOLVER AL INICIO <span>↗</span></Link></section>
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  // Inicializamos el carrito desde el navegador y lo guardamos ante cada cambio.
  const [cart, setCart] = useState(() => { try { return JSON.parse(localStorage.getItem('abyss-cart')) || [] } catch { return [] } })
  const [cartOpen, setCartOpen] = useState(false)
  useEffect(() => { localStorage.setItem('abyss-cart', JSON.stringify(cart)) }, [cart])
  function addToCart(product) { setCart((current) => { const exists = current.find((item) => item.id === product.id); return exists ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...current, { ...product, quantity: 1 }] }); setCartOpen(true) }
  function changeQuantity(id, amount) { setCart((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0)) }
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  return <><ScrollToTop/><Header cartCount={cartCount} onCartOpen={() => setCartOpen(true)}/><main><Routes><Route path="/" element={<Home onAdd={addToCart}/>}/><Route path="/catalogo" element={<ProductList onAdd={addToCart}/>}/><Route path="/nosotros" element={<About/>}/><Route path="/contacto" element={<ContactForm/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/><Cart open={cartOpen} items={cart} onClose={() => setCartOpen(false)} onChange={changeQuantity} onRemove={(id) => setCart((current) => current.filter((item) => item.id !== id))}/></>
}

export default App
