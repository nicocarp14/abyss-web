import ProductGrid from '../components/ProductGrid.jsx'

// Catálogo completo con controles de filtro y ordenamiento.
export default function Catalog() {
  return <section className="catalog section-wrap page-catalog"><div className="section-heading"><div><p className="eyebrow"><i/> EQUIPATE PARA LO QUE VIENE</p><h2>LA COLECCIÓN<span>.</span></h2></div><p>Ocho formas de ver el camino.<br/>Una sola forma de vivirlo.</p></div><ProductGrid/><div className="catalog-foot"><span>08 MODELOS DISPONIBLES</span><span>PRECIOS EN ARS · IVA INCLUIDO</span></div></section>
}
