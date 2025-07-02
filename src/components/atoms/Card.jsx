import React from 'react'
import { motion } from 'framer-motion'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <motion.div
      whileHover={hover ? { scale: 1.02, y: -5 } : {}}
      transition={{ duration: 0.2 }}
      className={`
        glass-card rounded-2xl p-6 
        transition-all duration-300
        ${hover ? 'hover:shadow-2xl hover:shadow-primary/20' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card