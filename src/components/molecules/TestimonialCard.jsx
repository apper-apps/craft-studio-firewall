import React from 'react'
import { motion } from 'framer-motion'
import Card from '@/components/atoms/Card'
import ApperIcon from '@/components/ApperIcon'

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card hover={false} className="h-full">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <ApperIcon 
            key={i} 
            name="Star" 
            className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-current' : 'text-gray-600'}`} 
          />
        ))}
      </div>
      
      <blockquote className="text-gray-300 mb-6 text-lg leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-sm text-gray-400">{testimonial.role} at {testimonial.company}</div>
        </div>
      </div>
    </Card>
  )
}

export default TestimonialCard