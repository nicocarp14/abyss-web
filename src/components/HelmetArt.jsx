import { useId } from 'react'

// Casco vectorial reusable con colores configurables por props.
export default function HelmetArt({ color = '#ff5a00', dark = '#171717', label = 'Casco ABYSS' }) {
  const id = useId().replaceAll(':', '')
  return <svg className="helmet-art" viewBox="0 0 420 300" role="img" aria-label={label}>
    <defs>
      <linearGradient id={`${id}-shell`} x1="0" y1="0" x2="1" y2="1"><stop stopColor={color}/><stop offset="1" stopColor={dark}/></linearGradient>
      <linearGradient id={`${id}-visor`} x1="0" y1="0" x2="1" y2="1"><stop stopColor="#a8edff" stopOpacity=".8"/><stop offset="1" stopColor="#192c35" stopOpacity=".94"/></linearGradient>
    </defs>
    <ellipse cx="215" cy="257" rx="145" ry="17" fill="#000" opacity=".48"/>
    <path d="M91 169C83 88 136 36 219 38c73 2 119 46 128 112l-23 36-61 24-117-4-45-37z" fill={`url(#${id}-shell)`} stroke="#fff" strokeOpacity=".15" strokeWidth="3"/>
    <path d="M127 155c17-47 63-69 112-56 33 9 53 30 65 58l-35 35-105-4-37-33z" fill={`url(#${id}-visor)`} stroke="#d9f3ff" strokeOpacity=".5" strokeWidth="3"/>
    <path d="M93 166l110 31 112-9 31 12-7 23-139 10-90-29z" fill="#111" stroke="#555" strokeWidth="3"/>
    <path d="M145 213l28 11-10 30-24-9zM300 206l22-8-5 27-23 11z" fill={color}/>
    <path d="M175 252l19 3 6 9h-40zM274 246l20-7 13 8-8 10h-24z" fill="#eee" opacity=".7"/>
    <path d="M145 75c28-27 73-38 116-24" fill="none" stroke="#fff" strokeOpacity=".34" strokeWidth="5" strokeLinecap="round"/>
    <text x="212" y="223" fill="#fff" fontFamily="Arial" fontSize="13" fontWeight="900" letterSpacing="4">ABYSS</text>
  </svg>
}
