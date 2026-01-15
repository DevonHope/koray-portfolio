import React from 'react'
import portfolio from '../assets/portfolio.jpeg'

export default function Hero({ onContact }){
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="reveal">
        <h1 id="hero-heading">Supportive, Evidence-Based Therapy for Individuals, Youth &amp; Couples</h1>
        <p>Helping you navigate anxiety, emotional distress, and relationship challenges with compassion and clarity.</p>
        <p style={{color: 'var(--muted)', marginTop: '1.25rem'}}>I offer secure online sessions and in-person options in Toronto when appropriate. Sliding scale and direct billing available.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
          <button className="cta" onClick={onContact}>Book a Free 15-Minute Consultation</button>
          <a className="profile-btn" href="https://www.psychologytoday.com/ca/therapists/koray-ozkan-toronto-on/1452468" target="_blank" rel="noreferrer">Psychology Today profile</a>
        </div>
      </div>

      <aside className="card reveal" aria-label="Profile summary">
        <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
          <a href={portfolio} target="_blank" rel="noreferrer">
            <img src={portfolio} alt="Portfolio preview" className="profile-img" />
          </a>
          <div>
            <div style={{fontWeight: 700}}>Koray Ozkan</div>
            <div style={{color: 'var(--text)', fontSize: '.9rem'}}>MSc, Clinical Psychology</div>
            <div style={{color: 'var(--text)', fontSize: '.9rem'}}>Registered Social Service Worker</div>
          </div>
        </div>

        <p style={{marginTop: '1rem', color: 'var(--text)', fontSize: '.95rem'}}>I use CBT, IFS, and trauma-informed, experiential tools to help clients build insight and resilience.</p>
      </aside>
    </section>
  )
}
