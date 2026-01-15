import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import ContactModal from './components/ContactModal'
import ClientCard from './components/ClientCard'
import FloatingCircles from './components/FloatingCircles'
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
          // Hint the browser right before the transition, then clear the hint after it finishes
          entry.target.style.willChange = 'opacity, transform'
          // force a reflow to ensure the will-change is applied before we toggle the class
          // eslint-disable-next-line no-unused-expressions
          entry.target.offsetWidth
          entry.target.classList.add('is-revealed')
          // remove the will-change after transition completes (slightly longer than .62s)
          setTimeout(() => { entry.target.style.willChange = 'auto' }, 750)
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
              <ClientCard className="reveal" variant="peach" image={distress} title="Individuals" description="Individuals experiencing depression, anxiety, emotional regulation difficulties, and distress" alt="Person holding head" />
              <ClientCard className="reveal" variant="blush" image={youthImg} title="Youth & Adolescents" description="Youth and adolescents facing school, mood, or anxiety challenges" alt="Young person" />
              <ClientCard className="reveal" variant="lavender" image={familyImg} title="Families" description="Families experiencing conflict, attachment issues, and communication challenges" alt="Family group" />
              <ClientCard className="reveal" variant="rose" image={couplesImg} title="Couples" description="Couples seeking support with communication, conflict, and emotional connection" alt="Couple" />
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

        <section className="profile-summary container reveal" aria-labelledby="profile-heading">
          <div className="card">
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center'}}>
              <a href={portfolioImg} target="_blank" rel="noreferrer">
                <img src={portfolioImg} alt="Portfolio preview" className="profile-img" />
              </a>
              <div style={{textAlign: 'center'}}>
                <div style={{fontWeight: 700, fontSize: '1.25rem', marginBottom: '0.5rem'}}>Koray Ozkan</div>
                <div style={{color: 'var(--text)', fontSize: '.9rem', marginBottom: '0.25rem'}}>MSc, Clinical Psychology</div>
                <div style={{color: 'var(--text)', fontSize: '.9rem'}}>Registered Social Service Worker</div>
              </div>
            </div>
            <p style={{marginTop: '1.5rem', color: 'var(--text)', fontSize: '1rem', textAlign: 'center', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto'}}>I use CBT, IFS, and trauma-informed, experiential tools to help clients build insight and resilience.</p>
          </div>
        </section>
      </main>


      <FloatingCircles />
      <footer className="footer container">
        <small>© {new Date().getFullYear()} Koray Ozkan — Psychotherapist • Online sessions available</small>
      </footer>

      <ContactModal open={isContactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
