import React from 'react'

export default function ClientCard({ image, title, description, alt, variant }){
  const id = title.toLowerCase().replace(/\s+/g, '-')
  const cls = `client-card ${variant ? `client-card--${variant}` : ''}`
  return (
    <article className={cls} tabIndex="0" aria-labelledby={`${id}-title`} aria-describedby={`${id}-desc`}>
      <img src={image} alt={alt || title} />
      <div className="client-overlay" id={`${id}-desc`}>
        <h3 id={`${id}-title`}>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
}