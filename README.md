# ABYSS

Tienda de cascos construida con React y Vite. La interfaz usa ilustraciones SVG propias y CSS, sin librerías de UI.

## Ejecutar en desarrollo

```bash
npm install
npm run dev
```

Vite mostrará la dirección local para abrir en el navegador. Para generar una versión de producción: `npm run build`.

## Estructura principal

- `src/App.jsx`: página y componentes de interfaz; estado del carrito y formulario.
- `src/products.js`: datos de los ocho cascos del catálogo.
- `src/index.css`: tipografías, colores globales y estilos base.
- `src/App.css`: diseño, estados visuales y reglas responsive.
- `src/main.jsx`: punto de entrada que monta React.

El carrito se guarda en `localStorage` del navegador. Los precios son demostrativos y están expresados en pesos argentinos.
