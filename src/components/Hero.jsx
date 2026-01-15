import React from 'react'
import portfolio from '../assets/portfolio.jpeg'

export default function Hero({ onContact }){
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="reveal">
        <h1 id="hero-heading">Supportive, Evidence-Based Therapy for Individuals, Youth &amp; Couples</h1>
        <p>Helping you navigate anxiety, emotional distress, and relationship challenges with compassion and clarity.</p>
        <p style={{color: 'var(--muted)', marginTop: '1.25rem'}}>I offer secure online sessions and in-person options in Toronto when appropriate. Sliding scale and direct billing available.</p>
        <div style={{display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap'}}>
          <button className="cta" onClick={onContact}>Book Free Consultation</button>
          <a className="profile-btn" href="https://www.psychologytoday.com/ca/therapists/koray-ozkan-toronto-on/1452468" target="_blank" rel="noreferrer">Psychology Today Profile</a>
        </div>
      </div>
    </section>
  )
}
