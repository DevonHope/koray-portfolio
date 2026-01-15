import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import ContactModal from './components/ContactModal'
import ClientCard from './components/ClientCard'
import distress from './assets/distress.png'
import youthImg from './assets/youth.jpg'
import familyImg from './assets/family.jpg'
import couplesImg from './assets/couples.jpeg'
import portfolioImg from './assets/portfolio.jpeg'

export default function App() {
  const [isContactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Header onContact={() => setContactOpen(true)} />
      <main className="container">
        <Hero onContact={() => setContactOpen(true)} />

        <div className="sections">
          <Section id="who" title="Who I Help">
            <div className="card-grid">
              <ClientCard variant="peach" image={distress} title="Individuals" description="Individuals experiencing depression, anxiety, emotional regulation difficulties, and distress" alt="Person holding head" />
              <ClientCard variant="blush" image={youthImg} title="Youth & Adolescents" description="Youth and adolescents facing school, mood, or anxiety challenges" alt="Young person" />
              <ClientCard variant="lavender" image={familyImg} title="Families" description="Families experiencing conflict, attachment issues, and communication challenges" alt="Family group" />
              <ClientCard variant="rose" image={couplesImg} title="Couples" description="Couples seeking support with communication, conflict, and emotional connection" alt="Couple" />
            </div>
          </Section>

          <Section id="approach" title="My Approach">
            <div className="approach-grid">
              <div className="approach-image">
                <img src={portfolioImg} alt="Portfolio preview" />
              </div>
              <div className="approach-card">
                <h2>My Approach</h2>
                <p>I support children, adolescents, couples, and families facing emotional, cognitive, or behavioral challenges. Using CBT, IFS, and experiential tools like drama and exposure, my approach is collaborative, trauma-informed, and tailored to each client. I help build strengths, self-awareness, and meaningful change.</p>
              </div>
            </div>
          </Section>

          <Section id="expect" title="What to Expect">
            <ol className="list">
              <li>Free consultation to assess fit</li>
              <li>Online therapy sessions (secure video)</li>
              <li>Clear goals and collaborative treatment planning</li>
              <li>A supportive, non-judgmental space</li>
            </ol>
          </Section>

          <Section id="services" title="Services">
            <p className="muted">Individual Therapy — $130 / session</p>
            <p className="muted">Family Therapy — $150 / session</p>
            <p className="muted">Sliding scale available; direct billing and receipts for insurance provided.</p>
          </Section>

          <Section id="about" title="About">
            <p>Hello, I’m Koray Ozkan, a Registered Social Service Worker and Psychotherapist. I hold a Master’s degree in Clinical Psychology and have experience supporting individuals, children, youth, and families with anxiety, ADHD/ADD, emotional distress, and relational challenges.</p>
            <p className="muted">MSc, Clinical Psychology • BSc Psychology • Registered Social Service Worker (RSSW)</p>
          </Section>
        </div>

        <div style={{textAlign: 'center', padding: '2rem 0'}}>
          <button className="cta" onClick={() => setContactOpen(true)}>Schedule Your Free Consultation</button>
          {/* <p className="muted" style={{marginTop: "1rem"}}>Or book via <a className="profile-btn" href="https://www.psychologytoday.com/ca/therapists/koray-ozkan-toronto-on/1452468" target="_blank" rel="noreferrer">Psychology Today</a></p> */}
        </div>
      </main>

      <footer className="footer container">
        <small>© {new Date().getFullYear()} Koray Ozkan — Psychotherapist • Online sessions available</small>
      </footer>

      <ContactModal open={isContactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
