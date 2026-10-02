import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

// El proveedor mantiene el carrito disponible en todas las rutas.
export function CartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('abyss-cart')) || [] } catch { return [] }
  })

  useEffect(() => { localStorage.setItem('abyss-cart', JSON.stringify(items)) }, [items])

  function addItem(product) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id)
      return existing
        ? current.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
        : [...current, { ...product, quantity: 1 }]
    })
    setIsOpen(true)
  }
  function changeQuantity(id, amount) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, quantity: item.quantity + amount } : item).filter((item) => item.quantity > 0))
  }
  function removeItem(id) { setItems((current) => current.filter((item) => item.id !== id)) }

  const value = useMemo(() => ({ items, addItem, changeQuantity, removeItem, count: items.reduce((sum, item) => sum + item.quantity, 0), isOpen, openCart: () => setIsOpen(true), closeCart: () => setIsOpen(false) }), [items, isOpen])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

// Este hook evita repetir el acceso al contexto en cada componente.
export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart debe usarse dentro de CartProvider')
  return context
}
