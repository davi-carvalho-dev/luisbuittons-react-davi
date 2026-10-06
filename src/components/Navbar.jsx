import { useState } from 'react'
import { links } from '../data/links'

export default function Navbar() {
  // Controla se o menu do celular está aberto ou fechado
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className="header sticky-top">
      <div className="header-grid">
        <span className="logo">
          <a href="#inicio">Luis Buittons</a>
        </span>

        {/* Botão que só aparece no celular */}
        <button
          className="menu-toggle"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <i className={`fa-solid ${menuAberto ? 'fa-xmark' : 'fa-bars'}`}></i>
        </button>

        {/* No celular, a classe "aberto" mostra ou esconde o menu */}
        <nav className={`nav ${menuAberto ? 'aberto' : ''}`}>
          <div className="nav-links">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  {/* Fecha o menu ao clicar em um link */}
                  <a href={link.href} onClick={() => setMenuAberto(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}