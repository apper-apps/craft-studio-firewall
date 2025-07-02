import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '@/components/atoms/Card'
import Button from '@/components/atoms/Button'
import Badge from '@/components/atoms/Badge'
import ApperIcon from '@/components/ApperIcon'

const PricingSection = () => {
  const navigate = useNavigate()

  const plans = [
    {
      name: 'Starter',
      price: '2,999',
      description: 'Perfect for small businesses and startups',
      popular: false,
      features: [
        'Responsive Website Design',
        'Up to 5 Pages',
        'Contact Form Integration',
        'Basic SEO Optimization',
        '30 Days Support',
        'Mobile Optimization'
      ]
    },
    {
      name: 'Professional',
      price: '5,999',
      description: 'Ideal for growing businesses',
      popular: true,
      features: [
        'Custom Web Application',
        'Up to 10 Pages/Sections',
        'Database Integration',
        'Advanced SEO & Analytics',
        '90 Days Support',
        'Content Management System',
        'E-commerce Integration',
        'Performance Optimization'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale projects and enterprises',
      popular: false,
      features: [
        'Full-Scale Digital Platform',
        'Unlimited Pages/Features',
        'Custom API Development',
        'Advanced Security Features',
        '1 Year Support & Maintenance',
        'Multi-language Support',
        'Third-party Integrations',
        'Dedicated Project Manager',
        'Training & Documentation'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-background to-surface/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your project. All plans include our commitment 
            to quality and your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              <Card className={`h-full ${plan.popular ? 'ring-2 ring-primary' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="primary">Most Popular</Badge>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    {plan.price === 'Custom' ? (
                      <span className="text-4xl font-display font-bold gradient-text">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-gray-400">$</span>
                        <span className="text-4xl font-display font-bold gradient-text">
                          {plan.price}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <ApperIcon name="Check" className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant={plan.popular ? 'primary' : 'secondary'}
                  className="w-full"
                  onClick={() => navigate('/contact')}
                >
                  {plan.price === 'Custom' ? 'Get Quote' : 'Get Started'}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-4">
            Need something different? We offer custom solutions tailored to your specific needs.
          </p>
          <Button 
            variant="outline" 
            onClick={() => navigate('/contact')}
          >
            Discuss Custom Project
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection