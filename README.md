# ABYSS

Tienda de cascos construida con React, Vite y React Router.

## Ejecutar

```bash
npm install
npm run dev
```

## Estructura

- `src/pages/`: vistas Inicio, Catálogo, detalle de producto, Nosotros, Contacto y 404.
- `src/components/`: navegación, layout, tarjetas, filtros, ilustración SVG, carrito y scroll-to-top.
- `src/context/CartContext.jsx`: estado compartido de la bolsa, persistido en `localStorage`.
- `src/data/products.js`: datos del catálogo.
- `src/App.jsx`: definición de las rutas.
- `src/main.jsx`: BrowserRouter y proveedor global del carrito.
- `vercel.json`: rewrite para que las rutas de React Router funcionen al recargar en Vercel.
