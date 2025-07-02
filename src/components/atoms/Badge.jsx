import React from 'react'

const Badge = ({ children, variant = 'primary', size = 'medium', className = '' }) => {
  const baseClasses = "inline-flex items-center font-medium rounded-full"
  
  const variants = {
    primary: "bg-primary/20 text-primary border border-primary/30",
    secondary: "bg-secondary/20 text-secondary border border-secondary/30",
    accent: "bg-accent/20 text-accent border border-accent/30",
    success: "bg-success/20 text-success border border-success/30",
    ghost: "bg-white/10 text-white border border-white/20"
  }
  
  const sizes = {
    small: "px-2 py-1 text-xs",
    medium: "px-3 py-1.5 text-sm",
    large: "px-4 py-2 text-base"
  }
  
  return (
    <span className={`
      ${baseClasses}
      ${variants[variant]}
      ${sizes[size]}
      ${className}
    `}>
      {children}
    </span>
  )
}

export default Badge