import React from 'react'

export default function Header({ onContact }){
  return (
    <header className="site-header">
      <div className="container nav">
        <a href="#" className="logo" aria-label="Koray Ozkan homepage">
          {/* <svg className="logo-mark" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="var(--pastel-peach)" />
                <stop offset="1" stopColor="var(--pastel-lavender)" />
              </linearGradient>
            </defs>
            <rect x="0" y="0" width="40" height="40" rx="8" fill="url(#logoGradient)" />
            <circle cx="28" cy="12" r="4" fill="white" opacity="0.9" />
          </svg> */}
          <span className="logo-text">Koray Ozkan</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#who">Who I Help</a>
          <a href="#approach">Approach</a>
          <a href="#services">Services</a>
          <button className="cta" onClick={onContact}>Book a Free 15-Minute Consultation</button>
        </nav>
      </div>
    </header>
  )
}
