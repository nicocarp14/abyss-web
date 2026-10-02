// Controles para filtrar por tipo y ordenar el precio del catálogo.
export default function Filters({ type, setType, sort, setSort }) {
  return <div className="catalog-toolbar">
    <div className="filter-list" aria-label="Filtrar por tipo">{['Todos', 'Integral', 'Modular', 'Abierto'].map((item) => <button key={item} className={type === item ? 'filter active' : 'filter'} onClick={() => setType(item)}>{item.toUpperCase()}</button>)}</div>
    <label className="sort-label">ORDENAR <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Ordenar productos por precio"><option value="featured">Destacados</option><option value="low">Precio: menor a mayor</option><option value="high">Precio: mayor a menor</option></select></label>
  </div>
}
