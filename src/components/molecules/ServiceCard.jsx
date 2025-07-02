import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'

const ServiceCard = ({ service, delay = 0 }) => {
  const navigate = useNavigate()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
            <ApperIcon name={service.icon} className="w-8 h-8 text-white" />
          </div>
          <Badge variant="ghost">
            From ${service.startingPrice}
          </Badge>
        </div>
        
        <h3 className="text-2xl font-display font-bold mb-3 text-white">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow">
          {service.description}
        </p>
        
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center text-sm text-gray-300">
              <ApperIcon name="Check" className="w-4 h-4 text-success mr-3 flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>
        
        <Button 
          variant="primary" 
          className="w-full"
          onClick={() => navigate(`/service/${service.Id}`)}
        >
          Learn More
        </Button>
      </Card>
    </motion.div>
  )
}

export default ServiceCard