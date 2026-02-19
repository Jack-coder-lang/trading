import React from 'react'

export function Button({ children, variant = 'primary', size = 'md', onClick, disabled, className = '', type = 'button', ...props }) {
  const base = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg-primary'

  const variants = {
    primary: 'bg-accent-violet hover:bg-violet-600 text-white focus:ring-accent-violet disabled:opacity-40',
    secondary: 'bg-bg-secondary hover:bg-bg-hover text-text-primary border border-border-default hover:border-border-strong focus:ring-border-strong disabled:opacity-40',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-hover focus:ring-border-default disabled:opacity-40',
    danger: 'bg-accent-red hover:bg-red-600 text-white focus:ring-accent-red disabled:opacity-40',
    teal: 'bg-accent-teal hover:bg-teal-600 text-white focus:ring-accent-teal disabled:opacity-40',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2.5',
  }

  const glowClass = variant === 'primary' && !disabled ? 'shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] hover:-translate-y-px' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${glowClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
