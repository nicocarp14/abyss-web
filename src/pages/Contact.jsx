import { useState } from 'react'

// Validación nativa del navegador y confirmación local del envío.
export default function Contact() {
  const [sent, setSent] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    setSent(true)
    event.currentTarget.reset()
  }
  return <section className="contact contact-page"><div><p className="eyebrow"><i/> HABLEMOS</p><h1>EL PRÓXIMO<br/>KILÓMETRO <em>ES TUYO.</em></h1><p>¿Dudas sobre talles, modelos o tu próximo viaje? Estamos para ayudarte.</p><a href="mailto:hola@abyss.ar">HOLA@ABYSS.AR ↗</a></div><form onSubmit={handleSubmit}><label>¿CÓMO TE LLAMÁS?<input name="name" placeholder="Tu nombre" required minLength="2"/></label><label>¿A QUÉ MAIL TE ESCRIBIMOS?<input name="email" type="email" placeholder="hola@ejemplo.com" required/></label><label>CONTANOS<input name="message" placeholder="Escribí tu consulta..." required minLength="8"/></label><button className="button button-orange" type="submit">ENVIAR MENSAJE <span>↗</span></button>{sent && <p className="success-message" role="status">¡Listo! Recibimos tu mensaje y pronto te contactamos.</p>}</form></section>
}
