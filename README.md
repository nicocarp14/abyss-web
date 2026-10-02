# ABYSS

Tienda de cascos construida con React, Vite y React Router.

## Ejecutar

```bash
npm install
npm run dev
```

## Vistas

- `/`: inicio y acceso al catálogo.
- `/catalogo`: productos, filtros, ordenamiento y carrito.
- `/nosotros`: manifiesto de la marca.
- `/contacto`: formulario de contacto.
- Cualquier otra ruta muestra una página 404.

La navegación se gestiona con React Router. El carrito permanece compartido al cambiar de vista y se guarda en `localStorage`. En Vercel, `vercel.json` reescribe las rutas hacia la aplicación para que también funcionen al recargar una URL directamente.
