import React, { useState } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const TestimonialCard = ({ testimonial }) => {
  const [imageError, setImageError] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)

  const handleImageError = () => {
    setImageError(true)
    setImageLoading(false)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const getInitials = (name) => {
    if (!name) return 'U'
    return name
      .split(' ')
      .map(part => part.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full">
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0">
            <div className="flex mb-2">
              {[...Array(testimonial?.rating || 5)].map((_, i) => (
                <ApperIcon key={i} name="star" className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          "{testimonial?.content || 'No testimonial content available'}"
        </p>
        
        <div className="flex items-center">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
            {!imageError && testimonial?.avatar ? (
              <>
                {imageLoading && (
                  <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse flex items-center justify-center">
                    <ApperIcon name="user" className="w-5 h-5 text-white/60" />
                  </div>
                )}
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial?.name || 'Testimonial author'}
                  className={`w-10 h-10 rounded-full object-cover transition-opacity duration-200 ${
                    imageLoading ? 'opacity-0 absolute' : 'opacity-100'
                  }`}
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                  loading="lazy"
                />
              </>
            ) : (
              <span className="text-white font-semibold text-sm">
                {getInitials(testimonial?.name)}
              </span>
            )}
          </div>
          
          <div className="min-w-0 flex-1">
            <h4 className="font-semibold text-gray-900 truncate">
              {testimonial?.name || 'Anonymous'}
            </h4>
            <p className="text-sm text-gray-500 truncate">
              {testimonial?.role && testimonial?.company 
                ? `${testimonial.role} at ${testimonial.company}`
                : testimonial?.role || testimonial?.company || 'Customer'
              }
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
)
}

export default TestimonialCard