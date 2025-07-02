import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="text-center">
        <motion.div
          className="relative w-20 h-20 mx-auto mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute inset-0 border-4 border-surface rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full"></div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <h2 className="text-2xl font-display font-bold gradient-text mb-2">
            Loading
          </h2>
          <p className="text-gray-400">
            Preparing something amazing...
          </p>
        </motion.div>
        
        {/* Skeleton Content */}
        <div className="mt-12 space-y-4 max-w-2xl mx-auto">
          <div className="h-4 bg-surface rounded animate-pulse"></div>
          <div className="h-4 bg-surface rounded animate-pulse w-3/4"></div>
          <div className="h-4 bg-surface rounded animate-pulse w-1/2"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading