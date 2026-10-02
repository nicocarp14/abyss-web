import { useMemo, useState } from 'react'
import { products } from '../data/products.js'
import Filters from './Filters.jsx'
import ProductCard from './ProductCard.jsx'

// Catálogo reutilizable con controles opcionales para la página de inicio.
export default function ProductGrid({ featured = false }) {
  const [type, setType] = useState('Todos')
  const [sort, setSort] = useState('featured')
  const visibleProducts = useMemo(() => {
    let result = type === 'Todos' ? [...products] : products.filter((product) => product.type === type)
    if (featured && type === 'Todos') result = result.slice(0, 4)
    if (sort === 'low') result.sort((a, b) => a.price - b.price)
    if (sort === 'high') result.sort((a, b) => b.price - a.price)
    return result
  }, [featured, type, sort])
  return <>
    {!featured && <Filters type={type} setType={setType} sort={sort} setSort={setSort}/>}
    <div className="product-grid">{visibleProducts.map((product) => <ProductCard key={product.id} product={product}/>)}</div>
  </>
}
