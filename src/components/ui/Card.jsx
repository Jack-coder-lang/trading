import React from 'react'

export function Card({ children, className = '', hover = false, glow = false, onClick, ...props }) {
  const base = 'bg-bg-secondary border border-border-default rounded-xl transition-all duration-200'
  const hoverClass = hover ? 'cursor-pointer hover:bg-bg-hover hover:border-border-strong hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]' : ''
  const glowClass = glow ? 'shadow-[0_0_20px_rgba(124,58,237,0.2)] border-accent-violet/30' : ''

  return (
    <div
      className={`${base} ${hoverClass} ${glowClass} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`px-5 py-4 border-b border-border-subtle ${className}`}>
      {children}
    </div>
  )
}

export function CardBody({ children, className = '' }) {
  return (
    <div className={`px-5 py-4 ${className}`}>
      {children}
    </div>
  )
}
