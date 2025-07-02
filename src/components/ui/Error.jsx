import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const Error = ({ message = 'Something went wrong', onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full"
      >
        <Card className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-error to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="AlertTriangle" className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-2xl font-display font-bold text-white mb-4">
            Oops! Something went wrong
          </h2>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            {message}
          </p>
          
          <div className="space-y-4">
            {onRetry && (
              <Button 
                variant="primary" 
                onClick={onRetry}
                className="w-full"
              >
                Try Again
              </Button>
            )}
            
            <Button 
              variant="secondary" 
              onClick={() => window.location.href = '/'}
              className="w-full"
            >
              Go Home
            </Button>
          </div>
          
          <p className="text-gray-500 text-sm mt-6">
            If the problem persists, please contact support.
          </p>
        </Card>
      </motion.div>
    </div>
  )
}

export default Error