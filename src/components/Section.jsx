import React from 'react'

export default function Section({ id, title, children }){
  return (
    <section id={id} className="section reveal" aria-labelledby={`${id}-title`}>
      <div className="section-inner">
        <h2 id={`${id}-title`}>{title}</h2>
        <div className="section-content">{children}</div>
      </div>
    </section>
  )
}
