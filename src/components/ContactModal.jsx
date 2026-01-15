import React, { useState } from 'react'

export default function ContactModal({ open, onClose }){
  const [form, setForm] = useState({name: '', email: '', message: ''})

  function handleChange(e){
    setForm(f => ({...f, [e.target.name]: e.target.value}))
  }

  function handleSubmit(e){
    e.preventDefault()
    // Minimal: open user's email client with pre-filled content
    const subject = encodeURIComponent('Free Consultation Request')
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    // Replace the email below with the real practitioner email before publishing
    window.location.href = `mailto:email@example.com?subject=${subject}&body=${body}`
    onClose()
  }

  if(!open) return null

  return (
    <div role="dialog" aria-modal="true" style={{position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem', zIndex: 1000}}>
      <div className="modal-content" style={{background: 'white', borderRadius: 12, width: '100%', maxWidth: 520, padding: '1.25rem'}}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <h3 style={{margin:0}}>Book a Free Consultation</h3>
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form" style={{marginTop: '1rem', display: 'grid', gap: '.75rem'}}>
          <label>
            <div style={{fontSize: '.9rem'}}>Name</div>
            <input name="name" value={form.name} onChange={handleChange} required style={{width: '100%', padding: '.6rem', borderRadius: 8, border: '1px solid #e6e6e6'}} />
          </label>

          <label>
            <div style={{fontSize: '.9rem'}}>Email</div>
            <input name="email" type="email" value={form.email} onChange={handleChange} required style={{width: '100%', padding: '.6rem', borderRadius: 8, border: '1px solid #e6e6e6'}} />
          </label>

          <label>
            <div style={{fontSize: '.9rem'}}>Message (optional)</div>
            <textarea name="message" value={form.message} onChange={handleChange} rows="4" style={{width: '100%', padding: '.6rem', borderRadius: 8, border: '1px solid #e6e6e6'}} />
          </label>

          <div style={{display: 'flex', gap: '.5rem', justifyContent: 'flex-end'}}>
            <button type="button" onClick={onClose} style={{padding: '.5rem 1rem', borderRadius: 8}}>Cancel</button>
            <button className="cta" type="submit">Send Email</button>
          </div>
        </form>

        <p style={{marginTop: '1rem', fontSize: '.9rem', color: 'var(--muted)'}}>Or book via <a href="https://www.psychologytoday.com/ca/therapists/koray-ozkan-toronto-on/1452468" target="_blank" rel="noreferrer">Psychology Today</a></p>
      </div>
    </div>
  )
}
