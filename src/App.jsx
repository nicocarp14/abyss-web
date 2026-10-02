import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import ProductDetail from './pages/ProductDetail.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

// Todas las vistas comparten el mismo marco y carrito persistente.
export default function App() {
  return <>
    <ScrollToTop/>
    <Routes>
      <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/catalogo" element={<Catalog/>}/>
        <Route path="/producto/:id" element={<ProductDetail/>}/>
        <Route path="/nosotros" element={<About/>}/>
        <Route path="/contacto" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
  </>
}
