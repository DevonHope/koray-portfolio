import React, { useState, useEffect, useRef } from 'react'

export default function Header({ onContact }){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header" ref={headerRef}>
      <div className={`container nav ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#" className="logo" aria-label="Koray Ozkan homepage">
          <span className="logo-text">Koray Ozkan</span>
        </a>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-links ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#who" onClick={() => setIsMenuOpen(false)}>Who I Help</a>
          <a href="#approach" onClick={() => setIsMenuOpen(false)}>Approach</a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
          <button className="cta" onClick={() => { onContact(); setIsMenuOpen(false); }}>Book Free Consultation</button>
        </nav>
      </div>
    </header>
  )
}
