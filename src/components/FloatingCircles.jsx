import React from 'react';

export default function FloatingCircles() {
  // Each circle has a unique class for position, size, and gradient
  return (
    <div className="floating-circles" aria-hidden="true">
      <div className="circle circle-peach" />
      <div className="circle circle-blush" />
      <div className="circle circle-lavender" />
      <div className="circle circle-rose" />
      <div className="circle circle-cream" />
      <div className="circle circle-peach2" />
      <div className="circle circle-blush2" />
      <div className="circle circle-lavender2" />
    </div>
  );
}
