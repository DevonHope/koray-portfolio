import React from 'react'

export default function WavePattern({ className = '', height = 160 }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height }}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--icy-blue, #a3d9ff)" stopOpacity="0.95" />
          <stop offset="50%" stopColor="var(--tangerine-dream, #ff8c57)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--lavender-blush, #feeff2)" stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--tea-green, #c1e7bc)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--cornsilk, #fffbe2)" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      {/* back slow wave */}
      <path
        d="M0,224 C180,160 360,288 540,256 C720,224 900,96 1080,144 C1260,192 1440,224 1440,224 L1440,320 L0,320 Z"
        fill="url(#g2)"
        opacity="0.6"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; -80 0; 0 0"
          dur="18s"
          repeatCount="indefinite"
        />
      </path>

      {/* middle wave */}
      <path
        d="M0,192 C160,240 320,96 480,128 C640,160 800,288 960,256 C1120,224 1280,144 1440,176 L1440,320 L0,320 Z"
        fill="url(#g1)"
        opacity="0.55"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; 100 0; 0 0"
          dur="12s"
          repeatCount="indefinite"
        />
      </path>

      {/* front faster wave */}
      <path
        d="M0,160 C120,112 300,208 440,176 C580,144 760,64 920,112 C1080,160 1260,240 1440,208 L1440,320 L0,320 Z"
        fill="url(#g1)"
        opacity="0.75"
        style={{ mixBlendMode: 'screen' }}
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0; -140 0; 0 0"
          dur="9s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
