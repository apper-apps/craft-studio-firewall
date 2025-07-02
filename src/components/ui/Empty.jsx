import React from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/atoms/Button'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const Empty = ({ 
  message = 'No items found', 
  description = 'There are no items to display at the moment.',
  actionText = 'Get Started',
  onAction
}) => {
  return (
    <div className="flex items-center justify-center min-h-96 p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        <Card className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ApperIcon name="Search" className="w-10 h-10 text-primary" />
          </div>
          
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            {message}
          </h3>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            {description}
          </p>
          
          {onAction && (
            <Button 
              variant="primary" 
              onClick={onAction}
              className="w-full"
            >
              {actionText}
            </Button>
          )}
          
          <div className="mt-8 grid grid-cols-3 gap-2 opacity-30">
            <div className="h-2 bg-gradient-to-r from-primary to-transparent rounded"></div>
            <div className="h-2 bg-gradient-to-r from-secondary to-transparent rounded"></div>
            <div className="h-2 bg-gradient-to-r from-accent to-transparent rounded"></div>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default Empty